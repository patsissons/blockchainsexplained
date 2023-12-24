<script lang="ts">
  import '$lib/styles/app.css'
  import Link from './link.svelte'
</script>

<div class="flex flex-col gap-2 min-h-screen">
  <header></header>

  <main class="flex-1 flex px-2">
    <slot />
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
