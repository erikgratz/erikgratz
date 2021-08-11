<template>
    <div class="bg-forest-green flex flex-col min-h-screen w-full items-center justify-center">
        <div class="text-4xl font-serif text-pale-gold my-4">
            <p>Amy Hudgins & Erik Gratz</p>
        </div>
        <div class="text-lg font-sans font-italic text-pale-gold p-2">
            <p>October 16, 2021</p>
        </div>
        <div class="mx-16 text-center text-lg font-sans font-italic text-pale-gold p-2">
            <p>Dearest friends and family,
                <br> Though you can't be with us in person on our special day, we want to share it with each of you however we can.
                <br> We will be filming the ceremony, and will host the video and photos here as soon as they're available.
                <br> We value adventure and experiences, and to that end we would ask that those of you who intend to give gifts instead make a donation to our <a href="https://www.honeyfund.com/wedding/hudgins-gratz-10-16-2021" class="underline">HoneyFund.</a>
                <br>
                <br> We love and miss you all, and will see you soon.
                <br> Amy & Erik
            </p>
        </div>
<!--        <split-carousel>-->
<!--            <split-carousel-item v-for="(image, i) in images" :key="i">-->
<!--                <img :src="image" alt="engagement photo">-->
<!--            </split-carousel-item>-->
<!--        </split-carousel>-->
<!--        <div class="text-lg font-sans font-italic text-pale-gold underline p-2">-->
<!--            <a href="http://www.theknot.com/erikandamygethitched"><p>&#45;&#45;Wedding Ceremony Details&#45;&#45;</p></a>-->
<!--        </div>-->

    </div>
</template>
<script>
import { SplitCarousel, SplitCarouselItem } from "vue-split-carousel";
import NoHeader from "@/Layouts/NoHeader";
export default {
    components: {
        SplitCarousel,
        SplitCarouselItem
    },
    props: ['images'],
    mounted() {
        console.log(this.images)
    },
    layout: NoHeader
}
</script>
