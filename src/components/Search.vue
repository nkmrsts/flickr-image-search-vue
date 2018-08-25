<template>
<div>
  <form v-on:submit.prevent="submit">
    <input v-model='input' type="search">
    <button type="submit">search</button>
  </form>
  <div class="resultContainer" v-if='result'>
    {{ result }}
  </div>
</div>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      input: '',
      result: ''
    }
  },
  methods: {
    submit () {
      this.result = this.input
      console.log(this.msg, this.input)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
