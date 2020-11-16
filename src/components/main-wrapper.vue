<template lang="pug">
  div
    search-bar
    search-result
</template>

<script>
import searchBar from './search-bar';
import searchResult from './search-result';

export default {
  name: "mainWrapper",
  components: {
    searchBar,
    searchResult,
  },
  data() {
    return {

    }
  },
}
</script>

<style lang="scss">

</style>