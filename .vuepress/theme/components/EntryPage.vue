<template>
<article class="p-entry">
  <header class="p-entry__header [ py-6 mb-6 ]">
    <div class="o-content-container o-wrap">
      <h1 class="p-entry__title">{{ $page.title }}</h1>

      Published {{ date.format('MMMM d, YYYY') }}
    </div>
  </header>

  <div class="o-content-container o-wrap">
    <Content  class="p-entry__content o-rich-text" />
  </div>
</article>
</template>

<script>
import moment from 'moment'

export default {
  computed: {
    date () {
      return moment(this.$page.frontmatter.date)
    }
  }
}
</script>

<style lang="postcss">
.p-entry__title {
  @apply ms-4xl;
}
</style>
