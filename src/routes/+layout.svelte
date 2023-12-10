<script lang="ts">
  import '$lib/styles/app.css'
</script>

<div class="flex flex-col gap-2 min-h-screen">
  <header></header>

  <main class="flex-1 flex px-2">
    <slot />
  </main>

  <footer></footer>
</div>
