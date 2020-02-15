<template>
        <div :class="{ active: isActive }" class="project-item">
          <nuxt-link :to="{name: 'projects-slug', params: { slug:slugify(project.name) } }">
            <!-- <nuxt-link :to="project.link"> -->
                <div class="overlay-content-box">
                    <b-container>
                        <b-row>
                            <b-col>
                                <b-row>
                                    <b-col>
                                        <h3>{{project.name}}</h3>
                                    </b-col>
                                </b-row>
                                <b-row align-h="center">
                                    <b-col cols="10" class="mt-2 mb-2">
                                        <p>{{project.description}}</p>
                                    </b-col>
                                </b-row>

                            </b-col>
                        </b-row>
                        <!-- <b-row align-h="center">
                                <b-col class="mt-3 mb-3 d-flex justify-content-center">
                                    <a class="project-item-call2action" href="#">Ver más</a>
                                </b-col>
                            </b-row> -->
                    </b-container>
                </div>
                <div class="img-box">
                    <img v-if="imageUrl" :src="imageUrl" alt="">
                    <img v-else src="~static/img/default/normal_default.png">
                </div>

            </nuxt-link>

        </div>
        <!-- <div v-else class="service-item service-item-left">
            <div class="txt-content">
                <h3>{{servicio.title}}</h3>
                <p>{{servicio.description}}</p>
            </div>
            <div class="img-box">
                <img :src="servicio.imageLink" alt="">
            </div>
        </div> -->
</template>

<script>
    export default {
        props: {
            project: Object

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
                isActive: false
            }
        },
        methods: {
            active(id) {
                if(id == 3) {
                    this.isActive = true;
                    // console.log(this.project.id);
                }else {
                    this.isActive = false;
                    // console.log(this.project.id);
                }
            }
        },
        mounted() {
          this.active(this.project.id);
        },
        computed: {
          imageUrl(){
            if(this.project.medias.thumbnail) return this.project.medias.thumbnail.normal[0].full_url
            return null
          }
        }
    }
</script>
