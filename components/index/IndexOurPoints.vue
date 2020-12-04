<template>
  <div>
    <h2>
      Si une image vaut mille mots, un motion <br class="desktop" />
      en vaut … surement beaucoup plus !
    </h2>
    <div class="ourPoints">
      <IndexOurPointsBox
        title="Mémorable"
        text="Allégez votre message, le Motion Design retransmettra vos idées de façon claire et mémorisable."
        slug="memorable"
        side="left"
      />
      <IndexOurPointsBox
        title="Original"
        text="Une création sur mesure pour obtenir toute l’attention de votre audience."
        slug="original"
        side="right"
      />
      <IndexOurPointsBox
        title="Transparent"
        text="Vous disposez de votre espace de suivi de projet pour connaître à tous moments l’avancé de votre production."
        slug="transparent"
        side="left"
      />
      <IndexOurPointsBox
        title="Rentable"
        text="Nos productions sont des outils au service de votre croissance. Chiffres à l’appui."
        slug="roi"
        side="right"
      />
    </div>
  </div>
</template>

<script>
export default {
  name: 'IndexOurPoints',
}
</script>

<style lang="stylus" scoped>
.ourPoints
  background-size contain
  background-repeat no-repeat
  background-position 40% center
</style>
