import Vuex from 'vuex'

const createStore = () => {
  return new Vuex.Store({
    state: {
      nowView: 0
    },
    mutations: {
      increment (state, number) {
        state.nowView = number
      }
    }
  })
}

export default createStore
