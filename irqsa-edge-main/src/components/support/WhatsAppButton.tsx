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
      className="fixed bottom-5 left-5 z-[80] grid size-14 place-items-center rounded-full bg-[#25D366] text-white shadow-2xl transition-transform hover:scale-105"
    >
      <MessageCircle className="size-6" />
    </a>
  );
}
