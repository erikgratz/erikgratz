<template>
    <div class="flex flex-row items-center justify-between p-3 mb-4">
        <img v-if="index % 2 !== 0" class="items-end w-1/4" :src="imgUrl"/>
        <div class="flex-col m-2">
            <p class="text-3xl font-light text-gray-300">
                {{ title }}
            </p>
            <p class="text-gray-300">{{ text }}</p>
        </div>
        <img v-if="index % 2 === 0" class="items-end w-1/4" :src="imgUrl"/>
    </div>
</template>
<script>

export default {
    props: ['title','text','imgUrl','index'],
    mounted() {
        console.log(this.index)
    }
}
</script>
