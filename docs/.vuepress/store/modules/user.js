import { login, getInfo } from '/docs/.vuepress/api/login'
import { Message, MessageBox, Notification, Loading } from 'element-ui'          

const user = {
  state: {
    name: '',
    nickName:'',
    phonenumber: '',
    roles: [],
    permissions: []
  },

  mutations: {
    SET_NAME: (state, name) => {
      console.log("name赋值为：",name)
      state.name = name;
    },
    SET_NICKNAME: (state, nickName) => {
            state.nickName = nickName
    },
    SET_ROLES: (state, roles) => {
      state.roles = roles
    },
    SET_PHONENUMBER: (state, phonenumber) => {
      state.phonenumber = phonenumber
    },
    SET_PERMISSIONS: (state, permissions) => {
      state.permissions = permissions
    }
  }, 

  actions: {
    // 登录
    Login({ commit }, userInfo) {
      const username = userInfo.username.trim()
      const password = userInfo.password
      return new Promise((resolve, reject) => {
        login(username, password).then(res => {
          console.log("res:",res)
          if(res.data.code!==200){
            Message.error("登录失败！原因是： "+res.data.msg);
            reject(res.data.msg)
          }else{
            console.log("登录成功！")
            commit('SET_NAME', username)
            resolve()
          }
          
        }).catch(error => {
          reject(error)
        })
      })
    },

    // 获取用户信息
    GetInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getInfo().then(res => {
          debugger
          const user = res.user
          if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
            commit('SET_ROLES', res.roles)
            commit('SET_PERMISSIONS', res.permissions)
          } else {
            commit('SET_ROLES', ['ROLE_DEFAULT'])
          }
          commit('SET_NAME', user.userName)
          commit('SET_NICKNAME', user.nickName)
          commit('SET_PHONENUMBER', user.phonenumber)
          resolve(res)
        }).catch(error => {
          reject(error)
        })
      })
    },

  }
}

export default user
