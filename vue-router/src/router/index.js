import Vue from "vue";
import VueRouter from "vue-router";
import Login from "../views/Login.vue"
import News from "../views/News.vue"
import Signup from "../views/Signup.vue"
import ClubsPl from "../views/ClubsPL.vue"
import ClubsLaliga from "../views/ClubsLaliga.vue"
import Bookmark from "../views/Bookmark.vue"
import StandingPl from "../views/StandingsPL.vue"
import StandingLaliga from "../views/StandingsLaLiga.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "News",
    component: News,
  },
  {
    path: "/login",
    name: "Login",
    component: Login,
  },
  {
    path: "/signup",
    name: "Signup",
    component: Signup,
  },
  {
    path: "/clubs/premierleague",
    name: "ClubsPl",
    component: ClubsPl,
  },
  {
    path: "/clubs/laliga",
    name: "ClubsLaliga",
    component: ClubsLaliga,
  },
  {
    path: "/bookmarks",
    name: "Bookmark",
    component: Bookmark,
  },
  {
    path: "/standings/premierleague",
    name: "StandingPl",
    component: StandingPl,
  },
  {
    path: "/standings/laliga",
    name: "StandingLaliga",
    component: StandingLaliga,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
