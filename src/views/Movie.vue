<template>
  <div>
    <router-link to="/">click</router-link>
    <h2>Movie</h2>
    <div class="header">
        <img :src="movie.images.small">
        <div class="msgBox">
        <p class="director">导演：<span v-for="director of movie.directors" :key="director.id">{{ director.name }}/</span></p>
        <p class="performer">主演：<span v-for="performer of movie.casts" :key="performer.id">{{ performer.name }}/</span></p>
        <p>类型：<span v-for="(genre,index) of movie.genres" :key="index"> {{ genre }} </span></p>
        <p>制片国家/地区：{{ movie.countries[0] }}</p>
        <p>语言：{{ movie.languages[0] }}</p>
        <p>上映时间：{{ movie.pubdates[0] }}</p>
        <p>片长：{{ movie.durations[0] }}</p>
        <div>123</div>
        </div>
    </div>
    <div class="reviews">
        <div v-for="review of movie.popular_reviews" :key="review.id">
            <div>《{{review.title}}》</div>
            <div>{{review.summary}}</div>
            <br>
        </div>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapState,mapGetters,mapActions } from "vuex";
import { format } from "path";
export default {
  name: "Movie",
  data() {
      return {
          testData: {
              name:'lila',
              age:12
          }
      }
  },
  computed: {
    ...mapGetters([ 'movie' ])
  },
  methods: {
    ...mapActions(['getMovieMsg'])
  },
  created() {
    this.getMovieMsg(this.$route.query.id);
  }
};
</script>

<style lang='stylus' scope>
.header
    // text-align left 
    margin 0 4vw
    img
        // margin-left 2vw
        // float left
        width 40%
        display inline-block
    div
        display block
.msgBox 
    position relative
    // right -8vw
.director
.performer
    text-indent -2em
    margin-left 2em


</style>