import { BookOpen, Plus } from "lucide-react";
import { Button } from "../ui/button";

export default function EmptyState() {
  return (
    <div className="text-center py-16">
      <div className="mb-6">
        <div className="mx-auto w-24 h-24 bg-olive-50 rounded-full flex items-center justify-center mb-4">
          <BookOpen className="h-12 w-12 text-olive-400" />
        </div>
      </div>
      <h3 className="text-xl font-serif font-semibold text-stone-800 mb-2">{`You haven't created any journeys yet.`}</h3>
      <p className="text-stone-600 mb-6 max-w-md mx-auto">
        Start building meaningful connections with your clients by creating your
        first personalized journey form.
      </p>
      <Button className="bg-olive-600 hover:bg-olive-700 text-white">
        <Plus className="h-4 w-4 mr-2" />
        Create your first journey
      </Button>
    </div>
  );
}
