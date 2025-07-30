import { Card } from '@/components/ui/card'
import { getUserSession } from '@/lib/auth-actions'

export const dynamic = 'force-dynamic'

export default async function DashboardPage() {
    const user = await getUserSession()

    return (
        <div className="space-y-6">
            <Card className="p-6">
                <h2 className="text-2xl font-bold mb-4">Bem-vindo ao seu Dashboard</h2>
                <div className="space-y-2">
                    <p className="text-gray-600">
                        <span className="font-medium">Email:</span> {user?.email}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">ID:</span> {user?.id}
                    </p>
                    <p className="text-gray-600">
                        <span className="font-medium">Último login:</span>{' '}
                        {user?.last_sign_in_at ? new Date(user.last_sign_in_at).toLocaleString('pt-BR') : 'N/A'}
                    </p>
                </div>
            </Card>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Seus Formulários</h3>
                    <p className="text-gray-600">
                        Em breve você poderá criar e gerenciar seus formulários aqui.
                    </p>
                </Card>

                <Card className="p-6">
                    <h3 className="text-xl font-bold mb-4">Respostas Recebidas</h3>
                    <p className="text-gray-600">
                        Aqui você verá as respostas dos seus formulários.
                    </p>
                </Card>
            </div>
        </div>
    )
}
