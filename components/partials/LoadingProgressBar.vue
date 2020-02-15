<template>
  <div class="loading-page" v-if="loading"></div>
</template>

<script>
    export default {
        data: () => ({
            loading: false
        }),
        methods: {
            start () {
              this.loading = true
            },
            finish () {
              this.loading = false
            }
        }
    }
</script>

<style scoped>
    .loading-page {
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      height: 3px;
      background: rgba(228, 176, 19, 0.8);
      z-index: 99999;
    }
</style>
