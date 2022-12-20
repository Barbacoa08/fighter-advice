import type { FighterUser } from "./FighterUser";

// implemented via "Types" docs: https://kit.svelte.dev/docs/types#app
declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace App {
    interface Locals {
      user: FighterUser;
    }
  }
}
