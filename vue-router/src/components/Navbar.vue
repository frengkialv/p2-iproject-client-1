<template>
  <header>
      <div class="navigation-container">
        <div class="top-head">
          <div class="web-name">
            <h1>SPORTSNEWS</h1>
          </div>
        </div>

        <!-- nav bar -->

        <div class="nav-bar" id="nav-bar">
          <nav>
            <ul>
                <router-link to="/"><li><a href="#" style="text-decoration: none;">Home</a></li></router-link>
                <li><a href="#" style="text-decoration: none;">Clubs</a>
                    <ul>
                        <router-link to="/clubs/premierleague"><li><a href="#">Premier League</a></li></router-link>
                        <router-link to="/clubs/laliga"><li><a href="#">La Liga</a></li></router-link>
                    </ul>
                </li>
                <li><a href="#" style="text-decoration: none;">League Table</a>
                    <ul>
                        <router-link to="/standings/premierleague"><li><a href="#">Premier League</a></li></router-link>
                        <router-link to="/standings/laliga"><li><a href="#">La Liga</a></li></router-link>
                    </ul>
                </li>

                <template v-if="isLogin">
                <router-link to="/bookmarks"><li><a href="#" style="text-decoration: none;">Bookmark</a></li></router-link>
                <router-link to="/login"><li><a @click='logout' href="#" style="text-decoration: none;">Logout</a></li></router-link>
                </template>

                <template v-if="!isLogin">
                <router-link to="/login"><li><a href="#" style="text-decoration: none;">Login</a></li></router-link>
                </template>
            </ul>
          </nav>
          <router-view/>
        </div>

        <!--social icons -->
        <div class="social-icons">
          <ul>
            <li>
              <a
                href="https://id-id.facebook.com/premierleague"
                target="_blank"
                ><i class="fab fa-facebook"></i
              ></a>
            </li>
            <li>
              <a
                href="https://twitter.com/premierleague?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"
                target="_blank"
                ><i class="fab fa-twitter"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.instagram.com/premierleague/?hl=id"
                target="_blank"
                ><i class="fab fa-instagram"></i
              ></a>
            </li>
            <li>
              <a
                href="https://www.youtube.com/c/premierleague"
                target="_blank"
                ><i class="fab fa-youtube"></i
              ></a>
            </li>
          </ul>
        </div>
      </div>
    </header>
</template>

<script>
export default {
    name: "Navbar",
    computed: {
        isLogin () {
            this.$store.dispatch("loginCek")
            return this.$store.state.isLogin
        },
    },
    methods: {
        logout() {
            localStorage.clear()
            this.$store.dispatch("logout")
        }
    },
}
</script>

