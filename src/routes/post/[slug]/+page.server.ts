import type { Post } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  post?: Post;
}

export const load = (async ({ fetch, params }) => {
  const res = await fetch(
    `http://localhost:3000/api/posts/${params.slug}`
  ).catch(() => {
    return {
      json: () => {
        return undefined;
      },
    };
  });
  const post: Post = await res.json();

  return { post };
}) satisfies PageServerLoad;
