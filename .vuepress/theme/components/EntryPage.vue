<template>
<article class="p-entry">
  <header class="p-entry__header [ py-12 mb-6 ]">
    <div class="o-content-container o-wrap">
      <ul class="p-entry__tags [ mb-4 ]">
        <li class="[ mr-6 ]" v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>

      <h1 class="p-entry__title [ text-5xl ]">{{ title }}</h1>

      <p class="[ text-gray text-sm ]">Published {{ date.format('MMMM D, YYYY') }}</p>
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
      return !! this.$page.frontmatter.lede
    },

    hasDropcap () {
      return !! this.$page.frontmatter.dropcap
    }
  },
}
</script>

<style lang="postcss">
.p-entry__tags {
  @apply font-bold uppercase tracking-wider text-xs flex text-gray;
}
</style>
