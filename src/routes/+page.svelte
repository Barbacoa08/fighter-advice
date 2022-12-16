<script lang="ts">
  import Test from "$lib/Test.svelte";
  import type { PageData } from "./+page.server";

  export let data: PageData;

  $: ({ user } = data);
</script>

<svelte:head>
  <title>Fighter Advice</title>
  <meta name="description" content="Svelte demo app" />
</svelte:head>

<h2>
  Welcome to BarbaJoe's Fighter Advice:
  <span class="username">{user.username}</span>
</h2>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h3>Routing test</h3>

<p>Go to the <a href="/about">About page</a></p>

<Test />

<style>
  span.username {
    color: red;
  }
</style>
