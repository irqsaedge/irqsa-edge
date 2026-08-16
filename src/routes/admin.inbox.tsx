import { createFileRoute } from "@tanstack/react-router";
import { onValue, ref, update } from "firebase/database";
import { useEffect, useState } from "react";
import { useAuth } from "@/lib/auth";
import { realtimeDb } from "@/lib/firebase";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";

export const Route = createFileRoute("/admin/inbox")({ component: AdminInboxPage });

type Conversation = { id: string; meta?: { clientName?: string; clientEmail?: string; lastMessage?: string; updatedAt?: number }; messages?: Record<string, { uid: string; text: string; createdAt: number }> };

function AdminInboxPage() {
  const { user, loading, isAdmin } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [reply, setReply] = useState("");

  useEffect(() => {
    if (!isAdmin) return;
    return onValue(ref(realtimeDb, "conversations"), (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data).map(([id, value]) => {
        const item = value as Conversation;
        return {
          id,
          ...(item.meta ? { meta: item.meta } : {}),
          ...(item.messages ? { messages: item.messages } : {}),
        };
      }).sort((a, b) => Number(b.meta?.updatedAt || 0) - Number(a.meta?.updatedAt || 0));
      setConversations(list);
      if (!selected && list[0]) setSelected(list[0].id);
    });
  }, [isAdmin, selected]);

  if (loading) return <div className="min-h-[70vh]" />;
  if (!user) return <Section><div className="rounded-3xl border border-border bg-card p-8">Please sign in with your admin account first.</div></Section>;
  if (!isAdmin) return <Section><div className="rounded-3xl border border-border bg-card p-8"><h2 className="text-xl font-semibold">Admin access required</h2><p className="mt-2 text-sm text-muted-foreground">Add your UID to the Firebase Realtime Database <code>/admins/{user.uid}</code> node with value <code>true</code> after deployment.</p></div></Section>;

  const active = conversations.find((item) => item.id === selected);
  const messages = Object.entries(active?.messages || {}).map(([id, item]) => ({ id, ...item })).sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0));

  const sendReply = async (event: React.FormEvent) => {
    event.preventDefault();
    if (!selected || !reply.trim()) return;
    const key = `messages/${selected}`;
    const newKey = crypto.randomUUID();
    try {
      await update(ref(realtimeDb, `conversations/${selected}`), {
        [`${key}/${newKey}`]: { uid: user.uid, text: reply.trim(), createdAt: Date.now() },
        "meta/lastMessage": reply.trim(),
        "meta/updatedAt": Date.now(),
      });
      setReply("");
    } catch { toast.error("Could not send reply. Check your Realtime Database admin rule."); }
  };

  return <>
    <PageHero eyebrow="Admin inbox" title={<>Client <span className="text-gradient">support</span> inbox</>} description="Reply to logged-in clients from the Irqsa Edge admin workspace." />
    <Section>
      <div className="grid min-h-[560px] overflow-hidden rounded-3xl border border-border bg-card lg:grid-cols-[300px_1fr]">
        <aside className="border-b border-border lg:border-b-0 lg:border-r"><div className="border-b border-border p-4 font-semibold">Conversations ({conversations.length})</div><div className="max-h-[560px] overflow-y-auto">{conversations.map((item) => <button type="button" key={item.id} onClick={() => setSelected(item.id)} className={`block w-full border-b border-border p-4 text-left ${selected === item.id ? "bg-accent" : "hover:bg-secondary/50"}`}><p className="font-medium text-foreground">{item.meta?.clientName || "Client"}</p><p className="truncate text-xs text-muted-foreground">{item.meta?.clientEmail}</p><p className="mt-1 truncate text-xs text-muted-foreground">{item.meta?.lastMessage || "No messages yet"}</p></button>)}</div></aside>
        <div className="flex min-h-[560px] flex-col"><div className="border-b border-border p-4"><p className="font-semibold">{active?.meta?.clientName || "Select a conversation"}</p><p className="text-xs text-muted-foreground">{active?.meta?.clientEmail || ""}</p></div><div className="flex-1 space-y-3 overflow-y-auto p-5">{messages.length === 0 ? <p className="text-sm text-muted-foreground">No messages in this conversation.</p> : messages.map((item) => <div key={item.id} className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${item.uid === user.uid ? "ml-auto bg-primary text-primary-foreground" : "bg-secondary text-foreground"}`}>{item.text}</div>)}</div><form onSubmit={sendReply} className="flex gap-2 border-t border-border p-3"><Input value={reply} onChange={(e) => setReply(e.target.value)} placeholder="Reply to client…" disabled={!selected} /><Button type="submit" variant="premium" disabled={!selected}>Send</Button></form></div>
      </div>
    </Section>
  </>;
}
