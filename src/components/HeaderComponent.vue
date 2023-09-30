<template>
    <div class="w-[100%] xs:h-[25px] xsm:h-[30px] sm:h-[32px] md:h-[35px] lg:h-[45px] xl:h-[50px] 2xl:h-[55px] bg-black">
        <div class="flex flex-row justify-around xsm:w-[45%] md:w-[30%] lg:w-[28%] xl:w-[26%] 2xl:w-[22%] ml-[3%] my-auto h-full items-center">
            <a href="https://www.facebook.com/profile.php?id=61550497136980" target="_blank">
                <h1 class="hover:cursor-pointer">
                    Facebook
                </h1>
            </a>
            <h1>
                |
            </h1>
            <a href="https://www.instagram.com/psavp.sk/" target="_blank">
                <h1 class="hover:cursor-pointer">
                    Instagram
                </h1>
            </a>
        </div>
    </div>
</template>

<script>
export default {
    name: "HeaderComponent"
}
</script>

<style scoped>
.font {
    font-family: robotocondensedbold;
}

h1 {
    @apply xs:text-xl md:text-2xl lg:text-3xl xl:text-4xl font font-bold text-psavp-yellow
}
</style>