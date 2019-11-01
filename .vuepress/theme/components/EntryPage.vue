<template>
<article class="p-entry">
  <header class="p-entry__header">
    <div class="o-content-container o-wrap">
      <h1 class="p-entry__title">{{ $page.title }}</h1>
    </div>
  </header>

  <div class="o-content-container o-wrap">
    <Content  class="p-entry__content" />
  </div>
</article>
</template>

<script>
export default {
}
</script>

<style lang="postcss">
.p-entry__title {
  @apply ms-3xl;
}
</style>
