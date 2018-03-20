<template lang='pug'>
.nowAddress {{Address}}
</template>

<script>
export default {
  data() {
    return {
      Address: '0.tcp.ngrok.io:15836'
    }
  }
}
</script>

<style lang='sass' scoped>
@font-face
  font-family: 'light-nocond'
  src: url('~/assets/URWDIN-Light.ttf')
.nowAddress
  font-size: 1.5em
  // font-family: 'light-nocond'
  background-color: #111
  color: #eee
  height: 1.5em
  line-height: 1.5em
  padding-top: .25em
  display: flex
  justify-content: center
  align-items: center
  &:before
    content: ' now Address is " '
    font-family: "light","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
  &:after
    content: ' "'
    font-family: "light","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
</style>
