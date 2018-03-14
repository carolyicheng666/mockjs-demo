Mock.mock('http://g.cn', {
  "Number": {
    "number1|+1": 202,
    "number2|1-100": 100,
    "number3|123.1-10": 1,
    "number4|123.3": 1,
    "number5|123.10": 1.123
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