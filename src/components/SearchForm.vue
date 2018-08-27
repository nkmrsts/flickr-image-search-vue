<template>
<form v-on:submit.prevent="submitSearch">
  <input v-model='input' type="search">
  <button type="text">search</button>
</form>
</template>

<script>
export default {
  name: 'SearchForm',
  data () {
    return {
      input: ''
    }
  },
  methods: {
    submitSearch () {
      if (!this.input) return false
      this.$store.dispatch('searchPhoto', this.input)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
