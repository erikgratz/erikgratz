<template>
    {{ this.post.body}}
</template>
<script>

//if this doesnt grow in complexity, it should be replaced by writing the body to Blog.vue
export default {
    props: ['post']
}
</script>
