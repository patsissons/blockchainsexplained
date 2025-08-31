<script lang="ts">
  import hljs from 'highlight.js'
  import DOMPurify from 'isomorphic-dompurify'
  import { marked } from 'marked'
  import type { Topic } from '$lib/types/topic'

  import 'github-markdown-css/github-markdown-light.css'
  import 'highlight.js/styles/github-dark.css'

  export let topic: Topic

  $: labels = topic.metadata.labels || []
  $: markdownHtml = DOMPurify.sanitize(
    marked.parse(topic.markdown, {
      highlight(code, lang) {
        const language = hljs.getLanguage(lang) ? lang : 'plaintext'
        const { value } = hljs.highlight(code, { language })

        return value
      },
      langPrefix: 'language-',
    }),
  )
</script>

<div class="flex flex-col gap-5">
  <div class="flex items-start justify-between gap-2">
    <div>
      {#if labels.length > 0}
        <ul class="flex flex-wrap items-center gap-1">
          {#each labels as label}
            <li
              class="inline-block px-2 py-1 text-xs whitespace-nowrap font-mono font-medium text-white bg-cyan-700 rounded"
            >
              {label}
            </li>
          {/each}
        </ul>
      {/if}
    </div>
  </div>
  <div class="markdown-body overflow-x-auto">
    <!-- eslint-disable-next-line svelte/no-at-html-tags -->
    {@html markdownHtml}
  </div>
</div>

<style lang="postcss">
  .markdown-body {
    @apply bg-neutral-100;
  }

  :global(.topic-draft) .markdown-body {
    @apply bg-transparent;
  }

  .markdown-body :global(pre) {
    @apply bg-neutral-900 text-neutral-200;
  }
</style>
