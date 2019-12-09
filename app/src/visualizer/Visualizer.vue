<template>
  <div id="visualizer">
    <canvas id="gl-visualizer" />
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import testing from './testing';
@Component
export default class Visualizer extends Vue {
  mounted() {

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
