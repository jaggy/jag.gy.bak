<template>
<header class="c-header">
  <div class="o-content-container--full [ flex items-center ]">
    <RouterLink to="/" class="[ text-black ]">
      <h1 class="[ font-heading text-lg ]">
        Jaggy Gauran
        <small class="[ block text-2xs font-normal mt-2 ]">
          I build stuff
        </small>
      </h1>
    </RouterLink>

    <nav class="[ ml-auto text-xs ]">
      <ul class="[ flex -mx-2 ]">
        <li class="[ mx-2 ]">
          <a href="https://twitter.com/jaggygauran">Twitter</a>
        </li>
        <li class="[ mx-2 ]">
          <a href="https://github.com/jaggy">Github</a>
        </li>
      </ul>
    </nav>
  </div>
</header>
</template>

<script>
export default {}
</script>

<style lang="postcss">
.c-header {
  @apply py-8;
}
</style>