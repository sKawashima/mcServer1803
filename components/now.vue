<template lang='pug'>
.nowAddress
  p#info {{message}}
  p#address(v-bind:data-clipboard-text='Address + ":" + port') {{Address + ":" + port}}
  serverStatus
</template>

<script>
import clipboard from 'clipboard'
import serverStatus from '~/components/serverStatus.vue'

export default {
  data() {
    return {
      Address: '0.tcp.ngrok.io',
      port: '15836',
      message: 'please click to copy:'
    }
  },
  mounted(){
    const c = new clipboard('#address')
    c.on("success", (e) => {
    	this.message = 'copied!'
      setTimeout(() => {this.message = 'please click to copy:'}, 2000)
    })
  },
  components: {
    serverStatus
  }
}
</script>

<style lang='sass' scoped>
#info
  color: #666
#address
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
    content: 'now Address: '
    font-family: "light","Source Sans Pro", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif
    margin-right: .2em
</style>
