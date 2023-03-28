import { json } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

import { getPosts } from "$lib/server/posts";
import { getTopics } from "$lib/server/topics";
import type { Post, Topic } from "$types/payload-types";

interface Result {
  title: string;
  url: string;
  tags: string[];
}

/**
 * This call takes ~10ms
 *
 * It's not really necessary to make this its own function. This could easily
 * live in the `load` function, but I want to play with a `+server.ts` file and
 * see how it works.
 *
 * @returns {Promise<Result[]>}
 */
export const GET = (async () => {
  let posts: Post[] = [];
  let topics: Topic[] = [];

  try {
    posts = await getPosts(fetch);
    topics = await getTopics(fetch);
  } catch (error) {
    console.error(error);
  }

  const results: Result[] = [];
  posts.forEach((post) => {
    const { title, slug, tags, status, publishedDate } = post;

    if (
      status === "published" &&
      publishedDate &&
      new Date(publishedDate) < new Date() &&
      title
    ) {
      results.push({
        title,
        url: `/post/${slug}`,
        tags: tags?.map((tag) => tag.name || "") || [],
      });
    }
  });
  topics.forEach((topic) => {
    const { title, slug, tags, status, publishedDate } = topic;

    if (
      status === "published" &&
      publishedDate &&
      new Date(publishedDate) < new Date() &&
      title
    ) {
      results.push({
        title,
        url: `/topic/${slug}`,
        tags: tags?.map((tag) => tag.name || "") || [],
      });
    }
  });

  return json(results);
}) satisfies RequestHandler;
