import { PAYLOAD_CMS_API_URL } from "$env/static/private";
import { fail, type Actions } from "@sveltejs/kit";

import type { Program } from "$types/payload-types";

export const actions = {
  default: async ({ request, fetch }) => {
    const data = await request.formData();
    const title = data.get("title");
    const passcode = data.get("passcode");

    if (!title || !passcode) {
      return fail(400, { error: "Invalid form data" });
    }

    const result = await fetch(`${PAYLOAD_CMS_API_URL}program/`)
      .then(async (res) => await res.json())
      .catch(() => ({ totalDocs: 0 }));

    if (!result || result.totalDocs < 1) {
      return fail(404, { error: `Error retrieving Training Programs` });
    }

    const program: Program = result.docs.find(
      (p: Program) => p.title.toLowerCase() === (title as string).toLowerCase()
    );

    if (
      !!program &&
      program.passcode === passcode &&
      program.status === "published"
    ) {
      return {
        status: 200,
        success: true,
        message: `Success retrieving Training Program "${title}"`,
        program,
      };
    } else {
      return fail(404, { error: `Program with title "${title}" not found` });
    }
  },
} satisfies Actions;
