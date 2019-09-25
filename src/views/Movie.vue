<template>
  <div>
    <el-container>
      <el-header>
        <h2>Movie</h2>
        <router-link to="/">Back</router-link>
      </el-header>
      <el-main>
        <div class="header">
          <div class="clearFix">
            <img :src="movie.images.small" />
          </div>
          <div class="msgBox">
            <p>
              类型：
              <span v-for="(genre,index) of movie.genres" :key="index">{{ genre }}</span>
            </p>
            <p>制片国家/地区：{{ movie.countries[0] }}</p>
            <p>语言：{{ movie.languages[0] }}</p>
            <p>上映时间：{{ movie.pubdates[0]}}</p>
            <p>片长：{{ movie.durations[0] }}</p>
          </div>
          <div class="person">
            <p class="director">
              导演：
              <span v-for="director of movie.directors" :key="director.id">{{ director.name }}/</span>
            </p>
            <el-divider></el-divider>
            <p class="performer">
              主演：
              <span v-for="performer of movie.casts" :key="performer.id">{{ performer.name }}/</span>
            </p>
            <el-divider></el-divider>
          </div>
        </div>
      </el-main>
      <el-main>
      <h3>Popular-review</h3>
      <el-collapse>
        <el-collapse-item
          :title="review.title"
          :name="review.id"
          v-for="review of movie.popular_reviews"
          :key="review.id"
        >
          <div class="review">{{review.summary}}</div>
        </el-collapse-item>
      </el-collapse>
      </el-main>
    </el-container>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters, mapActions } from "vuex";
import { format } from "path";
export default {
  name: "Movie",
  data() {
    return {
      testData: {
        name: "lila",
        age: 12
      }
    };
  },
  computed: {
    ...mapGetters(["movie"])
  },
  methods: {
    ...mapActions(["getMovieMsg"])
  },
  created() {
    this.getMovieMsg(this.$route.query.id);
  }
};
</script>

<style lang='stylus' scoped>
.header {
  margin: 0 4vw;

  img {
    float: left;
    width: 50%;
    display: inline-block;
    position: relative;
  }

  div {
    display: block;
  }
}

.msgBox {
  position: absolute;
  left: 56vw;
  top: 21vw;
}

.director, .performer {
  text-indent: -2em;
  margin-left: 2em;
}

.review {
  text-indent: 2rem;
}

.clearFix::after {
  display: block;
  content: '';
  height: 0;
  visibility: hidden;
  clear: both;
}

.person {
  margin-top: 10vw;
}

.el-main:first-of-type {
  padding-top 8vw
  padding-bottom: 0;
}

.el-divider {
  margin: 3vw 0;
}

h2 {
  display inline-block  
}
a {
  font-size 1.3em
  float: right;
  position relative
  top 50%
  transform translateY(-50%)
}
</style>