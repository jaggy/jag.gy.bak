<template>
  <article class="c-entry-preview">
    <RouterLink :to="entry.path">
      <h3 class="c-entry-preview__title">{{ entry.frontmatter.title }}</h3>
    </RouterLink>

    <div class="c-entry-preview__content o-rich-text" v-html="entry.excerpt" />
  </article>
</template>

<script>
export default {
  props: {
    entry: Object,
  },
}
</script>

<style lang="postcss">
.c-entry-preview__title {
  @apply ms-2xl font-bold;
}
</style>