<template>
  <article class="c-entry-preview">
    <header class="c-entry-preview__header">
      <div class="o-wrap o-wrap--large">
        <RouterLink :to="entry.path" class="[ text-black ]">
          <h2 class="c-entry-preview__title [ text-4xl ]">{{ title }}</h2>
        </RouterLink>

        <p class="[ text-gray text-sm mt-4 ]">Published {{ date.format('MMMM D, YYYY') }}</p>
      </div>
    </header>

    <div class="o-wrap [ mt-8 ]">
      <div class="c-entry-preview__content o-rich-text" v-html="entry.excerpt" />

      <div class="[ flex mt-4 ]">
        <RouterLink :to="entry.path" class="[ font-heading mt-1 text-lg ml-auto ]">
          {{ callToAction }}
        </RouterLink>
      </div>
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
.c-entry-preview__header {
  @apply text-center;
}
</style>