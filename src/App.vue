<template lang="pug">
  v-app(style="overflow-y:hidden;")
    v-app-bar.d-flex.flex-row.justify-space-between(app color="main_background" dark)
      v-toolbar-title
        .d-flex.flex-row.align-center(@click="$router.push('/')")
          img(src="@/assets/logo.png", alt="adspend" style=" width:50px;")
          h1.ml-2.logo_text(style="color:var(--v-primary-base);") memessy
      v-spacer
      .mr-2.d-flex.flex-row.align-center
        v-btn(color="primary" outlined @click.stop="isAddingDialogOpened = true")
          v-icon mdi-plus
          span(v-if="!isMini") Загрузить
    v-main(style="background-color:var(--v-main_background-base);")
      router-view
    add-mem-dialog(:isAddingDialogOpened.sync="isAddingDialogOpened")


</template>

<script>
import addMemDialog from './components/add-mem-dialog';
export default {
  name: 'App',
  components:{
    addMemDialog
  },
  data: () => ({
    isAddingDialogOpened: false,
  }),
  computed: {
    isMini(){
      return this.$vuetify.breakpoint.name == "xs" ||
      this.$vuetify.breakpoint.name == "sm" ||
      this.$vuetify.breakpoint.name == "md"
          ? true
          : false;
    }
  },
  methods:{
  }
};
</script>

<style lang="scss">
  @import "@/scss/main.scss";
  .logo_text{
    font-family: 'Goldman', cursive;
    cursor: pointer;
  }
  .v-toolbar__content {
    width: 100%;
  }

</style>