<template>
    <div v-if="projects.length" id="projects" class="pt-5 pt-sm-5 pt-md-4 pt-lg-5 pt-xl-5">
        <b-container>
            <b-row>
                <b-col>
                    <div class="section-title" data-aos="fade-up">
                        <h2>Sectores</h2>
                        <div class="guard">
                            <img src="~/static/img/guard.png" alt="">
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <div data-aos="fade-up">
          <div v-if="$device.isMobile === true" id="flickity-carousel" class="projects-ls" >
            <projectItem v-for="project in projects" :key="project.id" v-bind:project="project" />
          </div>
          <div v-else id="packery-grid" class="projects-ls">
              <projectItem v-for="project in projects" :key="project.id" v-bind:project="project" />
          </div>
        </div>
      
    </div>
</template>

<script>
    import projectItem from '~/components/projects/projectItem'
    import imagesLoaded from 'imagesloaded';

    export default {
      components: {
          projectItem
      },

      data() {
        return {
          packeryGrid: undefined,
          flickityCarousel: undefined
        }
      },

      async mounted(){
        if(this.projects.length == 0){
          await this.$store.dispatch('fetch', 'projects');
        }

        if(this.$device.isDesktop === true){
          imagesLoaded( '#packery-grid', () => {
            this.PackeryCreate();
          });
        } else {
          imagesLoaded( '#flickity-carousel', () => {
            this.initFlickity();
          });
        }
      },

      methods: {
        PackeryCreate() {
          this.packeryGrid = new Packery( '#packery-grid', {
            itemSelector: '.project-item',
          });
        },

        initFlickity() {
          this.flickityCarousel = new Flickity('#flickity-carousel', {
            wrapAround: true,
            autoPlay: true,
            pauseAutoPlayOnHover: true,
            fade: true,
            pageDots: false,
          });
        }
      },

      computed: {
        projects(){
          return this.$store.getters.projects
        }
      },
    }
</script>
