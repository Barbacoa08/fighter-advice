<script lang="ts">
  import { page } from "$app/stores";
  import { Link, Logo } from "$lib/components";

  $: isHome = $page.url.pathname === "/";
  $: isAbout = $page.url.pathname === "/about";
</script>

<header>
  <Link aria-label="Homepage">
    <Logo />
  </Link>

  <ul>
    <li class:active={isHome}>
      <a href="/">Home</a>
    </li>

    <li class:active={isAbout}>
      <a href="/about">About</a>
    </li>
  </ul>
</header>

<style>
  :root {
    --header-background-color: white;
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
    list-style: none;
    margin: 0;
  }

  header ul li {
    padding: 0.5rem;
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
</style>
