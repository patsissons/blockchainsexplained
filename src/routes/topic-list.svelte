<script lang="ts">
  import { createAccordion, melt } from '@melt-ui/svelte'
  import { format } from 'date-fns'
  import { onMount } from 'svelte'
  import { slide } from 'svelte/transition'
  import { pushState } from '$app/navigation'
  import type { Topic } from '$lib/types/topic'
  import Link from './link.svelte'
  import TopicItem from './topic-item.svelte'

  export let topics: Topic[]
  export let slug: string | undefined = undefined

  const {
    elements: { content, item, trigger, root },
    helpers: { isSelected },
  } = createAccordion({
    defaultValue: slug,
  })

  // due to the way the markdown is rendered, we need to scroll multiple times
  // to keep the topic header in view. we could only scroll once at the end but
  // then it would feel very jarred and delayed, so instead we scroll 3 times.
  //
  // 1. the first scroll is immediate and handles the click event, basically it
  //    just scrolls the topic header into view if it can be done synchronously.
  // 2. the second scroll is delayed by 100ms and handles the majority of the
  //    content scrolling, but it is likely not all content has finished
  //    rendering.
  // 3. the third scroll is delayed by 100ms + 300ms and should be late enough
  //    that all content has finished rendering.
  async function scrollIntoView(element: Element, delayUnit = 100) {
    // initial scroll
    scroll()

    // secondary scroll
    await new Promise((resolve) => setTimeout(resolve, delayUnit)).then(scroll)

    // final scroll
    await new Promise((resolve) => setTimeout(resolve, delayUnit * 3)).then(
      scroll,
    )

    function scroll() {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      })
    }
  }

  onMount(async () => {
    const element = document.querySelector('.topic.selected')
    if (!element) return

    await scrollIntoView(element)
  })
</script>

<div class="rounded-xl bg-white shadow-lg w-full" {...$root}>
  {#each topics as topic, i}
    {@const isDraft = topic.metadata.draft}
    {@const selected = $isSelected(topic.slug)}
    <div
      class="overflow-hidden transition-colors first:rounded-t-xl last:rounded-b-xl"
      use:melt={$item(topic.slug)}
    >
      <h2 class="topic flex" class:selected>
        <a
          use:melt={$trigger(topic.slug)}
          class="flex-1 flex items-center justify-between gap-2 p-5 font-medium leading-none transition-colors hover:bg-neutral-100 outline-none focus:text-cyan-700 border-t-neutral-300"
          class:border-t={i > 0}
          class:topic-draft={isDraft}
          href="/{topic.slug}"
          on:click|preventDefault={(e) => {
            pushState(selected ? `/${topic.slug}` : '/', {})

            scrollIntoView(e.currentTarget).catch(console.error)
          }}
        >
          <span class="text-left" class:text-neutral-300={isDraft}>
            {topic.metadata.title}
          </span>
          <span
            class="text-right whitespace-nowrap"
            class:text-neutral-500={isDraft}
          >
            {format(new Date(topic.date), 'PP')}
          </span>
        </a>
      </h2>
      {#if selected}
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

<style lang="postcss">
  .topic-draft {
    @apply bg-gradient-to-r from-neutral-500 to-neutral-950/20;
  }
</style>
