<template>
  <div :class="[{ active: notEmpty }, 'custom-input-wrap']">
    <input
      class="custom-input"
      ref="customInput"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
      :value="modelValue"
    >
    <div class="custom-input-clear" @click="clearInput">&times;</div>
  </div>
</template>

<script>
export default {
  name: 'CustomInput',
  props: {
    modelValue: String,
  },
  emits: ['update:modelValue'],
  computed: {
    notEmpty() {
      return this.modelValue !== '';
    },
  },
  methods: {
    clearInput() {
      this.$emit('update:modelValue', '');
      this.$refs.customInput.focus();
    },
  },
};
</script>

<style lang="scss" scoped>
  .custom-input{
    width: 100%;
    height: 100%;
    border: 1px solid #ececec;
    border-radius: 6px;
    padding-left: 10px;
    font-size: 16px;
    outline: none;
    transition: .2s;
    box-shadow: 1px 1px 5px rgba(0, 0, 0, .2);
    &:focus{
      box-shadow: 1px 1px 5px rgba(0, 144, 255, .3);
    }
    &-wrap{
      width: 300px;
      height: 45px;
      position: relative;
      &.active{
        .custom-input:focus + .custom-input-clear{
          visibility: visible;
          opacity: 1;
        }
      }
    }
    &-clear{
      position: absolute;
      right: 10px;
      top: 100%;
      bottom: 100%;
      margin: auto 0;
      height: 25px;
      width: 25px;
      border-radius: 20px;
      cursor: pointer;
      transition: .2s;
      visibility: hidden;
      opacity: 0;
      font-size: 18px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #ececec;
    }
  }
</style>
