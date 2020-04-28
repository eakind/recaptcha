<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.v-tooltip{
  display: none;
  position: absolute;
  padding: 5px 10px;
  border-radius: 4px;
  color: white;
  background-color: black;
  line-height: 1;
  text-align: center;
  z-index: 9999;
}
.v-tooltip-left {
  &::before {
    content: '';
    position: absolute;
    right: -5px;
    top: 50%;
    height: 0;
    width: 0;
    transform: translateY(-50%);
    border-left: 5px solid red;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }
  &::after{
    content: '';
    position: absolute;
    right: -4px;
    top: 50%;
    height: 0;
    width: 0;
    transform: translateY(-50%);
    border-left: 4px solid white;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}
.v-tooltip-right {
  &::before {
    content: '';
    position: absolute;
    left: -5px;
    top: 50%;
    height: 0;
    width: 0;
    display: inline-block;
    transform: translateY(-50%);
    border-right: 5px solid red;
    border-top: 5px solid transparent;
    border-bottom: 5px solid transparent;
  }

  &::after{
    content: '';
    position: absolute;
    left: -4px;
    top: 50%;
    height: 0;
    width: 0;
    transform: translateY(-50%);
    border-right: 4px solid white;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}
.v-tooltip-top {
  &::before{
    content: '';
    position: absolute;
    bottom: -5px;
    left: 50%;
    height: 0;
    width: 0;
    transform: translateX(-50%);
    border-top: 5px solid red;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &::after{
    content: '';
    position: absolute;
    bottom: -4px;
    top: 50%;
    height: 0;
    width: 0;
    transform: translateX(-50%);
    border-top: 4px solid white;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}

.v-tooltip-bottom {
  &::before{
    content: '';
    position: absolute;
    top: -5px;
    left: 50%;
    transform: translateX(-50%);
    border-bottom: 5px solid red;
    border-left: 5px solid transparent;
    border-right: 5px solid transparent;
  }

  &::after{
    content: '';
    position: absolute;
    top: -4px;
    top: 50%;
    height: 0;
    width: 0;
    transform: translateY(-50%);
    border-bottom: 4px solid white;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
  }
}
</style>
