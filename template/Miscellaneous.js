Mock.mock('http://g.cn', {
  "guid": "@guid()",
  "id": "@id()",
  "increment": {
    "increment1": "@increment()",
    "increment2": "@increment(100)"
  }
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});