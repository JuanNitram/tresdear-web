<template>
    <div v-if="clients.length" id="clients" class="pt-0 pt-sm-0 pt-md-4 pt-lg-5 pt-xl-5 pb-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-5">
        <b-container>
            <b-row>
                <b-col>
                    <div class="section-title">
                        <h2>Clientes</h2>
                        <div class="guard">
                            <img src="~/static/img/guard.png" alt="">
                            <!-- <div class="main-triangle"></div>
                            <div class="small-triangle"></div> -->
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div class="clients-ls plans-ls pl-3 pr-3 pl-sm-4 pr-sm-4 pl-md-5 pr-md-5 pl-lg-5 pr-lg-5 pl-xl-5 pr-xl-5">
            <no-ssr>
              <flickity ref="flickity_clients" :options="clients_flickityOptions" :class="{un_flickity: clients_flickityStatus}">
                  <clientItem
                  v-for="(client) in clients"
                  :key="client.id"
                  v-bind:client="client"
                      >
                  </clientItem>
              </flickity>
            </no-ssr>
        </div>
    </div>
</template>

<script>
import clientItem from '~/components/clients/clientItem'
import { mapState } from 'vuex'

    export default {
        components: {
            clientItem
        },
        computed: {
          clients(){
            return this.$store.getters.clients
          }
        },
        data() {
            return {
                clients_flickity: null,
                clients_flickityStatus: false,
                clients_flickityOptions: {
                    prevNextButtons: false,
                    pageDots: false,
                    wrapAround: true,
                    cellSelector: '.client-item',
                    contain: true,
                    cellAlign: 'center',
                    groupCells: true,
                    watchCSS: true

                    // any options from Flickity can be used
                },
                window: {
                    width: 0,
                },
            }
        },
        methods: {
            next() {
                this.$refs.flickity_clients.next();
            },
            previous() {
                this.$refs.flickity_clients.previous();
            },

            handleResize() {
                this.window.width = window.innerWidth;
            },
        },

        created(){
          if(this.clients.length == 0){
            this.$store.dispatch('fetch', 'clients').then((res) => { });
          }
        },

        mounted() {
            this.handleResize();

            if (this.window.width >= 1200) {
                this.clients_flickityOptions.watchCSS = true;
                this.clients_flickityStatus = true;
            }else {
                this.clients_flickityOptions.watchCSS = false;
                this.clients_flickityStatus = false;
            }

            window.addEventListener('resize', (event) => {
                this.handleResize();

                if (this.window.width >= 1200) {
                    this.clients_flickityOptions.watchCSS = true;
                    this.clients_flickityStatus = true;
                    this.$refs.flickity_clients.rerender();
                }else {
                    this.clients_flickityOptions.watchCSS = false;
                    this.clients_flickityStatus = false;
                    this.$refs.flickity_clients.rerender();
                }

            });

        },

        destroyed() {
            window.removeEventListener('resize', this.handleResize);
        }
    }
</script>
