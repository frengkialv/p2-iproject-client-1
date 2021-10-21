<template>
  <div>
    <Navbar></Navbar>
    <div class="club-list">
      <div class="container">
        <div class="row">
          <div v-for="club in bookmarks" :key="club.id" class="card">
            <img
              :src="club.Club.image"
            />
            <h4>{{ club.Club.name }}</h4>
            <p>{{ club.Club.stadion }}</p>
          </div>
        </div>
      </div>
    </div>
    <Footer></Footer>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";
export default {
    name: "Bookmark",
    computed: {
        bookmarks() {
            return this.$store.state.bookmarks
        }
    },
    created: function () {
        this.$store.dispatch("getBookmark");
    },
    components: {
        Navbar,
        Footer,
    }
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.club-list {
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: white;
  line-height: 1.5;
}

a {
  text-decoration: none;
}

.container {
  width: 1100px;
  max-width: 100%;
  margin: 0 auto;
}

.row {
  display: flex;
  flex-wrap: wrap;
  margin-top: 4px;
}

.card {
  display: flex;
  align-items: center;
  margin: 10px 20px;
  flex-direction: column;
  background: #fff;
  box-shadow: 0 0 15px rgba(0, 0, 0, 0.4);
  padding: 10px 20px;
  align-self: normal;
  width: 27%;
  height: 340px;
}

.card img {
  max-width: 200px;
  width: 60%;
  height: 50%;
}
.card h4 {
  font-size: 1.3rem;
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  text-transform: uppercase;
  margin: 10px 0;
}

.card h3 {
  font-size: 1.3rem;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
  text-transform: uppercase;
  margin: 10px 0;
  word-break: break-all;
}

.card p {
  font-size: 1rem;
  margin-bottom: 10px;
  word-break: break-all;
}
.card .btn {
  display: inline-block;
  margin-top: auto;
  background: green;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  -ms-border-radius: 5px;
  -o-border-radius: 5px;
}
</style>