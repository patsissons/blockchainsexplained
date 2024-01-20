<script lang="ts">
  import TopicList from '../+page.svelte'
  import type { PageData } from './$types'

  export let data: PageData
</script>

<TopicList {data} selectedTopic={data.selectedTopic} />
