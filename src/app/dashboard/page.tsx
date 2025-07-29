import { Plus, Users, BookOpen, Heart } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { journeys } from "@/lib/dataMock";
import JourneyCard from "@/components/dashboard/journey-card";
import EmptyState from "@/components/dashboard/empty-state";

export default function Dashboard() {
  const hasJourneys = true;

  return (
    <div className="min-h-screen bg-stone-50">
      {/* Header */}
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
                  JD
                </AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Page Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">
              Your Journeys
            </h1>
            <p className="text-stone-600">
              Create, share and manage personalized client journeys.
            </p>
          </div>
          <Button className="bg-olive-600 hover:bg-olive-700 text-white shadow-sm">
            <Plus className="h-4 w-4 mr-2" />
            New Journey
          </Button>
        </div>

        {/* Content */}
        {hasJourneys ? (
          <>
            {/* Stats Overview */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <Card className="border-stone-200">
                <CardContent className="p-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-medium text-stone-600">
                        Total Journeys
                      </p>
                      <p className="text-2xl font-bold text-stone-800">
                        {journeys.length}
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
                          (sum, journey) => sum + journey.responses,
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
                        {journeys.filter((j) => j.status === "active").length}
                      </p>
                    </div>
                    <div className="bg-olive-100 p-3 rounded-lg">
                      <Heart className="h-6 w-6 text-olive-600" />
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Journey Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {journeys.map((journey) => (
                <JourneyCard key={journey.id} journey={journey} />
              ))}
            </div>
          </>
        ) : (
          <EmptyState />
        )}
      </main>
    </div>
  );
}
