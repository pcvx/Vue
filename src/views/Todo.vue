<template>
  <div v-if="todo" class="todo">
    <router-link class="link" to="/">На главную</router-link>
    <h1 class="title">{{ todo.title }}</h1>
    <textarea class="descr" v-model="descr"></textarea>
    <button @click="saveTodo" class="button">Сохранить</button>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'Todo',
  props: {
    id: String,
  },
  data() {
    return {
      descr: '',
    };
  },
  created() {
    this.descr = this.todo?.body;
  },
  watch: {
    todo() {
      this.descr = this.todo.body;
    },
  },
  methods: {
    ...mapMutations([
      'changeTodo',
    ]),
    saveTodo() {
      this.changeTodo({ id: Number(this.id), body: this.descr });
      alert('Сохранено');
    },
  },
  computed: {
    ...mapGetters([
      'getTodo',
    ]),
    todo() {
      return this.getTodo(Number(this.id));
    },
  },
};
</script>

<style lang="scss" scoped>
  .todo {
    max-width: 700px;
    margin: 0 auto;
    padding-top: 50px;
  }
  .title {
    text-align: center;
    margin-bottom: 20px;
    font-size: 20px;
  }
  .descr {
    font-size: 16px;
    width: 100%;
    min-height: 200px;
    border-radius: 8px;
    padding: 15px;
    border: 0;
    outline: 0;
  }
  .link {
    margin-bottom: 20px;
    color: #3eaf7c;
    text-decoration: none;
    display: block;
  }
  .button {
    width: 100px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 0;
    border-radius: 8px;
    color: #fff;
    background: #3eaf7c;
    margin-top: 15px;
    cursor: pointer;
  }
</style>
