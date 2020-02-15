<template>
    <div class="col-12 col-sm-12 col-md-6 col-lg-4 col-xl-3">
        <div class="plan-item">
            <b-container>
                <b-row>
                    <b-col>
                        <b-row>
                            <b-col>
                                <h3>{{plan.title}}</h3>
                                <span class="plan-subtitle">{{plan.subtitle}}</span>
                            </b-col>
                        </b-row>
                        <b-row>
                            <b-col>
                                <div class="price">
                                    <span class="price-value">{{plan.price}}</span>
                                    <span v-if="!isNaN(plan.price)" class="currency">€ {{ plan.iva ? '+ IVA' : '' }}</span>
                                </div>
                            </b-col>
                        </b-row>

                    </b-col>
                </b-row>
                <b-row>
                    <b-col>
                        <!-- <ul class="mt-3 mb-3">
                        <li> 3D virtual tour</li>
                        <li> Maqueta dollhouse</li>
                        <li>Planta real 2D</li>
                        <li>+ U$D 20 - Plano con medidas</li>
                    </ul> -->
                    <div class="mb-4 plan-details">
                        <p>
                            {{plan.details}}
                        </p>
                    </div>

                </b-col>
                </b-row>
                <b-row>
                    <b-col class="mt-2 mb-2">
                        <nuxt-link class="plan-item-call2action" :to="{name: 'contacto', params: { subject: plan.title } }">
                                Consultar
                        </nuxt-link>
                    </b-col>
                </b-row>
                <div class="plan-description mt-4">
                    <p>{{plan.description}}</p>
                </div>
            </b-container>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            plan: Object

        },

        // methods: {
        //     checkType(id) {
        //         if (id % 2 == 0) {
        //             return true;
        //         }else {
        //             return false;
        //         }
        //     }
        // },

        data() {
            return {
            }
        }
    }
</script>
