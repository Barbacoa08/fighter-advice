import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Post } from "$types/payload-types";

import type { PageServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
}

export const load: PageServerLoad = async ({ fetch }) => {
  const res = await fetch(`${PAYLOAD_CMS_API_URL}posts`).catch(() => {
    return {
      json: () => {
        return { docs: [] };
      },
    };
  });
  const data: { docs: Post[] } = await res.json();
  const posts = data.docs
    .filter((post) => !!post.status)
    .sort((a, b) => {
      return (
        new Date(b.publishedDate || 0).getTime() -
        new Date(a.publishedDate || 0).getTime()
      );
    });

  return {
    posts,
  } satisfies PageData;
};
