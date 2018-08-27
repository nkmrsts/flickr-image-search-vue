<template>
  <div class="pager" v-if="isLastpage">
    <button v-on:click="readMore">もっと読む</button>
  </div>
</template>

<script>
export default {
  name: 'SearchPager',
  computed: {
    isLastpage () { return this.$store.state.pageNum < this.$store.state.maxPage }
  },
  methods: {
    readMore () {
      this.$store.dispatch('readMore')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  button:hover {
    cursor: pointer;
  }
</style>
