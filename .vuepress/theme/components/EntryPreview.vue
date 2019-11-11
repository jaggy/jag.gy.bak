<template>
  <article class="c-entry-preview">
    <header class="c-entry-preview__header">
      <RouterLink :to="entry.path" class="[ text-black ]">
        <h2 class="c-entry-preview__title">{{ title }}</h2>
      </RouterLink>

      <p class="[ text-gray text-sm ]">Published {{ date.format('MMMM d, YYYY') }}</p>
    </header>

    <div class="c-entry-preview__content o-rich-text [ mt-4 ]" v-html="entry.excerpt" />

    <div class="[ flex ]">
      <RouterLink :to="entry.path" class="[ font-heading mt-1 text-lg ml-auto ]">
        {{ callToAction }}
      </RouterLink>
    </div>
  </article>
</template>

<script>
import moment from 'moment'
import widont from 'widont'

export default {
  props: {
    entry: Object,
  },

  computed: {
    callToAction () {
      return this.entry.frontmatter.call_to_action || 'Read more 👉'
    },

    date () {
      return moment(this.entry.frontmatter.date)
    },

    title () {
      return widont(this.entry.frontmatter.title)
    }
  },
}
</script>

<style lang="postcss">
</style>