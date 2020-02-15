<template>
    <div  class="main-page-container project-file">
        <div v-if="project">
            <breadcrumb
                v-if="renderBreadcrumb"
                :title="project.name"
                :description="project.description"
                :medias="medias"
                :options="{
                    flickity: true,
                    overlay: true
                }"
            >

            </breadcrumb>
            <b-container class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-5">
                <b-row>
                    <b-col cols="12">
                        <div class="project-info-header">
                            <h2>{{ project.name }}</h2>
                            <div v-if="!isMobile" class="consult-btn">
                                <nuxt-link :to="{name: 'contacto', params: { subject: project.name } }">
                                        Consultar
                                </nuxt-link>
                            </div>
                            <!-- <div v-if="!isMobile" class="share-box">
                                <span>Compartir:</span>
                                <b-navbar-nav class="social-media-box">
                                    <li>
                                        <b-link href="tel:21345663463">
                                            <font-awesome-icon :icon="['fab', 'whatsapp']"/>
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link href="tel:21345663463">
                                            <font-awesome-icon :icon="['fab', 'facebook']"/>
                                        </b-link>
                                    </li>
                                    <li>
                                        <b-link href="tel:21345663463">
                                            <font-awesome-icon :icon="['fab', 'instagram']"/>
                                        </b-link>
                                    </li>
                                </b-navbar-nav>
                            </div> -->
                        </div>
                    </b-col>
                </b-row>
                <b-row class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-0 pb-sm-0 pb-md-4 pb-lg-5 pb-xl-5">
                    <b-col cols="12" v-html="descriptionQuill(this.project.description_quill)">

                    </b-col>
                </b-row>
                <div v-if="isMobile" class="consult-btn mb-4">
                    <nuxt-link :to="{name: 'contacto', params: { subject: project.name } }">
                            Consultar
                    </nuxt-link>
                </div>
                <!-- <b-row v-if="isMobile" class="pt-0 pt-sm-0 pt-md-0 pt-lg-0 pt-xl-0 pb-3 pb-sm-4 pb-md-4 pb-lg-5 pb-xl-5">
                    <b-col cols="12">
                        <div class="share-box">
                            <span>Compartir:</span>
                            <b-navbar-nav class="social-media-box">
                                <li>
                                    <b-link href="tel:21345663463">
                                        <font-awesome-icon :icon="['fab', 'whatsapp']"/>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="tel:21345663463">
                                        <font-awesome-icon :icon="['fab', 'facebook']"/>
                                    </b-link>
                                </li>
                                <li>
                                    <b-link href="tel:21345663463">
                                        <font-awesome-icon :icon="['fab', 'instagram']"/>
                                    </b-link>
                                </li>
                            </b-navbar-nav>
                        </div>
                    </b-col>
                </b-row> -->
                <b-row class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-4 pb-sm-4 pb-md-4 pb-lg-5 pb-xl-5">
                    <b-col cols="12">
                        <div class="iframe-box ">
                            <iframe width="100%" height="100%" :src="project.link" frameborder="0" allowfullscreen="" allowvr=""></iframe>
                        </div>
                    </b-col>
                </b-row>
            </b-container>
            <div class="banner">

            </div>
        </div>
    </div>

</template>

<script>
import breadcrumb from '~/components/partials/breadcrumb'
import { mapState } from 'vuex'

export default {
    components: {
      breadcrumb
    },
    computed: {
      ...mapState([
          'projects'
      ]),
    },
    data() {
        return {
            window: {
                width: null,
            },
            isMobile: null,
            projectId: null,
            projectSlug: null,
            project: null,
            medias: [],
            renderBreadcrumb: false
        }
    },

    methods: {
        descriptionQuill(quillDelta) {
            let converter = new QuillDeltaToHtmlConverter(JSON.parse(quillDelta).ops);
            return converter.convert();
        },
        handleResize() {
            this.window.width = window.innerWidth;
        },
    },

    async created() {
        if(this.$store.getters.projects.length == 0){
          await this.$store.dispatch('fetch', 'projects').then((res) => {
            this.projectId = this.$route.params.id;
            this.projectSlug = this.$route.params.slug;
            if (this.projectId) {
              this.$store.getters.projects.find((item)=> {
                if (item.id == this.projectId) this.project = item;
              })
            } else {
              this.projects.find((item)=> {
                if (this.slugify(item.name) == this.projectSlug) this.project = item;
              })
            }
          });
        } else {
          this.projectId = this.$route.params.id;
          this.projectSlug = this.$route.params.slug;
          if (this.projectId) {
            this.$store.getters.projects.find((item)=> {
              if (item.id == this.projectId) this.project = item;
            })
          } else {
            this.projects.find((item)=> {
              if (this.slugify(item.name) == this.projectSlug) this.project = item;
            })
          }
        }
        if(this.project.medias.breadcrumb){
          this.medias = this.project.medias.breadcrumb.original;
        }
        this.renderBreadcrumb = true;
    },
    mounted() {
        if (this.window.width <= 768) {
            this.isMobile = true;
        }else {
            this.isMobile = false;
        }

        window.addEventListener('resize', (event) => {
            this.handleResize();

            if (this.window.width <= 768) {
                this.isMobile = true;
            }else {
                this.isMobile = false;
            }
        });
    },
    destroyed() {
        window.removeEventListener('resize', this.handleResize);
    },
}
</script>
