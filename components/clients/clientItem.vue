<template>
        <div :class="{ active: isActive }" class="client-item">
            <div class="img-box">
                <img :src="imageUrl" alt="">
            </div>
        </div>
</template>

<script>
    export default {
        props: {
            client: Object
        },

        computed: {
          imageUrl(){
            if(this.client.medias.medias) return this.client.medias.medias.normal[0].full_url
            return null
          }
        },

        data() {
            return {
                isActive: false
            }
        },

        methods: {
            active(id) {
                if(id == 3) {
                    this.isActive = true;
                }else {
                    this.isActive = false;
                }
            }
        },

        mounted() {
          console.log(this.client)
            this.active(this.client.id);
        }
    }
</script>
