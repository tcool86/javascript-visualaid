<template>
  <div class="home">
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
