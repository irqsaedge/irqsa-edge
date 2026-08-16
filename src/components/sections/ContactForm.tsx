import { useState, type FormEvent } from "react";
import { Check, Instagram, Mail, MessageCircle, Send, X } from "lucide-react";
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

type Enquiry = {
  name: string;
  email: string;
  company: string;
  phone: string;
  service: string;
  budget: string;
  message: string;
};

type Channel = "whatsapp" | "email" | "instagram";

const whatsappNumber = "923396450615";
const instagramUrl = "https://www.instagram.com/irqsaedge";

function buildDetails(data: Enquiry) {
  return [
    "IRQSA EDGE — PROJECT ENQUIRY",
    "",
    `Name: ${data.name}`,
    `Email: ${data.email}`,
    `Company: ${data.company || "Not provided"}`,
    `Phone: ${data.phone || "Not provided"}`,
    `Service: ${data.service || "Not selected"}`,
    `Budget: ${data.budget || "Not selected"}`,
    "",
    "Project details:",
    data.message,
    "",
    "Sent from irqsaedge.pro",
  ].join("\n");
}

export function ContactForm() {
  const [submitting, setSubmitting] = useState(false);
  const [service, setService] = useState("");
  const [budget, setBudget] = useState("");
  const [savedEnquiry, setSavedEnquiry] = useState<Enquiry | null>(null);
  const [channelOpen, setChannelOpen] = useState(false);
  const { user, openAuth } = useAuth();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const form = event.currentTarget;

    if (!user) {
      openAuth("login");
      toast.info("Please sign in to send your project enquiry.");
      return;
    }

    const formData = new FormData(form);
    const enquiry: Enquiry = {
      name: String(formData.get("name") || "").trim(),
      email: String(formData.get("email") || "").trim(),
      company: String(formData.get("company") || "").trim(),
      phone: String(formData.get("phone") || "").trim(),
      service,
      budget,
      message: String(formData.get("message") || "").trim(),
    };

    if (!enquiry.name || !enquiry.email || !enquiry.message) {
      toast.error("Please complete your name, email and project details.");
      return;
    }

    setSubmitting(true);

    try {
      await addDoc(collection(db, "contactRequests"), {
        userId: user.uid,
        ...enquiry,
        status: "new",
        createdAt: serverTimestamp(),
      });

      setSavedEnquiry(enquiry);
      setChannelOpen(true);
      toast.success("Enquiry saved successfully.", {
        description: "Choose how you want to send the same details to Irqsa Edge.",
      });
    } catch {
      toast.error("We could not save your enquiry. Please try again.");
    } finally {
      setSubmitting(false);
    }
  };

  const sendVia = async (channel: Channel) => {
    if (!savedEnquiry) return;

    const details = buildDetails(savedEnquiry);
    try {
      if (channel === "whatsapp") {
        window.open(
          `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
            `Hi Irqsa Edge, I would like to discuss a project.\n\n${details}`,
          )}`,
          "_blank",
          "noopener,noreferrer",
        );
      } else if (channel === "email") {
        const subject = `Project enquiry — ${savedEnquiry.name}`;
        window.location.href =
          `mailto:info@irqsaedge.pro` +
          `?cc=${encodeURIComponent("irqsaedge@gmail.com")}` +
          `&subject=${encodeURIComponent(subject)}` +
          `&body=${encodeURIComponent(details)}`;
      } else {
        await navigator.clipboard?.writeText(details);
        window.open(instagramUrl, "_blank", "noopener,noreferrer");
        toast.success("Enquiry details copied.", {
          description: "Paste them into your Irqsa Edge Instagram DM. Instagram does not allow websites to pre-fill a DM.",
        });
      }
    } catch {
      toast.error("Could not open the selected channel. Please try again.");
    }
  };

  return (
    <>
      <Reveal className="card-rim rounded-3xl border border-border bg-card p-7 shadow-card sm:p-9">
        <div className="flex flex-wrap items-start justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-primary">Project enquiry</p>
            <h2 className="mt-2 text-2xl font-semibold text-foreground">Tell us about your project</h2>
            <p className="mt-2 text-sm text-muted-foreground">
              Fill this form once. After saving, choose WhatsApp, Email or Instagram — your details will be carried over automatically.
            </p>
          </div>
          <div className="rounded-2xl border border-border bg-secondary/50 px-3 py-2 text-xs text-muted-foreground">
            <span className="mr-1 inline-block size-2 rounded-full bg-emerald-500" />
            Available 24/7
          </div>
        </div>

        <form onSubmit={handleSubmit} className="mt-7 grid gap-5">
          <div className="grid gap-5 sm:grid-cols-2">
            <div className="grid gap-2">
              <Label htmlFor="name">Full name</Label>
              <Input id="name" name="name" required placeholder="Your name" autoComplete="name" />
            </div>
            <div className="grid gap-2">
              <Label htmlFor="email">Email</Label>
              <Input id="email" name="email" type="email" required placeholder="you@example.com" autoComplete="email" />
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
                <SelectTrigger id="service"><SelectValue placeholder="Select a service" /></SelectTrigger>
                <SelectContent>
                  {serviceGroups.map((g) => <SelectItem key={g.slug} value={g.title}>{g.title}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
            <div className="grid gap-2">
              <Label htmlFor="budget">Estimated budget</Label>
              <Select value={budget} onValueChange={setBudget}>
                <SelectTrigger id="budget"><SelectValue placeholder="Select a range" /></SelectTrigger>
                <SelectContent>
                  {budgets.map((b) => <SelectItem key={b} value={b}>{b}</SelectItem>)}
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="grid gap-2">
            <Label htmlFor="message">Project details</Label>
            <Textarea id="message" name="message" required rows={5} placeholder="Tell us what you need and any useful details." />
          </div>

          <Button type="submit" variant="premium" size="xl" disabled={submitting} className="w-full">
            {submitting ? "Saving enquiry…" : "Send enquiry"} <Send className="size-4" />
          </Button>

          <p className="text-center text-xs text-muted-foreground">
            Your enquiry is saved to your client account first. You then choose your preferred contact channel.
          </p>
        </form>
      </Reveal>

      {channelOpen && savedEnquiry ? (
        <div
          className="fixed inset-0 z-[120] grid place-items-center bg-black/70 p-4 backdrop-blur-md"
          onMouseDown={(event) => event.target === event.currentTarget && setChannelOpen(false)}
        >
          <div className="w-full max-w-lg rounded-[2rem] border border-border bg-card p-6 shadow-2xl sm:p-8">
            <div className="flex items-start justify-between gap-4">
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-primary">Choose a channel</p>
                <h3 className="mt-2 text-2xl font-semibold text-foreground">Where should we continue?</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  Your enquiry is already saved. Pick one option and we will use the exact details you just entered.
                </p>
              </div>
              <button type="button" onClick={() => setChannelOpen(false)} aria-label="Close" className="rounded-full border border-border p-2 text-muted-foreground hover:text-foreground">
                <X className="size-4" />
              </button>
            </div>

            <div className="mt-6 grid gap-3">
              <button type="button" onClick={() => void sendVia("whatsapp")} className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-emerald-500/50 hover:bg-emerald-500/5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-[#25D366] text-white"><MessageCircle className="size-5" /></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold text-foreground">Continue on WhatsApp</span><span className="text-xs text-muted-foreground">Opens a ready-to-send WhatsApp message</span></span>
                <Check className="size-4 text-muted-foreground group-hover:text-emerald-500" />
              </button>

              <button type="button" onClick={() => void sendVia("email")} className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-primary/50 hover:bg-primary/5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-primary text-primary-foreground"><Mail className="size-5" /></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold text-foreground">Continue by Email</span><span className="text-xs text-muted-foreground">Opens an email with all fields filled in</span></span>
                <Check className="size-4 text-muted-foreground group-hover:text-primary" />
              </button>

              <button type="button" onClick={() => void sendVia("instagram")} className="group flex items-center gap-4 rounded-2xl border border-border bg-secondary/40 p-4 text-left transition-all hover:-translate-y-0.5 hover:border-pink-500/50 hover:bg-pink-500/5">
                <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-gradient-to-br from-purple-600 via-pink-500 to-orange-400 text-white"><Instagram className="size-5" /></span>
                <span className="min-w-0 flex-1"><span className="block font-semibold text-foreground">Continue on Instagram</span><span className="text-xs text-muted-foreground">Copies the enquiry and opens @irqsaedge</span></span>
                <Check className="size-4 text-muted-foreground group-hover:text-pink-500" />
              </button>
            </div>

            <p className="mt-5 text-center text-[11px] leading-relaxed text-muted-foreground">
              Instagram does not provide a secure public URL for pre-filled DMs, so we copy your enquiry before opening our profile. WhatsApp and Email can be pre-filled automatically.
            </p>
          </div>
        </div>
      ) : null}
    </>
  );
}
