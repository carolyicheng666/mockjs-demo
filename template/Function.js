Mock.mock('http://g.cn', {
  "Function": {
    'foo': 'Syntax Demo',
    'name': function() {
      return this.foo
    }
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