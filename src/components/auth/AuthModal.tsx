import { useEffect, useState } from "react";
import { Chrome, Eye, EyeOff, LockKeyhole, Mail, UserRound, X } from "lucide-react";
import { toast } from "sonner";
import { useAuth } from "@/lib/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export function AuthModal() {
  const { authOpen, closeAuth, authMode, setAuthMode, loginWithGoogle, loginWithEmail, resetPassword, signupWithEmail } = useAuth();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [busy, setBusy] = useState(false);

  useEffect(() => {
    if (!authOpen) return;
    const onKey = (event: KeyboardEvent) => event.key === "Escape" && closeAuth();
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [authOpen, closeAuth]);

  if (!authOpen) return null;

  const submit = async (event: React.FormEvent) => {
    event.preventDefault();
    setBusy(true);
    try {
      if (authMode === "signup") await signupWithEmail(name, email, password);
      else await loginWithEmail(email, password);
      toast.success(authMode === "signup" ? "Account created successfully." : "Welcome back to Irqsa Edge.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Authentication failed.");
    } finally {
      setBusy(false);
    }
  };

  const google = async () => {
    setBusy(true);
    try {
      await loginWithGoogle();
      toast.success("Google sign-in successful.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Google sign-in failed.");
    } finally {
      setBusy(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[100] grid place-items-center bg-black/70 p-4 backdrop-blur-md" onMouseDown={(e) => e.target === e.currentTarget && closeAuth()}>
      <div className="w-full max-w-md rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8">
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Irqsa Edge</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">{authMode === "signup" ? "Create your account" : "Welcome back"}</h2>
            <p className="mt-2 text-sm text-muted-foreground">Sign in when you are ready to message us, send an enquiry, or manage your projects.</p>
          </div>
          <button type="button" onClick={closeAuth} aria-label="Close" className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground"><X className="size-4" /></button>
        </div>

        <Button type="button" variant="outline" size="lg" className="mt-6 w-full" onClick={google} disabled={busy}>
          <Chrome className="size-4" /> Continue with Google
        </Button>

        <div className="my-5 flex items-center gap-3 text-xs text-muted-foreground"><span className="h-px flex-1 bg-border" />OR<span className="h-px flex-1 bg-border" /></div>

        <form onSubmit={submit} className="grid gap-4">
          {authMode === "signup" && <div className="grid gap-2"><Label htmlFor="auth-name">Full name</Label><div className="relative"><UserRound className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="auth-name" value={name} onChange={(e) => setName(e.target.value)} className="pl-9" required placeholder="Your name" /></div></div>}
          <div className="grid gap-2"><Label htmlFor="auth-email">Email</Label><div className="relative"><Mail className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="auth-email" type="email" value={email} onChange={(e) => setEmail(e.target.value)} className="pl-9" required placeholder="you@example.com" /></div></div>
          <div className="grid gap-2"><Label htmlFor="auth-password">Password</Label><div className="relative"><LockKeyhole className="absolute left-3 top-1/2 size-4 -translate-y-1/2 text-muted-foreground" /><Input id="auth-password" type={showPassword ? "text" : "password"} minLength={6} value={password} onChange={(e) => setPassword(e.target.value)} className="pl-9 pr-10" required placeholder="At least 6 characters" /><button type="button" onClick={() => setShowPassword((v) => !v)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground">{showPassword ? <EyeOff className="size-4" /> : <Eye className="size-4" />}</button></div></div>
          <Button type="submit" variant="premium" size="lg" className="w-full" disabled={busy}>{busy ? "Please wait…" : authMode === "signup" ? "Create account" : "Sign in"}</Button>
        </form>

        {authMode === "login" && <button type="button" className="mt-4 w-full text-center text-xs font-medium text-primary hover:underline" onClick={async () => {
          if (!email) { toast.info("Enter your email first."); return; }
          try { await resetPassword(email); toast.success("Password reset email sent."); } catch (error) { toast.error(error instanceof Error ? error.message : "Could not send reset email."); }
        }}>Forgot password?</button>}

        <p className="mt-5 text-center text-sm text-muted-foreground">
          {authMode === "signup" ? "Already have an account?" : "New to Irqsa Edge?"}{" "}
          <button type="button" onClick={() => setAuthMode(authMode === "signup" ? "login" : "signup")} className="font-semibold text-primary hover:underline">{authMode === "signup" ? "Sign in" : "Create one"}</button>
        </p>
      </div>
    </div>
  );
}
