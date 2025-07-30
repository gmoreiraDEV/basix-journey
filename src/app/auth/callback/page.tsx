'use client'

import { Suspense } from 'react'
import { useEffect } from 'react'
import { useRouter, useSearchParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'

function CallbackHandler() {
    const router = useRouter()
    const searchParams = useSearchParams()

    useEffect(() => {
        const handleCallback = async () => {
            const code = searchParams.get('code')

            if (code) {
                try {
                    await supabase.auth.exchangeCodeForSession(code)
                    // Redirecionar para o dashboard após confirmar o email
                    router.push('/dashboard')
                } catch (error) {
                    console.error('Erro ao processar callback:', error)
                    router.push('/login?error=auth-callback-error')
                }
            } else {
                router.push('/login')
            }
        }

        handleCallback()
    }, [router, searchParams])

    return (
        <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Verificando...</h2>
            <p className="text-gray-600">Por favor, aguarde enquanto confirmamos seu email.</p>
        </div>
    )
}

export default function AuthCallbackPage() {
    return (
        <div className="min-h-screen flex items-center justify-center">
            <Suspense fallback={
                <div className="text-center">
                    <h2 className="text-2xl font-bold mb-4">Carregando...</h2>
                    <p className="text-gray-600">Por favor, aguarde...</p>
                </div>
            }>
                <CallbackHandler />
            </Suspense>
        </div>
    )
} 