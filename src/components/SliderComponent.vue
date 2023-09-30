<template>
    <div class="flex flex-row justify-center">
        <div class="w-[20%] my-auto" :class="dolava? 'duration-300 hidden transition' : ''">
            <img :src="fotky.at(predoslaHodnota).url"/>
            <p>{{ fotky.at(predoslaHodnota).popis }}</p>
        </div>
        <div class="w-[35%] mx-[2%] relative"
             :class="dolava? 'scale-[60%] duration-300 -translate-x-[85%] transition' : ''">
            <img :src="fotky.at(sucasnaHodnota).url"/>
            <div class="absolute bottom-0 z-10 bg-psavp-yellow opacity-80 w-[100%] text-center"
                 :class="dolava ? 'hidden' : ''">
                <p class="py-1">{{ fotky.at(sucasnaHodnota).popis }}</p>
            </div>
        </div>
        <div class="w-[20%] my-auto" :class="dolava? 'scale-[160%] duration-300 -translate-x-[95%] transition' : ''">
            <img :src="fotky.at(novaHodnota).url"/>
            <p>{{ fotky.at(novaHodnota).popis }}</p>
        </div>
    </div>
    <div class="flex flex-row justify-between">
        <div @click="posunDolava()">dolava</div>
        <div @click="posunDoprava()">doprava</div>
    </div>
</template>

<script>
export default {
    name: "SliderComponent",
    data() {
        return {
            predoslaHodnota: 0,
            sucasnaHodnota: 1,
            novaHodnota: 2,
            dolava: false,
            doprava: false,
            fotky: [
                {
                    url: "src/assets/slider/skuska.png",
                    popis: "Popis1",
                },
                {
                    url: "src/assets/slider/skuska.png",
                    popis: "Popis2",
                },
                {
                    url: "src/assets/slider/skuska.png",
                    popis: "Popis3",
                },
                {
                    url: "src/assets/slider/skuska.png",
                    popis: "Popis4",
                },
            ]
        };
    },
    methods: {
        posunDolava() {
            this.dolava = true;
            setTimeout(() => {
                // Po vykonaní metódy zastavte animáciu
                this.dolava = false;
            }, 500);
            if (this.predoslaHodnota === 0) {
                this.predoslaHodnota = this.fotky.length - 1;
            } else {
                this.predoslaHodnota--;
            }
            if (this.sucasnaHodnota === 0) {
                this.sucasnaHodnota = this.fotky.length - 1;
            } else {
                this.sucasnaHodnota--;
            }
            if (this.novaHodnota === 0) {
                this.novaHodnota = this.fotky.length - 1;
            } else {
                this.novaHodnota--;
            }
        },
        posunDoprava() {
            if (this.predoslaHodnota === this.fotky.length - 1) {
                this.predoslaHodnota = 0;
            } else {
                this.predoslaHodnota++;
            }
            if (this.sucasnaHodnota === this.fotky.length - 1) {
                this.sucasnaHodnota = 0;
            } else {
                this.sucasnaHodnota++;
            }
            if (this.novaHodnota === this.fotky.length - 1) {
                this.novaHodnota = 0;
            } else {
                this.novaHodnota++;
            }
        }
    }
}
</script>

<style scoped>

</style>

<!--<template>-->
<!--    <div class="carousel">-->
<!--        <div class="carousel-images">-->
<!--            <div class="carousel-image" v-for="(image, index) in images" :key="index">-->
<!--                <img :src="image.src" :alt="image.alt" :class="{ 'active': index === currentIndex }" />-->
<!--                <div class="carousel-description">{{ image.description }}</div>-->
<!--            </div>-->
<!--        </div>-->
<!--        <div class="carousel-thumbnails">-->
<!--            <div-->
<!--                class="carousel-thumbnail"-->
<!--                v-for="(image, index) in images"-->
<!--                :key="index"-->
<!--                @click="changeImage(index)"-->
<!--                :class="{ 'active': index === currentIndex }"-->
<!--            >-->
<!--                <img :src="image.src" :alt="image.alt" />-->
<!--            </div>-->
<!--        </div>-->
<!--    </div>-->
<!--</template>-->

<!--<script>-->
<!--export default {-->
<!--    data() {-->
<!--        return {-->
<!--            images: [-->
<!--                {-->
<!--                    src: 'src/assets/slider/skuska.png',-->
<!--                    alt: 'Image 1',-->
<!--                    description: 'Popis k obrázku 1',-->
<!--                },-->
<!--                {-->
<!--                    src: 'src/assets/slider/skuska.png',-->
<!--                    alt: 'Image 2',-->
<!--                    description: 'Popis k obrázku 2',-->
<!--                },-->
<!--                {-->
<!--                    src: 'src/assets/slider/skuska.png',-->
<!--                    alt: 'Image 2',-->
<!--                    description: 'Popis k obrázku 2',-->
<!--                },-->
<!--                // Pridaj ďalšie obrázky podľa potreby-->
<!--            ],-->
<!--            currentIndex: 0,-->
<!--        };-->
<!--    },-->
<!--    methods: {-->
<!--        changeImage(index) {-->
<!--            this.currentIndex = index;-->
<!--        },-->
<!--    },-->
<!--};-->
<!--</script>-->

<!--<style scoped>-->
<!--.carousel {-->
<!--    display: flex;-->
<!--    flex-direction: column;-->
<!--    align-items: center;-->
<!--    text-align: center;-->
<!--}-->

<!--.carousel-images {-->
<!--    display: flex;-->
<!--    align-items: center;-->
<!--    justify-content: center;-->
<!--    position: relative;-->
<!--    width: 300px; /* Prispôsob veľkosť karuselu podľa potreby */-->
<!--    height: 300px; /* Prispôsob veľkosť karuselu podľa potreby */-->
<!--}-->

<!--.carousel-image {-->
<!--    position: absolute;-->
<!--    opacity: 0;-->
<!--    transition: opacity 0.5s;-->
<!--}-->

<!--.carousel-image.active {-->
<!--    opacity: 1;-->
<!--}-->

<!--.carousel-description {-->
<!--    position: absolute;-->
<!--    bottom: 0;-->
<!--    left: 0;-->
<!--    right: 0;-->
<!--    background-color: rgba(0, 0, 0, 0.5);-->
<!--    color: #fff;-->
<!--    padding: 5px;-->
<!--}-->

<!--.carousel-thumbnails {-->
<!--    display: flex;-->
<!--    justify-content: center;-->
<!--    margin-top: 10px;-->
<!--}-->

<!--.carousel-thumbnail {-->
<!--    cursor: pointer;-->
<!--    margin: 0 5px;-->
<!--    opacity: 0.7;-->
<!--    transition: opacity 0.3s;-->
<!--}-->

<!--.carousel-thumbnail.active {-->
<!--    opacity: 1;-->
<!--}-->
<!--</style>-->








