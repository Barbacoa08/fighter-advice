import type { FighterUser } from "src/hooks.server";
import type { PageLoad } from "./$types";

export interface PageData {
  user: string;
}

export const load: PageLoad = async ({ fetch, setHeaders }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user: FighterUser = await res.json();

  // TODO: dangerous, probably don't want to keep
  setHeaders({
    "Cache-Control": "max-age=60", // 60 seconds, or 1 minute
  });

  return {
    user: user.username || "Nak Muay",
  } satisfies PageData;
};
