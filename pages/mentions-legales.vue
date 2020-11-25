<template>
  <div>
    <h1>Mentions Légales</h1>
    <p>
      En vertu de l’article 6 de la loi n° 2004-575 du 21 juin 2004 pour la
      confiance dans l’économie numérique, il est précisé aux utilisateurs du
      site studio.tatchi.fr l’identité des différents intervenants dans le cadre
      de sa réalisation et de son suivi :
    </p>
    <ul>
      <li>Propriétaire du site : AO Solutions</li>
      <li>
        SAS au capital de 7 622,45 €, immatriculée au numéros RCS 433 871 910 de
        Bobigny.
      </li>
      <li>SIRET: 433 871 910 00025</li>
      <li>Adresse du siège social: 47 Rue De La Ferme, 93100 Montreuil</li>
      <li>
        Responsable publication : TATCHI STUDIO –
        <a rel="noopener noreferrer" href="mailto:contact@tatchi.fr"
          >contact@tatchi.fr</a
        >
      </li>
      <li>Le responsable publication est une personne morale.</li>
      <li>
        Webmaster : TATCHI STUDIO –
        <a rel="noopener noreferrer" href="mailto:webmaster@tatchi.fr"
          >webmaster@tatchi.fr</a
        >
      </li>
      <li>Hébergeur : OVH – 2 Rue Kellermann 59100 ROUBAIX</li>
    </ul>
  </div>
</template>

<script>
export default {
  head() {
    return {
      titre: 'TATCHI Studio - Création de motion design',
      meta: [
        {
          hid: 'description',
          name: 'description',
          content: '',
        },
      ],
    }
  },
}
</script>

<style lang="stylus" scoped>
ul
  list-style none
  padding 0
li
  margin 8px 0
  padding 0
p
  display block
  margin 24px 0 16px 0
a
  color grey
</style>
