<template>
  <div class="creaFilters">
    <span class="filter">Filtre</span>
    <span class="filter">Filtre</span>
    <span class="filter">Filtre</span>
    <span class="filter">Filtre</span>
    <span class="filter">Filtre</span>
  </div>
</template>

<script>
export default {
  name: 'CreaFilters',
}
</script>

<style lang="stylus" scoped>
.creaFilters
  display flex
  justify-content space-around
  padding 50px 0 150px 0

.filter
  text-transform uppercase
  font-size 14px
  font-weight 700
  color #D0D0D0
  cursor pointer
</style>
