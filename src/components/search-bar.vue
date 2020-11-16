<template lang="pug">
  v-container.mt-10.d-flex.flex-row.align-center.justify-center
    .search_result_wrapper_max(v-if="!isMini")
      v-text-field( v-model="search" @keyup.enter="getMemessy()" placeholder="Поиск..." outlined)
    .search_result_wrapper_min(v-else)
      v-text-field(v-model="search" @keyup.enter="getMemessy()" placeholder="Поиск..." outlined append-icon="mdi-magnify" @click:append="getMemessy()")
    v-btn.test(v-if="!isMini" @click="getMemessy()" color="primary") Найти мем
</template>

<script>
  export default {
    name: 'search-bar',
    data: () => ({
      search: "",
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
    mounted(){
      this.getMemessy()
    },
    watch:{
      search:function(val){
        if(val.length > 2 || val.length === 0){
          this.getMemessy();
        }
      }
    },
    methods:{
      getMemessy(){
          this.$store.dispatch("Memessy/reloadMemessy", this.search);
      },
    },
  }
</script>

<style>
  .search_result_wrapper_max{
    width:60%;
    margin-right: 20px;
    margin-top: 30px;
  }
  .search_result_wrapper_min{
    width:100%;
    margin-top: 30px;
  }
</style>
