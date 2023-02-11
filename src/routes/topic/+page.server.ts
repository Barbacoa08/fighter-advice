import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Topic } from "$types/payload-types";

import type { PageServerLoad } from "./$types";

export interface PageData {
  topics: Topic[];
}

export const load: PageServerLoad = async ({ fetch }) => {
  const topicsResult = await fetch(`${PAYLOAD_CMS_API_URL}topics`).catch(() => {
    return {
      json: () => {
        return { docs: [] };
      },
    };
  });
  const topicsData: { docs: Topic[] } = await topicsResult.json();
  const topics: Topic[] = topicsData.docs
    .filter((topic) => !!topic.status)
    .sort((a, b) => {
      return (
        new Date(b.updatedAt || 0).getTime() -
        new Date(a.updatedAt || 0).getTime()
      );
    });

  return {
    topics,
  } satisfies PageData;
};
