<template>
    <div id="featured">
        <no-ssr>
            <flickity v-if="!featureds" ref="flickity_featureds" :options="featureds_flickityOptions" class="featured-ls" :class="{un_flickity: featureds_flickityStatus == false}">
                <featuredItem
                    v-for="(featured, index) in limitedFeatureds"
                    :key="featured.id"
                    v-bind:featured="featured"
                    >
                </featuredItem>
                <div class="featured-item featured-item-call2action">
                    <div class="overlay-content-box">
                        <b-container>
                            <b-row>
                                <b-col>
                                    <b-row>
                                        <b-col>
                                            <h3>Trabaja con nosotros</h3>
                                        </b-col>
                                    </b-row>
                                    <b-row align-h="center">
                                        <b-col cols="10" class="mt-2 mb-2">
                                            <p>Contamos con los mejores equipos para tours digitales y planos</p>
                                        </b-col>
                                    </b-row>

                                </b-col>
                            </b-row>
                            <b-row align-h="center">
                                <b-col class="mt-3 mb-3 d-flex justify-content-center">
                                    <a class="featured-item-btn" href="/contacto">Contáctanos</a>
                                </b-col>
                            </b-row>
                        </b-container>
                    </div>
                </div>
            </flickity>
            <div v-else class="separator">
                <img src="~/static/img/separator.jpg" alt="">
            </div>
        </no-ssr>
    </div>
</template>

<script>
import featuredItem from '~/components/featured/featuredItem'
import { mapState } from 'vuex'

    export default {
        components: {
            featuredItem

        },
        computed: {
            ...mapState(['featureds']),
            limitedFeatureds(){
                return this.featuredsLimit ? this.featureds.slice(0,this.featuredsLimit) : this.featureds
            }
        },

        data() {
            return {
                featureds_flickity: null,
                featureds_flickityStatus: false,
                featureds_flickityOptions: {
                    prevNextButtons: true,
                    pageDots: false,
                    wrapAround: true,
                    cellSelector: '.featured-item',
                    cellAlign: 'center',
                    groupCells: 1,
                    initialIndex: 2,
                    watchCSS: true,
                    autoPlay: 4000,
                },
                window: {
                    width: 0,
                },
                featuredsLimit: 3,
            }
        },
        methods: {
            // next() {
            //     this.$refs.flickity_featureds.next();
            // },
            // previous() {
            //     this.$refs.flickity_featureds.previous();
            // },
            handleResize() {
                this.window.width = window.innerWidth;
            },
            setFeaturedsLimit() {
                if(this.featureds) {
                    if (this.window.width > 1200) {
                        this.featuredsLimit = 2;
                    }else if(this.window.width <= 1200){
                        this.featuredsLimit = 3;
                    }
                }
            }
        },
        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        },
        mounted() {
            this.handleResize();

            // console.log(this.featureds);
            if(this.featureds.length!==0) {
                this.setFeaturedsLimit();
            }

            window.addEventListener('resize', (event) => {
                this.handleResize();


                if(this.featureds.length!==0) {
                    this.setFeaturedsLimit();

                    if (this.window.width >= 768) {
                        this.featureds_flickityOptions.watchCSS = true;
                        this.featureds_flickityStatus = false;
                        this.$refs.flickity_featureds.rerender();
                    }else {
                        this.featureds_flickityOptions.watchCSS = false;
                        this.featureds_flickityStatus = true;
                        this.$refs.flickity_featureds.rerender();
                    }
                }


            });

        },
        updated() {
            if(this.featureds.length!==0) {

                if (this.window.width >= 768) {
                    this.featureds_flickityOptions.watchCSS = true;
                    this.featureds_flickityStatus = false;
                    this.$refs.flickity_featureds.rerender();
                }else {
                    this.featureds_flickityOptions.watchCSS = false;
                    this.featureds_flickityStatus = true;
                    this.$refs.flickity_featureds.rerender();
                }
            }
        }
    }
</script>
