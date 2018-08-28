<template>
  <div>
    <h1>{{ msg }}</h1>
    <div class="detailContainer">
      <div class="col2">
        <a :href='details.url_o' class="imgContainer"><img :src='details.url_m' :alt="details.title"></a>
      </div>
      <div class="col2">
        <h3 class="title">{{details.title}}</h3>
        <p class="user">
          <img class="ico" :src='ico()' :alt="details.title">
          <span class="userName">{{details.ownername}}</span>
        </p>
        <p>{{details.datetaken}}</p>

        <p>description<br>{{desc}}</p>
        <p>views: {{details.views}}</p>
        <p v-if='tags.length > 0'>tags: <span class="tag" v-for='tag in tags' :key='tag'>{{tag}}</span></p>
      </div>
    </div>
    <div>{{details}}</div>
  </div>
</template>

<script>
export default {
  name: 'Detail',
  data () {
    return {
      msg: 'Detail / Flickr Photos Search',
      details: {},
      tags: [],
      desc: '',
      icoSrc: ''
    }
  },
  props: {
    id: String
  },
  mounted: function () {
    this.filterResult()
    this.splitTags()
    this.content()
  },
  methods: {
    filterResult () {
      const results = this.$store.state.results
      const currentResult = results.filter(currentValue => {
        return this.id === currentValue.id
      })
      this.details = currentResult[0]
    },
    splitTags () {
      if (this.details.tags === '') return
      this.tags = this.details.tags.split(/\s+/)
    },
    content () {
      this.desc = this.details.description._content
    },
    ico () {
      return `http://farm${this.details.iconfarm}.staticflickr.com/${this.details.iconserver}/buddyicons/${this.details.owner}.jpg`
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
  .detailContainer {
    display: flex;
    width: 80%;
    margin: 0 auto;
  }
  .col2 + .col2 {
    text-align: left;
    margin-left: 20px;
  }
  .col2 > p {
    width: 100%;
    word-wrap: break-word;
    word-break: break-all;
  }
  .tag {
    background: hsla(0, 0%, 40%, 1);
    color: #f2f2f2;
    margin: 2px;
    display: inline-block;
    padding: 2px 5px;
  }
  .title {
    font-size: 20px;
    font-weight: bold;
    margin-top: 0;
  }
  .user {
    display: flex;
    align-items: center;
  }
  .userName {
    font-size: 18px;
    padding-left: 10px;
  }
</style>
