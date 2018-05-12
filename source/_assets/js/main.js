import Vue from 'vue'

Vue.component('anchor', require('./components/Anchor'))

new Vue({
    el: '#app',

    data: {
        burger: {
            active:   false,
            hovering: false,
        },
    },

    methods: {
        wipeAfter() {
            this.$refs.pushNavigation.classList.add('reveal')
        },
    },
})
