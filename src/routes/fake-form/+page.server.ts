import type { Actions } from "@sveltejs/kit";
import { fail } from "@sveltejs/kit";

export interface FormResponse {
  message: string;
}

export const actions = {
  /*
    * POST /fake-form

    For non-default actions, you just add `action="/folder/path"+"?/"+{action_name}`
    to the HTML form element. For example, if you want to use the `submit` action
    from this file, you would add `action="/fake-form?/submit"` to the form element.

    For more details, see: https://levelup.video/tutorials/sveltekit/custom-form-handlers
  */
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
