<script lang="ts">
  import { createAccordion, melt } from '@melt-ui/svelte'
  import { format } from 'date-fns'
  import { slide } from 'svelte/transition'
  import { page } from '$app/stores'
  import type { Topic } from '$lib/types/topic'
  import Link from './link.svelte'
  import TopicItem from './topic-item.svelte'

  export let topics: Topic[]

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({
    defaultValue: $page.url.hash.slice(1),
  })
</script>

<div class="rounded-xl bg-white shadow-lg w-full" {...$root}>
  {#each topics as topic, i}
    <div
      class="overflow-hidden transition-colors first:rounded-t-xl last:rounded-b-xl"
      use:melt={$item(topic.slug)}
    >
      <h2 class="flex">
        <button
          use:melt={$trigger(topic.slug)}
          class="flex-1 flex items-center justify-between gap-2 p-5 font-medium leading-none transition-colors hover:bg-neutral-100 outline-none focus:text-cyan-700 border-t-neutral-300"
          class:border-t={i > 0}
        >
          <span class="text-left">
            {topic.metadata.title}
          </span>
          <span class="text-right">
            {format(new Date(topic.date), 'PP')}
          </span>
        </button>
      </h2>
      {#if $isSelected(topic.slug)}
        <div
          class="overflow-hidden bg-neutral-100 text-sm text-neutral-600 shadow-[inset_0px_1px_0px_theme('colors.neutral.300')]"
          use:melt={$content(topic.slug)}
          transition:slide
        >
          <div class="bg-neutral-300/50 px-5 py-1 border-y border-neutral-300">
            <p class="text-center">
              Is this topic incorrect or incomplete? Please <Link
                href="https://github.com/patsissons/blockchainsexplained/issues/new?assignees=&labels=improvement&projects=&template=topic-improvement.md&title=Improvement%3A+{topic.slug}"
                external>open an issue</Link
              > with your suggestions.
            </p>
          </div>
          <div class="px-5 py-4">
            <TopicItem {topic} />
          </div>
        </div>
      {/if}
    </div>
  {/each}
</div>
