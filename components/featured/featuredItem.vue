<template>
        <div class="featured-item">
            <div class="overlay-content-box">
                <b-container>
                    <b-row>
                        <b-col>
                            <b-row>
                                <b-col>
                                    <h3>{{featured.title}}</h3>
                                </b-col>
                            </b-row>
                            <b-row align-h="center">
                                <b-col cols="10" class="mt-2 mb-2">
                                    <p>{{featured.description}}</p>
                                </b-col>
                            </b-row>

                        </b-col>
                    </b-row>
                    <b-row align-h="center">
                        <b-col class="mt-3 mb-3 d-flex justify-content-center">
                            <!-- <nuxt-link v-if="featured.id == 3" class="featured-item-btn" :to="{ path: '/contacto', alias:'contacto'}">Contáctanos</nuxt-link> -->
                            <nuxt-link class="featured-item-btn" :to="{name: 'projects-slug', params: { slug:slugify('nombre-project') } }">Ver más</nuxt-link>
                        </b-col>
                    </b-row>
                </b-container>
            </div>
            <div class="img-box">
                <img :src="featured.imageLink" alt="">
            </div>

        </div>
</template>

<script>
    export default {
        props: {
            featured: Object

        },

        // methods: {
        //     checkType(id) {
        //         if (id % 2 == 0) {
        //             return true;
        //         }else {
        //             return false;
        //         }
        //     }
        // },

        data() {
            return {
            }
        }
    }
</script>
