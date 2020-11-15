<template lang="pug">
  div
    search-bar
    search-result
</template>

<script>
import searchBar from '../components/SearchBar';
import searchResult from '../components/SearchResult';
export default {
  name: 'main-view',
  components: {
    searchBar,
    searchResult,
  },
  data: () => ({

  }),
};
</script>