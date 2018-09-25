<template>
  <div class="header">
    <h1>Ten finger typing method trainer</h1>
    <div class="layout">
      <div class="help-btn">
        <img src='@/assets/help.svg' @click="showHelpModal = true" alt="icon" width="24" height="24">
      </div>
      <div class="stats-btn">
        <img src='@/assets/stats.svg' @click="showStatisticModal = true" alt="icon" width="24" height="24">
      </div>
      <div class="layout__button" @click="$emit('withoutSample')">
        <img src='@/assets/full.svg' alt="icon" width="24" height="24">
      </div>
      <div class="layout__button" @click="$emit('withoutKeyboard')">
        <img src='@/assets/wike.svg' alt="icon" width="24" height="24">
      </div>
    </div>

    <HelpModal v-if="showHelpModal" @close="showHelpModal = false" />
    <StatisticModal v-if="showStatisticModal" @close="showStatisticModal = false" />
  </div>
</template>

<script>
import HelpModal from "./HelpModal.vue";
import StatisticModal from "./StatisticModal.vue";

export default {
  name: "Header",
  components: {
    HelpModal,
    StatisticModal
  },
  props: {},
  data() {
    return {
      showHelpModal: false,
      showStatisticModal: false
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.header {
  position: relative;
  background-color: #ebebeb;
  height: 32px;
  margin-bottom: 1rem;
  padding: 3px 1rem;
  h1 {
    font-size: 24px;
    margin: 0;
    text-align: left;
    line-height: 32px;
  }
  .layout {
    position: absolute;
    right: 7px;
    top: 7px;
    display: flex;
    width: 100px;
    justify-content: space-around;
    cursor: pointer;
  }
}
</style>
