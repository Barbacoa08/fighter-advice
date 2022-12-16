import type { Handle } from "@sveltejs/kit";
import { getUserInformation } from "$db/user";

export const handle: Handle = async ({ event, resolve }) => {
  const sessionid = event.cookies.get("sessionid") || "1";
  const user = await getUserInformation(sessionid);
  event.locals.user = user;

  const response = await resolve(event);
  response.headers.set("x-custom-header", "potato");

  return response;
};
