import { MessageCircle } from "lucide-react";

const whatsappNumber = "923396450615";
const message = encodeURIComponent("Hi Irqsa Edge, I would like to discuss a project.");

export function WhatsAppButton() {
  return (
    <a
      href={`https://wa.me/${whatsappNumber}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with Irqsa Edge on WhatsApp"
      className="group fixed bottom-5 left-5 z-[80] flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-3 text-white shadow-2xl shadow-black/20 transition-all duration-300 hover:-translate-y-1 hover:scale-[1.02]"
    >
      <span className="grid size-9 place-items-center rounded-full bg-white/15">
        <MessageCircle className="size-5" />
      </span>
      <span className="hidden text-sm font-semibold sm:block">WhatsApp us</span>
    </a>
  );
}
