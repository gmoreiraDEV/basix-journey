import React from "react";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

export default function Hero() {
  return (
    <section className="py-16 md:py-24 lg:py-32">
      <div className="container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <div className="mb-6">
            <span className="text-4xl">🤝</span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-stone-800 mb-6 leading-tight">
            Forms that connect.{" "}
            <span className="text-olive-600">Journeys that convert.</span>
          </h1>
          <p className="text-lg md:text-xl text-stone-600 mb-8 max-w-3xl mx-auto leading-relaxed">
            Build personalized forms with tone, empathy, and intention — and
            turn every lead into a meaningful connection.
          </p>
          <Button
            size="lg"
            className="bg-olive-600 hover:bg-olive-700 text-white px-8 py-4 text-lg font-medium rounded-lg shadow hover:shadow-md transition-all"
          >
            Create My Journey — Free
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
          <p className="text-sm text-stone-500 mt-4">
            No credit card required • Start in minutes
          </p>
        </div>
      </div>
    </section>
  );
}
