<template>
  <div class="statistic">
      <span>Speed of writing: {{ speed }} c/m |
            Chars: {{totalChar}} |
            Words: {{totalWords}} |
            Time: {{ totalTimeHuman }} |
            Errors: {{ errorCount }}
      </span>
      <button id="show-modal" @click="showModal = true">Statistic</button>
      <!-- use the modal component, pass in the prop -->
      <Modal v-if="showModal" @close="showModal = false"/>
  </div>
</template>

<script>
import Modal from "./StatisticModal.vue";

export default {
  name: "Statistic",
  components: {
    Modal
  },
  props: {
    speed: Number,
    totalChar: Number,
    totalWords: Number,
    totalTime: Number,
    errorCount: Number
  },
  data() {
    return {
      showModal: false
    };
  },
  computed: {
    totalTimeHuman: function() {
      return new Date(1000 * this.totalTime).toISOString().substr(11, 8);
    }
  },
  watch: {
    speed: function() {
      if (this.speed !== 0) {
        let date = new Date();
        let key =
          date.getFullYear() + ":" + date.getMonth() + ":" + date.getDay();
        let stats = JSON.parse(window.localStorage.getItem("stats")) || {};
        if (stats[key]) {
          stats[key].speed = (stats[key].speed + this.speed) / 2;
          stats[key].totalChar = (stats[key].totalChar + this.totalChar) / 2;
          stats[key].totalWords = (stats[key].totalWords + this.totalWords) / 2;
          stats[key].totalTime += this.totalTime;
          stats[key].count += 1;
        } else {
          stats[key] = {
            speed: this.speed,
            totalChar: this.totalChar,
            totalWords: this.totalWords,
            totalTime: this.totalTime,
            count: 1
          };
        }
        window.localStorage.setItem("stats", JSON.stringify(stats));
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.statistic {
  font-weight: bold;
  line-height: 2rem;
}
</style>
