<template>
  <article class="c-entry-preview">
    <header class="c-entry-preview__header">
      <RouterLink :to="entry.path">
        <h2 class="c-entry-preview__title [ mb-4 ]">{{ entry.frontmatter.title }}</h2>
      </RouterLink>
    </header>

    <div class="c-entry-preview__content o-rich-text" v-html="entry.excerpt" />

    <RouterLink :to="entry.path" class="[ font-bold ]">
      {{ callToAction }}
    </RouterLink>
  </article>
</template>

<script>
export default {
  props: {
    entry: Object,
  },

  computed: {
    callToAction () {
      return this.entry.frontmatter['call-to-action'] || 'Read more'
    }
  }
}
</script>

<style lang="postcss">
</style>