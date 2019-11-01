<template>
<article class="p-entry">
  <header class="p-entry__header [ py-12 mb-6 ]">
    <div class="o-content-container o-wrap">
      <ul class="p-entry__tags [ -mx-2 mb-6 ]">
        <li class="[ mx-2 ]" v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>

      <h1 class="p-entry__title">{{ widont($page.title) }}</h1>

      <p class="[ mt-2 text-sm ]">Published {{ date.format('MMMM d, YYYY') }}</p>
    </div>
  </header>

  <div class="o-content-container o-wrap">
    <Content class="p-entry__content o-rich-text" ref="content" />
  </div>
</article>
</template>

<script>
import moment from 'moment'
import widont from 'widont'

export default {
  computed: {
    date () {
      return moment(this.$page.frontmatter.date)
    },

    tags () {
      const tags = this.$page.frontmatter.tags || []

      if (! Array.isArray(tags)) {
        return [tags]
      }

      return tags
    },

    usesLede () {
      return this.$page.frontmatter.lede || false
    }
  },

  methods: {
    widont,
  },

  mounted() {
    if (this.usesLede) {
      const lede = this.$refs.content.$el.firstChild

      if (lede.tagName === 'P') {
        lede.classList.add('lede')
      }
    }
  }
}
</script>

<style lang="postcss">
.p-entry__tags {
  @apply uppercase text-sm flex opacity-75;
}
</style>
