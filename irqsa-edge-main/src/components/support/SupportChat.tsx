import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Send, X } from "lucide-react";
import { onValue, push, ref, serverTimestamp, set } from "firebase/database";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { realtimeDb } from "@/lib/firebase";
import { useSupportOnline } from "@/components/support/SupportPresence";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

function conversationId(uid: string) { return `client_${uid}`; }

export function SupportChat() {
  const { user, openAuth } = useAuth();
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const online = useSupportOnline();
  const [messages, setMessages] = useState<Array<{ id: string; text: string; uid: string; createdAt: number }>>([]);

  const id = useMemo(() => user ? conversationId(user.uid) : "", [user]);

  useEffect(() => {
    if (!user || !open) return;
    const messagesRef = ref(realtimeDb, `conversations/${id}/messages`);
    return onValue(messagesRef, (snapshot) => {
      const data = snapshot.val() || {};
      const next = Object.entries(data).map(([key, value]) => {
        const item = value as { text?: string; uid?: string; createdAt?: number };
        return { id: key, text: item.text || "", uid: item.uid || "", createdAt: Number(item.createdAt || 0) };
      }).sort((a, b) => a.createdAt - b.createdAt);
      setMessages(next);
    });
  }, [id, open, user]);

  useEffect(() => {
    if (!user) return;
    set(ref(realtimeDb, `conversations/${id}/members/${user.uid}`), true).catch(() => undefined);
  }, [id, user]);

  const send = async (event: React.FormEvent) => {
    event.preventDefault();
    const text = message.trim();
    if (!text) return;
    if (!user) { openAuth("login"); return; }
    try {
      const newMessage = push(ref(realtimeDb, `conversations/${id}/messages`));
      await set(newMessage, { uid: user.uid, text, createdAt: serverTimestamp() });
      await set(ref(realtimeDb, `conversations/${id}/meta`), {
        clientUid: user.uid,
        clientName: user.displayName || "Client",
        clientEmail: user.email || "",
        lastMessage: text,
        updatedAt: serverTimestamp(),
      });
      setMessage("");
    } catch {
      toast.error("Could not send your message. Please check Firebase Realtime Database rules.");
    }
  };

  const openChat = () => {
    if (!user) { openAuth("login"); return; }
    setOpen(true);
  };

  return (
    <>
      {open && user && <div className="fixed bottom-24 right-5 z-[80] w-[min(92vw,380px)] overflow-hidden rounded-3xl border border-border bg-card shadow-2xl sm:right-6">
        <div className="flex items-center justify-between border-b border-border bg-secondary/60 p-4">
          <div><p className="font-semibold text-foreground">Irqsa Edge Support</p><p className="text-xs text-muted-foreground"><span className={`mr-1 inline-block size-2 rounded-full ${online ? "bg-emerald-500" : "bg-muted-foreground"}`} />{online ? "Support is online" : "Leave a message and we will reply"}</p></div>
          <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 text-muted-foreground hover:text-foreground"><X className="size-4" /></button>
        </div>
        <div className="h-72 space-y-3 overflow-y-auto p-4">
          {messages.length === 0 ? <div className="rounded-2xl bg-secondary/60 p-4 text-sm text-muted-foreground">Hi {user.displayName?.split(" ")[0] || "there"}! Tell us what you need and our team will reply here.</div> : messages.map((item) => <div key={item.id} className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${item.uid === user.uid ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>{item.text}</div>)}
        </div>
        <form onSubmit={send} className="flex gap-2 border-t border-border p-3"><Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message…" /><Button type="submit" size="icon" variant="premium" aria-label="Send message"><Send className="size-4" /></Button></form>
      </div>}
      <button type="button" onClick={openChat} className="fixed bottom-5 right-5 z-[80] grid size-14 place-items-center rounded-full bg-primary text-primary-foreground shadow-2xl transition-transform hover:scale-105" aria-label={user ? "Open support chat" : "Sign in to chat with support"}><MessageCircle className="size-6" /></button>
    </>
  );
}
