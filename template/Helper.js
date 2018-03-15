Mock.mock('http://g.cn', {
  "capitalize": "@capitalize('hello')",
  "upper": "@upper('hello')",
  "lower": "@lower('HELLO')",
  "pick": "@pick(['a', 'e', 'i', 'o', 'u'])",
  "shuffle": "@shuffle(['a', 'e', 'i', 'o', 'u'])"
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});