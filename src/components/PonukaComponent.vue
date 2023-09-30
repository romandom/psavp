<template>
    <div class="flex flex-col">
        <div class="w-[25%] mx-auto mt-[5%] relative">
            <img class="xs:max-w-[128px] xsm:max-w-[144px] sm:max-w-[174px] md:max-w-[204px] lg:max-w-[334px] xl:max-w-[404px]" src="@/assets/ponuka/kolecko.svg">
            <h1 class="font text-psavp-yellow xs:text-lg xsm:text-xl sm:text-2xl md:text-3xl lg:text-5xl xl:text-6xl absolute bottom-[25%] xs:left-[9%] xsm:left-[9%] md:left-[8%] lg:left-[10%] xl:left-[7%]">PONÚKAME</h1>
        </div>
        <div class="flex xs:flex-col md:flex-row mx-auto mt-[5%]">
            <div v-for="(karticka, index) in karticky" :key="index">
                <karticka-component :nadpis="karticka.nadpis" :body="karticka.body"
                                    :tmavsi="karticka.tmave"></karticka-component>
            </div>
        </div>
    </div>
</template>

<script>
import KartickaComponent from "@/components/KartickaComponent.vue";

export default {
    name: "PonukaComponent",
    components: {KartickaComponent},
    data() {
        return {
            karticky: [
                {
                    nadpis: "Výkopové práce",
                    body: [ 'Výkopy základov rodinných domov a iných stavieb.', 'Hlbinné výkopy.', 'Vyrovnávanie pozemkov.', 'Čistenie pozemkov od náletových drevín, koreňov stromov a stavebného odpadu.'],
                    tmave: false,
                },
                {
                    nadpis: "Búracie práce",
                    body: [ 'Obytných stavieb, dielní, kôlní, prístreškov a ďalších.', 'Pri búracích prácach zabezpečujeme aj odvoz materiálu.'],
                    tmave: true,
                },
                {
                    nadpis: "Doplnkové práce",
                    body: [ 'Výstavba plotov a drobných stavieb.', 'Vytváranie parkovacích miest.', 'Prípravy pre výstavbu verejných komunikácii.'],
                    tmave: false,
                },
            ]
        };
    },
}
</script>

<style scoped>
.font {
    font-family: robotocondensedbold;
}
</style>