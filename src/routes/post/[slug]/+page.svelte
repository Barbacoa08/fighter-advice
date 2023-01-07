<script lang="ts">
  import { Serialize } from "$lib/cms-components";
  import type { PageData } from "./$types";

  export let data: PageData;
  $: ({
    post: { content = [], title },
  } = data);
</script>

<h3>{title}</h3>

<Serialize {content} />
