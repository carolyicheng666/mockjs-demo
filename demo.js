Mock.mock('http://g.cn', {
  'name': '@name',
  'age|1-100': 100,
  'color': '@color'
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});