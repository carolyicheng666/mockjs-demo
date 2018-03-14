Mock.mock('http://g.cn', {
  "Object": {
    "object1|2": {
      "310000": "上海市",
      "320000": "江苏省",
      "330000": "浙江省",
      "340000": "安徽省"
    },
    "object2|2-4": {
      "110000": "北京市",
      "120000": "天津市",
      "130000": "河北省",
      "140000": "山西省"
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