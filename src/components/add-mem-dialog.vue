<template lang="pug">
  v-dialog(v-model="localIsDialogOpen" width="500px")
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
  name: "add-mem-dialog",
  props: {
    isAddingDialogOpened: {
      type: Boolean,
      default: false
    },
  },
  data() {
    return {
      localIsDialogOpen: false,
      uploadedMem: undefined,
      uploadedMemFormData : null,
      uploadedMemSrc: "",
    }
  },
  watch:{
    isAddingDialogOpened:function(val){
      this.localIsDialogOpen = val;
    },
    localIsDialogOpen: function(val){
      this.$emit('update:isAddingDialogOpened', val)
    }
  },
  methods:{
    uploadMem () {
      if (this.uploadedMem) {
        const formData = new FormData();
        formData.append('file', this.uploadedMem);
        this.uploadedMemFormData = formData;
        const reader = new FileReader();
        reader.addEventListener('load', function () {
          this.uploadedMemSrc = reader.result;
        }.bind(this), false);
        reader.readAsDataURL(this.uploadedMem);
      }
    },
    clearUploadMemData(){
      this.uploadedMem = undefined;
      this.uploadedMemFormData = null;
      this.uploadedMemSrc = "";
    },
    addMem(){
      if(this.uploadedMemFormData){
        this.$store.dispatch('universalApi',{
          endpoint: "memes/",
          method: "POST",
          data: this.uploadedMemFormData
        }).then(() =>{
          this.$emit('update:isAddingDialogOpened', false)
          this.clearUploadMemData();
          this.$store.dispatch("Memessy/reloadMemessy", '');
        })
      }
    }
  }
}
</script>

<style lang="scss" scoped>
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