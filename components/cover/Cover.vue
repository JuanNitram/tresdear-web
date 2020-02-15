<template>
    <div id="cover">
        <transition name="fade">
            <Preloader  :color="'#e4b013'" :size='40'>
            </Preloader>
        </transition>
        <no-ssr>
            <flickity v-if="sliders.length" ref="flickity_cover" :options="cover_flickityOptions">
                <CoverItem
                    v-for="(slider, i) in sliders"
                    :key="slider.id"
                    v-bind:portada="slider"
                    >
                </CoverItem>
            </flickity>
        </no-ssr>
    </div>
</template>

<script>
    import CoverItem from '~/components/cover/CoverItem';
    import Preloader from '~/components/partials/preloader';
    import { mapState } from 'vuex';

    export default {
        components: {
          CoverItem,
          Preloader
        },
        computed: {
          sliders(){
            return this.$store.getters.sliders
          }
        },
        data() {
            return {
                window: {
                    width: 0,
                },
                cover_flickityOptions: {
                    draggable: true,
                    prevNextButtons: true,
                    pageDots: true,
                    wrapAround: true,
                    cellSelector: '.carousel-cell',
                    contain: true,
                    cellAlign: 'center',
                    adaptiveHeight: true,
                    // lazyLoad: true,
                    imagesLoaded: true,
                    setGallerySize: true,
                    autoPlay:6000,
                    on: {
                        ready: function() {
                            setTimeout(()=>{
                                document.getElementById('cover').classList.add('is-loaded');
                            }, 500);
                            this.resize();
                        }
                    }
                },
            }
        },
        created(){
          if(this.sliders.length == 0){
            this.isLoading = true
            this.$store.dispatch('fetch', 'sliders').then((res) => {

            });
          }
        },
        methods: {
          next() {
              this.$refs.flickity_cover.next();
          },
          previous() {
              this.$refs.flickity_cover.previous();
          },
        },
    }



</script>
