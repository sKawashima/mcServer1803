<template lang='pug'>
div
  nuxt
  nav
    .item.selected(@click='updateNav(0)')
      p top
    .item(@click='updateNav(1)')
      p about
    .item(@click='updateNav(2)')
      p mod list
    .item(@click='updateNav(3)')
      p installation
</template>

<script>
export default {
  methods: {
    updateNav: function ( n ) {
      console.log(n)
      const navItems = document.getElementsByClassName('item')
      for (let i = 0;i < navItems.length; i++) {
        navItems[i].className='item'
        if (i == n) {
          navItems[i].className+=' selected'
        }
      }
    }
  }
}
</script>

<style lang='sass'>
@font-face
  font-family: 'bold'
  src: url('~/assets/URWDINCond-Black.ttf')
@font-face
  font-family: 'light'
  src: url('~/assets/URWDINCond-Light.ttf')

html
  font-family: "light","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  font-size: 16px
  word-spacing: 1px
  -ms-text-size-adjust: 100%
  -webkit-text-size-adjust: 100%
  -moz-osx-font-smoothing: grayscale
  -webkit-font-smoothing: antialiased
  box-sizing: border-box
*, *:before, *:after
  box-sizing: border-box
  margin: 0
nav
  display: flex
  height: 10vh
  justify-content: space-around
  align-items: center
  .item
    flex-grow: 1
    height: 100%
    display: flex
    justify-content: center
    align-items: center
    font-size: 1.2em
    background-color: #000
    color: #fff
    transition: .3s
    border-top: 0 solid #000
    &:hover
      border-top: 1vh solid lighten(#4e1a68, 70)
  .selected
    border-top: 1vh solid lighten(#4e1a68, 50)
</style>
