<script>
export default {
  computed: {
    nbrTasks() {
      return this.$store.getters.getOpenTasks;
    },
  },
};
</script>

<template>
  <header>
    <h1>My Todo's ({{ nbrTasks.length }})</h1>
  </header>
</template>

<style>
</style>
