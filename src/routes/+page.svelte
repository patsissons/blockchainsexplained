<script lang="ts">
  import { format } from 'date-fns'
  import { page } from '$app/stores'
  import TopicList from './topic-list.svelte'
  import type { PageData } from './$types'

  export let data: PageData

  $: selectedTopic = data.topics.find(
    ({ slug }) => slug === $page.url.hash.slice(1),
  )
</script>

<svelte:head>
  {#if selectedTopic}
    {@const {
      date,
      slug,
      metadata: { title, draft, labels },
    } = selectedTopic}
    <title>Blockchains Explained - {title}</title>
    <meta
      name="description"
      content={`${draft ? 'Drafted' : 'Published'} ${format(
        new Date(date),
        'PP',
      )} [${labels?.join(', ') || slug}]`}
    />
  {:else}
    <meta
      name="description"
      content="A simple FAQ site aimed to inform without bias on all aspects of blockchains."
    />
  {/if}
</svelte:head>

<div class="flex-1 container mx-auto flex flex-col items-center justify-center">
  <TopicList topics={data.topics} />
</div>
