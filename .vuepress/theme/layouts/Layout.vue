<template>
<div class="l-app">
  <TheHeader class="l-app__header" />

  <main class="l-app__content">
    <HomePage v-if="isHome" />

    <EntryPage v-if="! isHome" />
  </main>

  <TheFooter class="l-app__footer [ mt-12 ]" />
</div>
</template>

<script>
import HomePage from '../components/HomePage'
import EntryPage from '../components/EntryPage'
import TheHeader from '../components/TheHeader'
import TheFooter from '../components/TheFooter'

export default {
  components: {
    HomePage, EntryPage, TheHeader, TheFooter,
  },

  computed: {
    isHome() {
      return this.$page.path === '/';
    }
  }
}
</script>

<style src="../styles/app.css"></style>