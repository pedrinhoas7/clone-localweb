<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="Logo" width="150">
    <div class="title">
      <h1>Você está muito próximo de mudar a forma de <span>hospedar seu site</span></h1>
    </div>
  </div>
  <div class="container">
    <div>
      <h2>Dados pessoais</h2>
      <h3>Informe seus dados pessoais para acesso à sua conta</h3>
      <form>
        <label for="name">Name:</label>
        <input type="text" id="name" v-model="name">

        <label for="phone">Phone:</label>
        <input type="text" id="phone" v-model="phone">

        <label for="email">Email:</label>
        <input type="email" id="email" v-model="email">

        <label for="password">Password:</label>
        <input type="password" id="password" v-model="password">

        <label for="confirmPassword">Confirm Password:</label>
        <input type="password" id="confirmPassword" v-model="confirmPassword">
        <div class="divider"></div>
        <h2>Dados do seu site</h2>
        <label for="site">Site:</label>
        <input type="text" id="site" v-model="site">
        <p>Exatamente igual o título do seu site</p>

        <div class="divider"></div>
        <label class="checkbox">
          Ao concluir seu cadastro você concorda com nossos termos de uso e politicas de privacidade.
        </label>
        <div> <input type="checkbox" /></div>
        <button type="submit" @click.prevent="submitForm">Criar Conta</button>
      </form>
    </div>
    <div class="card">
      <button class="selected-plan">PLANO ESCOLHIDO</button>
      <h2>{{ plan?.name }}</h2>
      <span v-if="plan?.value == 0">Grátis</span>
      <span v-else>R${{ plan?.value }}/mês</span>
      <p v-for="item in plan?.addictionalInfo ">{{ item }}</p>
      <div class="divider"></div>
      <p style="font-size: large; padding: 5%;">{{ plan?.ideal }}</p>
      <div class="divider"></div>
      <button @click="$router.replace({ name: 'plans' })">Trocar plano</button>
      <ul>
        <li v-for="server in plan?.servers"> {{ server }}</li>
      </ul>
      <ul>
        <li v-if="plan?.support"> {{ plan.support }}</li>
      </ul>
      <ul>
        <li v-for="app in plan?.apps" style="width: 270px;"> {{ app }}</li>
      </ul>
      <ul v-if="plan?.migrations">
        <li>Migramos todos seus sites para nossos servidores</li>
      </ul>
      <ul>
        <li v-for="service in plan?.addictionalServices"> {{ service }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { useRoute } from 'vue-router';
import Mock from "../../db.json";

export default defineComponent({
  data() {
    const { params } = useRoute();
    return {
      plan: Mock.plans.find(x => x.id == params.id),
      name: '',
      phone: '',
      email: '',
      password: '',
      confirmPassword: '',
      site: ''
    }
  },
  methods: {
    submitForm() {
      alert("Regra não implementada")
    }
  }
});
</script>

<style scoped>
.title {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  width: 550px;
  font-size: small;
  display: flex;
  text-align: center;
}

.logo {
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.selected-plan {
  background-color: rgb(0, 0, 0);
  width: 65%;
  border-radius: 10px;
  height: 5px;
  top: -20px;
  position: absolute;
  line-height: 50%;
}


.divider {
  height: 2px;
  background-color: rgb(179, 179, 179);
  margin: 5px 0;
}

.container {
  width: 65%;
  display: flex;
  margin: 0 auto;
  position: static;
  padding-top: 130px;
  justify-content: space-between;
}

form {
  background-color: #fff;
  width: 550px;
  padding: 20px;
  margin-right: 2rem;
  border-radius: 10px;
}


input {
  border-radius: 5px;
  padding: 0.5rem;
  border: 1px solid #ccc;
  margin-bottom: 1rem;
  width: 100%;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 140px;
  border: 0px;
}

.card {
  color: #7c7c7c;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  max-width: 300px;
  flex: 1 0 auto;
  border: 0px;
}

.checkbox {
  display: inline-block;
  position: relative;
  padding-left: 35px;
  margin-bottom: 12px;
  cursor: pointer;
  font-size: 18px;
  user-select: none;
}

.checkbox input {
  position: absolute;
  opacity: 0;
  cursor: pointer;
  height: 0;
  width: 0;
}

.checkbox input:checked~.checkmark {
  background-color: #FF69B4;
}

.checkbox .checkmark {
  position: absolute;
  top: 0;
  left: 0;
  height: 25px;
  width: 25px;
  background-color: #fff;
  border: 2px solid #FF69B4;
  border-radius: 5px;
}

.checkbox:hover input~.checkmark {
  background-color: #ccc;
}

.checkbox input:checked~.checkmark:after {
  display: block;
}

.checkbox .checkmark:after {
  content: "";
  position: absolute;
  display: none;
  left: 9px;
  top: 5px;
  width: 5px;
  height: 10px;
  border: solid #FF69B4;
  border-width: 0 2px 2px 0;
  transform: rotate(45deg);
}

@media screen and (max-width: 768px) {
  form {
    width: 100%;
  }

  input {
    width: 100%;
  }

  .card {
    display: none;
  }
}

ul {
  --icon-space: 1.3em;
  list-style: none;
  padding: 0;
  width: 80%;
}

li {
  padding-left: var(--icon-space);
}

li:before {
  content: "\f00c";
  /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: calc(var(--icon-space) * -1);
  width: var(--icon-space);
}
</style>

