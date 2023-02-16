import { getPosts } from "$lib/server/posts";
import { getTopics } from "$lib/server/topics";

import type { Post, Topic } from "$types/payload-types";
import type { LayoutServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
  topics: Topic[];
}

export const load = (async ({ fetch }) => {
  const posts = await getPosts(fetch);
  const topics = await getTopics(fetch);

  return {
    posts,
    topics,
  };
}) satisfies LayoutServerLoad;
