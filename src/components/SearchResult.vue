<template>
  <div>
    <p v-if='results.length > 0'>
      <span>{{ searchWords }}の検索結果</span>
      <span>{{ total }}件</span>
    </p>
    <p v-else-if='total === "0"'>画像が見つかりませんでした。</p>
    <div class="results" v-if='results.length > 0'>
      <router-link :to="{ name: 'Detail', params: { id: result.id }}" class="resultsItem" v-for='result in results' :key='result.id'>
      <img :src="result.url_m || result.url_o" :alt="result.title">
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  computed: {
    searchWords () { return this.$store.state.searchWords },
    results () { return this.$store.state.results },
    total () { return this.$store.state.total }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.results {
  width: 80%;
  margin: auto;
}
.resultsItem {
  display: inline-block;
  width: calc(25% - 20px);
  margin: 10px;
}
.resultsItem > img {
  vertical-align: middle;
  max-width: 100%;
  height: auto;
}
</style>
