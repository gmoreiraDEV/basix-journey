import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "@supabase/supabase-js";
import { Heart } from "lucide-react";

export default function Header({ user }: { user?: User | null }) {
    return (
        <header className="bg-white border-b border-stone-200">
            <div className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                        <Heart className="h-6 w-6 text-olive-600" />
                        <span className="text-xl font-serif font-bold text-stone-800">
                            Basix Journey
                        </span>
                    </div>
                    <div className="flex items-center space-x-4">
                        <Avatar className="h-8 w-8">
                            <AvatarFallback className="bg-olive-100 text-olive-600 text-sm font-semibold">
                                {user?.email?.charAt(0).toUpperCase()}
                            </AvatarFallback>
                        </Avatar>
                    </div>
                </div>
            </div>
        </header>
    );
}