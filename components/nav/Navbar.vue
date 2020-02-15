<template>
    <header id="navbar" class="pl-3 pr-3 pl-sm-4 pr-sm-4 pl-md-5 pr-md-5 pl-lg-5 pr-lg-5 pl-xl-5 pr-xl-5">

          <b-navbar toggleable="lg">
              <b-navbar-brand href="/">
                  <img src="~/static/img/logo-tresdear.png" alt="">
              </b-navbar-brand>

              <b-navbar-toggle target="nav-collapse" ></b-navbar-toggle>

            <b-collapse id="nav-collapse" is-nav>
                <Nav v-bind:class="{active: isActive}"></Nav>


              <!-- Right aligned nav items -->
              <b-navbar-nav class="info-box ml-auto">
                  <li class="ph">
                      <b-link href="tel:+34684384820">
                          <!-- <font-awesome-icon :icon="['fas', 'phone']"/>-->+34 684 384 820
                      </b-link>
                  </li>
                  <li class="fb">
                      <b-link href="https://www.linkedin.com/company/tresdear/">
                          <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                      </b-link>
                  </li>
                  <li class="ins">
                      <b-link href="https://www.instagram.com/_tresdear_/">
                          <font-awesome-icon :icon="['fab', 'instagram']"/>
                      </b-link>
                  </li>
              </b-navbar-nav>
            </b-collapse>
          </b-navbar>

        <!-- <b-navbar toggleable="lg">


            <b-collapse id="nav-collapse" is-nav>



            </b-collapse>
        </b-navbar> -->
        <!-- <b-container fluid>
            <div class="brand-box">

            </div>
            <div class="menu-btn" @click="toggleMenu" v-bind:class="{active: isActive}">
            <div class="icon">
            <label for="burger">
            <span></span>
            <span></span>
            <span></span>
        </label>
    </div>
</div>

</b-container> -->
</header>
</template>

<script>
import Nav from './Nav'

export default {
    name: 'Navbar',
    components: {
        Nav,
    },
    computed: {

    },
    data() {
        return {
            isActive: false
        }
    },

    methods: {
        // toggleMenu: function(){
        //     if (this.isActive = !this.isActive) {
        //
        //     }else {
        //     }
        //
        // }
    },
    mounted() {

    }
}
</script>
