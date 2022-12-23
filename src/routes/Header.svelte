<script lang="ts">
  import { Header, HeaderNav, HeaderNavItem } from "agnostic-svelte";

  import { page } from "$app/stores";
  import { Logo } from "$lib";

  $: isHome = $page.url.pathname === "/";
  $: isAbout = $page.url.pathname === "/about";
</script>

<Header>
  <div slot="logoleft"><Logo /></div>

  <HeaderNav>
    <HeaderNavItem>
      <a href="/" class:active={isHome}>Home</a>
    </HeaderNavItem>
    <HeaderNavItem>
      <a href="/about" class:active={isAbout}>About</a>
    </HeaderNavItem>
  </HeaderNav>
</Header>

<style>
  .active {
    color: var(--color-link-text-active);
  }
</style>
