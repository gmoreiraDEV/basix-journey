"use client";

import { Plus } from "lucide-react";
import { Button } from "../ui/button";
import { useRouter } from "next/navigation";

export default function PageHeader() {
  const router = useRouter();

  return (
    <div className="flex items-center justify-between mb-8">
      <div>
        <h1 className="text-3xl font-serif font-bold text-stone-800 mb-2">
          Your Journeys
        </h1>
        <p className="text-stone-600">
          Create, share and manage personalized client journeys.
        </p>
      </div>
      <Button
        className="bg-olive-600 hover:bg-olive-700 text-white shadow-sm"
        onClick={() => router.push("/dashboard/forms/new")}
      >
        <Plus className="h-4 w-4 mr-2" />
        New Journey
      </Button>
    </div>
  );
}
