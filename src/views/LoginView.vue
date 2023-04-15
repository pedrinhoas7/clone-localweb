<script setup lang="ts">

</script>

<template>
  <div class="container">
    <div >
      <img alt="Vue logo" class="logo" src="@/assets/logo.png" width="200" height="40" />
      <div class="card">
        <h2>Entre na sua conta</h2>
        <h3>Para acessar sua conta informe seu e-mail e senha</h3>
        <label>E-mail</label>
        <input class="input" placeholder="Seu e-mail" />
        <label>Senha</label>
        <input class="input" placeholder="Sua senha" />
        <a>Esqueci minha senha</a>
        <button>FAZER LOGIN</button>
      </div>
      <p class="link">Ainda não tem conta?<a>Cadastre-se</a></p>
    </div>
  </div>
</template>

<style>
.container {
  width: 200px;
  display: inline-block;
  justify-content: center;
}
.card{
  background-color: white;
  width: 500px;
  display: inline-block;
  border: 1px solid #ccc;
}
.input{
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