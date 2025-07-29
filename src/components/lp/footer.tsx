import { Heart, Link } from "lucide-react";
import React from "react";

export default function Footer() {
  return (
    <footer className="border-t border-stone-200 py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between">
          <div className="flex items-center space-x-2 mb-4 md:mb-0">
            <Heart className="h-5 w-5 text-olive-600" />
            <span className="font-serif font-bold text-stone-800">
              Basix Journey
            </span>
          </div>
          <div className="flex items-center space-x-6 text-sm text-stone-600">
            <Link
              href="/privacy"
              className="hover:text-olive-600 transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="hover:text-olive-600 transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/contact"
              className="hover:text-olive-600 transition-colors"
            >
              Contact
            </Link>
          </div>
        </div>
        <div className="text-center mt-6 text-sm text-stone-500">
          © {new Date().getFullYear()} Basix Journey. Made with ❤️ for
          meaningful connections.
        </div>
      </div>
    </footer>
  );
}
