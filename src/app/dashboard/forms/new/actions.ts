import { createForm } from "@/lib/dal/forms";
import { TablesInsert } from "@/lib/db.types";

export async function createFormAction(values: TablesInsert<"forms">) {
    const form = await createForm(values);

    return form;
}