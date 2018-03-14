Mock.mock('http://g.cn', {
  "Array": {
    "array1|1": [
      "AMD",
      "CMD",
      "UMD"
    ],
    "array2|+1": [
      "AMD",
      "CMD",
      "UMD"
    ],
    "array3|1-10": [{
      "name|+1": [
        "Hello",
        "Mock.js",
        "!"
      ]}
    ],
    "array4|1-10": [
      "Mock.js"
    ],
    "array5|1-10": [
      "Hello",
      "Mock.js",
      "!"
    ],
    "array6|3": [
      "Mock.js"
    ],
    "array7|3": [
      "Hello",
      "Mock.js",
      "!"
    ]
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