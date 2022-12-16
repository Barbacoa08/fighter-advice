import type { FighterUser } from "./FighterUser";

declare global {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace App {
    interface Locals {
      user: FighterUser;
    }
  }
}
