<template>
    <!-- <b-navbar-nav class="ml-auto"> -->
        <!-- <template > -->

        <b-navbar-nav class="menu ml-auto">
                <li v-for="item in items" :key="item.id">
                    <b-link :key='item.title' :to='"/" + item.href' :data-hash="item.href"  @click='scrollToHash'>
                        {{ item.title }}
                    </b-link>
                    <template v-if="item.childs">
                        <ul>
                            <b-nav-item v-for="child in item.childs"
                            :key='child.title' :href='child.href'>
                            {{ item.title }}
                            </b-nav-item>
                        </ul>
                    </template>
                </li>
        </b-navbar-nav>
        <!-- </template> -->
    <!-- </b-navbar-nav> -->
</template>

<script>
    export default ({
        name: 'Nav',
        data() {
            return {
                selectedHash: '#cover',
                items: [
                    { title: 'Home', href: '#cover'},
                    { title: 'Servicios', href: '#services'},
                    { title: 'Sectores', href: '#projects',
                        // childs: [
                        //     { title: 'Producto-1', href: 'productos/ficha' },
                        //     { title: 'Producto-2', href: 'productos/ficha' },
                        //     { title: 'Producto-3', href: 'productos/ficha' },
                        //     { title: 'Producto-4', href: 'productos/ficha' },
                        // ]
                    },
                    { title: 'Precios', href: '#plans'},
                    { title: 'Contacto', href: 'contacto'}
                ]
            }
        },
        // methods: {
        //     itemSelected(){
        //         this.$parent.toggleMenu();
        //     }
        // },
        mounted() {
            // console.log(this.items);
        }
    })
</script>
