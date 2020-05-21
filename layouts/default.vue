<template>
    <div id="root">
        <!-- <LoadingProgressBar></LoadingProgressBar> -->
        <Navbar></Navbar>
        <nuxt />
        <Footer></Footer>
    </div>
</template>

<script>
    import Navbar from '~/components/nav/Navbar';
    import Footer from "../components/footer/Footer";

    export default {
      components: {
            Navbar,
            Footer
        },
    }
</script>
