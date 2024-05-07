var text = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500.`;
// document.body.innerHTML = text;

var index = 0;
setInterval(function () {
  var space = text.indexOf(" ", index);
  console.log(space);
  var word = text.slice(index, space);
  var wordChange = text.replace(word, `<span>${word}</span>`);
  document.body.innerHTML = wordChange;
  index = space + 1;
}, 500);
