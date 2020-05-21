<template>
    <div v-if="plans.length" id="plans" class="pt-5 pt-sm-5 pt-md-4 pt-lg-5 pt-xl-5 pb-5 pb-sm-5 pb-md-4 pb-lg-5 pb-xl-5">
        <b-container fluid>
            <b-row>
                <b-col>
                    <div class="section-title">
                        <h2>Precios</h2>
                        <div class="guard">
                            <img src="~/static/img/guard.png" alt="">
                            <!-- <div class="main-triangle"></div>
                            <div class="small-triangle"></div> -->
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col cols="12">
                    <div class="plans-ls pl-3 pr-3 pl-sm-4 pr-sm-4 pl-md-5 pr-md-5 pl-lg-5 pr-lg-5 pl-xl-5 pr-xl-5">
                        <no-ssr>
                            <flickity ref="flickity_plans" :options="plans_flickityOptions" :class="{un_flickity: plans_flickityStatus == false}">
                                <planItem
                                    v-for="(plan, index) in plans"
                                    :key="plan.id"
                                    v-bind:plan="plan"
                                    >
                                </planItem>
                            </flickity>
                        </no-ssr>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
    import planItem from '~/components/plans/planItem'
    import { mapState } from 'vuex'

    export default {
        components: {
            planItem
        },
        computed: {
            ...mapState([
                'plans'
            ]),
        },
        data() {
            return {
                // plans_flickity: null,
                plans_flickityStatus: false,
                plans_flickityOptions: {
                    pageDots: false,
                    freeScroll: false,
                    wrapAround: true,
                    pauseAutoPlayOnHover: true,
                    prevNextButtons: true,
                    // lazyLoad: 1,
                    groupCells: true,
                    cellAlign: 'center',
                    setGallerySize: true,
                    percentPosition: true,
                    resize: true,
                    watchCSS: false,
                    autoPlay: 5000,
                    on: {

                        ready: function() {
                            this.resize();
                        }
                    }

                },
                window: {
                    width: 0,
                },
            }
        },
        methods: {
            // next() {
            //     this.$refs.flickity_plans.next();
            // },
            // previous() {
            //     this.$refs.flickity_plans.previous();
            // },
            handleResize() {
                this.window.width = window.innerWidth;
            },
        },
        created(){
          if(this.plans.length == 0){
            this.$store.dispatch('fetch', 'prices').then((res) => {
            });
          }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        updated() {
            if (this.plans.length <= 4) {
                if (this.window.width <= 992 && this.plans.length == 3 ||
                    this.window.width <= 768 && this.plans.length > 1
                ) {
                    this.plans_flickityOptions.watchCSS = false;
                    this.plans_flickityStatus = true;

                    this.$refs.flickity_plans.rerender();
                } else {
                    this.plans_flickityOptions.watchCSS = true;
                    this.plans_flickityStatus = false;

                    this.$refs.flickity_plans.rerender();
                }

            }else {
                this.plans_flickityOptions.watchCSS = true;
                this.plans_flickityStatus = false;

                this.$refs.flickity_plans.rerender();
            }
        },
        mounted() {
            this.handleResize();


            window.addEventListener('resize', (event) => {
                this.handleResize();

                if (this.plans.length <= 4) {
                    if (this.window.width <= 992 && this.plans.length == 3 ||
                        this.window.width <= 768 && this.plans.length > 1
                    ) {
                        this.plans_flickityOptions.watchCSS = false;
                        this.plans_flickityStatus = true;

                        this.$refs.flickity_plans.rerender();
                    } else {
                        this.plans_flickityOptions.watchCSS = true;
                        this.plans_flickityStatus = false;

                        this.$refs.flickity_plans.rerender();
                    }

                }else {
                    this.plans_flickityOptions.watchCSS = true;
                    this.plans_flickityStatus = false;

                    this.$refs.flickity_plans.rerender();
                }

            });

        }
    }
</script>
