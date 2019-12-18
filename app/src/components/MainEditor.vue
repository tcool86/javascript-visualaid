<template>
  <div id="main-editor">
    <div id="code-editor" class="editor"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import ace from 'brace';
import 'brace/mode/javascript';
import 'brace/theme/monokai';

@Component
export default class MainEditor extends Vue {
  mounted() {
    const editor = ace.edit('code-editor');
    editor.getSession().setMode('ace/mode/javascript');
    editor.setTheme('ace/theme/monokai');
    editor.clearSelection();
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import url('editorStyle.scss');
#main-editor {
  flex: 1;
  padding: 2em 2em 2em 1em;
  border-radius: 4px;
  margin: 2em;

  background-color: #2F3129;
  #code-editor {
    width: 100%;
    height: 100%;
  }
}
</style>
