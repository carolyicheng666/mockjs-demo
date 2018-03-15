Mock.mock('http://g.cn', {
  "image": {
    "image1": "@image()",
    "image2": "@image('200x100', '#50B347', '#FFF', 'Mock.js')",
    "image3": "@dataImage('200x100', 'Hello Mock.js!')"
  }
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  $('body').append("<img src=" + data.image.image1 + ">")
  .append("<img src=" + data.image.image2 + ">")
  .append("<img src=" + data.image.image3 + ">")
}).fail(function(data){
  alert('error');
});