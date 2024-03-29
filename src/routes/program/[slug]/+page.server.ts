import { error } from "@sveltejs/kit";
import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Program } from "$types/payload-types";
import { cookieProgramName, cookieProgramOptions } from "$lib/utils";

import type { PageServerLoad } from "./$types";
import { KnownPrograms } from "../KnownPrograms";

export interface PageData {
  program: Program;
}
export const load: PageServerLoad = async ({ cookies, fetch, params }) => {
  const result = await fetch(`${PAYLOAD_CMS_API_URL}program/${params.slug}`)
    .then(async (res) => await res.json())
    .catch(() => {
      throw error(404, "Not found");
    });

  if (!result || !result.id) {
    throw error(404, "Not found");
  }

  const programs = new KnownPrograms(cookies.get(cookieProgramName));
  programs.add(result.title, `/program/${result.id}`);
  cookies.set(cookieProgramName, programs.searialize(), cookieProgramOptions);

  return result;
};
