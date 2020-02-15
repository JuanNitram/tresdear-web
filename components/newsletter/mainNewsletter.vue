<template>
    <div id="newsletter">
        <div class="overlay-content pb-5">
            <b-container>
                <b-row>
                    <b-col>
                        <div class="section-title">
                            <h2>No olvides suscribirte!</h2>
                            <div class="guard">
                                <div class="main-triangle"></div>
                                <div class="small-triangle"></div>
                            </div>
                        </div>
                    </b-col>
                </b-row>
                <b-row align-h="center">
                    <b-col cols="8">
                        <form class="" action="index.html" method="post">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Your Email">
                                <div class="input-group-append">
                                    <button type="button" name="button">
                                        Enviar
                                    </button>
                                </div>
                            </div>
                        </form>
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>

    export default {
        components: {
        },
        data() {
            return {
            }
        },
    }
</script>
