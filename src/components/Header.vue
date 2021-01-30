<template>
  <header>
    <h1>My Todo's ({{ nbrTasks.length }})</h1>
  </header>
</template>

<script>
export default {
  computed: {
    nbrTasks() {
      return this.$store.getters.getTasks;
    }
  }
};
</script>

<style>
</style>
