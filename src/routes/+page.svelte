<script lang="ts">
  import SetUsername from "$lib/SetUsername.svelte";
  import type { PageData } from "./+page.server";

  export let data: PageData;

  $: ({
    user: { username },
  } = data);
</script>

<svelte:head>
  <title>Fighter Advice</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h2>
  Welcome to BarbaJoe's Fighter Advice:
  <span class="username">{username}</span>
</h2>

<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h3>Routing test</h3>

<p>Go to the <a href="/about">About page</a></p>

<SetUsername {username} />

<style>
  span.username {
    color: red;
  }
</style>
