import React from "react";
import { Button } from "../ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@radix-ui/react-accordion";

export const FAQ_ITEMS = [
  {
    id: "faq-1",
    question: "Is Basix Journey really free to start?",
    answer:
      "Yes! Our free plan includes everything you need to create your first personalized journey forms. You can create up to 3 forms, collect unlimited responses, and generate beautiful PDF summaries. No credit card required, no hidden fees.",
  },
  {
    id: "faq-2",
    question: "Do I need any technical skills to use Basix Journey?",
    answer:
      "Not at all! Basix Journey is designed for professionals, not developers. Our intuitive builder lets you create beautiful, personalized forms in minutes. If you can write an email, you can create a journey form.",
  },
  {
    id: "faq-3",
    question: "Can I customize the forms to match my brand?",
    answer:
      "Absolutely! You can customize colors, fonts, logos, and even the tone of voice for each form. Add welcome messages, brand it with your style, and make each journey feel authentically you.",
  },
  {
    id: "faq-4",
    question: "What types of professionals use Basix Journey?",
    answer:
      "Our community includes therapists, coaches, consultants, nutritionists, and wellness practitioners. Anyone who values meaningful connections and wants to improve their client onboarding experience uses Basix Journey.",
  },
  {
    id: "faq-5",
    question: "Can I integrate Basix Journey with my existing tools?",
    answer:
      "Yes! We integrate with tools like Calendly, Zoom, Google Calendar, and popular CRMs. You can export data, connect via API, or use automation platforms like Zapier or n8n.",
  },
  {
    id: "faq-6",
    question: "How secure is my client data?",
    answer:
      "We take data security seriously. All data is encrypted in transit and at rest, and we're fully GDPR-compliant. Your client’s trust is as important to us as it is to you.",
  },
  {
    id: "faq-7",
    question: "What if I need help getting started?",
    answer:
      "We’ve got you covered! Access our onboarding guide, tutorial videos, and ready-to-use templates. Our friendly support team is here via chat or email whenever you need a hand.",
  },
  {
    id: "faq-8",
    question: "Can I cancel anytime if I upgrade to a paid plan?",
    answer:
      "Yes! There are no contracts or cancellation fees. You can switch plans or cancel anytime — your data stays safe, and you can always return to the free plan.",
  },
];

export default function FAQ() {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Frequently asked questions
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Everything you need to know about Basix Journey and how it can
            transform your client relationships.
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {FAQ_ITEMS.map((item) => (
              <AccordionItem
                key={item.id}
                value={item.id}
                className="border border-stone-200 rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold text-stone-800 hover:text-olive-600">
                  {item.question}
                </AccordionTrigger>
                <AccordionContent className="text-stone-600 pt-2">
                  {item.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="text-center mt-12">
          <p className="text-stone-600 mb-4">Still have questions?</p>
          <Button
            variant="outline"
            className="border-olive-600 text-olive-600 hover:bg-olive-50 bg-transparent"
          >
            Contact Our Support Team
          </Button>
        </div>
      </div>
    </section>
  );
}
