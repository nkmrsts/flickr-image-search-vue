<template>
  <div>
    <div class="resultsContainer" v-if='results.length > 0'>
       <span>{{ searchWords }}の検索結果</span>
       <div class="results">
          <a class="resultsItem" :href="result.id" v-for='result in results' :key='result.id'>
           <img :src="result.url_m || result.url_o" :alt="result.title">
          </a>
        </div>
    </div>
    <span v-else>画像が見つかりませんでした。</span>
  </div>
</template>

<script>
export default {
  name: 'SearchResult',
  computed: {
    searchWords () { return this.$store.state.searchWords },
    results () { return this.$store.state.results }
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
