<template>
<article class="p-entry">
  <header class="p-entry__header [ py-12 mb-6 ]">
    <div class="o-content-container o-wrap o-wrap--small">
      <ul class="p-entry__tags [ -mx-2 mb-6 ]">
        <li class="[ mx-2 ]" v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>

      <h1 class="p-entry__title">{{ $page.title }}</h1>

      <p class="[ mt-2 ms-sm ]">Published {{ date.format('MMMM d, YYYY') }}</p>
    </div>
  </header>

  <div class="o-content-container o-wrap o-wrap--small">
    <Content class="p-entry__content o-rich-text" ref="content" />
  </div>
</article>
</template>

<script>
import moment from 'moment'

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
  @apply uppercase ms-sm flex opacity-75;
}
</style>
