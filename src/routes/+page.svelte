<script lang="ts">
  import { format } from 'date-fns'
  import { page } from '$app/stores'
  import { goto } from '$app/navigation'
  import type { Topic } from '$lib/types/topic'
  import { seo } from './constants'
  import TopicList from './topic-list.svelte'
  import type { PageData } from './$types'

  export let data: PageData
  export let selectedTopic: Topic | undefined = undefined

  // handle redirect from old hash routing
  $: hash = $page.url.hash
  $: if (hash) {
    goto(`/${hash.slice(1)}`, { replaceState: true, noScroll: true }).catch(
      console.error,
    )
  }
</script>

<svelte:head>
  {#if selectedTopic}
    {@const {
      date,
      slug,
      metadata,
      metadata: { draft, labels },
    } = selectedTopic}
    {@const title = [seo.title, metadata.title].join(' - ')}
    {@const description = `${draft ? 'Drafted' : 'Published'} ${format(
      new Date(date),
      'PP',
    )} [${labels?.join(', ') || slug}]`}
    <title>{title}</title>
    <meta name="description" content={description} />
    <meta
      property="og:url"
      content={new URL(selectedTopic.slug, seo.url).href}
    />
    <meta property="og:title" content={title} />
    <meta property="og:description" content={description} />
    <meta name="twitter:title" content={title} />
    <meta name="twitter:description" content={description} />
  {:else}
    <title>{seo.title}</title>
    <meta name="description" content={seo.description} />
    <meta property="og:url" content={seo.url} />
    <meta property="og:title" content={seo.title} />
    <meta property="og:description" content={seo.description} />
    <meta name="twitter:title" content={seo.title} />
    <meta name="twitter:description" content={seo.description} />
  {/if}

  <meta property="og:site_name" content={seo.title} />
</svelte:head>

<TopicList topics={data.topics} slug={selectedTopic?.slug} />