<style>
* {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }
  
  :root {
    --heading: "Montserrat", sans-serif;
  }
  
  html {
    scroll-behavior: smooth;
  }
  
  body {
    font-family: "Raleway", sans-serif;
    background: #fff;
    overflow-y: scroll; /* Add the ability to scroll */
  }
  
  /* Hide scrollbar for Chrome, Safari and Opera */
  body::-webkit-scrollbar {
    display: none;
  }
  
  /* Hide scrollbar for IE, Edge and Firefox */
  .example {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
  
  /* global styling */
  
  img {
    width: 100%;
  }
  ul {
    list-style: none;
  }
  
  a {
    text-decoration: none;
    color: #000;
  }
  
  hr {
    width: 95vw;
    margin: 0 auto;
  }
  
  /* header */
  
  .top-head {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    color: #fff;
    padding: 20px 30px;
  }
  
  .top-head .fas {
    font-size: 2rem;
    cursor: pointer;
  }
  
  .web-name {
    font-size: small;
  }
  
  /******* js related styling *****/
  
  .times-btn {
    display: none;
  }
  
  .nav-bar {
    background: #333;
    height: 0;
    /* overflow: hidden; */
  }
  
  .show-nav {
    height: auto;
  }
  
  .nav-bar ul {
    position: relative;
    z-index: 999;
  }
   
  .nav-bar ul ul{
      list-style: none;
      padding: 0;
      margin: 0;
      position: absolute;
      border-radius: 5px;
      background-color: #434343;
   }
  
   .nav-bar ul ul li{
    width: 200px;
  } 
  
  .nav-bar ul li {
      text-align: center;
  }
  
  .nav-bar ul li a {
      display: block;
      text-decoration: none;
      text-align: center;
      padding: 10px;
      border-radius: 10px;
      color: #fff;
  }
  
  .nav-bar ul li ul {
      display: none;
  }
  
  .nav-bar ul li:hover ul {
      display: block;
  } 
  
  /* social -icons */
  
  .social-icons {
    display: none;
  }
  
  /* banner */
  
  .banner {
    min-height: auto;
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    padding: 30px 0;
    margin-top: 8px;
  }
  
  .banner-main-content {
    padding: 0 2rem;
    line-height: 1.7;
  }
  
  .banner-main-content h2 {
    font-size: 2rem;
    font-family: var(--heading);
  }
  
  .banner-main-content h3 {
    padding: 1rem 0;
  }
  
  .banner-main-content button {
    border: none;
    background: #252525;
    padding: 14px 18px;
    font-size: 1.2rem;
    font-family: "Montserrat", sans-serif;
    transition: background 1s ease;
  }
  
  .banner-main-content button a {
    color: #f3f3f3f3;
    transition: color 1s ease;
  }
  
  .banner-main-content button:hover {
    background: #fff;
  }
  
  .banner-main-content button:hover a {
    color: #0d0a0b;
  }
  
  .current-news-head {
    background: #fff;
    padding: 20px;
    font-size: 12px;
    margin: 20px 0;
  }
  
  .current-news-head h3 {
    padding: 6px;
    cursor: pointer;
    position: relative;
  }
  
  .current-news-head h3:hover::before {
    content: ">> ";
    position: absolute;
    left: -12px;
  }
  
  .current-news-head span {
    display: block;
    font-family: var(--heading);
    font-weight: 300;
    text-transform: uppercase;
  }
  
  .hot-topic {
    overflow: hidden;
    position: relative;
    width: 100%;
    padding: 12px;
    height: 300px;
  }
  
  .hot-topic img {
    display: block;
  }
  
  .hot-topic-content {
    position: absolute;
    bottom: 0;
    left: 20px;
    right: 20px;
    padding: 10px 20px;
    line-height: 1.3;
    color: #f3f3f3;
  }
  
  .hot-topic h2 {
    padding: 10px 0;
    font-size: 18px;
    text-shadow: 0 0 2px #000;
  }
  
  .hot-topic h3 {
    padding: 10px 0;
    font-size: 16px;
    text-shadow: 0 0 2px #000;
  }
  
  .hot-topic p {
    padding: 10px 0;
    font-size: 15px;
    font-weight: 600;
    text-shadow: 0 0 2px #000;
    padding: 12px 10px;
  }
  
  .hot-topic-content a {
    display: block;
    background: #f3f3f3;
    border: none;
    width: 95px;
    border-radius: 2px;
    text-align: center;
    padding: 7px 10px;
    font-size: 14px;
    margin: 10px 0 10px 10px;
  }
  
  .hot-topic-content a:hover {
    text-decoration: underline;
  }
  
  .img-zoom {
    transform-origin: 65% 75%;
    transition: transform 1s, filter 0.5s ease-out;
  }
  
  .img-zoom:hover {
    transform: scale(1.03);
  }
  
  /** main ***/
  
  main a {
    padding: 15px 0;
    display: block;
    transition: all 0.5s;
  }
  
  main span {
    transition: padding-left 0.5s;
  }
  
  main a:hover span {
    padding-left: 5px;
  }
  
  main a:hover {
    color: #7ac64d;
  }
  
  /* main container left */
  
  .main-container-left {
    padding: 30px 10px;
  }
  
  .main-container-left > h2 {
    padding: 15px 0 15px 30px;
  }
  
  .main-container-left h3 {
    padding: 10px 0;
    font-size: 18px;
    font-family: var(--heading);
  }
  
  .main-container-left p {
    font-size: 15px;
    font-weight: 300;
  }
  
  .main-container-left article {
    padding: 10px;
  }
  
  .container-top-left {
    padding: 15px 30px;
    transform-origin: 65% 75%;
    transition: transform 1s, filter 0.5s ease-out;
  }
  
  .container-top-left:hover {
      -ms-transform: scale(1.1); /* IE 9 */
      -webkit-transform: scale(1.1); /* Safari 3-8 */
      transform: scale(1.04);
  }
  
  .container-bottom-left {
    background: #f3f3f3;
    margin: 15px 30px;
  }
  
  .container-bottom-left article{
      transform-origin: 65% 75%;
      transition: transform 1s, filter 0.5s ease-out;
  }
  .container-bottom-left article:hover {
      -ms-transform: scale(1.1); /* IE 9 */
      -webkit-transform: scale(1.1); /* Safari 3-8 */
      transform: scale(1.04);
  }
  
  /*** main container right */
  
  .main-container-right {
    padding: 30px 10px;
  }
  
  .main-container-right > h2 {
    padding: 15px 0 15px 30px;
  }
  
  .main-container-right article {
    display: grid;
    grid-template-columns: 1fr 3fr 1fr;
    padding: 15px 0;
    border-bottom: 1px solid #7ac64d;
  }
  
  .main-container-right article:last-child {
    border-bottom: none;
  }
  
  .main-container-right img {
    width: 100px;
    height: 100px;
    align-self: center;
  }
  
  .main-container-right h4 {
    text-align: center;
    text-transform: uppercase;
    font-weight: 300;
    font-size: 12px;
    align-self: center;
  }
  
  .main-container-right article h2 {
    font-size: 18px;
    padding: 10px 0;
    font-family: var(--heading);
  }
  
  .main-container-right article p {
    font-size: 15px;
    font-weight: 300;
  }
  
  .main-container-right article div {
    margin-right: 10px;
  }
  
  /****** footer *****/
  
  footer {
    background: #EBEDEF;
    color: #0f1c73;
    /* padding: 5px; */
  }
  
  footer h2 {
    padding: 10px 0;
  }
  
  footer p {
    padding: 10px 0;
    line-height: 1.3;
    font-weight: bold;
    color: #000;
  }
  
  .footer-left,
  .footer-right {
    margin: 0 20px;
  }
  
  footer > p {
    text-align: center;
    opacity: 0.8;
    margin-top: 20px;
  }
  
  .footer-right i {
    font-size: 1.8rem;
    color: #808080;
  }
  
  .footer-right input {
    font-size: 18px;
    border: none;
    background: transparent;
    outline: none;
    color: #808080;
    padding-right: 10px;
    width: 100%;
  }
  
  .footer-right div {
    display: flex;
    align-items: center;
    justify-content: start;
    width: 200px;
    padding: 10px 0;
    border-bottom: 1.6px solid #808080;
  }
  
  @media (max-width: 460px) {
    .hot-topic-content h2 {
      font-size: 16px;
    }
  
    .main-container-right article {
      display: block;
    }
  
    .main-container-right article img {
      display: none;
    }
  }
  
  @media (max-width: 500px) {
    .main-container-right article {
      grid-template-columns: 1fr 3fr;
      grid-template-rows: 1fr 1fr;
    }
  
    .main-container-right article h4 {
      grid-row: 1/2;
      grid-column: 1/2;
      align-self: flex-start;
    }
  
    .main-container-right article img {
      grid-row: 2/3;
      grid-column: 1/2;
    }
  
    .main-container-right article div {
      grid-row: 1/3;
      grid-column: 2/3;
    }
  }
  
  @media (min-width: 768px) {
    .banner-sub-content {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
    }
  
    .container-bottom-left {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 800px) {
    /* nav */
    .ham-btn,
    .times-btn {
      display: none !important;
    }
  
    .navigation-container {
      display: flex;
      background: #000000;  /* fallback for old browsers */
      background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
      background: linear-gradient(to right, #434343, #000000); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
      align-items: center;
      flex-wrap: wrap;
    }
  
    .top-head {
      flex: 0 0 15%;
    }
  
    .nav-bar {
      flex: 1 0 auto;
      height: 100%;
      background: transparent;
    }
  
    .nav-bar nav ul {
      display: flex;
      justify-content: center;
    }
  
    .nav-bar nav ul li {
      padding-right: 30px;
      transition: transform 0.2s;
    }
  
    .nav-bar nav ul li:hover {
      background: none;
      transform: scale(1);
    }
  
    /* social icons */
    .social-icons {
      flex: 0 1 20%;
      display: block;
      margin: 0 auto;
    }
  
    .social-icons .fab {
      color: #fff;
      font-size: 1.5rem;
      transition: transform 0.2s;
    }
    .social-icons .fab:hover {
      -ms-transform: scale(1.5); /* IE 9 */
      -webkit-transform: scale(1.5); /* Safari 3-8 */
      transform: scale(1.2);
    }
    .social-icons ul {
      display: flex;
      justify-content: space-between;
      padding: 0 20px;
    }
    .social-icons ul li {
      padding: 20px;
    }
  
    .footer-container {
      display: flex;
    }
  
    .footer-right,
    .footer-left {
      flex: 1;
    }
  }
  
  @media (min-width: 992px) {
    main {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }
  }
  
  @media (min-width: 1080px) {
    .banner {
      grid-template-columns: 1fr;
    }
  }
</style>