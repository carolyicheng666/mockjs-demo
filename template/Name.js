Mock.mock('http://g.cn', {
  "first": "@first()",
  "last": "@last()",
  "name": {
    "name1": "@name()",
    "name2": "@name(true)"
  },
  "cfirst": "@cfirst()",
  "clast": "@clast()",
  "cname": "@cname()"
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});