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
    {@const isDraft = topic.metadata.draft}
    <div
      class="overflow-hidden transition-colors first:rounded-t-xl last:rounded-b-xl"
      use:melt={$item(topic.slug)}
    >
      <h2 class="flex">
        <button
          use:melt={$trigger(topic.slug)}
          class="flex-1 flex items-center justify-between gap-2 p-5 font-medium leading-none transition-colors hover:bg-neutral-100 outline-none focus:text-cyan-700 border-t-neutral-300"
          class:border-t={i > 0}
          class:topic-draft={isDraft}
        >
          <span
            class="text-left"
            class:bg-white={isDraft}
            class:bg-opacity-50={isDraft}
          >
            {topic.metadata.title}
          </span>
          <span
            class="text-right"
            class:bg-white={isDraft}
            class:bg-opacity-50={isDraft}
          >
            {format(new Date(topic.date), 'PP')}
          </span>
        </button>
      </h2>
      {#if $isSelected(topic.slug)}
        <div
          class="overflow-hidden text-sm text-neutral-600 shadow-[inset_0px_1px_0px_theme('colors.neutral.300')]"
          class:bg-neutral-100={!isDraft}
          class:topic-draft={isDraft}
          use:melt={$content(topic.slug)}
          transition:slide
        >
          <div class="bg-neutral-300/50 px-5 py-1 border-y border-neutral-300">
            <p class="text-center">
              {#if isDraft}
                This is a <strong>draft</strong> topic and is not yet complete.
              {:else}
                Is this topic incorrect or incomplete?
              {/if}
              Please <Link
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

<style>
  .topic-draft {
    --pattern-color: #9ca3af40;
    --pattern-bg-color: transparent;
    --pattern-size: 2rem;

    background-color: var(--pattern-bg-color);
    background-image: repeating-linear-gradient(
      /* 71 makes things kind of line up nicely */ 71deg,
      var(--pattern-color),
      var(--pattern-color) calc(var(--pattern-size) * 0.2),
      var(--pattern-bg-color) calc(var(--pattern-size) * 0.2),
      var(--pattern-bg-color) var(--pattern-size)
    );
  }
</style>
