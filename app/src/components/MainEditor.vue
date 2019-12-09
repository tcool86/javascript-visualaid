<template>
  <div id="main-editor">
    <textarea id="code-editor"></textarea>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import CodeMirror from 'codemirror';

@Component
export default class MainEditor extends Vue {
  mounted() {
    const textArea = document.getElementById('code-editor');
    CodeMirror.fromTextArea(textArea, CodeMirror.defaults);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
#main-editor {
  margin: 2em;
}
</style>
