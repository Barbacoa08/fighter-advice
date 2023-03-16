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
    // HACK: use sveltekit's built in error handling and pass a useful error message to the client
    // link to issue: https://github.com/Barbacoa08/fighter-advice/issues/69
    console.error(error);
  }

  return {
    posts,
    topics,
  };
}) satisfies LayoutServerLoad;
