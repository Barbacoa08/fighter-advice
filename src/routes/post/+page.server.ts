import { getPosts } from "$lib/server/posts";

import type { Post } from "$types/payload-types";
import type { PageServerLoad } from "./$types";

export interface PageData {
  posts: Post[];
}

export const load: PageServerLoad = async ({ fetch }) =>
  ({
    posts: await getPosts(fetch),
  } satisfies PageData);
