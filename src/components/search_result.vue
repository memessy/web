<template lang="pug">
  v-container.d-flex.flex-row.justify-space-between
    v-img.mx-2(v-for="mem in $store.state.searchResult" :src="mem.file_url" max-width="350px")
</template>

<script>
  export default {
    name: "search_result",
    data: ()=>({

    }),
  }
</script>