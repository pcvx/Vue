<template>
  <div class="preloader"></div>
</template>

<style lang="scss" scoped>
  @keyframes rotating {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  .preloader {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    left: 0;
    top: 0;
    z-index: 100;
    &::after {
      content: '';
      display: block;
      width: 50px;
      height: 50px;
      border-radius: 50px;
      border: 3px solid red;
      border-right-color: transparent;
      animation: rotating 2s linear infinite;
    }
  }
</style>
