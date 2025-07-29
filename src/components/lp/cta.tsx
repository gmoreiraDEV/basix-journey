import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function CTA() {
  return (
    <section className="py-16 md:py-24">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Start your first journey — for free.
          </h2>
          <p className="text-lg text-stone-600 mb-8">
            No code. No stress. Just meaningful forms.
          </p>
          <Button
            size="lg"
            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow hover:shadow-md transition-all"
          >
            Start Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-stone-500 mt-4">
            Join hundreds of professionals creating better client experiences
          </p>
        </div>
      </div>
    </section>
  );
}
