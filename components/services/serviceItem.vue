<template>
    <b-col cols="12" sm="12" md="6" lg="6" xl="6">

        <b-modal :id="'modal-' + servicio.id" hide-footer>
          <template slot="modal-header">
            <h3>{{ servicio.title }}</h3>
            <b-button class="mt-3" block @click="$bvModal.hide('modal-' + servicio.id)">
              <font-awesome-icon :icon="['fa', 'times-circle']"/>
            </b-button>
          </template>
          <!-- <div class="img-box"> -->
            <div id='vrview'></div>
          <!-- </div> -->
        </b-modal>

        <div v-if="checkType(servicio.id)" class="service-item" v-bind:class="{ pointer: servicio.id === 6}" @click="getSelected(servicio.id)">
            <div class="img-box">
                <img :src="servicio.imageLink" alt="">
            </div>
            <div class="txt-content">
                <h3>{{servicio.title}}</h3>
                <p>{{servicio.description}}</p>
            </div>
        </div>
        <div v-else class="service-item service-item-left" @click="getSelected(servicio.id)">
            <div class="txt-content">
                <h3>{{servicio.title}}</h3>
                <p>{{servicio.description}}</p>
            </div>
            <div class="img-box">
                <img :src="servicio.imageLink" alt="">
            </div>
        </div>
    </b-col>
</template>

<script>
    export default {
        props: {
            servicio: Object,
        },

        data() {
            return {
                // selected: 'undefined',
              modalStatus: false,
            }
        },
        methods: {
            checkType(id) {
                if (id % 2 == 0) {
                    return true;
                }else {
                    return false;
                }
            },
            getSelected(index) {
                // this.$nuxt.$emit('serviceSelected', index);
              if(this.servicio.id === 6){
                this.$bvModal.show('modal-6')
                setTimeout(() => {
                  var vrView = new VRView.Player('#vrview', {
                    image: 'https://api.tresdear.com/storage/fotos-360.jpg',
                    // width: 800,
                    // height: 600
                  });

                },200)
              }
            },

            // itemActive(item) {
            //   this.selected = item;
            //   this.$nuxt.$emit(indexSelected, this.selected);
            // },
        },

        created() {
            // if(!indexSelected) {
            //     indexSelected = null
            // console.log(this.selected);
            // this.$nextTick(function() {
            //
            // });
        },
        updated(){
          // var vrView = new VRView.Player('#vrview', {
          //   image: 'https://api.tresdear.com/storage/fotos-360.jpg',
          //   width: 800,
          //   height: 600
          // });
        }
    }
</script>

<style>
  .pointer {
    cursor: pointer;
  }
</style>
