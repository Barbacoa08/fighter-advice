import type { Post } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  post?: Post;
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
  const post: Post = data.docs.length === 1 ? data.docs[0] : undefined;

  return { post };
}) satisfies PageServerLoad;
