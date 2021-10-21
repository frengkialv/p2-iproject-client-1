import Vue from "vue";
import Vuex from "vuex";
import axios from "../apis/server.js";
import router from '../router'
// ES6 Modules or TypeScript
import Swal from 'sweetalert2'

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    newsHotTopic: [],
    newsHotNews: [],
    newsBtn: [],
    newsLatest: [],
    clubsPl: [],
    clubsLaliga: [],
    isLogin: false,
    bookmarks: [],
    standingsPl: [],
    standingsLaliga: []
  },
  mutations: {
      SET_HOT_TOPIC(state, payload) {
        state.newsHotTopic = payload
      },
      SET_HOT_NEWS(state, payload) {
        state.newsHotNews = payload
      },
      SET_BTN_NEWS(state, payload) {
        state.newsBtn = payload
      },
      SET_LATEST_NEWS(state, payload) {
        state.newsLatest = payload
      },
      SET_CLUBSPL(state, payload) {
        state.clubsPl = payload
      },
      SET_CLUBSLALIGA(state, payload) {
        state.clubsLaliga = payload
      },
      SET_TOKEN: function (state) {
        state.isLogin = true
      },
      DELETE_TOKEN: function (state) {
        state.isLogin = false
      },
      SET_BOOKMARK: function (state, payload) {
        state.bookmarks = payload
      },
      SET_STANDINGS_PL(state, payload) {
        state.standingsPl = payload
      },
      SET_STANDINGS_LALIGA(state, payload) {
        state.standingsLaliga = payload
      },
  },
  actions: {
    getNews(context) {
      axios({
        method: "GET",
        url: "/news",
      })
      .then(({data}) => {
          const hotTopic = data.slice(0, 6)
          const hotNews = data.slice(6, 7)
          const btnNews = data.slice(7, 9)
          const latestNews = data.slice(9, 15)
          context.commit('SET_HOT_TOPIC', hotTopic)
          context.commit('SET_HOT_NEWS', hotNews)
          context.commit('SET_BTN_NEWS', btnNews)
          context.commit('SET_LATEST_NEWS', latestNews)
      })
      .catch((err) => {
          console.log(err);
      })
    },

    getClubsPl(context) {
        axios({
            method: "GET",
            url: "/clubs/premierleague"
        })
        .then(({data}) => {
            const top = data
            context.commit('SET_CLUBSPL', top)
        })
        .catch((err) => {
            console.log(err);
        })
    },

    getClubsLaliga(context) {
        axios({
            method: "GET",
            url: "/clubs/laliga"
        })
        .then(({data}) => {
            const top = data
            context.commit('SET_CLUBSLALIGA', top)
        })
        .catch((err) => {
            console.log(err);
        })
    },

    login(context, payload) {
        axios({
            method: "POST",
            url: "/login",
            data: {
                email: payload.email,
                password: payload.password
            }
        })
        .then(({data}) => {
            localStorage.setItem('access_token', data.access_token)
            context.commit('SET_TOKEN')
            router.push('/')
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Login Success',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:  err.response.data.msg
            })
        })
    },

    loginCek(context){
		if (localStorage.getItem('access_token')) {
			context.commit("SET_TOKEN")
		}
	},

    logout(context) {
        context.commit('DELETE_TOKEN')
    },

    signUp(_, payload) {
        axios({
            method: "POST",
            url: "/register",
            data: {
                email: payload.email,
                password: payload.password
            }
        })
        .then(() => {
            router.push('/login')
            Swal.fire({
                position: 'top-center',
                icon: 'success',
                title: 'Register Success',
                showConfirmButton: false,
                timer: 1500
            })
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:  err.response.data.msg
            })
        })
    },

    getBookmark(context) {
        axios({
            method: "GET",
            url: "/bookmarks",
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(({data}) => {
            const top = data
            context.commit('SET_BOOKMARK', top)
        })
        .catch((err) => {
            console.log(err);
        })
    },

    postBookmark(_, payload) {
        axios({
            method: "POST",
            url: `/bookmarks/${payload}`,
            headers: {
                access_token: localStorage.access_token
            }
        })
        .then(() => {
            router.push('/bookmarks')
        })
        .catch((err) => {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text:  err.response.data.msg
            })
        })
    },

    getStandingPl(context) {
        axios({
            method: "GET",
            url: "/standings/premierleague"
        })
        .then(({data}) => {
            const top = data
            context.commit('SET_STANDINGS_PL', top)
        })
        .catch((err) => {
            console.log(err);
        })
    },

    getStandingLaLiga(context) {
        axios({
            method: "GET",
            url: "/standings/laliga"
        })
        .then(({data}) => {
            const top = data
            context.commit('SET_STANDINGS_LALIGA', top)
        })
        .catch((err) => {
            console.log(err);
        })
    },
  },
  modules: {},
});
