import { error } from "@sveltejs/kit";

import { PAYLOAD_CMS_API_URL } from "$env/static/private";
import type { Post } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  post: Post;
}

export const load = (async ({ fetch, params }) => {
  const data = await fetch(
    `${PAYLOAD_CMS_API_URL}posts/?where[slug][equals]=${params.slug}`
  ).then(async (res) => await res.json());

  if (!data || data.totalDocs !== 1) {
    throw error(404, {
      message: `Post with slug "${params.slug}" not found`,
    });
  }

  const post: Post = data.docs[0];

  return { post };
}) satisfies PageServerLoad;
