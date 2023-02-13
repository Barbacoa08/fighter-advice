import { getTopics } from "$lib/server/topics";

import type { Topic } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  topics: Topic[];
}

export const load: PageServerLoad = async ({ fetch }) =>
  ({
    topics: await getTopics(fetch),
  } satisfies PageData);
