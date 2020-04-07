<template>
    <div id="home" class="main-page-container">
        <Cover></Cover>
        <mainAboutUs></mainAboutUs>
        <mainServices></mainServices>
        <mainFeatured></mainFeatured>
        <mainProjects></mainProjects>
        <mainPlans></mainPlans>
        <!-- <mainClients></mainClients> -->
    </div>
</template>

<script>
import Cover from "~/components/cover/Cover";
import { mapGetters } from 'vuex';

export default {
    components: {
        Cover,
        mainAboutUs: () => import('../components/aboutUs/mainAboutUs'),
        mainServices: () => import('../components/services/mainServices'),
        mainFeatured: () => import('../components/featured/mainFeatured'),
        mainProjects: () => import('../components/projects/mainProjects'),
        mainPlans: () => import('../components/plans/mainPlans'),
        // mainClients: () => import('../components/clients/mainClients'),
    },
    computed: {
      ...mapGetters([
        'loading'
      ])
    }
}
</script>
