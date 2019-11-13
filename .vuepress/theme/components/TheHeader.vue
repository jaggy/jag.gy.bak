<template>
<header class="c-header">
  <div class="o-content-container--full [ flex items-center ]">
    <RouterLink to="/" class="[ text-black ]">
      <Component :is="tag" class="[ font-heading text-lg font-bold tracking-tight leading-none ]">
        Jaggy Gauran
        <small class="[ block text-2xs font-normal mt-2 ]">
          I build stuff
        </small>
      </Component>
    </RouterLink>

    <nav class="[ ml-auto text-xs ]">
      <ul class="[ flex -mx-2 ]">
        <li class="[ mx-2 ]">
          <a href="https://twitter.com/jaggygauran" title="Twitter">Twitter</a>
        </li>
        <li class="[ mx-2 ]">
          <a href="https://github.com/jaggy" title="Github">Github</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script>
export default {
  computed: {
    tag() {
      return this.$page.path === '/' ? 'p' : 'h1'
    }
  }
}
</script>

<style lang="postcss">
.c-header {
  @apply py-8;
}
</style>