<template>
<article class="p-entry">
  <header class="p-entry__header [ py-12 ]">
    <div class="o-content-container o-wrap o-wrap--large">
      <ul class="p-entry__tags [ mb-4 ]">
        <li class="[ mr-6 ]" v-for="tag in tags" :key="tag">{{ tag }}</li>
      </ul>

      <h1 class="p-entry__title [ text-4xl md:text-7xl ]">{{ $page.title }}</h1>

      <p class="[ text-gray text-sm mt-4 ]">Published {{ date.format('MMMM D, YYYY') }}</p>
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
.p-entry__header {
  @apply text-center;
}

.p-entry__tags {
  @apply font-bold uppercase tracking-wider text-xs flex text-gray;
}
</style>
