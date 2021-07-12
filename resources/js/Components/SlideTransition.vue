<template>
    <transition
        name="slide"
        mode="out-in"
        enter-stagger="0"
        leave-stagger="0"
    >
        <slot></slot>
    </transition>
</template>
<script>
export default {
    inheritAttrs: false
};
</script>
<style>
.slide-leave-active,
.slide-enter-active {
    transition: 0.5s;
}
.slide-enter-from {
    transform: translateX(-100%);
}
.slide-enter {
    transform: translate(100%, 0);
}
.slide-leave-to {
    transform: translate(-100%, 0);
}
</style>
