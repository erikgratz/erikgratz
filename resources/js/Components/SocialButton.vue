<template>
    <button type="button" :title="altText" @click.native="goToLink" class="inline-flex items-center m-2 px-4 py-2 bg-gray-800 border border-mint rounded-md font-semibold text-xs text-mint uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150">
        {{ name }}
        <svg width="24px" height="24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#000000" class="text-purple-600 m-1" v-html="icon" />
    </button>
</template>
<script>

export default {
    props: ['link', 'icon', 'name','altText'],
    methods: {
        goToLink(){
            window.location.href = this.link;
        }
    }
}
</script>
