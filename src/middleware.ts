import { createServerClient } from "@supabase/ssr";
import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  let supabaseResponse = NextResponse.next({
    request,
  });

  const supabase = createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        getAll() {
          return request.cookies.getAll();
        },
        setAll(cookiesToSet) {
          cookiesToSet.forEach(({ name, value }) =>
            request.cookies.set(name, value)
          );
          supabaseResponse = NextResponse.next({
            request,
          });
          cookiesToSet.forEach(({ name, value, options }) =>
            supabaseResponse.cookies.set(name, value, options)
          );
        },
      },
    }
  );

  await supabase.auth.getUser();

  const pathname = request.nextUrl.pathname;

  if (pathname.startsWith("/dashboard")) {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log("🛡️ Middleware - Dashboard access:", {
      pathname,
      hasSession: !!session,
    });
    if (!session) {
      console.log("🔒 Redirecionando para login - sem sessão");
      const redirectUrl = new URL("/login", request.url);
      redirectUrl.searchParams.set("redirectTo", pathname);
      return NextResponse.redirect(redirectUrl);
    }
    console.log("✅ Acesso ao dashboard permitido");
  }

  if (pathname === "/login" || pathname === "/register") {
    const {
      data: { session },
    } = await supabase.auth.getSession();
    console.log("🛡️ Middleware - Auth page access:", {
      pathname,
      hasSession: !!session,
    });
    if (session) {
      console.log("➡️ Redirecionando para dashboard - já autenticado");
      return NextResponse.redirect(new URL("/dashboard", request.url));
    }
  }

  return supabaseResponse;
}

export const config = {
  matcher: ["/dashboard/:path*", "/login", "/register"],
};
