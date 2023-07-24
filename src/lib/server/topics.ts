import { PAYLOAD_CMS_API_URL } from "$env/static/private";

import type { Fetch } from "$types/Fetch";
import type { Topic } from "$types/payload-types";
import { error } from "@sveltejs/kit";

export const getTopics = async (fetch: Fetch) => {
  const topicsResult = await fetch(`${PAYLOAD_CMS_API_URL}topics`);
  const topicsData: { docs: Topic[] } = await topicsResult.json();
  const topics = topicsData.docs
    .filter((topic) => !!topic.status)
    .sort((a, b) => {
      return (
        new Date(b.updatedAt || 0).getTime() -
        new Date(a.updatedAt || 0).getTime()
      );
    });
  return topics;
};

export const getTopic = async (fetch: Fetch, slug: string) => {
  const data = await fetch(
    `${PAYLOAD_CMS_API_URL}topics/?where[slug][equals]=${slug}`,
  ).then(async (res) => await res.json());

  if (!data || data.totalDocs !== 1) {
    throw error(404, `Topic with slug "${slug}" not found`);
  }

  const topic: Topic = data.docs[0];

  return topic;
};
