<template>
  <div class="home">
    <div class="header">
      <form @submit.prevent="addNewTodoItem">
        <custom-input
          placeholder="Введите текст"
          :model-value="inputText"
          @update:model-value="inputText = $event"
        />
      </form>
      <div class="filters">
        <div class="filter">
          <label>
            <input type="checkbox" v-model="newTodos" @change="onlyNewTodos">
            <span>Только новые</span>
          </label>
        </div>
        <div class="filter">
          <select @change="changeSortType">
            <option value="asc">Прямой порядок</option>
            <option value="desc">Обратный порядок</option>
          </select>
        </div>
      </div>
    </div>
    <todo-list
      :todos="todoList"
    />
  </div>
</template>

<script>
import TodoList from '@/components/TodoList.vue';
import CustomInput from '@/components/CustomInput.vue';

import {
  mapActions,
  mapGetters,
  mapMutations,
  mapState,
} from 'vuex';

export default {
  name: 'Home',
  components: {
    TodoList,
    CustomInput,
  },
  data() {
    return {
      inputText: '',
      newTodos: false,
    };
  },
  methods: {
    ...mapMutations([
      'setSortType',
      'changeFilter',
    ]),
    ...mapActions({
      addTodoAction: 'addTodoItem',
    }),
    addNewTodoItem() {
      this.addTodoAction({
        id: this.todos[this.todos.length - 1].id + 1,
        title: this.inputText,
        body: '',
        status: 'new',
      });
      this.inputText = '';
    },
    changeSortType(e) {
      this.setSortType(e.target.value);
    },
    onlyNewTodos() {
      this.changeFilter({ type: 'new', value: this.newTodos });
    },
  },
  computed: {
    ...mapGetters([
      'todoList',
    ]),
    ...mapState([
      'todos',
    ]),
  },
};
</script>

<style lang="scss" scoped>
  .home {
    max-width: 700px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  .filters {
    display: flex;
  }
  .filter {
    margin-left: 20px;
    input {
      margin-right: 5px;
    }
  }
</style>
