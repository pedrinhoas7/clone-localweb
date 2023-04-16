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

export default defineComponent({
  setup() {

  },
  data() {
    const { params } = useRoute();
    const plans = [
      { id: "KAJDHDAJKDJAPO1", name: "Hospedagem 1", value: 0, description: "Seu site em Servidores", marketing: "Ideal para quem está começando" },
      { id: "KAJDHDAJKDJAPO2", name: "Hospedagem 2", value: 499, description: "Seu site em Servidores", marketing: "Ideal para quem está começando" },
      { id: "KAJDHDAJKDJAPO3", name: "Hospedagem 3", value: 999, description: "Seu site em Servidores", marketing: "Ideal para quem está começando" }
    ]
    const plan =plans.find(x=> x.id == params.id);
    return{
      plan: plan
    }
  },
  methods: {
  },
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
