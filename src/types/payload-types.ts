/**
 * This file was automatically generated by Payload CMS.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

import type { PostContent } from "./PayloadPostTypes";

export interface Config {
  collections: {
    icon: Icon;
    posts: Post;
    tags: Tag;
    topics: Topic;
    users: User;
    program: Program;
  };
  // eslint-disable-next-line @typescript-eslint/ban-types
  globals: {};
}
export interface Icon {
  id: string;
  name?: string;
  value?: string;
}
export interface Post {
  id: string;
  title?: string;
  slug?: string;
  author?: User;
  publishedDate?: string;
  tags?: Tag[];
  content?: PostContent[];
  accordions: {
    accordionheader: string;
    accordionItems: {
      accordionitemheader?: string;
      accordionitemcontent: PostContent[];
      id?: string;
    }[];
    id?: string;
  }[];
  status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
export interface User {
  id: string;
  name?: string;
  roles?: ("admin" | "editor")[];
  email?: string;
  resetPasswordToken?: string;
  resetPasswordExpiration?: string;
  loginAttempts?: number;
  lockUntil?: string;
  createdAt: string;
  updatedAt: string;
  password?: string;
}
export interface Tag {
  id: string;
  name?: string;
}
export interface Topic {
  id: string;
  title?: string;
  slug?: string;
  icon?: Icon;
  tags?: Tag[];
  content?: PostContent[];
  accordions: {
    accordionheader: string;
    accordionItems: {
      accordionitemheader?: string;
      accordionitemcontent: PostContent[];
      id?: string;
    }[];
    id?: string;
  }[];
  status?: "draft" | "published";
  createdAt: string;
  updatedAt: string;
  publishedDate?: string;
}
export interface Program {
  id: string;
  slug?: string;
  title: string;
  passcode: string;
  content?: PostContent[];
  accordions?: {
    accordionheader: string;
    accordionItems: {
      accordionitemheader?: string;
      accordionitemcontent: PostContent[];
      id?: string;
    }[];
    id?: string;
  }[];
  status: "draft" | "published";
  createdAt: string;
  updatedAt: string;
}
