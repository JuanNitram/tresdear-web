<template>
    <div v-if="medias.length" id="breadcrumb">
        <div v-if="options.flickity == false || medias.length == 1">
            <div class="img-box">
                <img :src="medias[0].full_url" alt="">
            </div>
        </div>
        <no-ssr v-else>
            <flickity :options="flickityOptions">
                <template v-for="(media, i) in medias">
                    <div class="img-box" :key="i">
                        <img :src="media.full_url" alt="">
                    </div>
                </template>
            </flickity>
        </no-ssr>
        <div class="breadcrumb-overlay" :class="options.overlay == false ? 'disable' : '' ">
            <b-container>
                <b-row>
                    <b-col>
                        <div class="content-box">
                            <h1 v-if="this.title">{{ this.title }}</h1>
                            <h1 v-else>{{ $nuxt.$route.name }}</h1>
                            <p v-if="medias.length == 1">{{ this.description }}</p>
                            <!-- <nav>
                                <template v-for="(item, index) in crumbs" :item="item">
                                    <a :class="item.active == true ? 'active' : ''" :to="item.to">
                                        {{ item.text }}
                                    </a>
                                    <span v-if="index % 2 != 0">
                                        <font-awesome-icon :icon="['fas', 'angle-double-right']"/>
                                    </span>
                                </template>
                            </nav> -->
                        </div>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            title: String,
            description: String,
            medias: Array,
            options: Object
        },

        data() {
            return {
                flickityStatus: false,
                flickityOptions: {
                    draggable: true,
                    prevNextButtons: true,
                    pageDots: false,
                    wrapAround: true,
                    cellSelector: '.img-box',
                    cellAlign: 'center',
                    adaptiveHeight: true,
                    // lazyLoad: true,
                    imagesLoaded: true,
                    setGallerySize: true,
                    autoPlay: 5000,
                    on: {
                        ready: function() {
                            this.resize();
                        }
                    }
                }
            }
        },

        created(){
          // console.log(this.medias)
        },
        computed: {
            // AGREGAR LINK "HOME" SI SÓLO TENGO UN ITEM LUEGO DEL PATH ("/")
            // crumbs: function() {
            //     let pathArray = this.$route.path.split("/");
            //     pathArray.shift()
            //     let breadcrumbs = pathArray.reduce((breadcrumbArray, path, idx) => {
            //         breadcrumbArray.push({
            //             path: path,
            //             to: breadcrumbArray[idx - 1]
            //             ? '/' + breadcrumbArray[idx - 1].path + '/' + path
            //             : '/' + path,
            //             // text: this.$route.matched[idx].meta.breadCrumb || path,
            //             active: this.$route.matched ? true : false,
            //         });
            //         console.log('hola', this.$route.matched[idx].meta);
            //         return breadcrumbArray;
            //     }, [])
            //     return breadcrumbs;
            // }
        },
    }
</script>
