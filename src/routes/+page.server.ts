import type { Post } from "$types/payload-types";

import type { PageServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
}

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch("http://localhost:3000/api/posts").catch(() => {
    return {
      json: () => {
        return { docs: [] };
      },
    };
  });
  const data: { docs: Post[] } = await res.json();
  const posts = data.docs;

  return {
    posts,
  } satisfies PageData;
};
