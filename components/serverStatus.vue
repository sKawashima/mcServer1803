<template lang='pug'>
div
  p#beforeAxios {{status}}
  p#afterAxios.d-n now playing {{online}}/{{max}}. {{players}}
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
    axios.get('https://api.minetools.eu/ping/0.tcp.ngrok.io/15836')
    .then((res) => {
      if (res.data.players.max == 0) {
        this.status= 'API Call Error...(AdBlock?)'
      }
      this.max = res.data.players.max
      this.online = res.data.players.online
      if (this.online != 0) {
        this.players += 'member: '
        this.players += res.data.players.sample[0].name
        for (let i = 1;i < res.data.players.sample.length; i++){
          this.players += ', '
          this.players += res.data.players.sample[i].name
        }
      }
      document.getElementById('afterAxios').classList.remove('d-n')
      document.getElementById('beforeAxios').classList.add('d-n')
    })
    .catch((e) => {
      this.status　= 'Server is closing now...'
      document.getElementById('afterAxios').classList.remove('d-n')
      document.getElementById('beforeAxios').classList.add('d-n')
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
