import pkg from './package'

export default {
    mode: 'universal',

    router: {

    },

    /*
    ** Headers of the page
    */
    head: {
        title: pkg.title,
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1.0' },
            { hid: 'description', name: 'description', content: pkg.description },
            { hid: 'keywords', name: 'keywords', content: pkg.keywords },
            { name: 'google-site-verification', content:'EUO-I0obB7VH78GV_MYRUcumROC89nNAbXOTgy_GgKc' },

            // Open Graph
            { name: 'og:title', content: pkg.title },
            { name: 'og:description', content: pkg.description },
            { name: 'og:type', content: 'website' },
            { name: 'og:url', content: pkg.baseUrl },
            { name: 'og:image:secure_url', itemprop: 'image',content: pkg.baseUrl + '/img/favicons/favicon-96x96.png' },
            // Twitter Card
            { name: 'twitter:card', content: 'summary' },
            { name: 'twitter:site', content: '@nuxt_js' },
            { name: 'twitter:title', content: pkg.title },
            { name: 'twitter:description', content: pkg.description },
            { name: 'twitter:image', content: pkg.baseUrl + 'img/thumb.jpg' },
            { name: 'twitter:image:alt', content: 'Sideral Development Logo' },

            { name: 'msapplication-TileColor', content: '#ffffff' },
            { name: 'msapplication-TileImage', content: 'img/favicons/ms-icon-144x144.png' },
            { name: 'theme-color', content: '#ffffff' },
        ],
        link: [
            { rel: 'apple-touch-icon', sizes:'57x57', type: 'image/x-icon', href: 'img/favicons/apple-icon-57x57.png' },
            { rel: 'apple-touch-icon', sizes:'60x60', type: 'image/x-icon', href: 'img/favicons/apple-icon-60x60.png' },
            { rel: 'apple-touch-icon', sizes:'72x72', type: 'image/x-icon', href: 'img/favicons/apple-icon-72x72.png' },
            { rel: 'apple-touch-icon', sizes:'76x76', type: 'image/x-icon', href: 'img/favicons/apple-icon-76x76.png' },
            { rel: 'apple-touch-icon', sizes:'114x114', type: 'image/x-icon', href: 'img/favicons/apple-icon-114x114.png' },
            { rel: 'apple-touch-icon', sizes:'120x120', type: 'image/x-icon', href: 'img/favicons/apple-icon-120x120.png' },
            { rel: 'apple-touch-icon', sizes:'144x144', type: 'image/x-icon', href: 'img/favicons/apple-icon-144x144.png' },
            { rel: 'apple-touch-icon', sizes:'152x152', type: 'image/x-icon', href: 'img/favicons/apple-icon-152x152.png' },
            { rel: 'apple-touch-icon', sizes:'180x180', type: 'image/x-icon', href: 'img/favicons/apple-icon-180x180.png' },
            { rel: 'icon', sizes:'192x192', type: 'image/png', href: 'img/favicons/android-icon-192x192.png' },
            { rel: 'icon', sizes:'32x32', type: 'image/png', href: 'img/favicons/favicon-32x32.png' },
            { rel: 'icon', sizes:'96x96', type: 'image/png', href: 'img/favicons/favicon-96x96.png' },
            { rel: 'icon', sizes:'16x16', type: 'image/png', href: 'img/favicons/favicon-16x16.png' },
            { rel: 'manifest', href: 'img/favicons/manifest.json' },
            { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Montserrat:200,300,400,500,600,700,800&display=swap' },
        ],
      script: [
        { src: 'https://storage.googleapis.com/vrview/2.0/build/vrview.min.js' }
      ],
    },

    /*
    ** Customize the progress-bar color
    */
    loading: '~/components/partials/LoadingProgressBar',

    /*
    ** Global CSS
    */
    css: [
        '~/assets/sass/_core.scss',
        '~/assets/css/flickity.css'
    ],

    /*
    ** Plugins to load before mounting the App
    */
    plugins: [
        {src: '~/plugins/flickity', ssr: false},
        {src: '~/plugins/flickityImageLoaded', ssr: false},
        {src: '~/plugins/packery', ssr: false},
        {src: '~plugins/vee-validate.js', ssr: true},
        {src: '~plugins/google/googleAnalytics', ssr: false},
        '~/plugins/vueScrollTo',
        '~/plugins/quill-delta-to-html',
        '~/plugins/functions',
    ],

    /*
    ** Nuxt.js modules
    */
    modules: [
        '@nuxtjs/axios',
        '@nuxtjs/recaptcha',
        'bootstrap-vue/nuxt',
        [
          'nuxt-fontawesome', {
                imports: [
                    {
                       set: '@fortawesome/free-solid-svg-icons',
                       icons: ['fas']
                    },
                    {
                       set:'@fortawesome/free-brands-svg-icons',
                       icons: ['fab']
                    }
               ]
            }
        ],
      '@nuxtjs/device',
    ],

    recaptcha: {
        hideBadge: true, // Hide badge element (v3)
        language: "es",   // Recaptcha language (v2)
        siteKey: "6Le-39oUAAAAAD-5B-SNkhnjcreW6svs9aKqYp9M",    // Site key for requests
        version: 3     // Version
    },

     /*
    ** Build configuration
    */
    build: {
        /*
        ** You can extend webpack config here
        */
        extend(config, ctx) {

        }
    },
    env: {
      API_URL: 'https://api.tresdear.es/api/page/',
    }
}
