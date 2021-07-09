<template>
    <qrcode-vue class="border border-gray-100 " v-if="codeIsOpen" :value="codeValue" :size="codeSize" level="H" />
    <button type="button" @click.native="codeIsOpen = !codeIsOpen" :title="title" class="inline-flex items-center m-2 px-4 py-2 bg-gray-800 border border-mint rounded-md font-semibold text-xs text-mint uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 transition ease-in-out duration-150">

            {{ codeIsOpen ? codeValue : title }}
            <svg width="24px" height="24px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg" fill="currentColor" color="#000000" class="text-purple-600 m-1" v-html="icon" />
    </button>
</template>
<script>
import QrcodeVue from 'qrcode.vue'

export default {
    props: ['codeValue', 'codeSize', 'title','description','icon'],
    data(){
        return{
            codeIsOpen: false
        }
    },
    components: {QrcodeVue},

}
</script>
