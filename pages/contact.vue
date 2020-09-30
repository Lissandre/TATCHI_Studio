<template>
  <div>
    <p class="introductionText">
      <span>Tatchi Studio.</span> Lorem ipsum dolor sit amet, consectetur
      adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
      magna aliqua. Ut enim ad minim veniam, quis nostrud
    </p>
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
        <input type="submit" value="Envoyer" />
      </form>
    </div>
    <div class="contactTexts">
      <div>
        <p>Qui sommes-nous</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea
        </p>
      </div>
      <div>
        <p>Contactez-nous</p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        </p>
      </div>
    </div>
    <div class="agencyPictures">
      <div>
        <img src="~assets/images/pic1.png" alt="" />
      </div>
      <div>
        <img src="~assets/images/pic2.png" alt="" />
      </div>
    </div>
    <BackTop />
  </div>
</template>

<script>
import BackTop from '@/components/global/BackTop'
export default {
  name: 'Contact',
  components: {
    BackTop,
  },
}
</script>

<style lang="stylus" scoped>
.introductionText
  font-weight lighter
  color #D0D0D0
  font-size 54px
  & span
    color #575757
    text-transform uppercase
.contactForm
  display flex
  justify-content center
  margin-top 100px
  & form
    width 80%
    display flex
    flex-direction column
    & div
      margin 20px 0
      & input
        border none
        border-radius 5px
        background #F7F7F7
        padding 15px 20px
        width 28%
        margin-right 10px
        outline-color #000000
    & textarea
      margin-top 10px
      height 368px
      border none
      border-radius 5px
      background #F7F7F7
      padding 20px
      resize vertical
      outline-color #000000
      font-family 'Nexa'
    & input[type=submit]
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

.contactTexts
  margin-top 500px
  & div
    display flex
    justify-content space-between
    margin-bottom 50px
    & p
      &:first-child
        color #d0d0d0
        line-height 40px
        font-size 20px
      &:last-child
        color #808080
        line-height 40px
        font-size 20px
        width 80%

.agencyPictures
  margin-top 300px
  display flex
  justify-content space-between
  width 100%
  & div
    &:first-child
      width 59%
    &:last-child
      width 39%
    & img
      width 100%
</style>
