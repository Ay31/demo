<template>
  <div>
    <h2>正在热映</h2>
    <div class="grid">
      <router-link
        :to="{path:'/movie',query:{id:item.id}}"
        v-for="(item,index) of movieList.subjects"
        :key="index"
        class="movieList"
      >
        <img :src="item.images.small" />
        {{ item.title }}
      </router-link>
    </div>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  data () {
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
a {
  text-decoration: none;
  color: #000;
}

.movieList {
  padding: 4vw;

  img {
    width: 100%;
  }
}

.grid {
  display: grid;
  grid-template-columns: 50% 50%;
  text-align: center;
}
</style>