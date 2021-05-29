import axios from 'axios'

const ordersApiUrl = process.env.apiUrl 

const ordersReqConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const state = () => ({
    login: [],
  })


export const getters = {
    getLogin: state => state.login,
    getToken:()=> localStorage.getItem('access-token'),
  }

  export const mutations = {
    LOGIN_REQUEST: function(state) {
      state.login = 'loading'
    },
    LOGIN_SUCCESS: function(state, data) {
      state.login = data
    },
    LOGIN_ERROR: function(state) {
      state.login = data
    },
    

    
  }

  export const actions = {
   
     /**
     * 
     * Rq for contenedores (tarimas)
     *
     */
    loginRq({ commit } ,obj) {
      return new Promise((resolve, reject) => {
        commit('LOGIN_REQUEST')
        axios
          .post(
            ordersApiUrl + 'Login/Login?Username='+ obj.user + '&Password=' + obj.password 
          )
          .then(res => {
            commit('LOGIN_SUCCESS', res.data)
            resolve(res.data)
            localStorage.setItem('access-token',res.data.token)
          })
          .catch(err => {
            commit('LOGIN_ERROR')
            reject(err)
          })
      })
    },
    logoutRq(){
      localStorage.removeItem('access-token');
    }

   
  }