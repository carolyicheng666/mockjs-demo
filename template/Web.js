Mock.mock('http://g.cn', {
  "url": "@url()",
  "domain": "@domain()",
  "protocol": "@protocol()",
  "tld": "@tld()",
  "email": "@email()",
  "ip": "@ip()"
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  document.writeln(JSON.stringify(data, null, 2));
}).fail(function(data){
  alert('error');
});