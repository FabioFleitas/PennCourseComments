$disqusDiv = $('<br><br><div id="disqus_thread"></div>');
$('#content').children(":first").append($disqusDiv);

var getIdentifierFromUrl = function (url) {
  var urlComponents = url.split('/');
  var identifier = urlComponents[urlComponents.length - 1];
  return identifier;
};

var disqus_identifier = getIdentifierFromUrl(window.location.href);