import type { PageLoad } from "./$types";

export interface PageData {
  user: string;
}

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const user = await res.json();
  console.log(user);

  return {
    user: user.username || "Nak Muay",
  } satisfies PageData;
};
