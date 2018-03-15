Mock.mock('http://g.cn', {
  "Paragraph": {
    "paragraph1": "@paragraph()",
    "paragraph2": "@paragraph(1, 3)"
  },
  "Sentence": {
    "sentence1": "@sentence()",
    "sentence2": "@sentence(3, 5)"
  },
  "Word": {
    "word1": "@word()",
    "word2": "@word(3, 5)"
  },
  "Title": {
    "title1": "@title()",
    "title2": "@title(3, 5)"
  },
  "Cparagraph": {
    "cparagraph1": "@cparagraph()",
    "cparagraph2":"@cparagraph(1, 3)"
  },
  "Csentence": {
    "csentence1": "@csentence()",
    "csentence2":"@csentence(3, 5)"
  },
  "Cword": {
    "cword1": "@cword()",
    "cword2":"@cword(3, 5)"
  }
});

$.ajax({
  url: 'http://g.cn',
  dataType: 'json'
}).done(function(data, status, xhr) {
  $('body').append(`<h1>Random.paragraph( min?, max? )</h1><p>${data.Paragraph.paragraph1}</p>`)
  .append(`<p>${data.Paragraph.paragraph2}</p>`)
  .append(`<h1>Random.sentence( min?, max? )</h1><p>${data.Sentence.sentence1}</p>`)
  .append(`<p>${data.Sentence.sentence2}</p>`)
  .append(`<h1>Random.word( min?, max? )</h1><p>${data.Word.word1}</p>`)
  .append(`<p>${data.Word.word2}</p>`)
  .append(`<h1>Random.title( min?, max? )</h1><p>${data.Title.title1}</p>`)
  .append(`<p>${data.Title.title2}</p>`)
  .append(`<h1>Random.cparagraph( min?, max? )</h1><p>${data.Cparagraph.cparagraph1}</p>`)
  .append(`<p>${data.Cparagraph.cparagraph2}</p>`)
  .append(`<h1>Random.csentence( min?, max? )</h1><p>${data.Csentence.csentence1}</p>`)
  .append(`<p>${data.Csentence.csentence2}</p>`)
  .append(`<h1>Random.cword( pool?, min?, max? )</h1><p>${data.Cword.cword1}</p>`)
  .append(`<p>${data.Cword.cword2}</p>`)
}).fail(function(data){
  alert('error');
});