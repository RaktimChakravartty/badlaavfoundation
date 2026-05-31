import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Reveal } from "@/components/layout/Reveal";

export type FaqItem = { q: string; a: string };

// Brand-styled FAQ. Uses the accessible Radix accordion underneath and the
// cream / ink / stone tokens so it reads as part of the field-report system.
export function FaqAccordion({ items }: { items: FaqItem[] }) {
  return (
    <Reveal className="max-w-3xl">
      <Accordion type="single" collapsible className="w-full">
        {items.map((item, i) => (
          <AccordionItem
            key={item.q}
            value={`item-${i}`}
            style={{ borderColor: "var(--stone)" }}
          >
            <AccordionTrigger
              className="py-5 text-left font-display text-lg hover:no-underline"
              style={{ color: "var(--ink)" }}
            >
              {item.q}
            </AccordionTrigger>
            <AccordionContent
              className="text-base leading-relaxed"
              style={{ color: "var(--wg)" }}
            >
              {item.a}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Reveal>
  );
}