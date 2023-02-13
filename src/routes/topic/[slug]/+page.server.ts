import { getTopic } from "$lib/server/topics";

import type { Topic } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  topic: Topic;
}

export const load: PageServerLoad = async ({ fetch, params }) =>
  ({
    topic: await getTopic(fetch, params.slug),
  } satisfies PageData);
