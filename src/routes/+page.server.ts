import type { PageServerLoad } from "./$types";
import { dev } from "$app/environment";

export interface HomepageLink {
  href: string;
  text: string;
}

export interface PageData {
  links: HomepageLink[];
}

export const load: PageServerLoad = async () => {
  const links: HomepageLink[] = [
    { href: "/nutrition", text: "Nutrition (Coming Soon)" },
    { href: "/weight-management", text: "Weight Management (Coming Soon)" },
    { href: "/training-plans", text: "Training Plans (Coming Soon)" },
    { href: "/training-day", text: "Training Day (Coming Soon)" },
    { href: "/fight-week", text: "Fight Week (Coming Soon)" },
    { href: "/fight-day", text: "Fight Day (Coming Soon)" },
    { href: "/motivations", text: "Motivations (Coming Soon)" },
    { href: "/peeps", text: "Peeps (Coming Soon)" },
  ];

  if (dev) {
    links.push({ href: "/my-stuff", text: "My Stuff (In Dev)" });
  }

  return {
    links,
  } satisfies PageData;
};
