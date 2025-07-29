import React from "react";
import { Card, CardContent } from "../ui/card";
import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";

export default function Testimonials() {
  return (
    <section className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <Card className="max-w-3xl mx-auto border-stone-200 shadow-lg">
          <CardContent className="p-8 md:p-12 text-center">
            <div className="text-olive-600 mb-6">
              <svg
                className="w-12 h-12 mx-auto"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <blockquote className="text-xl md:text-2xl font-serif text-stone-800 mb-6 leading-relaxed">
              {
                "Finally, a tool that understands how I work — with warmth and clarity."
              }
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <Avatar className="w-12 h-12">
                <AvatarFallback className="bg-olive-100 text-olive-600 font-semibold">
                  RL
                </AvatarFallback>
              </Avatar>
              <div className="text-left">
                <div className="font-semibold text-stone-800">Rebeca Lima</div>
                <div className="text-stone-600 text-sm">
                  Mentor & Integrative Therapist
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
