<template lang="html">
    <b-modal id="bv-modal-example" hide-footer v-model="modalStatus">
        <template slot="modal-header">
            <h3>{{ this.title }}</h3>

            <b-button class="mt-3" block @click="modalStatus = null">
                 <font-awesome-icon :icon="['fa', 'times-circle']"/>
            </b-button>
        </template>
        <!-- <div class="img-box"> -->
         <div id='vrview'></div>
        <!-- </div> -->
    </b-modal>
</template>

<script>

    export default {
        props: {
            title: String,
            status: Boolean
            // description: String,
            // medias: Array,
            // options: Object

        },
        data() {
            return {
                modalStatus: null
            }
        },
        watch: {
          	status() {
                this.modalStatus = this.status;
            }
        },
        methods: {
            modalHide() {
                this.$bvModal.hide('bv-modal-example');
            }
        },
        mounted(){
        },
        updated() {
            var vrView = new VRView.Player('#vrview', {
              image: 'https://api.tresdear.com/storage/fotos-360.jpg',
              // width: 800,
              // height: 600
            });
            if(!this.modalStatus) {
                this.$nuxt.$emit('modalHide', false);
            }
        }
    }
</script>

<style lang="scss">
    .modal {
        min-height: 100vh;
        overflow: hidden;
        display: flex;
        align-items: center;
        justify-content: center;

        .modal-dialog {
            height: 100%;
            margin: 0px;
            width: auto;
            max-width: 100%;
            padding: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            overflow: hidden;
            position: relative;

            // @media screen and(max-width: 800px) {
            //     height: auto;
            //     width: 100%;
            // }

            .modal-content {
                // height:  100%;
                height: 80%;
                width: 80%;

                @media screen and(max-width: 768px) {
                    height: 100%;
                    width: 100%;
                }

                .modal-header {
                    display: flex;
                    flex-direction: row;
                    align-items: center;
                    justify-content: space-between;

                    h3 {
                        font-size: 2rem;
                        margin-bottom: 0px;

                        @media screen and(max-width: 992px) {
                            font-size: 1.5rem;
                        }

                        @media screen and(max-width: 768px) {
                            font-size: 1rem;
                        }
                    }

                    button {
                        width: fit-content;
                        background: none;
                        border: none;
                        margin-top: 0px!important;

                    }
                }

                .modal-body {
                    height: 100%;
                    overflow: hidden;
                    padding: 0px;
                    margin: 15px;


                    // .img-box {
                    //     height: 100%;
                    //     width: fit-content;

                        // @media screen and(max-width: 1080px) {
                        //     height: auto;
                        //     width: 100%;
                        // }

                        #vrview {
                            height: auto!important;
                            width: 100%!important;

                            iframe {
                                width: 100%;
                                height: -webkit-fill-available;
                            }
                        }

                        // img {
                        //     width: auto;
                        //     height: 100%;
                        //
                        //     // @media screen and(max-width: 1080px) {
                        //     //     height: auto;
                        //     //     width: 100%;
                        //     // }
                        // }
                    // }

                }
            }

        }
    }
</style>
