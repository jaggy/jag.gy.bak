<template>
<div class="p-home">
  <div class="o-content-container o-wrap">
    <section class="p-home__entries">
      <EntryPreview v-for="entry in entries" :key="entry.key" :entry="entry" />
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
      return this.$site.pages.filter(page => page.path !== '/')
    }
  }
}
</script>

<style lang="postcss">
</style>