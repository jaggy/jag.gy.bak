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
        afterEnter() {
            this.$refs.pushNavigation.classList.add('reveal')
        },

        beforeLeave() {
            this.$refs.pushNavigation.classList.add('leaving')
        },
    },
})
