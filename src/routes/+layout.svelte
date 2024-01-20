<script lang="ts">
  import '$lib/styles/app.css'
  import Link from './link.svelte'
</script>

<div class="flex flex-col gap-2 min-h-screen">
  <header class="bg-neutral-300 text-center px-2 py-0.5">
    <p>
      Have an idea for a topic? Please <Link
        href="https://github.com/patsissons/blockchainsexplained/issues/new?assignees=&labels=new-topic&projects=&template=new-topic-suggestion.md&title=Topic%3A+topic_title"
        external>open an issue</Link
      > with your suggestion.
    </p>
  </header>

  <main class="flex-1 flex px-2">
    <div
      class="flex-1 container mx-auto flex flex-col items-center justify-center"
    >
      <slot />
    </div>
  </main>

  <footer class="bg-neutral-300 text-center px-2 py-0.5">
    <p>
      This is an <Link
        href="https://github.com/patsissons/blockchainsexplained"
        external>open source project on GitHub</Link
      > aimed to inform without bias on all aspects of blockchains.
    </p>
  </footer>
</div>
