import { useEffect, useMemo, useState } from "react";
import { MessageCircle, Send, X, Wifi } from "lucide-react";
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
    const handler = () => {
      if (!user) {
        openAuth("login");
        return;
      }
      setOpen(true);
    };
    window.addEventListener("irqsa-open-support", handler);
    return () => window.removeEventListener("irqsa-open-support", handler);
  }, [openAuth, user]);

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
      {open && user ? (
        <div className="fixed bottom-24 right-4 z-[90] w-[min(94vw,410px)] overflow-hidden rounded-[1.75rem] border border-border bg-card shadow-2xl shadow-black/20 sm:right-6">
          <div className="flex items-center justify-between border-b border-border bg-secondary/60 p-4">
            <div className="flex min-w-0 items-center gap-3">
              <span className="relative grid size-10 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground">
                <MessageCircle className="size-5" />
                <span className={`absolute -right-0.5 -top-0.5 size-3 rounded-full border-2 border-card ${online ? "bg-emerald-500" : "bg-muted-foreground"}`} />
              </span>
              <div className="min-w-0">
                <p className="font-semibold text-foreground">Irqsa Edge Support</p>
                <p className="flex items-center gap-1 text-xs text-muted-foreground">
                  <Wifi className="size-3" />
                  {online ? "Live support is online" : "Leave a message — we will reply"}
                </p>
              </div>
            </div>
            <button type="button" onClick={() => setOpen(false)} className="rounded-full p-2 text-muted-foreground hover:bg-secondary hover:text-foreground"><X className="size-4" /></button>
          </div>

          <div className="h-80 space-y-3 overflow-y-auto bg-background/30 p-4">
            {messages.length === 0 ? (
              <div className="rounded-2xl border border-border bg-secondary/60 p-4 text-sm text-muted-foreground">
                <p className="font-medium text-foreground">Welcome to Irqsa Edge Support 👋</p>
                <p className="mt-1">Send your question here. When our team is online, you can chat with us live.</p>
              </div>
            ) : messages.map((item) => (
              <div key={item.id} className={`max-w-[85%] rounded-2xl px-3.5 py-2.5 text-sm ${item.uid === user.uid ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>
                {item.text}
              </div>
            ))}
          </div>

          <form onSubmit={send} className="flex gap-2 border-t border-border bg-card p-3">
            <Input value={message} onChange={(e) => setMessage(e.target.value)} placeholder="Write a message…" autoComplete="off" />
            <Button type="submit" size="icon" variant="premium" aria-label="Send message"><Send className="size-4" /></Button>
          </form>
        </div>
      ) : null}

      <button
        type="button"
        onClick={openChat}
        className="group fixed bottom-5 right-5 z-[80] flex items-center gap-2 rounded-full bg-primary px-4 py-3 text-primary-foreground shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
        aria-label={user ? "Open live support chat" : "Sign in to chat with support"}
      >
        <span className="relative grid size-9 place-items-center rounded-full bg-primary-foreground/15">
          <MessageCircle className="size-5" />
          <span className={`absolute -right-0.5 -top-0.5 size-2.5 rounded-full border-2 border-primary ${online ? "bg-emerald-400" : "bg-muted-foreground"}`} />
        </span>
        <span className="hidden text-sm font-semibold sm:block">{online ? "Live Support" : "Support"}</span>
      </button>
    </>
  );
}
