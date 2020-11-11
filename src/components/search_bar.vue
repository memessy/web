<template lang="pug">
  v-container.d-flex.flex-row
    v-text-field(v-model="search")
    v-btn(@click="getMemesy()") Найти мем
</template>

<script>
  export default {
    name: 'search_bar',
    data: () => ({
      search: "",
    }),
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
