<template>
    <div class="flex flex-row justify-center font">
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
.font {
    font-family: 'Roboto Condensed', sans-serif;
}
</style>
