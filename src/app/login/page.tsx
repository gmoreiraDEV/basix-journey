import Link from 'next/link'
import { AuthForm } from '@/components/auth/auth-form'
import { loginAction } from './actions'

export const dynamic = 'force-dynamic'

export default function LoginPage({
    searchParams,
}: {
    searchParams: { [key: string]: string | string[] | undefined }
}) {
    return (
        <div className="min-h-screen flex flex-col items-center justify-center p-4">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2">Bem-vindo de volta!</h1>
                <p className="text-gray-600">
                    Não tem uma conta?{' '}
                    <Link href="/register" className="text-blue-600 hover:underline">
                        Cadastre-se
                    </Link>
                </p>
            </div>

            <AuthForm mode="login" searchParams={searchParams} action={loginAction} />
        </div>
    )
} 