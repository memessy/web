<template lang="pug">
  v-container.mt-10.d-flex.flex-row.align-center.justify-center
    .search_result_wrapper
      v-text-field(v-model="search" @keyup.enter="getMemessy()" placeholder="Поиск..." outlined)
    v-btn.test(@click="getMemessy()" color="primary") Найти мем
</template>

<script>
  export default {
    name: 'search-bar',
    data: () => ({
      search: "",
    }),
    mounted(){
      this.getMemessy()
    },
    methods:{
      getMemessy(){
        this.$store
          .dispatch("universalApi", {
            method: "GET",
            query: {
              'q': this.search
            }
          })
          .then((res) =>{
            this.$store.commit('setResultMemessy',res);
          });
      }
    },
  }
</script>

<style>
  .search_result_wrapper{
    width:60%;
    margin-right: 20px;
    margin-top: 30px;
  }
</style>
