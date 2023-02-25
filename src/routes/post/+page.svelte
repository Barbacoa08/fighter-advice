<script lang="ts">
  import { Icon, TextGradient } from "$lib/components";
  import type { PageData } from "../+layout.server";

  export let data: PageData;

  $: ({ posts } = data);
</script>

<svelte:head>
  <title>FA: Posts</title>
  <meta name="description" content="barbajoe's Fighter Advice Posts list" />
</svelte:head>

<h1>All <Icon icon="word-bubble" /> <TextGradient>Posts</TextGradient></h1>

<p>
  Thoughts and musings. Ideas and opinions. Personal experiences and humble
  opinions.
</p>

<ul>
  {#each posts as { id, slug, title, status, author, publishedDate, updatedAt } (id)}
    <li class:disabled={status === "draft"}>
      <a
        href={status === "draft" ? "" : `/post/${slug}`}
        aria-disabled={status === "draft"}
      >
        <span>
          {title}
          {status === "draft" ? "(In Progress)" : `by "${author?.name}"`}
        </span>
      </a>

      <span>
        Posted on: {Intl.DateTimeFormat("ban", {
          dateStyle: "medium",
        }).format(new Date(publishedDate || updatedAt))}
      </span>
    </li>
  {/each}
</ul>
