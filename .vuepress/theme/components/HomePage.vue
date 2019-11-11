<template>
<div class="p-home">
  <div class="o-content-container">
    <section class="p-home__entries">
      <EntryPreview class="p-home__entry" v-for="entry in entries" :key="entry.key" :entry="entry" />
    </section>
  </div>
</div>
</template>

<script>
import EntryPreview from './EntryPreview'

export default {
  components: {
    EntryPreview,
  },

  computed: {
    entries() {
      return this.$site.pages
        .filter(page => page.path !== '/')
        .filter(page => page.frontmatter.is_published)
        .sort((a, b) => new Date(b.frontmatter.date) - new Date(a.frontmatter.date))
    }
  }
}
</script>

<style lang="postcss">
.p-home {
  @apply mt-12;
}

.p-home__entry + .p-home__entry {
  @apply mt-12;
}
</style>