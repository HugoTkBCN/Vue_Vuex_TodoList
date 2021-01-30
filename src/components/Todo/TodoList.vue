<script>
export default {
  computed: {
    tasks() {
      return this.$store.getters.getTasks;
    },
  },
  methods: {
    setStateTask: function (id) {
      this.$store.dispatch("setStateTask", id);
    },
    deleteTask: function (id) {
      this.$store.dispatch("deleteTask", id);
    },
  },
};
</script>

<template>
  <ul class="tasks">
    <li
      v-for="task in tasks"
      :key="task.id"
      :class="{ completed: task.completed }"
      class="task"
      @click="setStateTask(task.id)"
    >
      {{ task.description }}
      <span class="delete" @click="deleteTask(task.id)">x</span>
    </li>
  </ul>
</template>

<style>
.tasks {
  padding: 0;
  list-style-type: none;
}

.task {
  padding: 10px;
  margin-bottom: 2%;
  border: 0.5px solid;
  border-radius: 10px;
}

.task:hover {
  cursor: pointer;
}

.completed {
  text-decoration: line-through;
  color: green;
}

.delete {
  float: right;
  color: red;
}
</style>
