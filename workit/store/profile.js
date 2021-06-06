import axios from 'axios'

const ordersApiUrl = process.env.apiUrl 

const ordersReqConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const state = () => ({
    profileDetail:[],
    
  })


export const getters = {
    getProfileDetail: state => state.profileDetail,
    
  }

  export const mutations = {
    PROFILE_DETAIL_REQUEST: function(state) {
      state.profileDetail = 'loading'
    },
    PROFILE_DETAIL_SUCCESS: function(state, data) {
      state.profileDetail = data
    },
    PROFILE_DETAIL_ERROR: function(state) {
      state.profileDetail = data
    },
    
  }

  export const actions = {
   
     /**
     * 
     * Rq for Profile details
     *
     */
    
      profileDetailRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('PROFILE_DETAIL_REQUEST')
          axios
            .get(
             //ENDPOINT
            )
            .then(res => {
              commit('PROFILE_DETAIL_SUCCESS', res.data)
              resolve(res)
            })
            .catch(err => {
              commit('PROFILE_DETAIL_ERROR')
              reject(err)
            })
        })
      },


    

   
  }