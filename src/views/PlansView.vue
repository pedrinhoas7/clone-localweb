<template>
  <div class="container">
    <div class="logo">
      <img src="../assets/logo.png" alt="Logo" width="100">
      <h1>Meu Título</h1>
    </div>
    <div class="card-container">
      <div class="card" v-for="plan in plans" :key="plan.name">
        <h2>{{plan.name}}</h2>
        <h1 v-if="plan.value == 0">Grátis</h1>
        <h1 v-else>R${{ plan.value }}/mês</h1>
        <p>{{plan.marketing}}</p>
        <button>ESCOLHER ESSE PLANO</button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
  },
  data() {
    const plans = [
      {name: "Hospedagem 1", value: 0, description: "Seu site em Servidores", marketing: "Ideal para quem está começando" },
      {name: "Hospedagem 2", value: 499, description: "Seu site em Servidores", marketing: "Ideal para quem está começando" },
      {name: "Hospedagem 3", value: 999, description: "Seu site em Servidores", marketing: "Ideal para quem está começando" }
    ]
    return {
      plans: plans,
    };
  },
  methods: {
  },
});
</script>

<style scoped>
.container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
}

.logo {
  position: absolute;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  width: 100%;
  height: 100px;
  padding-left: 1rem;
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
