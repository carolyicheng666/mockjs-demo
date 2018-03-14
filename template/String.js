Mock.mock('http://g.cn', {
  'String': {
    "string1|1-10": "★",
    "string2|3": "★★★"
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