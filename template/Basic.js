Mock.mock('http://g.cn', {
  "boolean": {
    "boolean1": "@boolean()",
    "boolean2": "@boolean(1, 9, true)"
  },
  "natural": {
    "natural1": "@natural()",
    "natural2": "@natural(60, 100)"
  },
  "integer": {
    "integer1": "@integer()",
    "integer2": "@integer(60, 100)"
  },
  "float": {
    "float1": "@float()",
    "float2": "@float(60, 100, 3, 5)"
  },
  "character": {
    "character1": "@character()",
    "character2": "@character('lower')",
    "character3": "@character('upper')",
    "character4": "@character('number')",
    "character5": "@character('symbol')"
  },
  "string": {
    "string1": "@string()",
    "string2": "@string('lower', 1, 3)",
    "string3": "@string('upper', 1, 3)",
    "string4": "@string('number', 1, 3)",
    "string5": "@string('symbol', 1, 3)"
  },
  "range": {
    "range1": "@range(10)",
    "range2": "@range(3, 7)",
    "range3": "@range(1, 10, 2)"
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