<template>
    <div class="main-page-container">
        <breadcrumb
            title=""
            description=""
            :medias="medias"
            :options="{
                flickity: true,
                overlay: true
            }"
        >

        </breadcrumb>
        <mainContacto></mainContacto>
    </div>
</template>

<script>
import mainContacto from '~/components/contacto/mainContacto'
import breadcrumb from '~/components/partials/breadcrumb'

export default {
    components: {
        mainContacto,
        breadcrumb
    },
    data() {
        return {
            medias: [
                {
                    full_url: '/img/breadcrumbs/contacto.jpg'
                },
            ]
        }
    },
    mounted() {
        if(this.$route.params.asunto) {
            this.asunto = this.$route.params.asunto;
        }
    }
}
</script>
