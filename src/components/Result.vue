<template>
  <div class="resultContainer" v-if='getResult'>
    {{ getResult }}の検索結果
  </div>
</template>

<script>
export default {
  name: 'Result',
  data () {
    return {
      result: ''
    }
  },
  computed: {
    getResult () { return this.$store.getters.searchWords }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
