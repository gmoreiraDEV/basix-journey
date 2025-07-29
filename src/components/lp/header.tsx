import { Heart, Link } from "lucide-react";
import React from "react";
import { Button } from "../ui/button";

export default function Header() {
  return (
    <header className="border-b border-stone-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-olive-600" />
          <span className="text-xl font-serif font-bold text-stone-800">
            Basix Journey
          </span>
        </div>
        <nav className="hidden md:flex items-center space-x-6">
          <Link
            href="#features"
            className="text-stone-600 hover:text-olive-600 transition-colors"
          >
            Features
          </Link>
          <Link
            href="#how-it-works"
            className="text-stone-600 hover:text-olive-600 transition-colors"
          >
            How it Works
          </Link>
          <Button
            variant="outline"
            className="border-olive-600 text-olive-600 hover:bg-olive-50 bg-transparent"
          >
            Sign In
          </Button>
        </nav>
      </div>
    </header>
  );
}
