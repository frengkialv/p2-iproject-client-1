<template>
  <div>
    <Navbar></Navbar>
    <div
      class="center"
      style="
        margin-left: 590px;
        margin-right: 590px;
        margin-top: 80px;
        margin-bottom: 225px;
      "
    >
      <h1>Login</h1>
      <form @submit.prevent="login" method="post">
        <div class="txt_field">
          <input v-model="email" type="text" required />
          <span></span>
          <label>Email</label>
        </div>
        <div class="txt_field">
          <input v-model="password" type="password" required />
          <span></span>
          <label>Password</label>
        </div>
        <div class="pass">Forgot Password?</div>
        <input type="submit" value="Login" />
        <router-link to="/signup"><div class="signup_link">Not a member? <a href="#">Signup</a></div></router-link>
      </form>
    </div>
    <router-view/>
  </div>
</template>

<script>
import Navbar from "../components/Navbar.vue";

export default {
  name: "Login",
  components: {
    Navbar
  },
  data() {
      return {
          email: "",
          password: "",
      }
  },
  methods: {
      login() {
          const payload = {
              email: this.email,
              password: this.password
          }
          this.$store.dispatch("login", payload)
      }
  }
};
</script>

<style scoped>
body.center {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background: white;
  border-radius: 10px;
  box-shadow: 10px 10px 15px rgba(0, 0, 0, 0.05);
  text-align: center;
  margin-left: 100px;
}

body.center h1 {
  text-align: center;
  padding: 20px 0;
  border-bottom: 1px solid silver;
}
body.center form {
  padding: 0 40px;
  box-sizing: border-box;
}

form .txt_field {
  position: relative;
  border-bottom: 2px solid #adadad;
  margin: 30px 0;
}
.txt_field input {
  width: 100%;
  padding: 0 5px;
  height: 40px;
  font-size: 16px;
  border: none;
  background: none;
  outline: none;
}
.txt_field label {
  position: absolute;
  top: 50%;
  left: 5px;
  color: #adadad;
  transform: translateY(-50%);
  font-size: 16px;
  pointer-events: none;
  transition: 0.5s;
}
.txt_field span::before {
  content: "";
  position: absolute;
  top: 40px;
  left: 0;
  width: 0%;
  height: 2px;
  background: #2691d9;
  transition: 0.5s;
}
.txt_field input:focus ~ label,
.txt_field input:valid ~ label {
  top: -5px;
  color: #2691d9;
}
.txt_field input:focus ~ span::before,
.txt_field input:valid ~ span::before {
  width: 100%;
}
.pass {
  margin: -5px 0 20px 5px;
  color: #a6a6a6;
  cursor: pointer;
}
.pass:hover {
  text-decoration: underline;
}
input[type="submit"] {
  display: inline-block;
  margin-right: 10px;
  background: #000000;  /* fallback for old browsers */
  background: -webkit-linear-gradient(to right, #434343, #000000);  /* Chrome 10-25, Safari 5.1-6 */
  background: linear-gradient(to right, #434343, #000000);
  color: #fff;
  text-decoration: none;
  font-size: 15px;
  line-height: 38px;
  border-radius: 50px;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  width: 170px;
  text-align: center;
  cursor: pointer;
}
input[type="submit"]:hover {
  transform: scale(0.95);
}
.signup_link {
  margin: 30px 0;
  text-align: center;
  font-size: 16px;
  color: #666666;
}
.signup_link a {
  color: #2691d9;
  text-decoration: none;
}
.signup_link a:hover {
  text-decoration: underline;
}
</style>
