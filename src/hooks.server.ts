import type { Handle } from "@sveltejs/kit";
import { getUserInformation } from "$db/user";

export const handle: Handle = async ({ event, resolve }) => {
  const sessionid = event.cookies.get("sessionid") || "1"; // TODO: add sessionid to cookies
  event.locals.user = await getUserInformation(sessionid);

  const response = await resolve(event);
  return response;
};
