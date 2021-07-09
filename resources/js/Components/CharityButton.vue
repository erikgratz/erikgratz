<template>
    <button type="button" :title="blurb" @click.native="goToLink" class="inline-flex flex-col items-center m-2 px-4 py-2 bg-gray-800 border border-mint rounded-md font-semibold text-xs text-mint uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150">
        <img :src="icon" width="128" />
        <span class="p-1">{{ altText }}</span>
    </button>
</template>
<script>

export default {
    props: ['link', 'icon', 'blurb', 'altText'],
    methods: {
        goToLink(){
            window.location.href = this.link;
        }
    }
}
</script>
