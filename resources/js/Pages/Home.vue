<template>
    <!--        <h1 class="text-5xl h-44">{{ $page.component }}</h1>-->
    <div id="banner-one" class="flex items-end justify-center w-full h-64 bg-mint text-black text-right">
        <div class="bg-kid-face bg-cover bg-no-repeat w-1/2">
            <div class="flex items-end justify-center w-full h-64 from-mint bg-gradient-to-l" />
        </div>
        <h1 class="ml-auto mr-4 my-auto text-4xl">Hello. I'm Erik. I love you.</h1>
    </div>
    <div id="banner-two" class="flex items-end justify-center w-full h-64 bg-black text-purple-600 text-left">
        <h1 class="mr-auto ml-4 my-auto text-4xl">I'm a Back-End developer. I love laravel.</h1>
        <div class="ml-auto mr-0 bg-code-wall bg-right bg-cover bg-no-repeat w-1/2">
            <div class="flex h-64 from-black bg-gradient-to-r"/>
        </div>
    </div>

    <div v-if="this.useRealHomepage" id="banner-three" class="flex items-end justify-center w-full h-64 bg-purple-900 text-mint text-right">
        <div class="bg-bread-roses bg-cover bg-no-repeat w-1/2">
            <div class="flex items-end justify-center w-full h-64 from-purple-900 bg-gradient-to-l" />
        </div>
        <h1 class="ml-auto mr-4 my-auto text-4xl">I write about Socialism and Labor Rights.<br> I love workers.</h1>
    </div>
    <div v-else id="banner-three1" class="flex items-end justify-center w-full h-64 bg-purple-900 text-mint text-right">
        <div class="bg-amy-erik bg-cover bg-no-repeat w-1/2">
            <div class="flex items-end justify-center w-full h-64 from-purple-900 bg-gradient-to-l" />
        </div>
        <h1 class="ml-auto mr-4 my-auto text-4xl">I recently became a Husband.<br> I love her.</h1>
    </div>
    <div id="banner-four" class="flex items-center justify-center text-center text-gray-400 w-full  bg-black">
        <h1 class="m-auto py-8 px-2 text-4xl">The world is <span class="text-red-600">broken</span> right now, but it can be healed.
            <br>I believe that healing must start with love and understanding.
            <br><br><div v-if="this.useRealHomepage">If you have a project that increases equality or worker power that you think I would be interested in, I encourage you to leave me a note.</div>
            <br><br>Thank you for visiting. I love you.
        </h1>
        <br><br>
    </div>
</template>
<script>

export default {
    components: {},
    props: ['useRealHomepage','errors', 'auth', 'canLogin', 'canRegister', 'laravelVersion', 'phpVersion', 'messages'],
    mounted() {
        console.log(this.useRealHomepage)
    }
}
</script>
