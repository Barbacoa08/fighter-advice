import type { FighterUser } from "$types/FighterUser";
import type { PageServerLoad } from "./$types";

export interface PageData {
  user: FighterUser;
}

export const load: PageServerLoad = async ({
  locals: { user },
  setHeaders,
}) => {
  // TODO: dangerous, probably don't want to keep
  setHeaders({
    "Cache-Control": "max-age=60", // 60 seconds, or 1 minute
  });

  return {
    user,
  } satisfies PageData;
};
