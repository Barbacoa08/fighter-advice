import { json } from "@sveltejs/kit";

import type { RequestHandler } from "./$types";

export const GET: RequestHandler = async ({ locals }) => {
  return json({
    username: locals.user.username,
  });
};

export const POST: RequestHandler = async ({ request, locals }) => {
  const body = await request.json();

  locals.user.username = body.username; // BUG: this does not work as expected
  // TODO: add user to database

  return json({
    username: body.username,
  });
};
