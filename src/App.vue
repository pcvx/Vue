<template>
  <preloader-block  v-if="preloader"/>
  <router-view/>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import PreloaderBlock from '@/components/PreloaderBlock.vue';

export default {
  components: {
    PreloaderBlock,
  },
  created() {
    this.getTodoListAction(); // Оно тут из-за особенности работы API
  },
  methods: {
    ...mapActions({
      getTodoListAction: 'getTodoList',
    }),
  },
  computed: {
    ...mapState([
      'preloader',
    ]),
  },
};
</script>

<style lang="scss">
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
ul {
  list-style: none;
}
body {
  background-color: #e4e4e4;
  font-family: 'Arial', sans-serif;
}
</style>
