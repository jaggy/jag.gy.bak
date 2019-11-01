<template>
<div class="l-app">
  <main class="l-app__content">
    <HomePage v-if="isHome" />

    <EntryPage v-if="! isHome" />
  </main>
</div>
</template>

<script>
import HomePage from '../components/HomePage'
import EntryPage from '../components/EntryPage'

export default {
  components: {
    HomePage, EntryPage,
  },

  computed: {
    isHome() {
      return this.$page.path === '/';
    }
  }
}
</script>

<style src="../styles/app.css"></style>