import { createFileRoute, Link, useNavigate } from "@tanstack/react-router";
import { LogOut, MessageCircle, Package, UserRound } from "lucide-react";
import { useEffect } from "react";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Section } from "@/components/common/Section";
import { PageHero } from "@/components/sections/PageHero";

export const Route = createFileRoute("/dashboard")({ component: DashboardPage });

function DashboardPage() {
  const { user, loading, logout, openAuth } = useAuth();
  const navigate = useNavigate();
  useEffect(() => { if (!loading && !user) openAuth("login"); }, [loading, user, openAuth]);
  if (loading || !user) return <div className="min-h-[70vh]" />;
  return <>
    <PageHero eyebrow="Client portal" title={<>Your <span className="text-gradient">Irqsa Edge</span> workspace</>} description="Manage your account, project enquiries, and support conversations from one place." />
    <Section>
      <div className="grid gap-5 md:grid-cols-3">
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:col-span-2"><div className="flex items-center gap-4"><div className="grid size-14 place-items-center rounded-2xl bg-primary/10 text-primary"><UserRound className="size-6" /></div><div><h2 className="text-xl font-semibold text-foreground">{user.displayName || "Client"}</h2><p className="text-sm text-muted-foreground">{user.email}</p></div></div><div className="mt-7 flex flex-wrap gap-3"><Button asChild variant="premium"><Link to="/contact">Start a project</Link></Button><Button variant="outline" onClick={() => navigate({ to: "/dashboard" })}><MessageCircle className="size-4" /> Support chat is available below</Button></div></div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft"><Package className="size-6 text-primary" /><h3 className="mt-4 font-semibold">Project requests</h3><p className="mt-2 text-sm text-muted-foreground">Your future orders and service requests will appear here as they are submitted.</p></div>
        <div className="rounded-3xl border border-border bg-card p-6 shadow-soft md:col-span-3"><h3 className="font-semibold text-foreground">Need help?</h3><p className="mt-2 text-sm text-muted-foreground">Use the live support button at the bottom-right to continue a real-time conversation with Irqsa Edge.</p></div>
      </div>
      <Button variant="ghost" className="mt-6" onClick={async () => { await logout(); navigate({ to: "/" }); }}><LogOut className="size-4" /> Sign out</Button>
    </Section>
  </>;
}
