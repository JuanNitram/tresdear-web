<template >
    <div v-if="portada.active && imageUrl" class="carousel-cell">
        <div class='image'
             :style='"background-image: url("+ imageUrl +")"'>
        </div>
        <div class="overlay">
            <div class="overlay-content-box">
                <div class="txt-box">
                    <h2>{{portada.subtitle}}</h2>
                    <h1>{{portada.title}}</h1>
                </div>
                <div class="call2action-box">
                    <a v-if="portada.url" :href="portada.url" :target="portada.blank ? 'blank' : '_self'" class="call2action">Ver más</a>
                    <a v-else href="/contacto" class="call2action">Contáctanos</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>

export default {
    props: {
        portada: Object
    },
    computed: {
      imageUrl(){
        return this.portada.medias.medias.large[0].full_url
      }
  }
}
</script>

<style>
  .image {
    width: 100%;
    background-size: cover;
    background-position: center center;
    height: 90vh;
  }
</style>
