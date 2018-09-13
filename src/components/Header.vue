<template>
  <div class="header">
      <h1>Ten finger typing method trainer</h1>
      <div class="layout">
          <div class="layout__button" @click="$emit('withoutSample')">
            <img src='@/assets/full.svg' alt="icon" width="24" height="24">
          </div>
          <div class="layout__button" @click="$emit('withoutKeyboard')">
            <img src='@/assets/wike.svg' alt="icon" width="24" height="24">
          </div>
      </div>
  </div>
</template>

<script>
export default {
  name: "Header",
  props: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: relative;
  background-color: gray;
  height: 32px;
  margin-bottom: 1rem;
  padding: 3px;
  h1 {
    font-size: 24px;
    margin: 0;
    text-align: left;
    line-height: 32px;
  }
  .layout {
    position: absolute;
    right: 0;
    top: 7px;
    display: flex;
    width: 100px;
    justify-content: space-around;
    cursor: pointer;
  }
}
</style>
