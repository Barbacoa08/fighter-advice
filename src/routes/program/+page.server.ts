import { redirect } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";
import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Program } from "$types/payload-types";
import { cookieProgramName, cookieProgramOptions } from "$lib/utils";

import type { PageServerLoad, Actions } from "./$types";
import { KnownPrograms } from "./KnownPrograms";

export const load = (({ cookies }) => {
  const data = new KnownPrograms(cookies.get(cookieProgramName));

  return { programs: data.programs };
}) satisfies PageServerLoad;

export const actions = {
  find: async ({ fetch, request }) => {
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
      (p: Program) => p.title.toLowerCase() === (title as string).toLowerCase(),
    );

    if (
      !!program &&
      program.passcode === passcode &&
      program.status === "published"
    ) {
      throw redirect(302, `/program/${program.id}`);
    } else {
      return fail(404, { error: `Program with title "${title}" not found` });
    }
  },

  delete: async ({ cookies, request }) => {
    const programs = new KnownPrograms(cookies.get(cookieProgramName));
    const data = await request.formData();

    const title = data.get("title") as string;
    programs.remove(title);
    cookies.set(cookieProgramName, programs.searialize(), cookieProgramOptions);
  },
} satisfies Actions;
