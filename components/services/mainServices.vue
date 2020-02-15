<template>
    <div id="services" class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-5">
        <b-container>
            <b-row>
                <b-col>
                    <div class="section-title">
                        <h2>Servicios</h2>
                        <div class="guard">
                            <img src="~/static/img/guard.png" alt="">
                            <!-- <div class="main-triangle"></div>
                            <div class="small-triangle"></div> -->
                        </div>
                    </div>
                </b-col>
            </b-row>
            <b-row>
                <b-col>
                    <b-container class="services-ls">
                        <b-row>
                            <serviceItem
                              v-for="(servicio, s) in services"
                              :key="servicio.id"
                              :servicio="servicio"
                              :class="{'is-shown':servicio.id == index}"
                            >
                            </serviceItem>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
<!--        <modal id="my-modal" title="MODAL EXAMPLE" :status="this.modalStatus"></modal>-->
    </div>
</template>

<script>
import serviceItem from '~/components/services/serviceItem'
import modal from '~/components/partials/modal'
import { mapState } from 'vuex'

    export default {
        components: {
            serviceItem,
            modal
        },
        computed: mapState([
            'services'
        ]),
        data() {
            return {
                index: null,
                modalStatus: false,
            }
        },

        updated() {
            this.$nuxt.$on('modalHide', (status) => {
                this.modalStatus = status;
            });

            this.$nuxt.$on('serviceSelected', (index) => {
                this.index = index;
                this.modalStatus = true;
            });
        },

        mounted() {
            this.$nuxt.$on('serviceSelected', (index) => {
                this.index = index;
                this.modalStatus = true;
            });

        },
    }
</script>
