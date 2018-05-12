<template>
<a :href="to" class="[ no-underline block ]"
   @mouseenter="isActive = true" @mouseleave="isActive = false">
    <strong class="[ ms-lg font-display font-medium relative overflow-hidden inline-block pr-4 pb-1 ]">
        <slot name="title"></slot>

        <transition name="slide">
            <span class="highlight [ opacity-40 ]" v-if="isActive"
                :class="{ 'bg-pink': ! inverse, 'bg-white': inverse }">
            </span>
        </transition>
    </strong>

    <p class="[ leading-tight -mt-2 max-w-sm ]">
        <slot name="caption"></slot>
    </p>
</a>
</template>

<script>
export default {
    props: ['to', 'inverse'],

    data() {
        return { isActive: false }
    },
}
</script>

<style>
.highlight {
    position: absolute;
    top:      8px;
    left:     6px;
    z-index:  -1;

    width:    110%;
    height:   80%;
    transform: translateX(-40%);
}

.slide-enter-active {
    transition: transform 0.35s ease-out;
}
.slide-leave-active {
    transition: transform 0.35s ease-in;
}

.slide-enter {
    transform: translateX(-100%);
}

.slide-leave-to {
    transform: translateX(100%);
}
</style>
