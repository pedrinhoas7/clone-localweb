<template>
  <a href="/login">Já tenho conta</a>
  <div class="logo">
    <img src="../assets/logo.png" alt="Logo" width="150">
    <div class="title">
      <h1 >Você está muito próximo de mudar a forma de <span>hospedar seu site</span></h1>
    </div>

    <p class="choice">Escolha seu plano</p>
  </div>
  <div>
    <div class="card-container">
      <div class="card" v-for="plan in plans" :key="plan.id">
        <button class="btn-green" v-if="plan.ranking">MAIS USADO</button>
        <h2>{{ plan.name }}</h2>
        <span v-if="plan.value == 0">Grátis</span>
        <span v-else>R${{ plan.value }}/mês</span>
        <p v-for="item in plan.addictionalInfo ">{{ item }}</p>
        <div class="divider"></div>
        <p style="font-size: large; padding: 5%;">{{ plan.ideal }}</p>
        <div class="divider"></div>
        <button style="width: 80%; border-radius: 5px;" @click="selectPlan(plan.id)">ESCOLHER ESSE PLANO</button>
        <ul>
          <li v-for="server in plan.servers"> {{ server }}</li>
        </ul>
        <ul>
          <li v-if="plan.support"> {{ plan.support }}</li>
        </ul>
        <ul>
          <li v-for="app in plan.apps" style="width: 270px;"> {{ app }}</li>
        </ul>
        <ul v-if="plan.migrations">
          <li>Migramos todos seus sites para nossos servidores</li>
        </ul>
        <ul>
          <li v-for="service in plan.addictionalServices"> {{ service }}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Mock from "../../db.json";

export default defineComponent({
  data() {
    return {
      plans: Mock.plans
    };
  },
  methods: {
    selectPlan(id: String) {
      this.$router.replace({ path: '/plan/' + id });
    }
  }
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.choice {
  font-size: medium;
  font-weight: 600;
  margin-bottom: 15px;
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
  content: "\f00c"; /* FontAwesome Unicode */
  font-family: FontAwesome;
  display: inline-block;
  margin-left: calc( var(--icon-space) * -1 );
  width: var(--icon-space);
}

.btn-green {
  background-color: rgb(39, 216, 4);
  width: 45%;
  border-radius: 10px;
  height: 5px;
  top: -20px;
  position: absolute;
  line-height: 50%;
}

.title {
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
  width: 700px;
  display: flex;
  text-align: center;
}
.title span{
  text-decoration: underline;
}

.divider {
  height: 1px;
  width: 80%;
  background-color: #c5c5c5;
  margin: 1px 0;
}

span {
  font-family: Arial, Helvetica, sans-serif;
  font-size: 25px;
  text-decoration: none;
  font-weight: bold;
}

.logo {
  top: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

img {
  margin-bottom: 15px;
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
</style>
