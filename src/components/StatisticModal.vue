<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container">
          <div class="modal-header">
            Statistic
          </div>
          <button @click.stop="byDay = !byDay">By Day</button>
          <button @click="copyStats">Copy stats</button>
          <canvas ref="chart" id="myChart" width="400" height="400"></canvas>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
var Chart = require("chart.js");

let stats = [
  {
    speed: 223,
    totalChar: 856,
    totalWords: 154,
    totalTime: 231,
    errorCount: 102,
    errorPerChar: 9.619686800894854,
    data: "30:9:2018"
  },
  {
    speed: 227,
    totalChar: 856,
    totalWords: 154,
    totalTime: 226,
    errorCount: 84,
    errorPerChar: 9.619686800894854,
    data: "1:10:2018"
  },
  {
    speed: 236,
    totalChar: 856,
    totalWords: 151,
    totalTime: 217,
    errorCount: 106,
    errorPerChar: 9.619686800894854,
    data: "1:10:2018"
  },
  {
    speed: 254,
    totalChar: 856,
    totalWords: 152,
    totalTime: 202,
    errorCount: 97,
    errorPerChar: 9.619686800894854,
    data: "1:10:2018"
  },
  {
    speed: 210,
    totalChar: 856,
    totalWords: 155,
    totalTime: 245,
    errorCount: 43,
    errorPerChar: 9.619686800894854,
    data: "1:10:2018"
  },
  {
    speed: 217,
    totalChar: 856,
    totalWords: 152,
    totalTime: 236,
    errorCount: 110,
    errorPerChar: 9.619686800894854,
    data: "1:10:2018"
  },
  {
    speed: 220,
    totalChar: 856,
    totalWords: 150,
    totalTime: 233,
    errorCount: 57,
    errorPerChar: 9.619686800894854,
    data: "1:10:2018"
  },
  {
    speed: 249,
    totalChar: 856,
    totalWords: 152,
    totalTime: 206,
    errorCount: 75,
    errorPerChar: 9.619686800894854,
    data: "2:10:2018"
  },
  {
    speed: 149,
    totalChar: 856,
    totalWords: 155,
    totalTime: 345,
    errorCount: 100,
    errorPerChar: 9.619686800894854,
    data: "2:10:2018"
  },
  {
    speed: 226,
    totalChar: 856,
    totalWords: 154,
    totalTime: 227,
    errorCount: 63,
    errorPerChar: 9.619686800894854,
    data: "2:10:2018"
  },
  {
    speed: 241,
    totalChar: 856,
    totalWords: 150,
    totalTime: 213,
    errorCount: 106,
    errorPerChar: 9.619686800894854,
    data: "2:10:2018"
  },
  {
    speed: 240,
    totalChar: 856,
    totalWords: 150,
    totalTime: 214,
    errorCount: 116,
    errorPerChar: 9.619686800894854,
    data: "3:10:2018"
  },
  {
    speed: 213,
    totalChar: 856,
    totalWords: 156,
    totalTime: 242,
    errorCount: 61,
    errorPerChar: 9.619686800894854,
    data: "3:10:2018"
  },
  {
    speed: 250,
    totalChar: 856,
    totalWords: 150,
    totalTime: 205,
    errorCount: 61,
    errorPerChar: 1403.27868852459,
    data: "3:10:2018"
  },
  {
    speed: 147,
    totalChar: 447,
    totalWords: 75,
    totalTime: 183,
    errorCount: 43,
    errorPerChar: 9.619686800894854,
    data: "3:10:2018"
  }
];

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
    copyStats: function() {
      console.log(window.localStorage.getItem("stats"));
    },
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
  width: 400px;
  margin: 0px auto;
  padding: 20px 30px;
  background-color: #fff;
  border-radius: 2px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
}

.modal-header {
  margin-top: 0;
  color: #42b983;
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
