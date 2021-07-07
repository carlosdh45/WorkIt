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
    programingUsers:{},
    programingUsersStatus:'',
    marketingUsers:{},
    marketingUsersStatus:'',
    callUsers:{},
    callUsersStatus:'',
    jobsUsers:{},
    jobsUsersStatus:'',
    newUsers:{},
    newUsersStatus:'',
    newJobsUsers:{},
    newJobsUsersStatus:'',
    post: '',

    
  })


export const getters = {
    getProfileDetail: state => state.profile,
    getProfileStatus: state => state.profileStatus,
    getDesignUsers: state => state.designUsers,
    getDesignUsersStatus: state => state.designUsersStatus,
    getProgramingUsers: state => state.programingUsers,
    getProgramingStatus: state => state.programingUsersStatus,
    getMarketingUsers: state => state.marketingUsers,
    getMarketingStatus: state => state.marketingUsersStatus,
    getCallUsers: state => state.callUsers,
    getCallStatus: state => state.callUsersStatus,
    getJobsUsers: state => state.jobsUsers,
    getJobsStatus: state => state.jobsUsersStatus,
    getNewUsers: state => state.newUsers,
    getNewStatus: state => state.newUsersStatus,
    getNewJobsUsers: state => state.newJobsUsers,
    getNewJobsStatus: state => state.newJobsUsersStatus,
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
    PROGRAMING_PROFILES_REQUEST: function(state) {
      state.programingUsersStatus = 'loading'
    },
    PROGRAMING_PROFILES_SUCCESS: function(state, data) {
      state.programingUsersStatus = 'success'
      state.programingUsers = data
    },
    PROGRAMING_PROFILES_ERROR: function(state) {
      state.programingUsersStatus = 'error'
    },
    MARKETING_PROFILES_REQUEST: function(state) {
      state.marketingUsersStatus = 'loading'
    },
    MARKETING_PROFILES_SUCCESS: function(state, data) {
      state.marketingUsersStatus = 'success'
      state.marketingUsers = data
    },
    MARKETING_PROFILES_ERROR: function(state) {
      state.marketingUsersStatus = 'error'
    },
    CALL_PROFILES_REQUEST: function(state) {
      state.callUsersStatus = 'loading'
    },
    CALL_PROFILES_SUCCESS: function(state, data) {
      state.callUsersStatus = 'success'
      state.callUsers = data
    },
    CALL_PROFILES_ERROR: function(state) {
      state.callUsersStatus = 'error'
    },
    POST_USERS_REQUEST: function(state) {
      state.post = 'loading'
    },
    POST_USERS_SUCCESS: function(state) {
      state.post = 'success'
    },
    POST_USERS_ERROR: function(state) {
      state.post = 'error'
    },
    POST_USERS_RESET: function(state) {
      state.post = ''
    },
    JOBS_PROFILES_REQUEST: function(state) {
      state.jobsUsersStatus = 'loading'
    },
    JOBS_PROFILES_SUCCESS: function(state, data) {
      state.jobsUsersStatus = 'success'
      state.jobsUsers = data
    },
    JOBS_PROFILES_ERROR: function(state) {
      state.jobsUsersStatus = 'error'
    },
    NEW_PROFILES_REQUEST: function(state) {
      state.newUsersStatus = 'loading'
    },
    NEW_PROFILES_SUCCESS: function(state, data) {
      state.newUsersStatus = 'success'
      state.newUsers = data
    },
    NEW_PROFILES_ERROR: function(state) {
      state.newUsersStatus = 'error'
    },
    NEWJOBS_PROFILES_REQUEST: function(state) {
      state.newJobsUsersStatus = 'loading'
    },
    NEWJOBS_PROFILES_SUCCESS: function(state, data) {
      state.newJobsUsersStatus = 'success'
      state.newJobsUsers = data
    },
    NEWJOBS_PROFILES_ERROR: function(state) {
      state.newJobsUsersStatus = 'error'
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

      programingProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('PROGRAMING_PROFILES_REQUEST')
          const section = 'programacion'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('PROGRAMING_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('PROGRAMING_PROFILES_ERROR')
              reject(err)
            })
        })
      },


      marketingProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('MARKETING_PROFILES_REQUEST')
          const section = 'marketing'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('MARKETING_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('MARKETING_PROFILES_ERROR')
              reject(err)
            })
        })
      },


      callProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('CALL_PROFILES_REQUEST')
          const section = 'callCenter'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('CALL_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('CALL_PROFILES_ERROR')
              reject(err)
            })
        })
      },

      jobsProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('JOBS_PROFILES_REQUEST')
          const section = 'trabajos'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('JOBS_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('JOBS_PROFILES_ERROR')
              reject(err)
            })
        })
      },


      newProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('NEW_PROFILES_REQUEST')
          const section = 'newusers'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('NEW_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('NEW_PROFILES_ERROR')
              reject(err)
            })
        })
      },

      newJobsProfilesRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('NEWJOBS_PROFILES_REQUEST')
          const section = 'newJobs'
          firestore
          .collection("services")
          .doc(section)
          .get()
            .then(res => {
              commit('NEWJOBS_PROFILES_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('NEWJOBS_PROFILES_ERROR')
              reject(err)
            })
        })
      },



      //Post

      ProfilesAddRq({ commit }) {
        return new Promise((resolve, reject) => {
          commit('POST_USERS_REQUEST')
          const section = 'newusers'
          firestore
          .collection("services")
          .doc(section)
          .add({nombre:names, fecha:date} )
            .then(res => {
              commit('POST_USERS_SUCCESS', res.data())
              console.log(res.data);
            })
            .catch(err => {
              commit('POST_USERS_ERROR')
              reject(err)
            })
        })
      },
  }