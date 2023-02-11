<script lang="ts">
  import { Icon, TextGradient } from "$lib/components";
  import type { PageData } from "./+page.server";

  export let data: PageData;

  $: ({ topics } = data);
</script>

<svelte:head>
  <title>FA: Topics</title>
  <meta name="description" content="barbajoe's Fighter Advice Topics list" />
</svelte:head>

<h1>All <TextGradient>Topics</TextGradient></h1>

<ul>
  {#each topics as { id, slug, title, status, icon } (id)}
    <li class:disabled={status === "draft"}>
      <Icon icon={icon?.value} />

      <a
        href={status === "draft" ? "" : `/topic/${slug}`}
        aria-disabled={status === "draft"}
      >
        <span>{title} {status === "draft" ? "(In Progress)" : ""}</span>
      </a>
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
