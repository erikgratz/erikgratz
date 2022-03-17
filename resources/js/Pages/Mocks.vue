<template>
    <div>
        <component :is="page" />
    </div>
</template>
<script>
import Apple from "@/Mocks/Apple";
import NoHeader from "@/Layouts/NoHeader";
export default {
    components: {
        Apple
    },
    props: ['page'],
    layout: NoHeader,
}

</script>
