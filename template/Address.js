Mock.mock('http://g.cn', {
  "region": "@region()",
  "province": "@province()",
  "city": {
    "city1": "@city()",
    "city2": "@city(true)"
  },
  "county": {
    "county1": "@county()",
    "county2": "@county(true)"
  },
  "zip": "@zip()"
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});