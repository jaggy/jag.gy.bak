import Vue from 'vue'

Vue.component('anchor', require('./components/Anchor'))

new Vue({
    el: '#app',

    data: { burger: false },

    methods: {
        togglePushNavigation() {
            this.burger = ! this.burger
        },
    },
})
