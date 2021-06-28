<template>
  <ul class="todo-list">
    <todo-item
      v-for="todo in todos"
      :key="todo.id"
      :todo="todo"
    />
  </ul>
</template>

<script>
import { mapActions } from 'vuex';
import TodoItem from '@/components/TodoItem.vue';

export default {
  name: 'TodoList',
  components: {
    TodoItem,
  },
  props: {
    todos: Array,
  },
  methods: {
    ...mapActions({
      addTodoAction: 'addTodoItem',
    }),
  },
};
</script>

<style scoped lang="scss">
.todo-list {
  display: flex;
  flex-direction: column;
  margin-top: 20px;
}
</style>
