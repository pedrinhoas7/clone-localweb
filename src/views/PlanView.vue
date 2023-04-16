<template>
  <div class="logo">
    <img src="../assets/logo.png" alt="Logo" width="200">
    <h1 class="title">Você está muito próximo de mudar a forma de hospedar seu site</h1>
    <p>Escolha seu plano</p>
  </div>
  <div>
    <div class="card-container">
      <div class="card">
        <h2>{{ plan?.name }}</h2>
        <h1 v-if="plan?.value == 0">Grátis</h1>
        <h1 v-else>R${{ plan?.value }}/mês</h1>
        <p>{{ plan?.marketing }}</p>
        <button @click="$router.replace({name: 'plans'})">Trocar plano</button>
      </div>
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
    return{
      plan: Mock.plans.find(x=> x.id == params.id)
    }
  }
});
</script>

<style scoped>

.title{
  font-weight: bold;
  font-family: Arial, Helvetica, sans-serif;
}
.logo {
  top: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.card-container {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 100%;
  margin-top: 120px;
}

.card {
  display: flex;
  flex-direction: column;
  align-items: center;
  border: 1px solid #ccc;
  padding: 1rem;
  margin: 1rem;
  width: 100%;
  max-width: 300px;
  flex: 1 0 auto;
}
</style>
