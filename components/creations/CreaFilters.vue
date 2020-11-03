<template>
  <div class="creaFilters">
    <select v-model="motionType" class="filter">
      <option value="" selected>Type de Motion</option>
      <option value="presentation_produit">Présentation service/produit</option>
      <option value="motion_institutionnel">Motion Institutionnel</option>
      <option value="strategie_contenu">Stratégie de contenu</option>
    </select>
    <select v-model="graphicStyle" class="filter">
      <option value="" selected>Style Graphique</option>
      <option value="cartoon">Cartoon</option>
      <option value="flat">Flat</option>
      <option value="line_design">Line Design</option>
      <option value="isometrique">Isométrique</option>
    </select>
    <select v-model="activitySector" class="filter">
      <option value="" selected>Secteur d'activité</option>
      <option value="immobilier">Immobilier</option>
      <option value="services">Services</option>
      <option value="construction">Construction</option>
      <option value="technologie">Technologie</option>
    </select>
  </div>
</template>

<script>
export default {
  name: 'CreaFilters',
  data() {
    return {
      motionType: '',
      graphicStyle: '',
      activitySector: '',
    }
  },
}
</script>

<style lang="stylus" scoped>
.creaFilters
  display flex
  justify-content space-around
  padding 50px 0 150px 0

.filter
  width 250px
  height 30px
  font-size 14px
  font-weight 700
  color #545454
  cursor pointer

@media (max-width: 1024px)
  .creaFilters
    margin-top 10%

@media (max-width: 768px)
  .creaFilters
    display none
</style>
