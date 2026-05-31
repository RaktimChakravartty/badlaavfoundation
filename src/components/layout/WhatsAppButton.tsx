import { MessageCircle } from "lucide-react";
import { WHATSAPP_URL } from "@/lib/site";

export function WhatsAppButton() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat with us on WhatsApp"
      className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-2xl shadow-lg transition-transform hover:scale-110"
      style={{ backgroundColor: "#25D366", color: "#fff" }}
    >
      <MessageCircle className="h-7 w-7" />
    </a>
  );
}