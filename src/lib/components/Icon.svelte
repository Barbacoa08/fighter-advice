<script lang="ts">
  import type { Icons } from "$types/Icons";
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

  export let icon: Icons | string | undefined;
</script>

{#if icon === "bowl"}
  <Bowl class="svg-position" />
{:else if icon === "calendar-heart"}
  <CalendarHeart class="svg-position" />
{:else if icon === "checklist"}
  <Checklist class="svg-position" />
{:else if icon === "me"}
  <Me class="svg-position" />
{:else if icon === "motivation"}
  <Motivation class="svg-position" />
{:else if icon === "notebook"}
  <Notebook class="svg-position" />
{:else if icon === "people"}
  <People class="svg-position" />
{:else if icon === "scale"}
  <Scale class="svg-position" />
{:else if icon === "sleep"}
  <Sleep class="svg-position" />
{:else}
  <p>Unknown Icon: <code>{icon}</code></p>
{/if}
