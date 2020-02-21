<template>
    <footer id="footer">
        <div class="main-content pl-3 pr-3 pl-sm-4 pr-sm-4 pl-md-5 pr-md-5 pl-lg-5 pr-lg-5 pl-xl-5 pr-xl-5">
            <b-navbar-brand href="#">
                <img src="~/static/img/logo-tresdear.png" alt="">
            </b-navbar-brand>
            <Nav v-bind:class="{active: isActive}"></Nav>
            <!-- Right aligned nav items -->
            <b-navbar-nav class="social-media-box">
                <li>
                    <b-link href="https://www.linkedin.com/company/tresdear/">
                        <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                    </b-link>
                </li>
                <li>
                    <b-link href="https://www.instagram.com/_tresdear_/">
                        <font-awesome-icon :icon="['fab', 'instagram']"/>
                    </b-link>
                </li>
            </b-navbar-nav>
        </div>
        <div class="credits pl-3 pr-3 pl-sm-4 pr-sm-4 pl-md-5 pr-md-5 pl-lg-5 pr-lg-5 pl-xl-5 pr-xl-5">
              <div class="credits-txt">
                  <span>Tresdear © 2019 - Todos los derechos reservados</span>
              </div>
        </div>
    </footer>
</template>

<script>
import Nav from '../nav/Nav'

export default {
    name: 'Footer',
    components: {
        Nav,
    },
    data() {
        return {
            isActive: false
        }
    },

    methods: {
        toggleMenu: function(){
            if (this.isActive = !this.isActive) {

            }else {
            }

        }
    }
}
</script>
