import { Users, BookOpen, Heart } from "lucide-react";
import { journeys } from "@/lib/dataMock";
import { JourneyType } from "@/lib/types";
import { Card, CardContent } from "@/components/ui/card";
import JourneyCard from "@/components/dashboard/journey-card";
import EmptyState from "@/components/dashboard/empty-state";
import Header from "@/components/dashboard/header";
import PageHeader from "@/components/dashboard/page-header";
import { getUserSession } from '@/lib/auth-actions'

export const dynamic = 'force-dynamic'

export default async function Dashboard() {
  const hasJourneys = false;
  const user = await getUserSession()

  return (
    <div className="min-h-screen bg-stone-50">
      <Header />
      <main className="container mx-auto px-4 py-8">
        <PageHeader />

        {hasJourneys ? (
          <>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-stone-600">
                        Total Journeys
                      </p>
                      <p className="text-2xl font-bold text-stone-800">
                        {journeys?.length}
                      </p>
                    </div>
                    <div className="bg-olive-100 p-3 rounded-lg">
                      <BookOpen className="h-6 w-6 text-olive-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-stone-600">
                        Total Responses
                      </p>
                      <p className="text-2xl font-bold text-stone-800">
                        {journeys.reduce(
                          (sum, journey: JourneyType) =>
                            sum + journey?.responses,
                          0
                        )}
                      </p>
                    </div>
                    <div className="bg-olive-100 p-3 rounded-lg">
                      <Users className="h-6 w-6 text-olive-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-stone-600">
                        Active Journeys
                      </p>
                      <p className="text-2xl font-bold text-stone-800">
                        {
                          journeys.filter(
                            (j: JourneyType) => j.status === "active"
                          ).length
                        }
                      </p>
                    </div>
                    <div className="bg-olive-100 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-olive-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeys.map((journey: JourneyType) => (
                <JourneyCard key={journey?.id} journey={journey} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
}))
