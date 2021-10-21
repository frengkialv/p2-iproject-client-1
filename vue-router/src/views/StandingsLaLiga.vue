<template>
<div>
    <Navbar></Navbar>
    <div class="" style="text-align: center">
      <img src="" alt="" style="width: 10cm" />
    </div>
    <table>
      <tr>
        <th>Position</th>
        <th>Club</th>
        <th>Played</th>
        <th>Won</th>
        <th>Draw</th>
        <th>Lost</th>
        <th>Point</th>
      </tr>
      <tr v-for="data in standingsLaliga" :key="data.rank">
        <td>{{data.rank}}</td>
        <td>{{data.team.name}}</td>
        <td>{{data.all.played}}</td>
        <td>{{data.all.win}}</td>
        <td>{{data.all.draw}}</td>
        <td>{{data.all.lose}}</td>
        <td>{{data.points}}</td>
      </tr>
    </table>
    <Footer></Footer>
</div>
</template>

<script>
import Navbar from "../components/Navbar.vue";
import Footer from "../components/Footer.vue";

export default {
    name: "StandingLaliga",
    computed: {
        standingsLaliga() {
            return this.$store.state.standingsLaliga;
        },
    },
    created: function () {
        this.$store.dispatch("getStandingLaLiga");
    },
    components: {
        Navbar,
        Footer
    }
}
</script>

<style>
table {
  z-index: 2;
  margin: 0 auto;
  width: 60%;
  border-collapse: collapse;
  border-spacing: 2;
  border-radius: 12px 12px 0 0;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(32, 32, 32, 0.3);
  background: #fafafa;
  text-align: center;
  margin-top: 5px;
}
th,
td {
  padding: 12px 20px;
}
th {
  background: #e6e6e6;
  color: #030303;
  text-transform: uppercase;
  font-family: Cambria, Cochin, Georgia, Times, "Times New Roman", serif;
}
td {
  font-family: Arial, Helvetica, sans-serif;
}
tr:nth-child(odd) {
  background-color: #eeeeee;
}
</style>