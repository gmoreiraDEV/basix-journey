import Header from "./header";
import { User } from "@supabase/supabase-js";

export default function PageWrapper({ children, user, logoutAction }: { children: React.ReactNode, user: User | null, logoutAction: () => void }) {
    return (
        <div className="min-h-screen bg-stone-50">
            <Header user={user} logoutAction={logoutAction} />
            <main className="container mx-auto px-4 py-8">
                {children}
            </main>
        </div>
    )
}