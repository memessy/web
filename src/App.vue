<template lang="pug">
  v-app(style="overflow-y:hidden;")
    v-app-bar.d-flex.flex-row.justify-start(app color="main_background" dark)
      v-toolbar-title
        .d-flex.flex-row.align-center
          img(src="@/assets/logo.png", alt="adspend" style=" width:50px;")
          h1.ml-2(style="color:var(--v-accent-base);") memessy
    v-main(style="background-color:var(--v-main_background-base);")
      search-bar
      search-result
</template>

<script>
import searchBar from './components/SearchBar';
import searchResult from './components/SearchResult';

export default {
  name: 'App',

  components: {
    searchBar,
    searchResult,
  },

  data: () => ({
    //
  }),
};
</script>

<style lang="scss">
  @import "@/scss/main.scss";
</style>