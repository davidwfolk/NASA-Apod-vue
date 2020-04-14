<template>
  <div class="col-12">
    <div class="row text-center">
      <div class="col-12 display-1 bg-dark text-white">
          NASA Photo of the Day
      </div>
    </div>
    <div class="bg-dark col-12">
      <photo></photo>
    </div>
  </div>
</template>

<script>
  import Photo from './Photo.vue'
  export default {
    name: 'photos',
    data() {
      return {

      }
    },
    computed: {
      photos() {
        return this.$store.state.photos
      }
    },
    created () {
      this.$store.dispatch("getPhotos")
    },
    components: {
      Photo
    }
  }
</script>

<style lang="stylus" scoped>

</style>