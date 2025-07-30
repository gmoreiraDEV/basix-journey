"use client";

import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { TablesInsert } from "@/lib/db.types";
import { createFormAction } from "./actions";

export default function NewJourneyForm() {
  const router = useRouter();

  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<TablesInsert<"forms">>();

  const onSubmit = async (values: TablesInsert<"forms">) => {
    const form = await createFormAction({
      title: values.title,
      questions: [],
      settings: values.settings,
    });

    router.push(`/dashboard/forms/${form.id}`);
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="max-w-xl mx-auto space-y-6 py-10"
    >
      <div>
        <label className="block mb-1 text-sm font-medium">Journey Title</label>
        <Input placeholder="Ex: Discovery Call" {...register("title")} />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Opening Message
        </label>
        <Textarea
          placeholder="Warm welcome message..."
          {...register("settings.messageOpening")}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Closing Message
        </label>
        <Textarea
          placeholder="Final words after submission..."
          {...register("settings.messageClosing")}
        />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">
          Emoji (optional)
        </label>
        <Input placeholder="🌿" {...register("settings.emoji")} />
      </div>

      <div>
        <label className="block mb-1 text-sm font-medium">Display Mode</label>
        <select
          {...register("settings.displayMode")}
          className="w-full border rounded-md p-2"
        >
          <option value="default">Default</option>
          <option value="slow">Slow (1 question per step)</option>
        </select>
      </div>

      <div className="flex items-center gap-2">
        <input type="checkbox" {...register("settings.motivationalProgress")} />
        <span className="text-sm">Show motivational progress</span>
      </div>

      <Button type="submit" disabled={isSubmitting}>
        {isSubmitting ? "Creating..." : "Create Journey"}
      </Button>
    </form>
  );
}
