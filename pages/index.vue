<template lang='pug'>
section.container
  div
    h1.title
      | TSURAIMEU Server
    h2.subtitle
      | sK's minecraft server's infomations
    now
</template>

<script>
import now from '~/components/now.vue'
export default {
  components:{
    now
  }
}
</script>

<style lang='sass' scoped>
.container
  min-height: 100vh
  display: flex
  justify-content: center
  align-items: center
  text-align: left

.title
  font-family: 'bold'
  display: block
  font-size: 6.5em
  color: #000
  letter-spacing: 1px

.subtitle
  font-weight: 300
  font-size: 2.5em
  color: #666
  word-spacing: 5px
  padding-bottom: 30px
</style>
