Mock.mock('http://g.cn', {
  "RegExp": {
    'regexp1': /[a-z][A-Z][0-9]/,
    'regexp2': /\w\W\s\S\d\D/,
    'regexp3': /\d{5,10}/,
    'regexp4|3': /\d{5,10}\-/,
    'regexp5|1-5': /\d{5,10}\-/
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