<template>
<div class="p-home">
  <section class="p-home__entries">
    <EntryPreview class="p-home__entry" v-for="entry in entries" :key="entry.key" :entry="entry" />
  </section>
</div>
</template>

<script>
import moment from 'moment'
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
        .sort((a, b) => moment(b.frontmatter.date).format('YYYYMMDD') - moment(a.frontmatter.date).format('YYYYMMDD'))
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