import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Post, Topic } from "$types/payload-types";

import type { PageServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
  topics: Topic[];
}

export const load: PageServerLoad = async ({ fetch }) => {
  const postsResult = await fetch(`${PAYLOAD_CMS_API_URL}posts`);
  const postsData: { docs: Post[] } = await postsResult.json();
  const posts = postsData.docs
    .filter((post) => !!post.status)
    .sort((a, b) => {
      return (
        new Date(b.publishedDate || 0).getTime() -
        new Date(a.publishedDate || 0).getTime()
      );
    })
    .slice(0, 5);

  const topicsResult = await fetch(`${PAYLOAD_CMS_API_URL}topics`);
  const topicsData: { docs: Topic[] } = await topicsResult.json();
  const topics: Topic[] = topicsData.docs
    .filter((topic) => !!topic.status)
    .sort((a, b) => {
      return (
        new Date(b.updatedAt || 0).getTime() -
        new Date(a.updatedAt || 0).getTime()
      );
    })
    .slice(0, 5);

  return {
    posts,
    topics,
  } satisfies PageData;
};
