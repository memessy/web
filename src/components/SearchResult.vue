<template lang="pug">
  v-container
    .d-flex.flex-row.justify-start.flex-wrap(v-if="$store.state.resultMemessy.length !== 0")
      v-img.mx-2.my-2(v-for="mem in $store.state.resultMemessy" :src="mem.file_url" max-width="350px")
    p.empty_response_text(v-else) По Вашему запросу мемесов не найдено
</template>

<script>
  export default {
    name: "search-result",
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