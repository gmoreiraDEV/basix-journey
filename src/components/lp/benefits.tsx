import { FileText, Heart, Palette, Sparkles, TrendingUp } from "lucide-react";
import React from "react";

export default function Benefites() {
  return (
    <section id="features" className="py-16 bg-beige-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            Why professionals choose Basix Journey
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Transform your client relationships with forms that feel personal,
            professional, and purposeful.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="flex items-start space-x-4">
            <div className="bg-olive-100 p-3 rounded-lg flex-shrink-0">
              <Heart className="h-6 w-6 text-olive-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                Deepen connection with your leads
              </h3>
              <p className="text-stone-600">
                Create forms that feel like conversations, not interrogations.
                Build trust from the first interaction.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-olive-100 p-3 rounded-lg flex-shrink-0">
              <TrendingUp className="h-6 w-6 text-olive-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                Close more deals with less friction
              </h3>
              <p className="text-stone-600">
                Smooth onboarding experiences that guide prospects naturally
                toward saying yes.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-olive-100 p-3 rounded-lg flex-shrink-0">
              <FileText className="h-6 w-6 text-olive-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                Send beautiful PDF summaries instantly
              </h3>
              <p className="text-stone-600">
                Automatically generate professional reports that showcase
                insights and next steps.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4">
            <div className="bg-olive-100 p-3 rounded-lg flex-shrink-0">
              <Palette className="h-6 w-6 text-olive-600" />
            </div>
            <div>
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                Reflect your personality and tone
              </h3>
              <p className="text-stone-600">
                Customize every word, color, and feeling to match your unique
                approach and brand.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-4 md:col-span-2 justify-center">
            <div className="bg-olive-100 p-3 rounded-lg flex-shrink-0">
              <Sparkles className="h-6 w-6 text-olive-600" />
            </div>
            <div className="max-w-md">
              <h3 className="text-xl font-semibold text-stone-800 mb-2">
                Turn onboarding into a delightful experience
              </h3>
              <p className="text-stone-600">
                Make first impressions that last. Your clients will remember how
                you made them feel.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
