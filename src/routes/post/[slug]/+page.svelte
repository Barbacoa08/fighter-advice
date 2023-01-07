<script lang="ts">
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({ post } = data);
</script>

<h3>{post.title}</h3>

<p>{@html post.content}</p>
