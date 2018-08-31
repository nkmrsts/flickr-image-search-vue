<template>
  <div>
    <h1>{{ msg }}</h1>
    <searchForm/>
    <searchResult/>
    <searchPager/>
  </div>
</template>

<script>
import SearchForm from '@/components/SearchForm'
import SearchResult from '@/components/SearchResult'
import SearchPager from '@/components/SearchPager'
export default {
  name: 'Search',
  data () {
    return {
      msg: 'Flickr Photos Search'
    }
  },
  components: {
    searchForm: SearchForm,
    searchResult: SearchResult,
    SearchPager: SearchPager
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1,
  h2 {
    font-weight: normal;
  }
  h1 {
    margin-top: 0;
  }
</style>
