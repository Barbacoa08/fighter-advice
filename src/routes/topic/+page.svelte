<script lang="ts">
  import { Icon, TextGradient } from "$lib/components";
  import { formatDate } from "$lib/utils";

  import type { PageData } from "../+layout.server";

  export let data: PageData;

  $: ({ topics } = data);
</script>

<svelte:head>
  <title>FA: Topics</title>
  <meta name="description" content="barbajoe's Fighter Advice Topics list" />
</svelte:head>

<h1>All <TextGradient>Topics</TextGradient></h1>

<p>
  An evergrowning list of insights. Topics are updated whenever I find new
  information that extends or changes my understanding of a topic.
</p>

<ul>
  {#each topics as { id, slug, title, status, icon, updatedAt } (id)}
    <li class:disabled={status === "draft"}>
      <Icon icon={icon?.value} />

      <a
        href={status === "draft" ? "" : `/topic/${slug}`}
        aria-disabled={status === "draft"}
      >
        <span>{title} {status === "draft" ? "(In Progress)" : ""}</span>
      </a>

      <span>
        Last Updated: {formatDate(updatedAt)}
      </span>
    </li>
  {/each}
</ul>

<style>
  ul {
    list-style: none;
    padding: 0;
  }

  ul li {
    display: flex;
    align-items: center;
  }

  ul li :first-child {
    margin: 0.5rem;
  }
</style>
