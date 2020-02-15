<template>
    <div id="contact" class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-5">
        <b-container class="pt-3 pt-sm-3 pt-md-4 pt-lg-5 pt-xl-5 pb-3 pb-sm-3 pb-md-4 pb-lg-5 pb-xl-5">
            <b-row>
                <b-col>
                    <div class="s-row">
                        <div class="column-left mb-3 mb-sm-4 mb-md-0 mb-lg-0 mb-xl-0">
                            <!-- <h2>Envíanos un mensaje</h2> -->
                            <form @submit.prevent="onSubmit" action="index.html" method="post">
                                <div class="form-group">
                                    <input v-validate="'required'" data-vv-name="name" v-model="mailData.name" name="name" type="text" placeholder="Nombre*" class="custom">
                                    <span class="error-log">{{ errors.first('name') }}</span>
                                </div>
                                <div class="form-group">
                                    <input v-validate="'required|email'" data-vv-name="email" v-model="mailData.email" name="email" type="text" placeholder="Email*" class="custom">
                                    <span class="error-log">{{ errors.first('email') }}</span>
                                </div>
                                <div class="form-group">
                                    <input v-validate="'required'" data-vv-name="phone" v-model="mailData.phone" name="phone" type="text" placeholder="Teléfono*" class="custom">
                                    <span class="error-log">{{ errors.first('phone') }}</span>
                                </div>
                                <div v-if="this.mailData.subject !== ''" class="form-group">
                                    <input v-validate="'required'" data-vv-name="subject" v-model="mailData.subject" name="subject" type="text" placeholder="Asunto*" class="custom" >
                                    <span class="error-log">{{ errors.first('subject') }}</span>
                                </div>
                                <div class="form-group">
                                    <textarea v-validate="'required'" data-vv-name="message" v-model="mailData.message" name="message" class="custom" placeholder="Mensaje*" rows="8" cols="80"></textarea>
                                    <span class="error-log">{{ errors.first('message') }}</span>
                                </div>
                                <div class="form-group">
                                    <button type="submit" name="button">
                                        Enviar
                                        <div v-show="isLoading" class="spinner-border spinner-border-sm custom-spinner" role="status"></div>
                                    </button>
                                    <div v-show="sended">
                                        <span class="succes">Tu mensaje ha sido envíado, nos comunicaremos contigo a la brevedad</span>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="column-right">
                            <!-- <h2>Info. de contacto</h2> -->
                            <p>Si nos dices de qué va tu negocio, nos contactamos contigo y te preparamos una propuesta personalizada.</p>
                            <ul>
                                <!-- <li>
                                    <a href="#">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fas', 'map-marker-alt']"/>
                                        </div>
                                        <span>
                                            8th floor, 379 Hudson St, New York, NY 10018
                                        </span>
                                    </a>
                                </li> -->
                                <li>
                                    <a href="mailto:hola@tresdear.com">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fas', 'envelope-open']"/>
                                        </div>
                                        <span>
                                            hola@tresdear.com
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="tel:+34684384820">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fas', 'phone']"/>
                                        </div>
                                        <span>
                                            +34 684 384 820
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/company/tresdear/">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
                                        </div>
                                        <span>
                                            Linkedin
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/_tresdear_/">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fab', 'instagram']"/>
                                        </div>
                                        <span>
                                            Instagram
                                        </span>
                                    </a>
                                </li>
                                <!-- <li>
                                    <a href="#">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fas', 'fax']"/>
                                        </div>
                                        <span>
                                            (+1) 96 716 6879
                                        </span>
                                    </a>
                                </li> -->

                                <!-- <li>
                                    <a href="#">
                                        <div class="icon-box">
                                            <font-awesome-icon :icon="['fas', 'clock']"/>
                                        </div>
                                        <span>
                                            Mon-Fri 09:00 - 17:00
                                        </span>
                                    </a>
                                </li> -->
                            </ul>
                        </div>
                    </div>
                </b-col>
            </b-row>
        </b-container>
    </div>
</template>

<script>
// import breadcrumb from '~/components/partials/breadcrumb'

export default {
    data() {
        return {
            baseUrl: process.env.API_URL,
            mailData: {
              name: '',
              email: '',
              subject: '',
              message: ''
            },
            sended: false,
            isLoading: false,

        }
    },

    created() {
    },

    async mounted() {
        await this.$recaptcha.init();

        if (this.$route.params.subject) {
            this.mailData.subject = this.$route.params.subject;
        }
    },

    methods: {
        async onSubmit() {
            try {
                const token = await this.$recaptcha.execute();
                this.isLoading = true;
                this.sended = false;
                this.$validator.validateAll().then( valid => {
                    if(valid){
                        let params = this.mailData;
                        let recaptcha = token;
                        // this.$recaptcha.reset();
                        this.$axios.post(this.baseUrl + 'send', {
                            data: this.mailData,
                            recaptcha: recaptcha
                        }).then((res) => {
                            if(res.data.success)
                                this.sended = true;
                            this.isLoading = false;
                            this.mailData.name = '';
                            this.mailData.email = '';
                            this.mailData.phone = '';
                            this.mailData.message = '';
                            this.$validator.reset();
                        });
                    } else {
                        this.isLoading = false;
                    }
                });
            } catch (error) {
                console.log('Login error:', error)
            }
        },
    },
    components: {
        // breadcrumb
    }
}
</script>
