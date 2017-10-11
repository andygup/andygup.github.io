CodeMirror.commands.autocomplete = function(cm) {
  CodeMirror.showHint(cm, CodeMirror.hint.html);
}
window.onload = function() {
  var btn = document.querySelector(".btn-demo");
  var codeblock = document.getElementById("code");
  var codemirrorDiv = document.getElementById("codemirror");
  if (codemirrorDiv) {
    editor = CodeMirror.fromTextArea(codemirrorDiv, {
      mode: 'javascript',
      theme: "neonsyntax",
      lineWrapping: true,
      lineNumbers: true,
      styleActiveLine: true,
      matchBrackets: true,
      extraKeys: {
        "Ctrl-Space": "autocomplete"
      }
    });
  }
  if (btn && codeblock) {
    btn.addEventListener("click", function() {
      codeblock.classList.toggle("visible");
    });
  }
};