import { createStore } from 'vuex';
import { getTodo, getTodos, addTodo } from '../services/todoService';

export default createStore({
  state: {
    todos: [],
    sortType: 'asc',
    preloader: false,
    filter: {
      new: false,
    },
  },
  getters: {
    todoList: (state) => {
      const todos = state.todos.filter((todo) => {
        if (state.filter.new) {
          return todo.status === 'new';
        }
        return true;
      });

      if (state.sortType === 'asc') {
        todos.sort((a, b) => a.id - b.id);
      } else if (state.sortType === 'desc') {
        todos.sort((a, b) => b.id - a.id);
      }

      return todos;
    },
    getTodo: (state) => (id) => state.todos.find((todo) => todo.id === id),
  },
  mutations: {
    addTodo(state, payload) {
      if (state.sortType === 'asc') {
        state.todos.push(payload);
      } else if (state.sortType === 'desc') {
        state.todos.unshift(payload);
      }
    },
    setTodos(state, payload) {
      state.todos = payload;
    },
    setSortType(state, payload) {
      state.sortType = payload;
    },
    showPreloader(state, payload) {
      state.preloader = payload;
    },
    changeFilter(state, payload) {
      state.filter[payload.type] = payload.value;
    },
    changeTodo(state, payload) {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      state.todos[index].body = payload.body;
    },
  },
  actions: {
    async getTodoItem({ commit }, payload) {
      commit('showPreloader', true);
      const data = await getTodo(payload);

      commit('setTodo', data);
      commit('showPreloader', false);
    },
    async getTodoList({ commit }) {
      commit('showPreloader', true);
      const data = await getTodos();

      commit('setTodos', data);
      commit('showPreloader', false);
    },
    async addTodoItem({ commit }, payload) {
      commit('showPreloader', true);
      const todo = await addTodo(payload);

      commit('addTodo', todo);
      commit('showPreloader', false);
    },
  },
});
