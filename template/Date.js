Mock.mock('http://g.cn', {
  "date": {
    "date1": "@date()",
    "date2": "@date('yyyy-MM-dd')",
    "date3": "@date('y-M-d')"
  },
  "time": {
    "time1": "@time()",
    "time2": "@time('A HH:mm:ss')"
  },
  "datetime": {
    "datetime1": "@datetime()",
    "datetime2": "@datetime('yyyy-MM-dd A HH:mm:ss')"
  },
  "now": "@now()"
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});