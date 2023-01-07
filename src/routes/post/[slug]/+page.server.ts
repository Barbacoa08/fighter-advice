import type { Post } from "$types/payload-types";
import { error } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export interface PageData {
  post: Post;
}

export const load = (async ({ fetch, params }) => {
  const data = await fetch(
    `http://localhost:3000/api/posts/?where[slug][equals]=${params.slug}`
  )
    .then(async (res) => await res.json())
    .catch(() => {
      return {
        json: () => {
          return undefined;
        },
      };
    });

  if (!data || data.totalDocs !== 1) {
    throw error(404, {
      message: `Post with slug "${params.slug}" not found`,
    });
  }

  const post: Post = data.docs[0];

  return { post };
}) satisfies PageServerLoad;
