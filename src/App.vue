<script>
import Header from "@/components/Header.vue";
import TodoInput from "@/components/Todo/TodoInput.vue";
import TodoList from "@/components/Todo/TodoList.vue";

export default {
  components: {
    Header,
    TodoInput,
    TodoList,
  },
};
</script>

<template>
  <div class="container">
    <div id="app">
      <div>
        <Header />
        <TodoList />
        <TodoInput />
      </div>
    </div>
  </div>
</template>

<style>
html {
  height: 100%;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {
  width: 30%;
  margin-bottom: auto;
  border-radius: 15px;
  padding: 1%;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;
}

</style>
