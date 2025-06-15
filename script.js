function runCode() {
  const html = document.getElementById('html').value;
  const css = document.getElementById('css').value;
  const js = document.getElementById('js').value;

  const fullCode = `
<!DOCTYPE html>
<html>
<head>
<style>${css}</style>
</head>
<body>
${html}
<script>${js}<\/script>
</body>
</html>`;

  const iframe = document.getElementById('preview');
  iframe.srcdoc = fullCode;

  document.getElementById('fullCode').textContent = fullCode;

  explainCode(html, css, js);
}

function explainCode(html, css, js) {
  let explanation = "";

  // Simple HTML explanation
  if (html.includes("<h1")) explanation += "You're using an <h1> heading.\n";
  if (html.includes("<p")) explanation += "You included a paragraph.\n";

  // CSS explanation
  if (css.includes("color")) explanation += "You're changing text color with CSS.\n";
  if (css.includes("background")) explanation += "You used a background style.\n";

  // JS explanation
  if (js.includes("alert")) explanation += "You used `alert()` to pop up a message.\n";
  if (js.includes("console.log")) explanation += "You're logging something to the console.\n";

  if (explanation === "") explanation = "Your code is working, but I couldn’t detect any familiar patterns yet.";

  document.getElementById('explanation').textContent = explanation;
}

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/sw.js');
}
