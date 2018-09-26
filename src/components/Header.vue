<template>
  <div class="header">
    <h1>Ten finger typing method trainer</h1>
    <div class="layout">
      <div class="layout__button">
        <!-- <img src='@/assets/help.svg' @click="showHelpModal = true" alt="icon" width="24" height="24"> -->
        <svg @click="showHelpModal = true" class="highlight" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M0 0h24v24H0z" fill="none" />
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17h-2v-2h2v2zm2.07-7.75l-.9.92C13.45 12.9 13 13.5 13 15h-2v-.5c0-1.1.45-2.1 1.17-2.83l1.24-1.26c.37-.36.59-.86.59-1.41 0-1.1-.9-2-2-2s-2 .9-2 2H8c0-2.21 1.79-4 4-4s4 1.79 4 4c0 .88-.36 1.68-.93 2.25z" />
        </svg>
      </div>
      <div class="layout__button">
        <!-- <img src='@/assets/stats.svg' @click="showStatisticModal = true" alt="icon" width="24" height="24"> -->
        <svg @click="showStatisticModal = true" class="highlight" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path d="M3.5 18.49l6-6.01 4 4L22 6.92l-1.41-1.41-7.09 7.97-4-4L2 16.99z" />
          <path fill="none" d="M0 0h24v24H0z" />
        </svg>
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
  margin-bottom: 0.5rem;
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
    width: 130px;
    justify-content: space-around;
    cursor: pointer;
    .highlight:hover {
      fill: gray;
    }
  }
}
</style>
