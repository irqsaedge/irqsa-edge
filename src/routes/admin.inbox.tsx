import { createFileRoute } from "@tanstack/react-router";
import { onValue, push, ref, set, update } from "firebase/database";
import {
  ArrowLeft,
  CircleDot,
  MessageCircle,
  Send,
  ShieldCheck,
  UserRound,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { realtimeDb } from "@/lib/firebase";

export const Route = createFileRoute("/admin/inbox")({
  component: AdminInboxPage,
});

type Message = { uid: string; text: string; createdAt: number };
type Conversation = {
  id: string;
  meta?: {
    clientName?: string;
    clientEmail?: string;
    lastMessage?: string;
    updatedAt?: number;
  };
  messages?: Record<string, Message>;
};

function timeLabel(timestamp?: number) {
  if (!timestamp) return "Just now";
  return new Intl.DateTimeFormat(undefined, {
    hour: "numeric",
    minute: "2-digit",
  }).format(timestamp);
}

function AdminInboxPage() {
  const { user, loading, isAdmin } = useAuth();
  const [conversations, setConversations] = useState<Conversation[]>([]);
  const [selected, setSelected] = useState<string | null>(null);
  const [reply, setReply] = useState("");
  const [showConversation, setShowConversation] = useState(false);

  useEffect(() => {
    if (!isAdmin) return;
    return onValue(ref(realtimeDb, "conversations"), (snapshot) => {
      const data = snapshot.val() || {};
      const list = Object.entries(data)
        .map(([id, value]) => ({ id, ...(value as Omit<Conversation, "id">) }))
        .sort(
          (a, b) =>
            Number(b.meta?.updatedAt || 0) - Number(a.meta?.updatedAt || 0),
        );
      setConversations(list);
      setSelected((current) =>
        current && list.some((item) => item.id === current)
          ? current
          : list[0]?.id || null,
      );
    });
  }, [isAdmin]);

  const active = useMemo(
    () => conversations.find((item) => item.id === selected),
    [conversations, selected],
  );
  const messages = useMemo(
    () =>
      Object.entries(active?.messages || {})
        .map(([id, item]) => ({ id, ...item }))
        .sort((a, b) => Number(a.createdAt || 0) - Number(b.createdAt || 0)),
    [active],
  );

  if (loading) return <div className="min-h-[70vh]" />;
  if (!user)
    return (
      <Section>
        <div className="rounded-3xl border border-border bg-card p-8">
          Please sign in with your admin account first.
        </div>
      </Section>
    );
  if (!isAdmin)
    return (
      <Section>
        <div className="rounded-3xl border border-border bg-card p-8">
          <h2 className="text-xl font-semibold">Admin access required</h2>
          <p className="mt-2 text-sm text-muted-foreground">
            This account is not on the UID-based admin list. Add its UID to
            Realtime Database at <code>/admins/{user.uid}</code> with{" "}
            <code>true</code>, and create Firestore{" "}
            <code>/admins/{user.uid}</code> with <code>active: true</code>.
          </p>
        </div>
      </Section>
    );

  const selectConversation = (id: string) => {
    setSelected(id);
    setShowConversation(true);
  };

  const sendReply = async (event: React.FormEvent) => {
    event.preventDefault();
    const text = reply.trim();
    if (!selected || !text) return;
    try {
      const messageRef = push(
        ref(realtimeDb, `conversations/${selected}/messages`),
      );
      await set(messageRef, { uid: user.uid, text, createdAt: Date.now() });
      await update(ref(realtimeDb, `conversations/${selected}/meta`), {
        lastMessage: text,
        updatedAt: Date.now(),
      });
      setReply("");
    } catch {
      toast.error(
        "Reply could not be sent. Check the Realtime Database rules and admin UID.",
      );
    }
  };

  return (
    <>
      <PageHero
        eyebrow="Secure admin portal"
        title={
          <>
            Live <span className="text-gradient">support inbox</span>
          </>
        }
        description="Talk to signed-in customers in real time from one secure, UID-based admin workspace."
      />
      <Section className="pt-2">
        <div className="mb-5 grid gap-3 sm:grid-cols-3">
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Admin status
            </p>
            <p className="mt-2 flex items-center gap-2 font-semibold text-foreground">
              <ShieldCheck className="size-4 text-emerald-500" /> Verified by
              UID
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Customer chats
            </p>
            <p className="mt-2 text-2xl font-semibold text-foreground">
              {conversations.length}
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-card p-4 shadow-soft">
            <p className="text-xs font-semibold uppercase tracking-[0.14em] text-muted-foreground">
              Live channel
            </p>
            <p className="mt-2 flex items-center gap-2 font-semibold text-foreground">
              <CircleDot className="size-4 text-emerald-500" /> Connected
            </p>
          </div>
        </div>
        <div className="grid min-h-[620px] overflow-hidden rounded-[2rem] border border-border bg-card shadow-card lg:grid-cols-[330px_1fr]">
          <aside
            className={`border-b border-border lg:border-b-0 lg:border-r ${showConversation ? "hidden lg:block" : "block"}`}
          >
            <div className="border-b border-border p-5">
              <p className="text-sm font-semibold text-foreground">
                Customer conversations
              </p>
              <p className="mt-1 text-xs text-muted-foreground">
                Newest chats appear first
              </p>
            </div>
            <div className="max-h-[550px] overflow-y-auto p-2">
              {conversations.length === 0 ? (
                <div className="p-6 text-center text-sm text-muted-foreground">
                  <MessageCircle className="mx-auto mb-3 size-6" />
                  No customer messages yet.
                </div>
              ) : (
                conversations.map((item) => (
                  <button
                    type="button"
                    key={item.id}
                    onClick={() => selectConversation(item.id)}
                    className={`mb-1 block w-full rounded-2xl p-4 text-left transition-colors ${selected === item.id ? "bg-primary text-primary-foreground" : "hover:bg-secondary"}`}
                  >
                    <div className="flex items-start justify-between gap-3">
                      <span className="flex min-w-0 items-center gap-2 font-semibold">
                        <UserRound className="size-4 shrink-0" />
                        <span className="truncate">
                          {item.meta?.clientName || "Client"}
                        </span>
                      </span>
                      <span
                        className={`shrink-0 text-[11px] ${selected === item.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                      >
                        {timeLabel(item.meta?.updatedAt)}
                      </span>
                    </div>
                    <p
                      className={`mt-1 truncate text-xs ${selected === item.id ? "text-primary-foreground/70" : "text-muted-foreground"}`}
                    >
                      {item.meta?.clientEmail || "Signed-in customer"}
                    </p>
                    <p
                      className={`mt-2 truncate text-xs ${selected === item.id ? "text-primary-foreground/85" : "text-muted-foreground"}`}
                    >
                      {item.meta?.lastMessage || "No messages yet"}
                    </p>
                  </button>
                ))
              )}
            </div>
          </aside>
          <div
            className={`min-h-[620px] flex-col ${showConversation ? "flex" : "hidden lg:flex"}`}
          >
            {active ? (
              <>
                <div className="flex items-center gap-3 border-b border-border p-5">
                  <Button
                    type="button"
                    variant="ghost"
                    size="icon"
                    className="lg:hidden"
                    onClick={() => setShowConversation(false)}
                    aria-label="Back to conversations"
                  >
                    <ArrowLeft className="size-4" />
                  </Button>
                  <span className="grid size-10 place-items-center rounded-2xl bg-primary/10 text-primary">
                    <UserRound className="size-5" />
                  </span>
                  <div className="min-w-0">
                    <p className="truncate font-semibold text-foreground">
                      {active.meta?.clientName || "Client"}
                    </p>
                    <p className="truncate text-xs text-muted-foreground">
                      {active.meta?.clientEmail || "Signed-in customer"}
                    </p>
                  </div>
                  <span className="ml-auto hidden items-center gap-1 text-xs text-emerald-600 sm:flex">
                    <CircleDot className="size-3" /> Live conversation
                  </span>
                </div>
                <div className="flex-1 space-y-3 overflow-y-auto bg-background/30 p-5">
                  {messages.map((item) => (
                    <div
                      key={item.id}
                      className={`max-w-[86%] rounded-2xl px-4 py-3 text-sm ${item.uid === user.uid ? "ml-auto rounded-br-md bg-primary text-primary-foreground" : "rounded-bl-md bg-secondary text-foreground"}`}
                    >
                      <p>{item.text}</p>
                      <p
                        className={`mt-1 text-[10px] ${item.uid === user.uid ? "text-primary-foreground/65" : "text-muted-foreground"}`}
                      >
                        {item.uid === user.uid
                          ? "You"
                          : active.meta?.clientName || "Client"}{" "}
                        · {timeLabel(item.createdAt)}
                      </p>
                    </div>
                  ))}
                </div>
                <form
                  onSubmit={sendReply}
                  className="flex gap-2 border-t border-border bg-card p-3"
                >
                  <Input
                    value={reply}
                    onChange={(event) => setReply(event.target.value)}
                    placeholder="Write a reply…"
                    autoComplete="off"
                  />
                  <Button
                    type="submit"
                    size="icon"
                    variant="premium"
                    aria-label="Send reply"
                  >
                    <Send className="size-4" />
                  </Button>
                </form>
              </>
            ) : (
              <div className="grid flex-1 place-items-center p-8 text-center text-sm text-muted-foreground">
                <div>
                  <MessageCircle className="mx-auto mb-3 size-8 text-primary" />
                  <p className="font-medium text-foreground">
                    Choose a customer conversation
                  </p>
                  <p className="mt-1">
                    New signed-in messages will appear here instantly.
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>
    </>
  );
}
