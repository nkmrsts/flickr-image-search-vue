<template>
<form v-on:submit.prevent="submitSearch">
  <input v-model='input' type="search">
  <button type="text">search</button>
</form>
</template>

<script>
export default {
  name: 'Search',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    submitSearch () {
      this.$store.dispatch('getInput', this.input)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
