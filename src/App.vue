<script setup>
  import HelloWorld from './components/HelloWorld.vue';
  import TheWelcome from './components/TheWelcome.vue';
  import Layout from './containers/Layout.vue';
</script>

<template>
  <header>
    <div class="wrapper">
      <HelloWorld msg="You did it!" />
    </div>
  </header>

  <Layout />

  <main>
    <TheWelcome />
  </main>
</template>