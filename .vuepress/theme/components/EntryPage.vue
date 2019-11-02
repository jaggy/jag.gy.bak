<template>
<article class="p-entry">
  <header class="p-entry__header [ py-12 mb-6 ]">
    <div class="o-content-container o-wrap">
      <ul class="p-entry__tags [ -mx-2 mb-6 ]">
        <li class="[ mx-2 ]" v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>

      <h1 class="p-entry__title">{{ title }}</h1>

      <p class="[ text-gray text-sm mt-2 ]">Published {{ date.format('MMMM d, YYYY') }}</p>
    </div>
  </header>

  <div class="o-content-container o-wrap">
    <Content
      class="p-entry__content o-rich-text"
      :class="{
        'has-lede': hasLede,
        'has-dropcap': hasDropcap,
      }"
      />
  </div>
</article>
</template>

<script>
import moment from 'moment'
import widont from 'widont'

export default {
  computed: {
    title () {
      return widont(this.$page.title)
    },

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

    hasLede () {
      return this.$page.frontmatter.lede || false
    },

    hasDropcap () {
      return this.$page.frontmatter.dropcap || false
    }
  },
}
</script>

<style lang="postcss">
.p-entry__tags {
  @apply uppercase text-sm flex opacity-75;
}
</style>
