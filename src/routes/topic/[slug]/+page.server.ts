import { error } from "@sveltejs/kit";

import { PAYLOAD_CMS_API_URL } from "$env/static/private";
import type { Topic } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  topic: Topic;
}

export const load = (async ({ fetch, params }) => {
  const data = await fetch(
    `${PAYLOAD_CMS_API_URL}topics/?where[slug][equals]=${params.slug}`
  ).then(async (res) => await res.json());

  if (!data || data.totalDocs !== 1) {
    throw error(404, {
      message: `Topic with slug "${params.slug}" not found`,
    });
  }

  const topic: Topic = data.docs[0];

  return { topic };
}) satisfies PageServerLoad;
