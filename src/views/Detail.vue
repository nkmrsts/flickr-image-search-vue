<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="detailContainer">
      <p>{{filterResult().datetaken}}</p>
      <a :href='filterResult().url_o' class="imgContainer"><img :src='filterResult().url_m' :alt="filterResult().title"></a>
      <p>name: {{filterResult().ownername}}</p>
      <p>description: {{filterResult().description._content}}</p>
      <p>views: {{filterResult().views}}</p>
      <p>tags: {{filterResult().tags}}</p>
      <div>{{filterResult()}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'Flickr Photos Search / Detail'
    }
  },
  props: {
    id: String
  },
  computed: {
    results () { return this.$store.state.results }
  },
  methods: {
    filterResult () {
      const results = this.$store.state.results
      const currentResult = results.filter(currentValue => {
        return this.id === currentValue.id
      })
      return currentResult[0]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }
  .imgContainer > img {
    max-width: 400px;
    height: auto;
  }
</style>
