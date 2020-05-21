<template>
    <div id="aboutUs" class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5" data-aos="fade-up">
        <b-container fluid  class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5">
            <!-- <b-row>
                <b-col>
                    <div class="section-title">
                        <h2>Sobre Nosotros</h2>
                        <div class="guard">
                            <div class="main-triangle"></div>
                            <div class="small-triangle"></div>
                        </div>
                    </div>
                </b-col>
            </b-row> -->
            <b-row>
                <b-col>
                    <b-container class="pl-2 pr-2 pl-sm-2 pr-sm-2 pl-md-0 pr-md-0 pl-lg-5 pr-lg-5 pl-xl-5 pr-xl-5">
                        <b-row>
                            <b-col>
                                <div class="about-us-container">
                                    <div class="img-box">
                                        <img src="~/static/img/about-us/about-us.png" alt="">
                                    </div>
                                    <div class="content-box">
                                        <h2>¿Qué hacemos?</h2>
                                        <p>Tresdeamos</p>
                                        <p>
                                            Trasladamos a tus clientes y usuarios a los sitios que desees, sin que se muevan de su sitio.
                                        </p>
                                        <p>
                                            Creamos recorridos virtuales online. Pero no es sólo eso.
                                        </p>
                                        <p>
                                            Creamos experiencias inmersivas que envuelven a tus clientes y usuarios:
                                            recorrerán los espacios y tendrán a disposición contenidos adicionales que completarán la sensación de estar allí.
                                        </p>
                                        <p>
                                            Aumentamos la confianza del potencial cliente o visitante al ofrecer una experiencia 3D envolvente increíblemente real.
                                        </p>
                                        <p>
                                            Convertimos un espacio en un entorno virtual 3D en sólo 24 horas.
                                        </p>
                                    </div>

                                </div>
                            </b-col>
                        </b-row>
                    </b-container>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
import planItem from '~/components/plans/planItem'

    export default {
        components: {
            planItem
        },
        data() {
            return {
              render: false,
                plans: [
                    {
                        id: 1,
                        title: 'Regular',
                        description: 'Haga que su espacio se destaque. Escaneamos con tecnología Matterport® ahorrándote tiempo y permitiéndote vender más rápido.',
                        currency: 'U$D',
                        price: '2,80',
                        active: true
                    },
                    {
                        id: 2,
                        title: 'Medium',
                        description: 'Aproveche la posibilidad de agregar tags para resaltar funciones claves, etiquetar espacios e incluir descripciones de texto en su 3D Virtual Tour.',
                        currency: 'U$D',
                        price: '2,60',
                        active: true
                    },
                    {
                        id: 3,
                        title: 'Large',
                        description: 'Tenga los detalles necesarios y técnicos del espacio. No hay necesidad de regresar a la propiedad para tomar ninguna medida, nosotros te cubrimos.',
                        currency: 'U$D',
                        price: '2,40',
                        active: true
                    },
                    {
                        id: 4,
                        title: 'Extra Large',
                        description: 'Empresa de virtual tours con sede en Buenos Aires y clientes en Argentina, Chile y Uruguay. Somos proveedores de recorridos virtuales 3D certificados por Matterport®.',
                        currency: 'U$D',
                        price: '2,20',
                        active: true
                    },
                ],
            }
        },
    }
</script>
