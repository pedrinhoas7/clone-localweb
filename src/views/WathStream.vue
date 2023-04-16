<template>
  <div class="watch-stream">
    <div class="header">
      <img class="logo" src="../assets/logo.png" alt="WatchStream Logo" />
      <div class="avatar">
        {{ username?.substring(0,1).toUpperCase() }}
      </div>
    </div>
    <p>Olá {{ username }}</p>
    <p>Seja bem vindo a sua conta</p>
    <div class="video-player">
      <iframe width="1100" height="450" src="https://www.youtube.com/embed/gmupEp468lY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import vm from '@/views/MainViewModel'

export default defineComponent({
  data() {
    const user = vm.getUser();
    console.log(user)
    return {
      username: user?.name,
    };
  }
});
</script>

<style>
.watch-stream {
  top: 0;
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f5f5f5;
}

.logo {
  height: 2rem;
}



.avatar img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.video-player {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.video-player video {
  width: 75%;
  height: auto;
  max-height: 75vh;
}
</style>