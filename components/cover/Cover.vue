<template>
    <div id="cover">
        <Preloader :size="20" :color="'#e4b013'"></Preloader>
        <transition name="fade">
          <div id="flickity-slider" class="hidden" style="min-height: 80vh">
            <CoverItem
              v-for="(slider, i) in sliders"
              :key="slider.id"
              v-bind:portada="slider"
            >
            </CoverItem>
          </div>
        </transition>

      <div class="scroll-down cursor-pointer" :class="{'d-none': scrollY > 0}"></div>
    </div>
</template>

<script>
    import CoverItem from '~/components/cover/CoverItem';
    import Preloader from '~/components/partials/preloader';
    import imagesLoaded from "imagesloaded";

    import backgroundUrl from '~/assets/img/cover/about-us.png'

    export default {
      components: {
        CoverItem,
        Preloader
      },

      data() {
          return {
            flickityCarousel: undefined,
            backgroundUrl,
            scrollY: 0,
            flickityReady: false
          }
      },

      async mounted(){
        var _self = this;
        window.addEventListener("scroll", function (event) {
          _self.scrollY = this.scrollY;
        });

        if(this.sliders.length == 0){
          await this.$store.dispatch('fetch', 'sliders');
        }

        this.$store.commit('IMAGES_LOADING');
        setTimeout(() => {
          imagesLoaded( '#flickity-slider', () => {
            this.$store.commit('IMAGES_LOADED');
            this.initFlickity();
          });
        }, 3000);


      },

      methods: {
        initFlickity() {
          this.flickityCarousel = new Flickity('#flickity-slider', {
            wrapAround: true,
            autoPlay: true,
            pauseAutoPlayOnHover: true,
            fade: true,
            pageDots: false,
            on: {
              ready: function() {
                this.resize();
                document.getElementById('flickity-slider').classList.remove('hidden');
                document.getElementById('flickity-slider').classList.add('fade-in');
              }
            }
          });
        }
      },

      computed: {
        sliders(){
          return this.$store.getters.sliders
        }
      },
    }
</script>

<style>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .9s;
  }
  .fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
  }
</style>
