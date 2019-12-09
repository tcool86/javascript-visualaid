<template>
  <div id="app-home">
    <main-editor />
    <visualizer />
  </div>
</template>

<script>
// @ is an alias to /src
import MainEditor from "@/components/MainEditor.vue";
import Visualizer from "@/visualizer/Visualizer.vue";

export default {
  name: "home",
  components: {
    MainEditor,
    Visualizer,
  }
};
</script>

<style lang="scss" scoped>
  #app-home {
    display: flex;
    justify-content: space-evenly;
  }
</style>
