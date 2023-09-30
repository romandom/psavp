<template>
    <div :class="tmavsi ? 'bg-[#F5F4F4]' : 'bg-white'" class="xs:w-[250px] xsm:w-[350px] sm:w-[400px] md:w-[200px] lg:w-[280px] xl:w-[340px] 2xl:w-[370px] xs:h-[250px] xsm:h-[250px] sm:h-[300px] md:h-[350px] lg:h-[400px] xl:h-[420px] 2xl:h-[450px] lg:hover:scale-110 lg:transition lg:duration-200 tien">
        <h1 class="font font-semibold text-center xs:text-lg xsm:text-xl sm:text-2xl lg:text-3xl px-[5%] pt-[5%] pb-[5%]">{{ nadpis }}</h1>
        <ul>
            <li class="font font-normal xs:text-[16px] xsm:text-[16px] sm:text-[18px] md:text-[15px] lg:text-lg xl:text-xl px-[10%] md:pt-[5%]" v-for="(item, index) in body" :key="index">
                <div class="circle"></div>
                {{ item }}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "KartickaComponent",
    props: {
        nadpis: String,
        body: String,
        tmavsi: Boolean,
    }
}
</script>

<style scoped>
.font {
    font-family: robotocondensed;
}

.tien {
    box-shadow: 0px 4px 4px 0px #00000040;
}

.tien:hover {
    @media only screen and (min-width: 1024px) {
        box-shadow: 0px 8px 8px 0px #00000040;
    }
}

.circle {
    @media only screen and (min-width: 320px) {
        width: 5px;
        height: 5px;
    }
    @media only screen and (min-width: 1024px) {
        width: 10px;
        height: 10px;
    }
    background-color: black;
    border-radius: 50%;
    display: inline-block;
    margin-right: 10px;
}

/* Štýly pre zoznam */
ul {
    list-style: none;
    padding: 0;
}



</style>