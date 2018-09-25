<template>
  <div class="text-area">
    <div class="left">
      <textarea ref="mainInput" class="written-text" name="main" id="text" @input="$emit('textChanged', $event.target.value); sampleText($event);" v-model="inputText"></textarea>
      <!-- TODO: Replace 'C' with icon -->
      <button class="clear-btn" @click="clearText()">C</button>
    </div>
    <div v-if="!layout" class="sample-text" v-html="output"></div>
  </div>
</template>

<script>
export default {
  name: "TextArea",
  props: {
    layout: false
  },
  data() {
    return {
      inputText: "",
      output: ""
    };
  },
  created: function() {
    this.green = '<span style="background-color: lightgreen;">';
    this.red = '<span style="background-color: #ffa0a0;">';
    this.errorOffset = 0;
    this.output = "";
    this.sample = "";
    this.errorsCount = 0;
    this.getSample();
    String.prototype.insert = function(idx, str) {
      return this.slice(0, idx) + str + this.slice(idx);
    };
  },
  computed: {
    pos: function() {
      return this.inputText.length;
    }
  },
  mounted: function() {
    console.log(this.$refs);
    this.$refs.mainInput.focus();
  },
  methods: {
    sampleText: function(event) {
      //Reset all when input empty
      if (this.inputText === "") {
        this.clearText();
      }
      //Implement firsts optimize later
      //Highlight errors
      if (this.pos !== 0 && event.data !== null) {
        if (this.inputText[this.pos - 1] !== this.sample[this.pos - 1]) {
          this.output = this.output.insert(
            this.pos + this.errorOffset - 1,
            this.red
          );
          this.errorOffset += this.red.length;
          this.output = this.output.insert(
            this.pos + this.errorOffset,
            "</span>"
          );
          this.errorOffset += 7;
          this.errorsCount += 1;
          this.$emit("errorCount", this.errorsCount);
        } else {
          this.output = this.output.insert(
            this.pos + this.errorOffset - 1,
            this.green
          );
          this.errorOffset += this.green.length;
          this.output = this.output.insert(
            this.pos + this.errorOffset,
            "</span>"
          );
          this.errorOffset += 7;
        }
      }
      //Backspace handling
      if (event.inputType === "deleteContentBackward" && this.pos !== 0) {
        this.deletaLastSpan();
      }
      return this.output;
    },
    getSample: function() {
      let vm = this;
      //Fetch api response format - array with one element: [text: "sample text",]
      fetch("http://127.0.0.1:8000/demos/api/sample-text/")
        .then(function(response) {
          return response.json();
        })
        .then(function(data) {
          vm.sample = data[0].text;
          vm.output = vm.sample;
        })
        .catch(function(error) {
          //Sample text when api is offline
          vm.sample =
            "From the comfort of our modern lives we tend to look back at the turn of the twentieth century as a dangerous time for sea travellers. With limited communication facilities, and shipping technology still in its infancy in the early nineteen hundreds, we consider ocean travel to have been a risky business. But to the people of the time it was one of the safest forms of transport. At the time of the Titanic’s maiden voyage in 1912, there had only been four lives lost in the previous forty years on passenger ships on the North Atlantic crossing. And the Titanic was confidently proclaimed to be unsinkable. She represented the pinnacle of technological advance at the time. Her builders, crew and passengers had no doubt that she was the finest ship ever built. But still she did sink on April 14, 1912, taking 1,517 of her passengers and crew with her.";
          vm.output = vm.sample;
          console.log(error);
        });
    },
    deletaLastSpan: function() {
      //Straightforward way to delete last span
      let offset = this.output.length;
      let start = this.output.lastIndexOf("<span");
      let finish = this.output.lastIndexOf(';">') + 3;
      this.output = this.output.slice(0, start) + this.output.slice(finish);
      start = this.output.lastIndexOf("</span>");
      this.output = this.output.slice(0, start) + this.output.slice(start + 7);
      offset = offset - this.output.length;
      this.errorOffset = this.errorOffset - offset;
    },
    clearText: function() {
      this.inputText = "";
      this.output = this.sample;
      this.errorOffset = 0;
      this.errorsCount = 0;
      this.$emit("textChanged", this.inputText);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.text-area {
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
    .clear-btn {
      position: absolute;
      right: 5px;
      bottom: 5px;
      background-color: #2196f3;
      border: 0;
      border-radius: 50%;
      height: 32px;
      width: 32px;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.25);
      &:hover {
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.25);
      }
    }
  }
  .sample-text {
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
</style>
