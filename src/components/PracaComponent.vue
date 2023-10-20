<template>
    <div class="flex flex-col bg-black mt-[20%] pb-[5%]">
        <h1 class="text-center font text-white font-semibold xs:text-xl xsm:text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl 2xl:text-7xl mt-[3%] z-20">
            NAŠA PRÁCA</h1>
        <div class="card md:flex md:justify-content-center sm:mx-auto z-10 bg-black">
            <div class="card md:flex md:justify-content-center lg:mx-[10%] xl:mx-0 xs:scale-125 xsm:scale-100">
                <Galleria :value="images" :responsiveOptions="responsiveOptions" containerStyle="max-width: 900px"
                          :numVisible="5"
                          :circular="true" :autoPlay="true" :transitionInterval="5000" :showItemNavigatorsOnHover="true"
                          :showItemNavigators="true" :showThumbnails="false">
                    <template #item="slotProps">
                        <img :src="slotProps.item.itemImageSrc" :alt="slotProps.item.alt"
                             style="width: 100%; display: block"/>
                    </template>
                    <template #caption="slotProps">
                        <div class="xs:text-[10px] sm:text-xl font-bold text-center">
                            {{ slotProps.item.title }}
                        </div>
                    </template>
                </Galleria>
            </div>
        </div>
        <div>
            <h1 class="text-center font text-white font-semibold xs:text-4xl lg:text-5xl">Nezáväzný dopyt:</h1>
            <form ref="form">
                <div class="lg:grid xs:flex xs:flex-col lg:grid-cols-2 xs:w-[75%] sm:w-[45%] mx-auto gap-x-10 gap-y-5 mt-[2%]">
                    <div class="flex flex-col gap-2">
                        <label class="text-white" for="name">Meno a priezvisko</label>
                        <InputText name="name" id="name" v-model="name"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-white" for="address">Adresa práce</label>
                        <InputText name="address" id="address" v-model="address"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-white" for="number">Telefónne číslo</label>
                        <InputText placeholder="+421 915 237 781" name="mobile" id="number" v-model="mobile"/>
                    </div>
                    <div class="flex flex-col gap-2">
                        <label class="text-white" for="email">Email</label>
                        <InputText name="email" id="email" v-model="email" v-on:blur="emailBlured = true" :class="
                            !validEmail(email) && emailBlured
                              ? 'p-invalid'
                              : ''
                          "/>
                    </div>
                    <div class="flex flex-col gap-2 col-span-2">
                        <label class="text-white" for="popis">Popis práce</label>
                        <Textarea name="text" id="popis" v-model="text"/>
                    </div>
                    <div class="flex flex-row gap-2 col-span-2">
                        <Checkbox id="check" v-model="checked" :binary="true"/>
                        <label class="text-white" for="ckeck">Súhlasím so spracovaním osobných údajov.</label>
                    </div>

                </div>
                <div class="text-center my-[2%]">
                    <Button class="text-white bg-psavp-yellow px-[1%] py-[0.5%]" label="Odoslať"
                            @click="sendEmail()"
                            :disabled="!(this.name.length > 0 &&
            validEmail(this.email) &&
            emailBlured &&
            checked)"/>
                </div>
            </form>
        </div>
        <div class="w-[100%] h-[1px] bg-white mt-[2%]"></div>
        <div class="text-center font text-white font-semibold xs:text-4xl lg:text-5xl xs:mt-[2%] lg:mt-[4%]">Kontakt:
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
import im1 from '@/assets/slider/1.jpg';
import im2 from '@/assets/slider/2.jpg';
import im3 from '@/assets/slider/3.jpg';
import im4 from '@/assets/slider/4.jpg';
import emailjs from "@emailjs/browser";

export default {
    name: "PracaComponent",
    components: {SliderComponent},
    data() {
        return {
            email: "",
            emailBlured: false,
            valid: false,
            submitted: false,
            name: "",
            mobile: "",
            address: "",
            text: "",
            checked: false,
            images: [
                {
                    itemImageSrc: im1,
                    thumbnailImageSrc: 'src/assets/slider/1.jpg',
                    alt: 'Čistenie silážnej jamy',
                    title: 'Čistenie silážnej jamy'
                },
                {
                    itemImageSrc: im2,
                    thumbnailImageSrc: 'src/assets/slider/2.jpg',
                    alt: 'Čistenie silážnej jamy',
                    title: 'Čistenie silážnej jamy'
                },
                {
                    itemImageSrc: im3,
                    thumbnailImageSrc: 'src/assets/slider/3.jpg',
                    alt: 'Prevoz materiálu a vyrovnávanie pozemku',
                    title: 'Prevoz materiálu a vyrovnávanie pozemku'
                },
                {
                    itemImageSrc: im4,
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
    methods: {
        sendEmail: function () {
            emailjs
                .sendForm(
                    "service_2q2jsba",
                    "template_n2e3wia",
                    this.$refs.form,
                    "4ovSr8zsNxLtp3oXW"
                )
                .then(
                    (result) => {
                        this.$forceUpdate();
                        console.log("SUCCESS!", result.text);
                        window.location.reload();
                    },
                    (error) => {
                        console.log("FAILED...", error.text);
                    }
                );
        },
        validate: function () {
            this.emailBlured = true;
            if (this.validEmail(this.email)) {
                this.valid = true;
            }
        },
        validEmail: function (email) {
            const re = /(.+)@(.+){2,}\.(.+){2,}/;
            return re.test(email.toLowerCase());
        },
        submit: function () {
            this.validate();
            if (this.valid) {
                //THIS IS WHERE YOU SUBMIT DATA TO SERVER
                this.submitted = true;
            }
        },
    }
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

::v-deep(.p-checkbox .p-checkbox-box.p-highlight) {
    border-color: #F9B506;
    background: #F9B508;
}


</style>