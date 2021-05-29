import axios from 'axios'

const ordersReqConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const state = () => ({
    categories: [],
    profiles:[],
    services:[],
  })


export const getters = {
    getcategories: state => state.categories,
    getProfiles: state => state.profiles,
    getServices: state => state.services,
    
  }

  export const mutations = {
    CATEGORIES_REQUEST: function(state) {
        state.categories = 'loading'
    },
    CATEGORIES_SUCCESS: function(state, data) {
        state.categories = data
    },
    CATEGORIES_ERROR: function(state) {
        state.categories = data
    },
    PROFILES_REQUEST: function(state) {
        state.profiles = 'loading'
    },
    PROFILES_SUCCESS: function(state, data) {
        state.profiles = data
    },
    PROFILES_ERROR: function(state) {
        state.profiles = data
    },
    SERVICES_REQUEST: function(state) {
        state.services = 'loading'
    },
    SERVICES_SUCCESS: function(state, data) {
        state.services = data
    },
    SERVICES_ERROR: function(state) {
        state.services = data
    },

  }

  export const actions = {
     /**
     * 
     * Rq for home categories 
     * 
     *
     */ 
     categoriesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('CATEGORIES_REQUEST')
          axios
            .get(
             //ENDPOINT
            )
            .then(res => {
              commit('CATEGORIES_SUCCESS', res.data)
              resolve(res)
            })
            .catch(err => {
              commit('CATEGORIES_ERROR')
              reject(err)
            })
        })
      },

      /**
     * 
     * Rq for home profiles
     * 
     *
     */
  
     profilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('PROFILES_REQUEST')
          axios
            .get(
             //ENDPOINT
            )
            .then(res => {
              commit('PROFILES_SUCCESS', res.data)
              resolve(res)
            })
            .catch(err => {
              commit('PROFILES_ERROR')
              reject(err)
            })
        })
      },

      /**
     * 
     * Rq for home services
     * 
     *
     */
  
     servicesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('SERVICES_REQUEST')
          axios
            .get(
             //ENDPOINT
            )
            .then(res => {
              commit('SERVICES_SUCCESS', res.data)
              resolve(res)
            })
            .catch(err => {
              commit('SERVICES_ERROR')
              reject(err)
            })
        })
      },
   
  }