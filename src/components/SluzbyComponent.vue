<template>
    <div class="w-[100%] relative">
        <div class="xs:h-[380px] xsm:h-[210px] sm:h-[300px] md:h-[350px] lg:h-[480px] xl:h-[750px] w-[100%] -skew-y-6 bg-[#E1E1E1] mt-[10%] z-0">
        </div>
        <div class="xs:w-[90%] xsm:w-[60%] max-w-[922px] absolute bottom-[17%] right-[5%]">
            <img src="@/assets/sluzby/okresy.png" alt="Okresy, v ktorých sú ponúkané služby" class="z-10 w-[100%]">
        </div>
        <div class="flex flex-col absolute xs:hidden xsm:block xsm:bottom-[15%] sm:bottom-[22%] md:bottom-[25%] lg:bottom-[35%] left-[10%] font xs:text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl text-black text-center font-medium gap-2">
            <h1>Ponúkame</h1>
            <h1>služby</h1>
            <h1>v týchto</h1>
            <h1>okresoch:</h1>
        </div>
        <div class="flex flex-col absolute xsm:hidden bottom-[70%] left-[10%] font xs:text-xl text-black text-center font-medium gap-1">
            <h1>Ponúkame služby</h1>
            <h1>v týchto okresoch:</h1>
        </div>
        <div>
            <h4 class="flex flex-col absolute xs:bottom-[10%] xsm:bottom-[14%] right-[10%] font xs:text-[16px] xsm:text-[15px] sm:text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl text-black text-center font-medium gap-2">
                Podľa dohody možné aj inde.</h4>
        </div>
    </div>
</template>

<script>
export default {
    name: "SluzbyComponent"
}
</script>

<style scoped>
.font {
    font-family: robotocondensedbold;
}
</style>