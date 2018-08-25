<template>
  <div class="resultContainer" v-if='result'>
    {{ result }}
  </div>
</template>

<script>
export default {
  name: 'Result',
  props: ['result']
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
