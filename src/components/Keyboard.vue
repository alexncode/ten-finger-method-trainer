<template>
  <div class="keyboard" v-on:keyup='highlightKey'>
    <svg id="Layer_2" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1908 693">
      <rect id="Backquote" class="left-pinky" x="12.5" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(54.99 71.76)">~</text>
      <text class="text-style" transform="translate(64.76 143.07)">`</text>
      <rect id='KeyQ' class="left-pinky" x="178.56" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(216.05 237.82)">Q</text>
      <rect id="KeyA" class="left-pinky" x="207.87" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(250.36 373.6)">A</text>
      <rect id="CapsLock" class="left-pinky" x="12.5" y="287.15" width="185.6" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(32.52 373.6)">Caps</text>
      <rect id="Tab" class="left-pinky" x="12.5" y="153.32" width="159.22" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(32.52 237.82)">Tab</text>
      <rect id="ShiftLeft" class="left-pinky" x="12.5" y="420" width="237.37" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(32.52 502.54)">Shift</text>
      <rect id="ControlLeft" class="left-pinky" x="12.5" y="554.8" width="175.83" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(32.52 641.25)">Ctrl</text>
      <rect id="Digit1" class="left-ring" x="146.33" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(189.79 104.97)">1</text>
      <rect id="Digit2" class="left-ring" x="276.24" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(319.71 104.97)">2</text>
      <rect id="KeyW" class="left-ring" x="311.41" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(348.04 237.82)">W</text>
      <rect id="KeyS" class="left-ring" x="337.78" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(380.28 373.41)">S</text>
      <rect id="KeyZ" class="left-ring" x="257.68" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(300.18 502.54)">Z</text>
      <rect id="Digit3" class="left-middle" x="407.14" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(451.58 104.97)">3</text>
      <rect id="Digit4" class="left-middle" x="538.03" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(582.48 104.97)">4</text>
      <rect id="KeyE" class="left-middle" x="441.33" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(483.82 237.82)">E</text>
      <rect id="KeyD" class="left-middle" x="468.68" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(511.17 373.41)">D</text>
      <rect id="KeyX" class="left-middle" x="389.56" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(429.05 504.26)">X</text>
      <rect id="Digit5" class="left-index" x="666.98" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(709.47 104.97)">5</text
      ><rect id="KeyR" class="left-index" x="572.22" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(614.72 237.82)">R</text>
      <rect id="KeyT" class="left-index" x="702.14" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(744.63 237.82)">T</text>
      <rect id="Digit6" class="left-index" x="795.92" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(838.41 104.97)">6</text>
      <rect id="KeyF" class="left-index" x="599.58" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(642.07 373.41)">F</text>
      <rect id="KeyG" class="left-index" x="730.47" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(773.96 370.41)">G</text>
      <rect id="KeyC" class="left-index" x="521.43" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(563.92 502.26)">C</text>
      <rect id="KeyV" class="left-index" x="652.32" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(694.82 502.26)">V</text>
      <rect id="KeyB" class="left-index" x="782.24" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(824.73 502.26)">B</text>
      <rect id="Digit7" class="right-index" x="924.86" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(967.35 104.97)">7</text>
      <rect id="KeyY" class="right-index" x="832.06" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(874.55 237.82)">Y</text>
      <rect id="KeyU" class="right-index" x="961.98" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1004.47 237.82)">U</text>
      <rect id="KeyH" class="right-index" x="861.37" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(903.86 370.41)">H</text>
      <rect id="KeyJ" class="right-index" x="992.26" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1034.75 373.41)">J</text>
      <rect id="KeyN" class="right-index" x="912.16" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(954.65 502.26)">N</text>
      <rect id="KeyM" class="right-index" x="1044.03" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1078.53 504.26)">M</text>
      <rect id="Digit8" class="right-middle" x="1055.76" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1098.25 104.97)">8</text>
      <rect id="Digit9" class="right-middle" x="1184.7" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1227.19 104.97)">9</text>
      <rect id="KeyI" class="right-middle" x="1091.9" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1142.2 237.82)">I</text>
      <rect id="KeyK" class="right-middle" x="1123.16" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1165.65 370.41)">K</text>
      <rect id="Comma" class="right-middle" x="1174.93" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1221.42 502.26)">,</text>
      <rect id="Digit0" class="right-ring" x="1315.59" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1360.04 104.97)">0</text>
      <rect id="KeyO" class="right-ring" x="1221.82" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1264.31 237.82)">O</text>
      <rect id="KeyL" class="right-ring" x="1254.05" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1297.54 370.41)">L</text>
      <rect id="Period" class="right-ring" x="1304.85" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1360.34 502.26)">.</text>
      <rect id="Minus" class="right-pinky" x="1446.49" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1497.77 104.97)">-</text>
      <rect id="Equal" class="right-pinky" x="1577.38" y="19.5" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1618.9 104.97)">=</text>
      <rect id="KeyP" class="right-pinky" x="1351.73" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1394.23 237.82)">P</text>
      <rect id="BracketLeft" class="right-pinky" x="1481.65" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1531.96 237.82)">[</text>
      <rect id="BracketRight" class="right-pinky" x="1611.57" y="153.32" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1664.81 237.82)">]</text>
      <rect id="Semicolon" class="right-pinky" x="1384.95" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1438.44 370.41)">;</text>
      <rect id="Quote" class="right-pinky" x="1517.8" y="287.15" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1566.29 373.41)">‘</text>
      <rect id="Slash" class="right-pinky" x="1435.74" y="420" width="123.08" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1487 503.57)">/</text>
      <rect id="Enter" class="right-pinky" x="1648.5" y="287.63" width="247" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1679.13 368.89)">Enter</text>
      <rect id="Backspace" class="right-pinky" x="1707.3" y="19.5" width="188.2" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1741.98 104.97)">&lt;=</text>
      <rect id="Space" class="thumbs" x="484.82" y="554.76" width="721.68" height="124.06" rx="15" ry="15"/>
      <rect id="AltLeft" class="thumbs" x="337.78" y="554.8" width="138.71" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(363.67 641.25)">Alt</text>
      <rect id="ShiftRight" class="right-pinky" x="1569.5" y="420.69" width="326" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1605.13 503.95)">Shift</text>
      <rect id="ControlRight" class="right-pinky" x="1707.5" y="554.75" width="188" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1742.13 641.01)">Ctrl</text>
      <rect id="Backslash" class="right-pinky" x="1742.49" y="153.65" width="153.01" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1810.73 238.15)">\</text>
      <rect id="AltRight" class="thumbs" x="1213.78" y="554.8" width="138.71" height="124.06" rx="15" ry="15"/>
      <text class="text-style" transform="translate(1239.67 642.25)">Alt</text></svg>
  </div>
</template>

<script>
export default {
  name: "Keyboard",
  props: {},
  created: function() {
    window.addEventListener("keyup", this.highlightKey);
  },
  methods: {
    highlightKey: function(event) {
      const key = document.getElementById(event.code);
      if (key) {
        scaleEl(key, 5);
        setTimeout(scaleEl, 100, key, -5);
        // key.classList.add("press");
      }
    }
  }
};
function scaleEl(elem, d) {
  elem.setAttribute("x", Math.round(elem.getAttribute("x")) + d);
  elem.setAttribute("y", Math.round(elem.getAttribute("y")) + d);
  elem.setAttribute(
    "height",
    Math.round(elem.getAttribute("height")) + d * 2 * -1
  );
  elem.setAttribute(
    "width",
    Math.round(elem.getAttribute("width")) + d * 2 * -1
  );
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.left-pinky {
  fill: #ff3f2e;
}
.left-pinky,
.left-index,
.right-index,
.right-middle,
.right-ring,
.right-pinky,
.thumbs,
.left-ring,
.left-middle {
  stroke: #000;
  stroke-miterlimit: 10;
  stroke-width: 5px;
}
.text-style {
  font-size: 62.52px;
  font-family: MyriadPro-Regular, Myriad Pro;
}
.left-ring {
  fill: #f7931e;
}
.left-middle {
  fill: #fcee21;
}
.left-index {
  fill: #39b54a;
}
.right-index {
  fill: #93278f;
}
.right-middle {
  fill: #b3b3b3;
}
.right-ring {
  fill: #0071bc;
}
.right-pinky {
  fill: #d9e021;
}
.thumbs {
  fill: #29abe2;
}
.press {
  transform-origin: center;
  transform: scale(0.9, 0.9);
}
.keyboard {
  background-color: #e8e8e8;
  border: 2px solid black;
  border-radius: 15px;
}
</style>
