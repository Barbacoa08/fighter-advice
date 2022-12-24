import { dev } from "$app/environment";

import type { Icons } from "$types/Icons";

import type { PageServerLoad } from "./$types";

export interface SiteLink {
  href: string;
  text: string;
  completed: boolean;
  icon: Icons;
}
export interface PageData {
  links: SiteLink[];
}

export const load: PageServerLoad = async () => {
  // NOTE: order of array is important
  const links: SiteLink[] = [
    // { href: "/", text: "Home", completed: true, icon: "mongkong" },
    // { href: "/about", text: "About", completed: false, icon: "question-mark" },
    {
      href: "/nutrition",
      text: "Nutrition",
      completed: true,
      icon: "bowl",
    },
    {
      href: "/weight-management",
      text: "Weight Management",
      completed: false,
      icon: "scale",
    },
    {
      href: "/training-plans",
      text: "Training Plans",
      completed: false,
      icon: "notebook",
    },
    {
      href: "/training-day",
      text: "A Training Day",
      completed: false,
      icon: "checklist",
    },
    {
      href: "/fight-week",
      text: "Fight Week",
      completed: false,
      icon: "sleep",
    },
    {
      href: "/fight-day",
      text: "Fight Day",
      completed: false,
      icon: "calendar-heart",
    },
    {
      href: "/motivations",
      text: "Motivations",
      completed: false,
      icon: "motivation",
    },
    {
      href: "/who-to-follow",
      text: "Who to Follow",
      completed: false,
      icon: "people",
    },
  ];

  if (dev) {
    links.push({
      href: "/my-stuff",
      text: "My Stuff",
      completed: false,
      icon: "me",
    });
  }

  return {
    links,
  } satisfies PageData;
};
