<template lang="pug">
  v-container.mt-10.d-flex.flex-row.align-center
    v-text-field(v-model="search" placeholder="Поиск...")
    v-btn.test(@click="getMemesy()") Найти мем
</template>

<script>
  export default {
    name: 'search_bar',
    data: () => ({
      search: "",
    }),
    mounted(){
      this.getMemesy()
    },
    methods:{
      getMemesy(){
        this.$store
          .dispatch("universalApi", {
            name: "jsonapi/checksession",
            method: "GET",
            query: {
              'q': this.search
            }
          })
          .then((res) =>{
            this.$store.commit('setSearchResult',res);
          });
      }
    },
  }
</script>
