<template>
    <div class="">
        <div class="relative">
            <img src="@/assets/titulka/titulka.png" alt="Bager PSAVP">
            <img src="@/assets/titulka/kruho.svg" alt="Kruh" class="xs:hidden lg:block absolute right-[5%] top-[35%] w-[18%]">
            <img src="@/assets/titulka/PSAVP.svg" alt="PSAVP logo" class="absolute right-[5%] top-[10%] w-[40%]">
            <h2 @click="scrollToPraca" class="xs:hidden lg:block font text-psavp-yellow absolute 2xl:right-[10%] 2xl:top-[40%] lg:right-[9%] lg:top-[39%] lg:text-2xl xl:text-3xl hover:cursor-pointer">KONTAKT</h2>
        </div>
        <div class="relative">
            <div class="xs:h-[60px] xsm:h-[80px] sm:h-[100px] md:h-[150px] lg:h-[300px] xl:h-[350px] w-[100%] skew-y-3 bg-psavp-yellow"></div>
            <div class="xs:h-[60px] xsm:h-[80px] sm:h-[100px] md:h-[150px] lg:h-[300px] xl:h-[350px] w-[100%] -skew-y-3 bg-black absolute bottom-[5%] font text-psavp-yellow xs:text-xl xsm:text-2xl sm:text-4xl md:text-5xl lg:text-7xl xl:text-8xl text-center items-center flex flex-col justify-center font-semibold">
                <h1>PRÍPRAVNÉ STAVEBNÉ A</h1>
                <h1>VÝKOPOVÉ PRÁCE</h1>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TitulkaComponent",
    methods: {
        scrollToPraca() {
            // Scroll to the element with the id "pracaComponent"
            window.scrollTo({
                top: document.getElementById("kontakt").offsetTop,
                behavior: "smooth"
            });
        },
    },
}
</script>

<style scoped>
.font {
    font-family: robotocondensedbold;
}
</style>