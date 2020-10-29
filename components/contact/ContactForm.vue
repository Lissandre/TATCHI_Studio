<template>
  <div class="contactForm">
    <form action="">
      <div>
        <input id="" type="text" name="" placeholder="Nom" />
        <input id="" type="text" name="" placeholder="Prénom" />
        <input id="" type="email" name="" placeholder="Mail" />
      </div>
      <div>
        <input id="" type="text" name="" placeholder="Nom de l'entreprise" />
        <input id="" type="tel" name="" placeholder="Tél" />
      </div>
      <textarea
        id=""
        name=""
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <input type="button" value="Envoyer" @click="sendMail()" />
    </form>
  </div>
</template>

<script>
export default {
  methods: {
    sendMail() {
      this.$axios.post('/mail/send', {
        from: 'John Doe',
        subject: 'Incredible',
        text: 'This is an incredible test message',
        to: 'lissandre.pasdeloup@gmail.com',
      })
    },
  },
}
</script>

<style lang="stylus" scoped>
.contactForm
  display flex
  justify-content center
  margin-top 100px
form
  width 80%
  display flex
  flex-direction column
  & div
    margin 20px 0
input
  border none
  border-radius 5px
  background #F7F7F7
  padding 15px 20px
  width 28%
  margin-right 10px
  outline-color #000000
textarea
  margin-top 10px
  height 368px
  border none
  border-radius 5px
  background #F7F7F7
  padding 20px
  resize vertical
  outline-color #000000
  font-family 'Nexa'
input[type=submit]
  width 30%
  border none
  border-radius 5px
  display inline-block
  color #d0d0d0
  background #575757
  margin 30px auto
  padding 15px 20px
  cursor pointer
  font-weight bold
  outline-color #000000
</style>
