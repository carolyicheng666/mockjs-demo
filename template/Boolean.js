Mock.mock('http://g.cn', {
  "Boolean": {
    "boolean1|1": true,
    "boolean2|1-2": true
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