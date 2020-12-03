<template lang="pug">
  v-container
    .d-flex.flex-col.justify-center.flex-wrap.flex-sm-row.align-sm-start.justify-lg-start.ml-lg-10.ml-xl-0(v-if="$store.state.Memessy.resultMemessy.length !== 0")
      template(v-for="(mem , i) in $store.state.Memessy.resultMemessy")
        v-hover(v-slot="{ hover }")
          v-card.mx-2.my-2.d-flex.align-center( max-width="330px" height="330px")
            v-img(:src="mem.file_url")
            v-fade-transition
            v-overlay(v-if="hover" absolute color="#606060")
              .btn-wrapper
                v-btn.mx-5(icon rounded x-large)
                  v-icon mdi-plus
                v-btn.mx-5(icon rounded x-large @click="copyUrl(mem.file_url)")
                  v-icon mdi-share-variant
                v-btn.mx-5(icon rounded x-large @click="openEditMemDialog(mem)")
                  v-icon mdi-pencil
    p.empty_response_text(v-else) По Вашему запросу мемесов не найдено
    v-dialog(v-model="isEditDialogOpen" width="500px")
      v-card
        v-card-title
          span Редактирование
        v-card-text
          v-textarea(v-model="parsedText" outlined auto-grow)
        v-card-actions
          v-spacer
          v-btn(color="primary" @click="editMem()") Изменить
</template>

<script>
  export default {
    name: "search-result",
    data: ()=>({
      isEditDialogOpen: false,
      parsedText: "",
      editMemId: "",
    }),
    methods:{
      openEditMemDialog(mem){
        this.isEditDialogOpen = true;
        this.parsedText = mem.parsed_text;
        this.editMemId = mem.id;
      },
      editMem(){
        let data = {
          parsed_text: this.parsedText
        }
        this.$store.dispatch('universalApi',{
          endpoint: "memes/",
          id: `${this.editMemId}/`,
          method: "PATCH",
          data:JSON.stringify(data)
        }).then(() =>{
          this.isEditDialogOpen = false;
          this.$store.dispatch("Memessy/reloadMemessy", '');
        })
      },
      copyUrl(url){
        this.$copyText(url)
      }
    }
  }
</script>

<style lang="scss">
  .empty_response_text{
    text-align: center;
    font-size: 20px;
    color: var(--v-secondary-lighten1);
    opacity: 0.6;
  }
  .btn-wrapper{
    padding-top: 250px;
  }
</style>