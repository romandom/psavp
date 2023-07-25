<template>
    <div class="bg-[#f9b607] h-screen w-screen relative">
        <div class="flex flex-col gap-5 absolute left-[7%] top-[10%]">
            <h1 class="heading text-white">NA STRÁNKE PRÁVE PREBIEHAJÚ</h1>
            <h1 class="heading text-white">PRÍPRAVNÉ STAVEBNÉ</h1>
            <h1 class="heading text-black">&</h1>
            <h1 class="heading text-white">VÝKOPOVÉ PRÁCE</h1>
        </div>
        <img src="@/assets/bager.gif" alt="Bager" class="gif"/>
        <div class="flex flex-row justify-between absolute bottom-[5%] px-[5%] w-full">
            <h4 class="footer">Dávid Hrubovský</h4>
            <h4 class="footer"><a href="tel: +421 915 237 781">+421 915 237 781</a></h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "UnderConstruction"
}
</script>

<style scoped>
.heading {
    @apply xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold font-roboto
}

.footer {
    @apply xsm:text-lg sm:text-xl md:text-3xl font-bold font-roboto
}

.gif {
    @apply xs:w-[50%] xsm:w-[35%] sm:w-[25%] absolute sm:right-[10%] sm:top-[30%] xs:right-[25%] xsm:right-[35%] xs:top-[50%]
}
</style>