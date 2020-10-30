<template>
  <div class="contactForm">
    <form action="">
      <div>
        <input id="" ref="lastname" type="text" name="" placeholder="Nom" />
        <input id="" ref="firstname" type="text" name="" placeholder="Prénom" />
        <input id="" ref="mail" type="email" name="" placeholder="Mail" />
      </div>
      <div>
        <input
          id=""
          ref="company"
          type="text"
          name=""
          placeholder="Nom de l'entreprise"
        />
        <input id="" ref="phone" type="tel" name="" placeholder="Tél" />
      </div>
      <textarea
        id=""
        ref="text"
        name=""
        cols="30"
        rows="10"
        placeholder="Message"
      ></textarea>
      <input type="submit" value="Envoyer" @click="sendMail()" />
    </form>
  </div>
</template>

<script>
// import axios from 'axios'

export default {
  methods: {
    sendMail() {
      this.data = JSON.stringify({
        from: `${this.$refs.firstname.value} ${this.$refs.lastname.value} <${this.$refs.mail.value}>`,
        subject: 'Contact TATCHI Studio',
        text: `${this.$refs.text.value} \n \n \n${this.$refs.firstname.value} ${this.$refs.lastname.value} \n${this.$refs.mail.value} \n${this.$refs.phone.value} \n${this.$refs.company.value}`,
        to: 'contact@tatchi.fr',
      })
      this.$axios.$post('/mail/send', this.data, {
        headers: { 'Content-Type': 'application/json' },
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
