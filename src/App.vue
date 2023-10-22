<script setup>
import HeaderComponent from "@/components/HeaderComponent.vue";
import TitulkaComponent from "@/components/TitulkaComponent.vue";
import PonukaComponent from "@/components/PonukaComponent.vue";
import SluzbyComponent from "@/components/SluzbyComponent.vue";
import BagerComponent from "@/components/BagerComponent.vue";
import PracaComponent from "@/components/PracaComponent.vue";

// Nastavenie meta tagov pre SEO
meta.value = {
    title: 'PSAVP',
    meta: [
        {
            name: 'description',
            content: 'Prípravné stavebné a výkopové práce.',
        },
        {
            name: 'keywords',
            content: 'prípravné práce, pripravne prace, stavebné práce, výkopové práce, prípravné stavebné a výkopové práce, PSAVP, psavp, východné Slovensko, ' +
                'bager, stavba, výkop, Trebišov, Michalovce, Vranov, Vranov nad Topľou, Košice, Košice a okolie, ' +
                'Dávid Hrubovský, Hrubovský, Hrubovský Dávid, David Hrubovsky, Hrubovsky, Hrubovsky David' +
                'stavebne prace, vykopove prace, pripravne stavebne a vykopove prace, vychodne slovensko, vykop, dvor,' +
                'bazen, Trebisov, Vranov nad Toplou, trebisov, vranov nad toplou, kosice, Kosice, Kosice a okolie, kosice a okolie,' +
                'vyrovnavanie dvora, ',
        },
        {
            name: 'robots',
            content: 'index',
        },
        // Ďalšie meta tagy podľa potreby
    ],
};
</script>

<template>
  <!--    <UnderConstruction/>-->
    <div class="flex flex-col max-w-[1920px]">
        <header-component></header-component>
        <titulka-component></titulka-component>
        <ponuka-component></ponuka-component>
        <sluzby-component></sluzby-component>
        <bager-component></bager-component>
        <praca-component></praca-component>
    </div>
</template>

<style scoped>
</style>
