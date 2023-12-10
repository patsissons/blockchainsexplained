<script lang="ts">
  import TopicList from './topic-list.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<div class="flex-1 container mx-auto flex flex-col items-center justify-center">
  <TopicList topics={data.topics} />
</div>
