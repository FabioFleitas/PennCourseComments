/*
  Since content scripts do not run in the scope of the page
  we use these functions to load disqus into our chrome extension's scope
  Source: http://stackoverflow.com/questions/10285886/chrome-extension-adding-external-javascript-to-current-pages-html
 */

var execute = function (code) {
  try { window.eval(code); } catch (e) { console.error(e); }
};

var get = function (url, callback) {
  var x = new XMLHttpRequest();
  x.onload = x.onerror = function() { callback(x.responseText); };
  x.open('GET', url);
  x.send();
};

var loadExternalScript = function (url) {
  get(url, function (code) {
    execute(code);
  });
};

var disqus_shortname = 'penncoursecomments';

loadExternalScript('https://penncoursereview.disqus.com/embed.js');
loadExternalScript('https://penncoursereview.disqus.com/count.js');