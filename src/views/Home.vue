<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <Search></Search>
    <Result></Result>
  </div>
</template>

<script>
// import axios from 'axios'
import Search from '@/components/Search'
import Result from '@/components/Result'
export default {
  name: 'Home',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  components: {
    Search: Search,
    Result: Result
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
</style>
