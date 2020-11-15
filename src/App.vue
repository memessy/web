<template lang="pug">
  v-app(style="overflow-y:hidden;")
    v-app-bar.d-flex.flex-row.justify-start(app color="main_background" dark)
      v-toolbar-title
        .d-flex.flex-row.align-center
          img(src="@/assets/logo.png", alt="adspend" style=" width:50px;")
          h1.ml-2.logo_text(style="color:var(--v-primary-base);" @click="router.push('/')") memessy
    v-main(style="background-color:var(--v-main_background-base);")
      router-view
</template>

<script>
export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "@/scss/main.scss";
  .logo_text{
    font-family: 'Goldman', cursive;
    cursor: pointer;
  }
</style>