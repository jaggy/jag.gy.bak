<template>
  <article class="c-entry-preview">
    <header class="c-entry-preview__header">
      <RouterLink :to="entry.path">
        <h2 class="c-entry-preview__title">{{ entry.frontmatter.title }}</h2>
      </RouterLink>

      <p class="[ text-gray text-sm mt-2 ]">Published {{ date.format('MMMM d, YYYY') }}</p>
    </header>

    <div class="c-entry-preview__content o-rich-text [ mt-4 ]" v-html="entry.excerpt" />

    <div class="[ flex ]">
      <RouterLink :to="entry.path" class="[ font-bold mt-6 ml-auto ]">
        {{ callToAction }}
      </RouterLink>
    </div>
  </article>
</template>

<script>
import moment from 'moment'

export default {
  props: {
    entry: Object,
  },

  computed: {
    callToAction () {
      return this.entry.frontmatter['call-to-action'] || 'Read more'
    },

    date () {
      return moment(this.entry.frontmatter.date)
    }
  }
}
</script>

<style lang="postcss">
</style>