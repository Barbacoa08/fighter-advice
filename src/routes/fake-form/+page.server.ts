import type { Actions } from "@sveltejs/kit";

export const actions = {
  default: async ({ request }) => {
    const result = await request.formData();
    const name = result.get("name");
    const email = result.get("email");
    const message = result.get("message");

    console.log("name: ", name);
    console.log("email: ", email);
    console.log("message: ", message);

    return {
      message: "Success! You submitted a fake form (:",
    };
  },
} satisfies Actions;
