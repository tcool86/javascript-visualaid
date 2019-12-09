<template>
  <div id="visualizer">
    <canvas id="gl-visualizer" width="500" height="500" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import { simpleExample } from './testing';
@Component
export default class Visualizer extends Vue {
  mounted() {
	const canvas = document.getElementById("gl-visualizer");
	// @ts-ignore
	const gl = canvas.getContext("webgl");
	simpleExample(gl);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#visualizer {
  margin: 2em;
  background-color: #FFF;
}
</style>
