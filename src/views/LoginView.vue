<template #default>
  <div class="logo">
    <img src="../assets/logo.png" alt="Logo" width="150">
  </div>
  <div class="container">
    <div>
      <div class="card">
        <h2>Entre na sua conta</h2>
        <h3>Para acessar sua conta informe seu e-mail e senha</h3>
        <label>E-mail</label>
        <input class="input" placeholder="Seu e-mail" type="username" v-model="username" required />
        <label>Senha</label>
        <input class="input" placeholder="Sua senha" type="password" v-model="password" required />
        <a>Esqueci minha senha</a>
        <button @click="submit">FAZER LOGIN</button>
      </div>
      <p class="link">Ainda não tem conta? <span>Cadastre-se</span></p>
    </div>
  </div>
</template>

<script lang="ts">
import api from '@/plugin/api';
import { defineComponent } from 'vue';
import vm from '@/views/MainViewModel'

export default defineComponent({
  data() {
    return {
      username: '',
      password: '',
    };
  },
  methods: {
    async submit() {
      try {
        const response = await api.post('/auth/login', {
          username: this.username,
          password: this.password,
        });
        if (response.status === 200) {
          vm.setUser({ token: response.data.token, name: this.username })
          this.$router.push('/watch');
        }
      } catch (error) {
        console.log(error)
        alert('username ou senha incorretos');
      }
    },
  },
});
</script>

<style>
h2{
  font-weight: bold;
}
h3{
  margin-bottom: 5px;
}
.logo {
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}
p{
  text-align: center;
  margin-top: 10px;
}

.container {
  width: 100%;
  display: flex;
  margin: 0 auto;
  position: static;
  padding-top: 130px;
  justify-content: center;
}

.card {
  background-color: white;
  width: 500px;
  display: inline-block;
  border: 1px solid #ccc;
  padding: 12px 20px;
  border-radius: 5px;
}

.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
}
span{
  color: #ff1861;
  text-decoration: underline
}

button {
  background-color: #ff1861;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>