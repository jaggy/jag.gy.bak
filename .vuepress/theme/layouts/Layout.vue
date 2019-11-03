<template>
<div class="l-app">
  <TheHeader class="l-app__header" />

  <main class="l-app__content">
    <Transition name="fade"  mode="out-in">
      <Component :is="view" />
    </Transition>
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
    },

    view() {
      return this.isHome ? 'HomePage' : 'EntryPage'
    }
  }
}
</script>

<style src="../styles/app.css"></style>

<style lang="postcss">
.fade-enter-active, .fade-leave-active {
  transition: transform 300ms, opacity 300ms ease-in-out;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  transform: translateY(-30px);
  opacity: 0;
}
</style>