<template>
    <my-header class="hidden md:block"></my-header>
    <mobile-header class="md:hidden"></mobile-header>
    <article>
        <div class="bg-black h-full flex flex-col min-h-screen text-purple-600 font-sans">
            <div class="pt-20"/>
            <slot/>
            <p class="text-center text-sm">Copyright&copy; 2021 Erik V Gratz</p>
        </div>
    </article>
</template>
<script>
import MyHeader from "./MyHeader";
import MobileHeader from "./MobileHeader";
export default {
    components: {MobileHeader, MyHeader}
}
</script>
