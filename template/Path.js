Mock.mock('http://g.cn', {
  "foo": "Hello",
  "nested": {
    "a": {
      "b": {
        "c": "Mock.js"
      }
    }
  },
  "absolutePath": "@/foo @/nested/a/b/c",
  "relativePath": {
    "a": {
      "b": {
        "c": "@../../../foo @../../../nested/a/b/c"
      }
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