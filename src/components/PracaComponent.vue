<template>
    <div class="flex flex-col bg-black xs:h-[480px] xsm:h-[600px] sm:h-[750px] md:h-[900px] lg:h-[1000px] xl:h-[1200px] mt-[20%]">
        <h1 class="text-center font text-white font-semibold xs:text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-[3%]">
            NAŠA PRÁCA</h1>
        <div class="card md:flex md:justify-content-center mx-auto z-10  bg-black">
            <div class="card md:flex md:justify-content-center lg:mx-[10%] xl:mx-0">
                <Galleria :value="images" :responsiveOptions="responsiveOptions" containerStyle="max-width: 900px"
                          :numVisible="5"
                          :circular="true" :autoPlay="true" :transitionInterval="5000" :showItemNavigatorsOnHover="true"
                          :showItemNavigators="true" :showThumbnails="false">
                    <template #item="slotProps">
                        <div v-if="slotProps.item">
                            <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                                 style="width: 100%; display: block"/>
                        </div>
                    </template>
                    <template #caption="slotProps">
                        <div class="text-xl font-bold text-center">
                            {{ slotProps.item.title }}
                        </div>
                    </template>
                </Galleria>
            </div>
        </div>
        <div class="w-[100%] h-[1px] bg-white"></div>
        <div class="text-center font text-white font-semibold md:text-4xl lg:text-5xl xs:mt-[2%] lg:mt-[3%]">Kontakt:
        </div>
        <div class="text-center font text-white font-semibold md:text-xl lg:text-2xl mt-[1.5%]">Dávid Hrubovský</div>
        <div class="text-center font text-white font-semibold md:text-xl lg:text-2xl mt-[0.5%]"><a
                href="tel:+421 915 237 781">+421 915 237 781</a></div>
        <div class="text-center font text-white font-semibold md:text-xl lg:text-2xl mt-[0.5%]"><a
                href="mailto:david.hrubovsky@psavp.sk">david.hrubovsky@psavp.sk</a></div>
    </div>
</template>

<script>
import SliderComponent from "@/components/SliderComponent.vue";

export default {
    name: "PracaComponent",
    components: {SliderComponent},
    data() {
        return {
            images: [
                {
                    itemImageSrc: 'src/assets/slider/1.jpg',
                    thumbnailImageSrc: 'src/assets/slider/1.jpg',
                    alt: 'Čistenie silážnej jamy',
                    title: 'Čistenie silážnej jamy'
                },
                {
                    itemImageSrc: 'src/assets/slider/2.jpg',
                    thumbnailImageSrc: 'src/assets/slider/2.jpg',
                    alt: 'Čistenie silážnej jamy',
                    title: 'Čistenie silážnej jamy'
                },
                {
                    itemImageSrc: 'src/assets/slider/3.jpg',
                    thumbnailImageSrc: 'src/assets/slider/3.jpg',
                    alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                    title: 'Prevoz materiálu a vyrovnávanie pozemku'
                },
                {
                    itemImageSrc: 'src/assets/slider/4.jpg',
                    thumbnailImageSrc: 'src/assets/slider/4.jpg',
                    alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                    title: 'Prevoz materiálu a vyrovnávanie pozemku'
                },
            ],
            responsiveOptions: [
                {
                    breakpoint: '991px',
                    numVisible: 4
                },
                {
                    breakpoint: '767px',
                    numVisible: 3
                },
                {
                    breakpoint: '575px',
                    numVisible: 1
                }
            ]
        };
    },
}
</script>

<style scoped>
.font {
    font-family: robotocondensedbold;
}

html {
    font-size: 14px;
}

body {
    font-family: var(--font-family);
    font-weight: normal;
    background: var(--surface-ground);
    color: var(--text-color);
    padding: 1rem;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.card {
    background-color: black;
    padding: 2rem;
    border-radius: 10px;
    margin-bottom: 1rem;
}

::v-deep(.p-galleria-caption) {
    background-color: #F9B506;
    opacity: 75%;
}

::v-deep(.p-galleria .p-galleria-indicators .p-galleria-indicator.p-highlight button) {
    background-color: #F9B506;
}


</style>