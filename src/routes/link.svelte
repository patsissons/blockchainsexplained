<script lang="ts">
  export let href: string
  export let external = false
</script>

<a
  class="px-0.5 rounded font-medium text-cyan-700 hover:text-cyan-600 focus:ring ring-cyan-700/25 outline-none"
  {href}
  rel={external ? 'noopener noreferrer' : undefined}
  target={external ? '_blank' : undefined}><slot /></a
>
