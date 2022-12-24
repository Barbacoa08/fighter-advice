<script lang="ts">
  import TextGradient from "$lib/components/TextGradient.svelte";

  import type { PageData } from "./+page.server";

  export let data: PageData;

  $: ({ links } = data);
</script>

<svelte:head>
  <title>Fighter Advice</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h1>Welcome to barbajoe's <TextGradient>Fighter Advice</TextGradient></h1>

<p>
  Below are my recommendations for current fighters. These are purely my
  oppinion and based on my own experience. Helpfulness to others will vary.
</p>

<ul>
  {#each links as { href, text } (href)}
    <li><a {href}>{text}</a></li>
  {/each}
</ul>

<style>
  :root {
    --list-background-color: rgb(34, 34, 34);
    --list-link-color: rgb(210, 210, 210);
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --list-background-color: rgb(210, 210, 210);
      --list-link-color: rgb(34, 34, 34);
    }
  }

  ul {
    list-style-type: none;
    margin-top: 5rem;
    padding: 0;

    display: flex;
    flex-direction: column;
  }

  li {
    border-radius: 1rem;
    margin-bottom: 1rem;
    background-color: var(--list-background-color);
    transition: transform 0.15s cubic-bezier(0, 0.2, 0.5, 3) 0s;
  }
  li:hover,
  li:focus-within {
    transform: scale(1.02);
  }

  li a {
    display: flex;
    justify-content: center;
    align-items: center;

    height: 3rem;
    color: var(--list-link-color);

    transition: box-shadow 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
      border-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
      transform 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s,
      background-color 0.25s cubic-bezier(0.08, 0.59, 0.29, 0.99) 0s;
  }
</style>
