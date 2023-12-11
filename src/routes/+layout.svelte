<script lang="ts">
  import '$lib/styles/app.css'
</script>

<div class="flex flex-col gap-2 min-h-screen">
  <header></header>

  <main class="flex-1 flex px-2">
    <slot />
  </main>

  <footer class="bg-neutral-300 text-center px-2 py-0.5">
    <p>
      This is an
      <a
        class="mx-0.5 text-cyan-700 hover:text-cyan-600 focus:ring ring-cyan-700/25 outline-none rounded font-medium"
        href="https://github.com/patsissons/blockchainsexplained"
        rel="noopener noreferrer"
        target="_blank">open source project on GitHub</a
      >
      aimed to inform without bias on all aspects of blockchains.
    </p>
  </footer>
</div>
