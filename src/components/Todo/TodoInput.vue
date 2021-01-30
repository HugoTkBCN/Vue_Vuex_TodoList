<script>
export default {
  data() {
    return {
      description: "",
      id: 0
    };
  },
  methods: {
    addTask: function() {
      this.$store.dispatch("addTask", this);
      this.id++;
      this.description = "";
    }
  }
};
</script>

<template>
  <form @submit.prevent="addTask">
    <input
      class="input"
      type="text"
      placeholder="Add a new todo (hit enter to add)"
      v-model="description"
    />
  </form>
</template>

<style>
.input {
  width: 100%;
  padding: 2%;
  font-size: 100%;
  outline: none;
  border-radius: 10px;
  border: solid 1x;
  box-sizing: border-box;
}
</style>
