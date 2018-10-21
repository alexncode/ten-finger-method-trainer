<template>
  <div class="text-area">
    <div class="left">
      <textarea ref="mainInput" class="written-text" name="main" id="text" @input="processInput" v-model="inputText"></textarea>
      <button class="btn clear" @click="clearText()">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
          <path fill="none" d="M0 0h24v24H0V0z" />
          <path d="M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zm2.46-7.12l1.41-1.41L12 12.59l2.12-2.12 1.41 1.41L13.41 14l2.12 2.12-1.41 1.41L12 15.41l-2.12 2.12-1.41-1.41L10.59 14l-2.13-2.12zM15.5 4l-1-1h-5l-1 1H5v2h14V4z" />
          <path fill="none" d="M0 0h24v24H0z" /></svg>
      </button>
    </div>
    <div ref="highlightedText" v-if="!layout" class="sample-text" v-html="output">
    </div>
    <button class="btn update" @click="getSample()">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path d="M17.65 6.35C16.2 4.9 14.21 4 12 4c-4.42 0-7.99 3.58-7.99 8s3.57 8 7.99 8c3.73 0 6.84-2.55 7.73-6h-2.08c-.82 2.33-3.04 4-5.65 4-3.31 0-6-2.69-6-6s2.69-6 6-6c1.66 0 3.14.69 4.22 1.78L13 11h7V4l-2.35 2.35z" />
        <path d="M0 0h24v24H0z" fill="none" /></svg>
    </button>
  </div>
</template>

<script>
const WRONG = "background-color: var(--wrong);";
const RIGHT = "background-color: var(--right);";
const DEFAULT_TEXT =
  "From the comfort of our modern lives we tend to look back at the turn of the twentieth century as a dangerous time for sea travellers. With limited communication facilities, and shipping technology still in its infancy in the early nineteen hundreds, we consider ocean travel to have been a risky business. But to the people of the time it was one of the safest forms of transport. At the time of the Titanic's maiden voyage in 1912, there had only been four lives lost in the previous forty years on passenger ships on the North Atlantic crossing. And the Titanic was confidently proclaimed to be unsinkable. She represented the pinnacle of technological advance at the time. Her builders, crew and passengers had no doubt that she was the finest ship ever built. But still she did sink on April 14, 1912, taking 1,517 of her passengers and crew with her.";

let delay = null;

export default {
  name: "TextArea",
  props: {
    layout: false
  },
  data() {
    return {
      inputText: "",
      output: "",
      sample: "",
      errorsCount: 0,
      active: false,
      startTime: 0,
      endTime: 0
    };
  },
  computed: {
    pos: function() {
      return this.inputText.length;
    },
    totalWords: function() {
      //Counting the amount of words
      return this.inputText.split(" ").length;
    }
  },
  mounted: function() {
    this.$refs.mainInput.focus();
    this.getSample();
  },
  methods: {
    processInput: function(event) {
      //Reset all when input empty
      if (this.inputText === "") {
        this.clearText();
      }
      if (!this.active) {
        this.active = true;
        this.startTime = Date.now();
      }
      let spans = this.$refs.highlightedText.children;
      if (this.pos !== 0 && event.data !== null) {
        if (this.inputText[this.pos - 1] === spans[this.pos - 1].innerText) {
          spans[this.pos - 1].style = RIGHT;
        } else {
          spans[this.pos - 1].style = WRONG;
          this.errorsCount += 1;
        }
        this.calcStats();
        this.updateTiemout();
      }
    },
    getSample: function() {
      let vm = this;
      if (vm.$root.samples.length <= 0) {
        vm.sample = DEFAULT_TEXT;
      } else {
        var rnd = Math.floor(Math.random() * vm.$root.samples.length);
        vm.sample = vm.$root.samples[rnd][".value"];
      }
      vm.output = vm.generateOutput(vm.sample);
    },
    generateOutput: function(sampleText) {
      return sampleText
        .split("")
        .map(n => `<span>${n}</span>`)
        .join("");
    },
    clearHighlightedText: function() {
      Array.from(this.$refs.highlightedText.children).forEach(element => {
        element.style = "background-color: transparent;";
      });
    },
    clearText: function() {
      this.inputText = "";
      this.active = false;
      this.clearHighlightedText();
      this.errorsCount = 0;
    },
    calcStats: function() {
      const endTime = Date.now();
      const speed = Math.round(
        (this.pos / ((endTime - this.startTime) / 1000)) * 60
      );
      this.stats = {
        speed: speed,
        errorCount: this.errorsCount,
        totalChar: this.pos,
        totalWords: this.totalWords,
        totalTime: Math.round((endTime - this.startTime) / 1000)
      };
      this.$emit("statistic", this.stats);
    },
    updateTiemout: function() {
      clearTimeout(delay);
      let vm = this;
      delay = setTimeout(function() {
        vm.active = false;
        vm.saveStats();
      }, 5000);
    },
    saveStats: function() {
      if (
        this.stats.speed !== 0 &&
        (this.stats.totalTime >= 180 || this.stats.totalChar >= 50)
      ) {
        let stats = JSON.parse(window.localStorage.getItem("stats")) || [];
        stats.push({
          ...this.stats,
          errorPerChar: (this.stats.errorCount / this.stats.totalChar) * 100, // Percentage
          data: this.getToday()
        });
        window.localStorage.setItem("stats", JSON.stringify(stats));
      }
    },
    getToday() {
      let date = new Date();
      return (
        date.getDate() +
        ":" +
        (parseInt(date.getMonth()) + 1) +
        ":" +
        date.getFullYear()
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-area {
  --right: #82eb82;
  --wrong: #ffb4b4;
  position: relative;
  display: flex;
  width: 100%;
  height: 300px;
  background-color: #fff;
  .left {
    flex: 1;
    // border: 1px solid rgba(0, 0, 0, 0.26);
    position: relative;
    .written-text {
      height: 100%;
      width: 100%;
      font-family: inherit;
      font-size: inherit;
      color: inherit;
      padding: 0.5rem;
      resize: none;
      box-sizing: border-box;
    }
  }
  .sample-text {
    position: relative;
    text-align: left;
    border: 1px solid #b0b0b0;
    flex: 1;
    padding: 0.5rem;
    margin-left: 1px;
    overflow: scroll;
    overflow-x: hidden;
  }
}
.right {
  background-color: lightgreen;
  color: green;
}

.btn {
  position: absolute;
  right: 5px;
  bottom: 5px;
  background-color: #f7931e;
  border: 0;
  border-radius: 50%;
  height: 32px;
  width: 32px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
  }
  &:focus {
    outline: 0;
  }
  svg {
    position: absolute;
    top: 3px;
    left: 4px;
    fill: #e0e0e0;
  }
  &:hover svg {
    fill: #f0f0f0;
  }
}

.update {
  right: 25px;
}
</style>
