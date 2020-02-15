<template>
    <div>
        <!-- <LoadingProgressBar></LoadingProgressBar> -->
        <Navbar></Navbar>
        <nuxt />
        <Footer></Footer>
    </div>
</template>

<script>
    // import LoadingProgressBar from '~/components/partials/LoadingProgressBar';
    import Navbar from '~/components/nav/Navbar';

    export default {
      components: {
            // LoadingProgressBar,
            Navbar,
            Footer: () => import('../components/footer/Footer'),
        },
        // mounted () {
        //     this.$nextTick(() => {
        //       this.$nuxt.$loading.start()
        //
        //       setTimeout(() => this.$nuxt.$loading.finish(), 200)
        //     })
        // },

    }
</script>
