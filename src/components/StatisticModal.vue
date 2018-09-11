<template>
  <transition name="modal">
    <div class="modal-mask">
      <div class="modal-wrapper" @click="$emit('close')">
        <div class="modal-container">
          <div class="modal-header">
            Statistic
          </div>
          <div class="modal-body">
            <div>Speed</div>
            <div>Characters</div>
            <div>Words</div>
            <div>Time</div>
            <template v-for="(stat, id) in stats">
                <div :key="'s'+id">{{ stat.speed }}</div> 
                <div :key="'c'+id">{{ stat.totalChar }}</div>
                <div :key="'w'+id">{{ stat.totalWords }}</div>
                <div :key="'t'+id">{{ stat.totalTime }}</div>
            </template>
          </div>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
export default {
  name: "StatisticModal",
  props: {},
  data() {
    return {
      stats: {}
    };
  },
  created: function() {
    this.stats = JSON.parse(window.localStorage.getItem("stats"));
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
  width: 300px;
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
  grid-template-columns: repeat(4, 1fr);
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
