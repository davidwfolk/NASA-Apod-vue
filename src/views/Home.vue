<template>
  <div class="home container-fluid bg-light">
    <div class="row">

      <Photos></Photos>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Photos from '../components/Photos.vue'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  name: 'Home',
  components: {
    Photos
  
  }
}
</script>
