import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //用户信息
    user: {
      account: '3288316494',
      name: "米凯拉",
      desc: "每天都要开心,阳光,开朗的面对自己的生活！",
      sex: "女",
      email: "123@qq.com",
      avatar: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
    }
  },
  getters: {
  },
  mutations: {
    updateUser(state, user) {
      state.user = user
    }
  },
  actions: {
  },
  modules: {
  }
})
