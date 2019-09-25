<template>
  <div>
    <h2>Halo</h2>
    <div>{{ testDate.subjects[1].title }}</div>
    <img :src="testDate.subjects[1].casts[0].avatars.small" alt />
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "Halo",
  data() {
    return {
      testDate: []
    };
  },
  methods: {
    getData() {
      axios
        .get("api/v2/movie/in_theaters?count=2")
        .then(res => {
          this.testDate = res.data;
        })
        .catch(err => {
          console.log(err);
        });
    }
  },
  created() {
    this.getData();
  }
};
</script>

<style>
</style>