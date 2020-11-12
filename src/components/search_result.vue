<template lang="pug">
  v-container
    .d-flex.flex-row.justify-space-between(v-if="$store.state.searchResult.length !== 0")
      v-img.mx-2(v-for="mem in $store.state.searchResult" :src="mem.file_url" max-width="350px")
    p.empty_response_text(v-else) По Вашему запросу мемесов не найдено
</template>

<script>
  export default {
    name: "search_result",
    data: ()=>({

    }),
  }
</script>

<style lang="scss">
  .empty_response_text{
    text-align: center;
    font-size: 20px;
    color: var(--v-secondary-lighten1);
    opacity: 0.6;
  }
</style>