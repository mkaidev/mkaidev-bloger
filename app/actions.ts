"use server";

import { redirect } from "next/navigation";
import { parseWithZod } from "@conform-to/zod";

import prisma from "./utils/db";
import { requireUser } from "./utils/requireUser";
import { siteSchema } from "./utils/zodSchemas";

export async function CreateSiteAction(prevState: any, formData: FormData) {
  const user = await requireUser();

  const submission = parseWithZod(formData, {
    schema: siteSchema,
  });

  if (submission.status !== "success") {
    return submission.reply();
  }

  const response = await prisma.site.create({
    data: {
      description: submission.value.description,
      name: submission.value.name,
      subdirectory: submission.value.subdirectory,
      userId: user.id,
    },
  });

  return redirect("/dashboard/sites");
}
