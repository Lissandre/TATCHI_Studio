<template>
  <div>
    <ParallaxCrea />
    <BackTop />
  </div>
</template>

<script>
import ParallaxCrea from '@/components/creations/ParallaxCrea'
import BackTop from '@/components/global/BackTop'
export default {
  name: 'Creations',
  components: {
    ParallaxCrea,
    BackTop,
  },
}
</script>
