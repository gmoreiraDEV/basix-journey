'use client'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'

type AuthFormProps = {
    mode: 'login' | 'register'
    searchParams?: { [key: string]: string | string[] | undefined }
    action: (formData: FormData) => Promise<void>
}

export function AuthForm({ mode, searchParams, action }: AuthFormProps) {
    const error = searchParams?.error as string
    const success = searchParams?.success as string

    const getErrorMessage = (error: string) => {
        switch (error) {
            case 'email-not-confirmed':
                return 'Por favor, confirme seu email antes de fazer login'
            case 'auth-callback-error':
                return 'Ocorreu um erro ao confirmar seu email. Tente novamente.'
            default:
                return decodeURIComponent(error)
        }
    }

    const getSuccessMessage = (success: string) => {
        switch (success) {
            case 'confirmation-sent':
                return 'Um email de confirmação foi enviado. Por favor, verifique sua caixa de entrada.'
            default:
                return success
        }
    }

    return (
        <Card className="w-full max-w-md p-6">
            <form action={action} className="space-y-4">
                {mode === 'register' && (
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium">
                            Nome
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            required
                            className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-olive-500 focus:ring-olive-500"
                            placeholder="Seu nome completo"
                        />
                    </div>
                )}
                <div>
                    <label htmlFor="email" className="block text-sm font-medium">
                        Email
                    </label>
                    <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-olive-500 focus:ring-olive-500"
                        placeholder="seu@email.com"
                    />
                </div>
                <div>
                    <label htmlFor="password" className="block text-sm font-medium">
                        Senha
                    </label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        required
                        minLength={8}
                        className="mt-1 block w-full rounded-md border border-gray-300 px-3 py-2 focus:border-olive-500 focus:ring-olive-500"
                        placeholder="••••••••"
                    />
                </div>

                {mode === 'register' && (
                    <div className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            id="terms"
                            name="terms"
                            required
                            className="h-4 w-4 rounded border-gray-300 text-olive-600 focus:ring-olive-500"
                        />
                        <label htmlFor="terms" className="text-sm text-gray-600">
                            Li e aceito os{' '}
                            <a href="/terms" className="text-olive-600 hover:underline" target="_blank">
                                termos de uso
                            </a>{' '}
                            e a{' '}
                            <a href="/privacy" className="text-olive-600 hover:underline" target="_blank">
                                política de privacidade
                            </a>
                        </label>
                    </div>
                )}

                {error && (
                    <div className="bg-red-50 text-red-500 text-sm p-3 rounded-md">
                        {getErrorMessage(error)}
                    </div>
                )}

                {success && (
                    <div className="bg-green-50 text-green-500 text-sm p-3 rounded-md">
                        {getSuccessMessage(success)}
                    </div>
                )}

                <Button
                    type="submit"
                    className="w-full bg-olive-600 hover:bg-olive-700"
                >
                    {mode === 'login' ? 'Entrar' : 'Cadastrar'}
                </Button>
            </form>
        </Card>
    )
} 