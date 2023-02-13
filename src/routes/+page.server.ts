import { getPosts } from "$lib/server/posts";
import { getTopics } from "$lib/server/topics";

import type { Post, Topic } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
  topics: Topic[];
}

export const load: PageServerLoad = async ({ fetch }) => {
  const posts = (await getPosts(fetch)).slice(0, 5);

  const topics = (await getTopics(fetch)).slice(0, 5);

  return {
    posts,
    topics,
  } satisfies PageData;
};
