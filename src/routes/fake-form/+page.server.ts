import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export interface FormResponse {
  message: string;
}

export const actions = {
  default: async ({ request }) => {
    const result = await request.formData();
    const name = result.get("name");

    if (name !== "joe") {
      return fail(401, {
        message: "Only Joe is allowed to submit this form.",
      } satisfies FormResponse);
    }

    const email = result.get("email");
    const message = result.get("message");

    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);

    return {
      message: "Success! You submitted a fake form (:",
    } satisfies FormResponse;
  },
} satisfies Actions;
