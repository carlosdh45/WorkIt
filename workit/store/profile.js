import axios from 'axios'
import { firestore } from '~/plugins/firebase.js'

const ordersApiUrl = process.env.apiUrl 

const ordersReqConfig = {
  headers: {
    'Content-Type': 'application/x-www-form-urlencoded'
  }
}

export const state = () => ({
    profile:{},
    profileStatus:'',
    designUsers:{},
    designUsersStatus:'',
    
  })


export const getters = {
    getProfileDetail: state => state.profile,
    getProfileStatus: state => state.profileStatus,
    getDesignUsers: state => state.designUsers,
    getDesignUsersStatus: state => state.designUsersStatus,
    
  }

  export const mutations = {
    PROFILE_DETAIL_REQUEST: function(state) {
      state.profileStatus = 'loading'
    },
    PROFILE_DETAIL_SUCCESS: function(state, data) {
      state.profileStatus = 'success'
      state.profile = data
    },
    PROFILE_DETAIL_ERROR: function(state) {
      state.profileStatus = 'error'
    },
    DESIGN_PROFILES_REQUEST: function(state) {
      state.designUsersStatus = 'loading'
    },
    DESIGN_PROFILES_SUCCESS: function(state, data) {
      state.designUsersStatus = 'success'
      state.designUsers = data
    },
    DESIGN_PROFILES_ERROR: function(state) {
      state.designUsersStatus = 'error'
    },
    
  }

  export const actions = {
   
     /**
     * 
     * Rq for Profile details
     *
     */
      profileRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('PROFILE_DETAIL_REQUEST')
          const section = 'users'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('PROFILE_DETAIL_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('PROFILE_DETAIL_ERROR')
              reject(err)
            })
        })
      },


      designProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('DESIGN_PROFILES_REQUEST')
          const section = 'diseño'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('DESIGN_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('DESIGN_PROFILES_ERROR')
              reject(err)
            })
        })
      },

  }