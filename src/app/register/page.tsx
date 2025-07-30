import Link from 'next/link'
import { AuthForm } from '@/components/auth/auth-form'
import { registerAction } from './actions'

export const dynamic = 'force-dynamic'

export default function RegisterPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Crie sua conta</h1>
                <p className="text-gray-600">
                    Já tem uma conta?{' '}
                    <Link href="/login" className="text-blue-600 hover:underline">
                        Faça login
                    </Link>
                </p>
            </div>

            <AuthForm mode="register" searchParams={searchParams} action={registerAction} />
        </div>
    )
} 