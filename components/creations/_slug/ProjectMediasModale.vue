<template>
  <div class="modale"></div>
</template>

<script>
export default {
  props: {
    urlModale: {
      type: String,
      default: null,
    },
    mediaList: {
      type: Array,
      default: () => [],
    },
  },
}
</script>
