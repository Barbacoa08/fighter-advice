import { getPosts } from "$lib/server/posts";
import { getTopics } from "$lib/server/topics";

import type { Post, Topic } from "$types/payload-types";
import type { LayoutServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
  topics: Topic[];
}

export const load = (async ({ fetch }) => {
  let posts: Post[] = [];
  let topics: Topic[] = [];

  try {
    posts = await getPosts(fetch);
    topics = await getTopics(fetch);
  } catch (error) {
    console.error(error);
  }

  return {
    posts,
    topics,
  };
}) satisfies LayoutServerLoad;
