<template>
  <div>
    <ContactIntroText />
    <ContactForm />
    <ContactAbout />
    <ContactPictures />
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
          content:
            "un simple contact vers notre équipe peut vous montrer les avantages qu'il y a à nous faire confiance.",
        },
      ],
    }
  },
}
</script>
