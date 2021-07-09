<template>
<!--    <transition-->
<!--        enter-active-class="transition-opacity duration-75"-->
<!--        enter-from-class="opacity-0"-->
<!--        enter-to-class="opacity-100"-->
<!--        leave-active-class="transition-opacity duration-150"-->
<!--        leave-from-class="opacity-100"-->
<!--        leave-to-class="opacity-0"-->
<!--    >-->
    <transition
        appear
        name="fade"
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
