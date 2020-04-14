<template>
  <div>
    <div class=" col-12">
      <h2 class='m-2 text-primary'>{{apodData.title}}</h2>
      <img class="img-fluid" :src="apodData.hdurl" alt="" srcset="">
      <h4 class=" m-4 text-white">{{apodData.explanation}}</h4>
    </div>
  </div>
</template>

<script>
  export default {
    // name: 'photos',
    // props: ['photosData'],
    data() {
      return {

      }
    },
    methods: {
    },
    computed: {
      apodData() {
        return this.$store.state.photos;
      }
    },
  }
</script>

<style lang="stylus" scoped>

</style>