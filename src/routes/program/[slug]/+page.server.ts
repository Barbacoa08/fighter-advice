import { error } from "@sveltejs/kit";
import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Program } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  program: Program;
}
export const load: PageServerLoad = async ({ fetch, params }) => {
  const result = await fetch(`${PAYLOAD_CMS_API_URL}program/${params.slug}`)
    .then(async (res) => await res.json())
    .catch(() => {
      throw error(404, "Not found");
    });

  return result;
};
