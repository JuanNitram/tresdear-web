<template>
    <div v-if="projects.length" id="projects" class="pt-5 pt-sm-5 pt-md-4 pt-lg-5 pt-xl-5">
        <b-container>
            <b-row>
                <b-col>
                    <div class="section-title">
                        <h2>Sectores</h2>
                        <div class="guard">
                            <img src="~/static/img/guard.png" alt="">
                            <!-- <div class="main-triangle"></div>
                            <div class="small-triangle"></div> -->
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
        <!-- <div class="projects-filter-ls">
            <ul>
                <li>
                    <a href="#">filtro 1</a>
                </li>
                <li>
                    <a href="#">filtro 2</a>
                </li>
                <li>
                    <a href="#">filtro 3</a>
                </li>
                <li>
                    <a href="#">filtro 4</a>
                </li>
            </ul>
        </div> -->
        <!-- <div class="projects-ls"> -->
            <no-ssr>
                <flickity ref="flickity_projects" :options="projects_flickityOptions" class="projects-ls" :class="{un_flickity: projects_flickityStatus == false}">
                    <projectItem
                        v-for="project in projects"
                        :key="project.id"
                        v-bind:project="project"
                        >
                    </projectItem>
                </flickity>
            </no-ssr>
        <!-- </div> -->
    </div>
</template>

<script>
    import projectItem from '~/components/projects/projectItem'
    import { mapState } from 'vuex'

    export default {
        components: {
            projectItem
        },
        computed: {
            projects(){
              return this.$store.getters.projects
            }
        },
        methods: {
            PackeryCreate() {
                this.packeryGrid = new Packery( '.projects-ls.un_flickity', {
                  // options
                  itemSelector: '.project-item',
                  // gutter: 10
                });
            },
            PackeryDestroy() {
                if (this.packeryGrid) {
                    this.packeryGrid.destroy();
                }
            },
            handleResize() {
                this.window.width = window.innerWidth;
            },
        },
        data() {
            return {
                packeryGrid: null,
                projects_flickityStatus: false,
                projects_flickityOptions: {
                    prevNextButtons: false,
                    cellSelector: '.project-item',
                    cellAlign: 'center',
                    prevNextButtons: true,
                    pageDots: false,
                    wrapAround: true,
                    contain: true,
                    groupCells: 1,
                    watchCSS: true,
                    on: {

                        ready: function() {
                            this.resize();
                        }
                    }
                },
                window: {
                    width: 0,
                },
            }
        },
        created(){
          if(this.projects.length == 0){
            this.$store.dispatch('fetch', 'projects').then((res) => { });
          }
        },
        mounted(){
            this.handleResize();

            window.addEventListener('resize', (event) => {
                this.handleResize();
                  if (this.window.width >= 768) {
                      this.projects_flickityOptions.watchCSS = true;
                      this.projects_flickityStatus = false;
                      this.$refs.flickity_projects.rerender();
                  }else {
                      this.projects_flickityOptions.watchCSS = false;
                      this.projects_flickityStatus = true;
                      this.$refs.flickity_projects.rerender();
                  }
            });
        },
        updated() {
            if (this.window.width >= 768) {
              this.projects_flickityOptions.watchCSS = true;
              this.projects_flickityStatus = false;
              this.$refs.flickity_projects.rerender();
            } else {
              this.projects_flickityOptions.watchCSS = false;
              this.projects_flickityStatus = true;
              this.$refs.flickity_projects.rerender();
            }
        },
        destroy() {
            this.PackeryDestroy();
        },
    }
</script>
