import type { Post, Topic } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
  topics: Topic[];
}

export const load: PageServerLoad = async ({ parent }) => {
  const { posts, topics } = await parent();

  return {
    posts: posts.slice(0, 5),
    topics: topics.slice(0, 5),
  } satisfies PageData;
};
