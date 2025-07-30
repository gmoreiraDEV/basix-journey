import { Heart } from "lucide-react"
import Link from "next/link"
import { Button } from "../ui/button"
import { getUserSession } from "@/lib/auth-actions"

export default async function Header() {
  const user = await getUserSession()

  return (
    <header className="border-b border-stone-100">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center space-x-2">
          <Heart className="h-6 w-6 text-olive-600" />
          <span className="text-xl font-serif font-bold text-stone-800">
            Basix Journey
          </span>
        </Link>
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
          {user ? (
            <Button
              asChild
              variant="outline"
              className="border-olive-600 text-olive-600 hover:bg-olive-50 bg-transparent"
            >
              <Link href="/dashboard">Dashboard</Link>
            </Button>
          ) : (
            <Button
              asChild
              variant="outline"
              className="border-olive-600 text-olive-600 hover:bg-olive-50 bg-transparent"
            >
              <Link href="/login">Sign In</Link>
            </Button>
          )}
        </nav>
      </div>
    </header>
  )
}
