<template>
  <div class="home">
    <!-- <demo></demo> -->
    <h1>MOVIE</h1>
    <inCinema></inCinema>
  </div>
</template>

<script>
// @ is an alias to /src
import demo from '@/components/demo.vue'
import inCinema from '@/components/inCinema.vue'

export default {
  name: 'home',
  components: {
    demo,
    inCinema
  }
}
</script>
