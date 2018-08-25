<template>
  <div class="hello">
    <h1>Welcome to Your Vue.js App</h1>
    <form v-on:submit.prevent="submitSearch">
      <input v-model='input' type="search">
      <button type="text">search</button>
    </form>
    <div class="resultContainer" v-if='result'>
      {{ result }}
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Search from './Search'
import Result from './Result'
export default {
  name: 'Home',
  data () {
    return {
      input: '',
      result: ''
    }
  },
  methods: {
    submitSearch () {
      this.result = this.input
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
a {
  color: #42b983;
}
</style>
