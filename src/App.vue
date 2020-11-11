<template lang="pug">
  v-app
    v-app-bar.d-flex.flex-row.justify-start(app color="primary" dark)
      v-toolbar-title
        .d-flex.flex-row.align-center
          img(src="@/assets/logo.png", alt="adspend" style=" width:50px;")
          h1.ml-2(style="color:var(--v-accent-base);") memessy
    v-main(style="background-color:var(--v-primary-base);")
      search_bar
      search_result
</template>

<script>
import search_bar from './components/search_bar';
import search_result from './components/search_result';

export default {
  name: 'App',

  components: {
    search_bar,
    search_result,
  },

  data: () => ({
    //
  }),
};
</script>
