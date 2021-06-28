<template>
  <li @click="openTodo" class="todo-item">
    <h6 class="title">{{ todo.title }}</h6>
    <p class="descr">{{ todo.body }}</p>
  </li>
</template>

<script>

export default {
  name: 'TodoItem',
  props: {
    todo: Object,
  },
  methods: {
    openTodo() {
      this.$router.push({ name: 'Todo', params: { id: this.todo.id } });
    },
  },
};
</script>

<style lang="scss" scoped>
  .todo-item {
    border-radius: 12px;
    background-color: #fff;
    margin-bottom: 15px;
    padding: 10px;
    padding-right: 60px;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .3);
    cursor: pointer;
    transition: .2s;
    &:hover {
      box-shadow: 1px 1px 5px rgba(0, 144, 255, .3);
    }
  }
  .title {
    font-size: 18px;
  }
  .descr {
    font-size: 15px;
  }
</style>
