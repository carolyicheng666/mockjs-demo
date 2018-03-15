Mock.mock('http://g.cn', {
  "color": "@color()",
  "hex": "@hex()",
  "rgb": "@rgb()",
  "rgba": "@rgba()",
  "hsl": "@hsl()"
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});