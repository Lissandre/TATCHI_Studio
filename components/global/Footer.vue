<template>
  <footer>
    <div class="col">
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
        <li>lorem ipsum</li>
      </ul>
    </div>
    <div class="col">
      <ul>
        <li>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/images/logos/twitter.svg" alt="" />
          </a>
          <a
            href="https://linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src="@/assets/images/logos/linkedin.svg" alt="" />
          </a>
        </li>
        <li>lorem ipsum lorem ipsum</li>
      </ul>
    </div>
  </footer>
</template>

<script>
export default {}
</script>

<style lang="stylus">
footer
  width 100%
  display flex
  justify-content space-around
  background-color #fcfcfc
  padding 5% 10%
  & .col
    & ul
      border-left 2px solid #e3e3e3
      list-style none
      height 100%
      margin 0
      padding 10px 0 10px 20px
      & li
        margin 10px 0
    &:last-child ul
      display flex
      flex-direction column
      justify-content space-between
      & li a
        & img
          transition 0.12s transform linear
          will-change transform
        &:hover img
          transform scale(1.1, 1.1)
        &:first-child
          margin-right 29px
</style>
