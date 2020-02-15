<template>
    <div :style="styles" class="spinner">
        <div class="bounce1"></div>
        <div class="bounce2"></div>
        <div class="bounce3"></div>
    </div>
</template>

<script>
    export default {
        props: {
            size: Number,
            color: String,
        },
        computed: {
            styles () {
                return {
                    '--color': this.color,
                    '--size':this.size + 'px',
                    // 'padding: ' ? this.size: 'red';
                }
            }
        },
    }
</script>

<style lang="scss" scoped>
    .spinner {
        padding: 0px;
        margin: 0px auto;
        width: fit-content;
        height: 100%;
        text-align: center;
        display: flex;
        align-items: center;
        justify-content: center;

        &> div {
            width: var(--size);
            height: var(--size);
            background-color: var(--color);

            border-radius: 100%;
            display: inline-block;
            -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
            animation: sk-bouncedelay 1.4s infinite ease-in-out both;
        }
        .bounce1 {
            -webkit-animation-delay: -0.32s;
            animation-delay: -0.32s;
        }

        .bounce2 {
            -webkit-animation-delay: -0.16s;
            animation-delay: -0.16s;
        }

        @-webkit-keyframes sk-bouncedelay {
            0%, 80%, 100% { -webkit-transform: scale(0) }
            40% { -webkit-transform: scale(1.0) }
        }

        @keyframes sk-bouncedelay {
            0%, 80%, 100% {
                -webkit-transform: scale(0);
                transform: scale(0);
            } 40% {
                -webkit-transform: scale(1.0);
                transform: scale(1.0);
            }
        }
    }
</style>
