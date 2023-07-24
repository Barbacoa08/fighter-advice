<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/stores";
  import { Link, Logo } from "$lib/components";
  import SiteSearch from "./SiteSearch.svelte";

  $: isHome = $page.url.pathname === "/";

  $: isAbout = $page.url.pathname.startsWith("/about");
  $: isPosts = $page.url.pathname.startsWith("/post");
  $: isProgram = $page.url.pathname.startsWith("/program");
  $: isTopics = $page.url.pathname.startsWith("/topic");

  $: isMyStuff = $page.url.pathname === "/my-stuff";
</script>

<Link aria-label="Homepage">
  <Logo />
</Link>

<ul class="site-header-links">
  <li class:active={isHome}>
    <a href="/">Home</a>
  </li>

  <li class:active={isTopics}>
    <a href="/topic">Topics</a>
  </li>

  <li class:active={isPosts}>
    <a href="/post">Posts</a>
  </li>

  <li class:active={isProgram}>
    <a href="/program">Programs</a>
  </li>

  {#if dev}
    <li class:active={isMyStuff}>
      <!-- TODO: <a href="/my-stuff"><Icon icon="me" /> My Stuff</a> -->
      <a href="/my-stuff">My Stuff</a>
    </li>
  {/if}

  <li class:active={isAbout}>
    <a href="/about">About</a>
  </li>

  <li class="no-hover">
    <SiteSearch />
  </li>
</ul>

<style>
  ul li.no-hover:hover,
  ul li.no-hover:focus {
    color: var(--color-link-text-active);
    border-bottom: 2px solid transparent;
  }
</style>
