import { dev } from "$app/environment";

import type { Icons } from "$types/Icons";
import type { Post } from "$types/payload-types";

import type { PageServerLoad } from "./$types";

export interface SiteLink {
  href: string;
  text: string;
  completed: boolean;
  icon: Icons;
}
export interface PageData {
  links: SiteLink[];
  posts?: Post[];
}

export const load: PageServerLoad = async ({ fetch }) => {
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
      completed: true,
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

  const res = await fetch("http://localhost:3000/api/posts");
  const data: { docs: Post[] } = await res.json();
  const posts = data.docs;

  return {
    links,
    posts,
  } satisfies PageData;
};
