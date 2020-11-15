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
    v-dialog(v-model="isAddingDialogOpened" width="500px")
      v-card.pa-2
        v-card-title
          span Добавление мема
        v-card-text
          .d-flex.flex-row.justify-center
            .file_box.empty_file_box(v-if="!uploadedMem")
              span.empty_file_text Загрузите мем
            .file_box(v-else)
              v-img(:src="uploadedMemSrc")
          v-file-input(v-model="uploadedMem" @change="uploadMem()")
        v-card-actions
          v-spacer
          v-btn(color="primary" @click="addMem()" :disabled="!uploadedMem") Добавить
</template>

<script>
export default {
  name: 'App',
  data: () => ({
    isAddingDialogOpened: false,
    uploadedMem: undefined,
    uploadedMemFormData : null,
    uploadedMemSrc: "",
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
    uploadMem () {
      if (this.uploadedMem) {
        const formData = new FormData();
        formData.append('file', this.uploadedMem);
        console.log(formData.get('file'))
        this.uploadedMemFormData = formData;
        const reader = new FileReader();
        reader.addEventListener('load', function () {
          this.uploadedMemSrc = reader.result;
        }.bind(this), false);
        reader.readAsDataURL(this.uploadedMem);
      }
    },
    addMem(){
      if(this.uploadedMemFormData){
        this.$store.dispatch('universalApi',{
          endpoint: "memes/",
          method: "POST",
          data: this.uploadedMemFormData
        }).then(() =>{
          this.isAddingDialogOpened = false;
          this.uploadedMem = undefined;
          this.uploadedMemFormData = null;
          this.uploadedMemSrc = "";
        })
      }
    }
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

  .file_box{
    width: 80%;
    height: 300px;
    margin: 30px 0 20px 0;
  }

  .empty_file_box{
    background-color: rgba(60,63,65,0.1);
    display: flex;
    justify-content: center;
    align-items: center;

    .empty_file_text{
      display: block;
      text-align: center;
      text-transform: uppercase;
      font-size: 20px;
      opacity: .5;
    }
  }
</style>