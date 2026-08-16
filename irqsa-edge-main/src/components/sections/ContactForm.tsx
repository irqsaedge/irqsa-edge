import { useState } from "react";
import { Send } from "lucide-react";
import { toast } from "sonner";

import { Reveal } from "@/components/common/Reveal";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { serviceGroups } from "@/data/site";
import { useAuth } from "@/lib/auth";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase";

const budgets = ["Under $500", "$500 – $1,500", "$1,500 – $5,000", "$5,000+", "Not sure yet"];

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const { user, openAuth } = useAuth();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (!user) {
      openAuth("login");
      toast.info("Please sign in to send your project enquiry.");
      return;
    }
    setSubmitting(true);

    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const message = String(formData.get("message") || "").trim();

    if (!name || !email || !message) {
      toast.error("Please complete the required fields.");
      setSubmitting(false);
      return;
    }

    const subject = `Website enquiry from ${name}`;
    const body = [
      "IRQSA Edge — New Website Enquiry",
      "",
      `Name: ${name}`,
      `Email: ${email}`,
      `Company: ${String(formData.get("company") || "").trim() || "Not provided"}`,
      `Phone: ${String(formData.get("phone") || "").trim() || "Not provided"}`,
      `Service: ${service || "Not selected"}`,
      `Budget: ${budget || "Not selected"}`,
      "",
      "Project details:",
      message,
      "",
      "Sent from irqsaedge.pro",
    ].join("\n");

    try {
      await addDoc(collection(db, "contactRequests"), {
        userId: user.uid,
        name,
        email,
        company: String(formData.get("company") || "").trim(),
        phone: String(formData.get("phone") || "").trim(),
        service: service || "Not selected",
        budget: budget || "Not selected",
        message,
        status: "new",
        createdAt: serverTimestamp(),
      });
    } catch {
      toast.error("We could not save your enquiry. Please try again.");
      setSubmitting(false);
      return;
    }

    const mailto =
      `mailto:info@irqsaedge.pro` +
      `?cc=${encodeURIComponent("irqsaedge@gmail.com")}&subject=${encodeURIComponent(subject)}` +
      `&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;

    toast.success("Your email app is opening.", {
      description: "The enquiry is already filled in. Click Send in your email app to submit it.",
    });

    setTimeout(() => {
      setSubmitting(false);
    }, 800);
  };

  return (
    <Reveal className="card-rim rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
      <h2 className="text-2xl font-semibold text-foreground">Tell us about your project</h2>
      <p className="mt-2 text-sm text-muted-foreground">
        Share a few details and we will save your enquiry to your client account before preparing the email.
      </p>

      <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="name">Full name</Label>
            <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              id="email"
              name="email"
              type="email"
              required
              placeholder="you@example.com"
              autoComplete="email"
            />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="company">Company (optional)</Label>
            <Input id="company" name="company" placeholder="Company name" autoComplete="organization" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="phone">Phone (optional)</Label>
            <Input id="phone" name="phone" placeholder="+92..." autoComplete="tel" />
          </div>
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <Label htmlFor="service">Service needed</Label>
            <Select value={service} onValueChange={setService}>
              <SelectTrigger id="service">
                <SelectValue placeholder="Select a service" />
              </SelectTrigger>
              <SelectContent>
                {serviceGroups.map((g) => (
                  <SelectItem key={g.slug} value={g.title}>
                    {g.title}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div className="grid gap-2">
            <Label htmlFor="budget">Estimated budget</Label>
            <Select value={budget} onValueChange={setBudget}>
              <SelectTrigger id="budget">
                <SelectValue placeholder="Select a range" />
              </SelectTrigger>
              <SelectContent>
                {budgets.map((b) => (
                  <SelectItem key={b} value={b}>
                    {b}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="grid gap-2">
          <Label htmlFor="message">Project details</Label>
          <Textarea
            id="message"
            name="message"
            required
            rows={5}
            placeholder="Tell us what you need and any useful details."
          />
        </div>

        <Button type="submit" variant="premium" size="xl" disabled={submitting} className="w-full">
          {submitting ? "Opening email…" : "Send enquiry"} <Send className="size-4" />
        </Button>

        <p className="text-center text-xs text-muted-foreground">
          Your enquiry is saved to your account and prepared for email delivery. Our team is available 24/7.
        </p>
      </form>
    </Reveal>
  );
}
