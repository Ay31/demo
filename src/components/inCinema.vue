<template>
  <div>
    <h2>正在热映</h2>
    <div>
      <router-link :to="{path:'/movie',query:{id:item.id}}" v-for="(item,index) of movieList.subjects" :key="index" class="movieList">
      <img :src="item.images.small" />
      {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data() {
    return {};
  },
  name: "inCinema",
  methods: {
    ...mapActions(["addList"])
  },
  created() {
    this.addList();
  },
  computed: {
    ...mapGetters(["movieList"])
  }
};
</script>

<style lang='stylus'>
a
  text-decoration none 
  color #000 
.movieList
  width 40%
  display inline-block
  margin 3vw
  img
    width 100%
</style>