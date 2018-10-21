<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container">
          <div class="modal-header">
            Statistic
          </div>
          <button class="btn" @click.stop="byDay = !byDay">By Day</button>
          <canvas ref="chart" id="myChart"></canvas>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
var Chart = require("chart.js");

export default {
  name: "StatisticModal",
  props: {},
  data() {
    return {
      stats: {},
      byDay: false,
      ctx: "",
      myChart: {}
    };
  },
  computed: {
    statsEnries: function() {
      return Object.entries(this.stats);
    }
  },
  created: function() {
    this.stats = JSON.parse(window.localStorage.getItem("stats"));

    // this.stats = stats;
  },
  mounted: function() {
    this.ctx = this.$refs.chart;
    this.drawStats(...this.getAllStats());
  },
  watch: {
    byDay: function() {
      if (this.byDay) this.drawStats(...this.getDayStats());
      else this.drawStats(...this.getAllStats());
    }
  },
  methods: {
    getAllStats: function() {
      let labels = this.statsEnries.map(val => val[0]);
      let speeds = this.statsEnries.map(val => val[1].speed);
      let errors = this.statsEnries.map(val => val[1].errorCount);
      return [labels, speeds, errors];
    },
    getDayStats: function() {
      let res = {};
      for (let i = 0; i < this.stats.length; i++) {
        if (res[this.stats[i].data]) {
          res[this.stats[i].data].speed += this.stats[i].speed;
          res[this.stats[i].data].errors += this.stats[i].errorCount;
          res[this.stats[i].data].count += 1;
        } else {
          res[this.stats[i].data] = {
            speed: this.stats[i].speed,
            errors: this.stats[i].errorCount,
            count: 1
          };
        }
      }
      return [
        Object.keys(res),
        Object.keys(res).map(key =>
          Math.round(res[key].speed / res[key].count)
        ),
        Object.keys(res).map(key =>
          Math.round(res[key].errors / res[key].count)
        )
      ];
    },
    drawStats(labels, speeds, errors) {
      if (this.myChart instanceof Chart) {
        this.myChart.data.labels = labels;
        this.myChart.data.datasets[0].data = speeds;
        this.myChart.data.datasets[1].data = errors;
        this.myChart.update();
      } else {
        this.myChart = new Chart(this.ctx, {
          type: "line",
          data: {
            labels: labels,
            datasets: [
              {
                label: "Speed",
                data: speeds,
                borderColor: ["rgba(255,99,132,1)"],
                borderWidth: 1,
                fill: false
              },
              {
                label: "Errors",
                data: errors,
                borderColor: ["rgba(100,99,255,1)"],
                borderWidth: 1,
                fill: false
              }
            ]
          },
          options: {
            scales: {
              yAxes: [
                {
                  ticks: {
                    beginAtZero: true
                  }
                }
              ]
            }
          }
        });
      }
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.btn {
  position: absolute;
  right: 25px;
  top: 20px;
}

.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: table;
  transition: opacity 0.3s ease;
}

.modal-wrapper {
  display: table-cell;
  vertical-align: middle;
}

.modal-container {
  position: relative;
  max-width: 700px;
  max-height: 70vh;
  margin: 0px auto;
  padding: 20px 15px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  canvas {
    width: 100%;
    height: 100%;
  }
}

.modal-header {
  margin-top: 0;
  // color: #42b983;
  font-size: 1.5rem;
}

.modal-body {
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  margin: 20px 0;
}

.modal-enter {
  opacity: 0;
}

.modal-leave-active {
  opacity: 0;
}

.modal-enter .modal-container,
.modal-leave-active .modal-container {
  -webkit-transform: scale(1.1);
  transform: scale(1.1);
}
</style>
