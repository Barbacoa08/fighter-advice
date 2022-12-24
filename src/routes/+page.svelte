<script lang="ts">
  import { dev } from "$app/environment";

  import { TextGradient } from "$lib/components";
  import {
    Bowl,
    CalendarHeart,
    Checklist,
    Me,
    Motivation,
    Notebook,
    People,
    Scale,
    Sleep,
  } from "$lib/icons";
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

<ul class="homepage-links">
  <li>
    <a href="/nutrition">
      <Bowl class="svg-position" /> Nutrition (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/weight-management">
      <Scale class="svg-position" /> Weight Management (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/training-plans">
      <Notebook class="svg-position" /> Training Plans (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/training-day">
      <Checklist class="svg-position" /> A Training Day (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/fight-week">
      <Sleep class="svg-position" /> Fight Week (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/fight-day">
      <CalendarHeart class="svg-position" /> Fight Day (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/motivations">
      <Motivation class="svg-position" /> Motivation (Coming Soon)
    </a>
  </li>

  <li>
    <a href="/who-to-follow">
      <People class="svg-position" /> Who to Follow (Coming Soon)
    </a>
  </li>

  {#if dev}
    <li>
      <a href="/my-stuff">
        <Me class="svg-position" /> My Stuff (In Development)
      </a>
    </li>
  {/if}
</ul>

<style>
  :root {
    --list-background-color: rgb(34, 34, 34);
    --list-link-color: white;
  }
  @media (prefers-color-scheme: dark) {
    :root {
      --list-background-color: rgb(210, 210, 210);
      --list-link-color: rgb(34, 34, 34);
    }
  }

  ul.homepage-links {
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
    position: relative;
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

  /*
  HACK: use of `:global()` is far from ideal, but it works and is the best workaround from the docs:
  https://github.com/sveltejs/svelte/issues/2870#issuecomment-498360853
  */
  :global(ul.homepage-links li a .svg-position) {
    position: absolute;
    left: 1.5rem;
    color: var(--list-link-color);
  }
</style>
