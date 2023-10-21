<template>
    <div class="w-[100%] relative mt-[10%]">
        <h1 class="font xs:text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-6xl xl:text-7xl text-black text-center mb-[1%] font-semibold">Komatsu</h1>
        <div class="w-[100%] bg-psavp-yellow z-0 flex xs:flex-col md:flex-row">
            <div class="xs:h-[50%] md-h-[100%] md:w-[50%]">
                <img src="@/assets/bager.jpg" alt="Bager Komatsu wb97s-5"/>
            </div>
            <div class="xs:py-[5%] xs:h-[50%] md-h-[100%] md:w-[50%] my-auto xs:mx-auto md:mx-0 xs:px-[10%] sm:px-[20%] md:px-[5%] xsm:text-[17px] sm:text-lg lg:text-2xl xl:text-3xl flex flex-col gap-5 font">
                <p>Rypadlo-nakladač <b>Komatsu WB97s</b> s výkonom 74KW a hlbkovým dosahom až 6,5 metra.</p>
                <p>Stroj je
                    vybavený <b>podpokopovými lyžicami</b> 30, 60 a 90cm, <b>hydraulickou svahovacou lyžicou</b> so šírkou 150 cm. A
                    <b>prednou lyžicou so žralokom</b> a <b>paletizačnými vidlami</b>.</p>

            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "BagerComponent"
}
</script>

<style scoped>
.font {
    font-family: robotocondensedbold;
}
</style>