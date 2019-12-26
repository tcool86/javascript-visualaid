<template>
  <div id="main-editor">
    <div id="code-editor" class="editor"></div>
  </div>
</template>

<script lang="ts">
import { Component, Prop, Vue } from "vue-property-decorator";
import Ace from 'ace-builds';
import 'ace-builds/src-noconflict/mode-javascript';
import 'ace-builds/src-noconflict/theme-monokai';
import sampleCode from './sampleCode';
const { parse } = require('abstract-syntax-tree');

@Component
export default class MainEditor extends Vue {
	editor: Ace.Ace.Editor | null;
	editorUpdate(event: Ace.Ace.Delta) {
		if (!this.editor) {
			return;
		}
		const editorSession = this.editor.getSession();
		const document = editorSession.getDocument();
		const code = document.getAllLines();
		const source = code.join('\n');
		const tree = parse(source);
		console.log(tree);
	}
	constructor() {
		super();
		this.editor = null;
	}
  mounted() {
    this.editor = Ace.edit('code-editor');
    this.editor.getSession().setMode('ace/mode/javascript');
    this.editor.setTheme('ace/theme/monokai');
	this.editor.clearSelection();
	this.editor.insert(sampleCode);
	this.editor.on('change', this.editorUpdate);
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
