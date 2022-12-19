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

<SetUsername {username} />

<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>

<h3>Routing test</h3>

<ul>
  <li>Go to the <a href="/about">About page</a></li>
  <li>Go "allowed" <a href="/user?allowed=true">User page</a></li>
  <li>
    Be redirect to homepage after attempting to go to
    <a href="/user">User page</a> when not "allowed"
  </li>
  <li>Go to the <a href="/not-found">Not Found page</a></li>
</ul>

<style>
  span.username {
    color: red;
  }
</style>
