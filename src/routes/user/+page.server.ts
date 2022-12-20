import { API_KEY, SECRET_STRING } from "$env/static/private";

import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "../$types";

export const load: PageServerLoad = async ({ url }) => {
  console.info("API_KEY: ", API_KEY);
  console.info("SECRET_STRING: ", SECRET_STRING);

  if (url.searchParams.get("allowed") !== "true") {
    throw redirect(307, "/");
  }
};
