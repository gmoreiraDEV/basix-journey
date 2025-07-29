import React from "react";
import { Card, CardContent } from "../ui/card";
import { Download, Edit3, Share2 } from "lucide-react";

export default function HowItWorks() {
  return (
    <section id="how-it-works" className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-800 mb-4">
            How it works
          </h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Three simple steps to create meaningful client journeys that
            convert.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          <Card className="text-center border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Edit3 className="h-8 w-8 text-olive-600" />
              </div>
              <div className="bg-olive-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 1
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">
                Customize your form with personal touches
              </h3>
              <p className="text-stone-600">
                Add your warmth, tone, and personality. Choose colors, write
                welcoming intros, and craft questions that feel natural.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Share2 className="h-8 w-8 text-olive-600" />
              </div>
              <div className="bg-olive-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 2
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">
                Share the link with your client or lead
              </h3>
              <p className="text-stone-600">
                Send your personalized form via email, text, or embed it on your
                website. Your clients will love the experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center border-stone-200 shadow-sm hover:shadow-md transition-shadow">
            <CardContent className="p-8">
              <div className="bg-olive-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Download className="h-8 w-8 text-olive-600" />
              </div>
              <div className="bg-olive-600 text-white text-sm font-semibold px-3 py-1 rounded-full inline-block mb-4">
                Step 3
              </div>
              <h3 className="text-xl font-semibold text-stone-800 mb-3">
                Receive a beautiful summary with insights and a PDF
              </h3>
              <p className="text-stone-600">
                Get instant notifications with organized responses, actionable
                insights, and a professional PDF to share.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
