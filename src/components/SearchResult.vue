<template lang="pug">
  v-container
    .d-flex.flex-col.justify-center.flex-wrap.justify-lg-start(v-if="$store.state.resultMemessy.length !== 0")
      template(v-for="(mem , i) in $store.state.resultMemessy")
        v-hover(v-slot="{ hover }")
          v-card.mx-2.my-2( max-width="340px")
            v-img(:src="mem.file_url")
            v-fade-transition
            v-overlay(v-if="hover" absolute color="#606060")
              .btn-wrapper
                v-btn.mx-5(icon rounded x-large)
                  v-icon mdi-plus
                v-btn.mx-5(icon rounded x-large)
                  v-icon mdi-share-variant
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
  .btn-wrapper{
    padding-top: 250px;
  }
</style>