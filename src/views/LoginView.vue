<template #default>
  <div class="container">
    <div>
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="200" height="40" />
      <div class="card">
        <h2>Entre na sua conta</h2>
        <h3>Para acessar sua conta informe seu e-mail e senha</h3>
        <label>E-mail</label>
        <input class="input" placeholder="Seu e-mail" type="username" v-model="username" required/>
        <label>Senha</label>
        <input class="input" placeholder="Sua senha"  type="password" v-model="password" required/>
        <a>Esqueci minha senha</a>
        <button @click="submit">FAZER LOGIN</button>
      </div>
      <p class="link">Ainda não tem conta?<a>Cadastre-se</a></p>
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
          vm.setUser({token: response.data.token, name: this.username})
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
.container {
  margin-left: 30%;
  margin-top: 10%;
  width: 200px;
  display: inline-block;
  justify-content: center;
}

.card {
  background-color: white;
  width: 500px;
  display: inline-block;
  border: 1px solid #ccc;
}

.input {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  border: 1px solid #ccc;
  box-sizing: border-box;
  border-radius: 5px;
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