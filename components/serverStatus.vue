<template lang='pug'>
div
  p#beforeAxios {{status}}
  p#afterAxios now playing {{online}}/{{max}}. {{players}}
</template>

<script>
import axios from 'axios'

export default {
  // props: ['address', 'port'],
  data () {
    return {
      status: 'getting server status...',
      max: 0,
      online: 0,
      players: ''
    }
  },
  mounted () {
    document.getElementById('afterAxios').className = 'd-n'
    axios.get('https://api.minetools.eu/ping/0.tcp.ngrok.io/18779')
    .then((res) => {
      if (res.data.players.max == 0) {
        this.status= 'API Call Error...(AdBlock?)'
      }
      this.max = res.data.players.max
      this.online = res.data.players.online
      if (this.online != 0) {
        this.players += 'member: '
        res.data.players.sample.forEach((obj, i) => {
          if(i != 0) this.players += ', '
          this.players += res.data.players.sample[i].name
        })
      }
      document.getElementById('afterAxios').className = ''
      document.getElementById('beforeAxios').className = 'd-n'
    })
    .catch((e) => {
      this.status　= 'Server is closing now...'
      document.getElementById('afterAxios').className = ''
      document.getElementById('beforeAxios').className = 'd-n'
    })
  }
}
</script>

<style lang='sass' scoped>
p
  margin-top: 4px
.d-n
  display: none
</style>
