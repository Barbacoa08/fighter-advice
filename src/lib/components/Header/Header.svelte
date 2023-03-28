<script lang="ts">
  import { dev } from "$app/environment";
  import { page } from "$app/stores";
  import { Link, Logo } from "$lib/components";
  import Search from "./Search.svelte";

  $: isHome = $page.url.pathname === "/";

  $: isAbout = $page.url.pathname.startsWith("/about");
  $: isPosts = $page.url.pathname.startsWith("/post");
  $: isTopics = $page.url.pathname.startsWith("/topic");

  $: isMyStuff = $page.url.pathname === "/my-stuff";
</script>

<header>
  <a class="skip-link" href="#main-content">Skip to main content</a>

  <Link aria-label="Homepage">
    <Logo />
  </Link>

  <ul>
    <li class:active={isHome}>
      <a href="/">Home</a>
    </li>

    <li class:active={isTopics}>
      <a href="/topic">Topics</a>
    </li>

    <li class:active={isPosts}>
      <a href="/post">Posts</a>
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

    <li>
      <Search />
    </li>
  </ul>
</header>

<style>
  :root {
    --header-background-color: #ffffff;
    --color-link-text-active: #0000ee;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --header-background-color: #1a202c;
      --color-link-text-active: #87e7ee;
    }
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    background-color: var(--header-background-color);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(255 255 255 / 6%);
    padding: 0.5rem 1.5rem;
  }

  header ul {
    display: flex;
    align-items: center;
    list-style: none;
    margin: 0;
  }

  header ul li {
    padding: 0 0.5rem;
    border-bottom: 2px solid transparent;
    color: var(--color-link-text-active);
  }
  header ul li.active {
    padding: 0.5rem;
    border-bottom: 2px solid;
    color: var(--color-link-text-active);
  }

  header ul li a,
  header ul li.active a {
    text-decoration-line: none;
  }
  header ul li.active a {
    color: var(--color-link-text-active);
  }

  .skip-link {
    position: absolute;
    top: -1000px;
    left: -1000px;
    width: 1px;
    height: 1px;
    overflow: hidden;

    background-color: var(--header-background-color);
    box-shadow: 0 0 0.5rem rgba(0, 0, 0, 0.5);
    border-bottom: 1px solid rgba(255 255 255 / 6%);
    padding: 0.5rem 1.5rem;
    opacity: 0.9;
  }
  .skip-link:focus {
    top: auto;
    left: auto;
    width: auto;
    height: auto;
    overflow: visible;
  }
</style>
