import { Avatar, AvatarFallback } from "@radix-ui/react-avatar";
import { User } from "@supabase/supabase-js";
import { Heart, LogOut } from "lucide-react";
import { Button } from '@/components/ui/button'
import { NavigationMenu, NavigationMenuContent, NavigationMenuItem, NavigationMenuList, NavigationMenuTrigger } from "@/components/ui/navigation-menu"

export default function Header({ user, logoutAction }: { user?: User | null, logoutAction: () => void }) {
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
                        <NavigationMenu>
                            <NavigationMenuList>
                                <NavigationMenuItem>
                                    <NavigationMenuTrigger className="flex items-center justify-center gap-2">
                                        <Avatar className="h-8 w-8">
                                            <AvatarFallback className="bg-olive-100 text-olive-600 text-sm font-semibold">
                                                {user?.email?.charAt(0).toUpperCase()}
                                            </AvatarFallback>
                                        </Avatar>
                                    </NavigationMenuTrigger>
                                    <NavigationMenuContent>
                                        <Button variant="outline" onClick={logoutAction} className="flex items-center gap-2">
                                            <LogOut className="h-4 w-4" />
                                            <p className="text-sm">Sair</p>
                                        </Button>
                                    </NavigationMenuContent>
                                </NavigationMenuItem>
                            </NavigationMenuList>
                        </NavigationMenu>
                    </div>
                </div>
            </div>
        </header>
    );
}