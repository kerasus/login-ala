<template>
  <div class="root">
    <form @submit.prevent="submitForm">
      نام کاربری:
      <input type="text" name="mobile" id="mobile" placeholder="شماره همراه خود را وارد کنید" v-model.trim="mobile" required>
      <br>
      <lable for="password"> رمز ورود:</lable>
      <input type="password" name="password" id="password" placeholder="کد ملی خود را وارد کنید"
             v-model.trim="password" required>
      <br>

      <button id="button" @click="confirm">ورود</button>
    </form>
  </div>
</template>

<script>
import axios from 'axios'
import profile from "./profile";

export default {
  name: "Login",
  data() {
    return {
      mobile: '',
      password: '',
    }

  },
  component: {
    profile,
  },
  methods: {
    async submitForm() {
      const response=await axios.post('Login',{
        mobile: this.mobile,
        password: this.password,
      })

    },
    confirm() {
      this.$router.push('/profile')
    }
  },
 /* async created(){
    const response=await axios.get('')
  }*/
}

</script>

<style scoped>
.root {
  direction: rtl;
  height: 300px;
  margin: 20px auto;
  width: 300px;
  position: relative;
  border-radius: 5px;
  background-color: #f2f2f2;
  padding: 20px;

}

input[type=text], [type=password] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
}

button {
  width: 100%;
  background-color: #4CAF50;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  border-radius: 4px;
  cursor: pointer;
}

input[type=submit]:hover {
  background-color: #45a049;
}


</style>