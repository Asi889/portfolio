export const consoleText = function (words, id, colors) {
  debugger
  let visible = true;
  let letterCount = 1;
  let target = document.getElementById('text')

  let cont = document.getElementById('console');
  let x = 1;
  let waiting = false;
  target.setAttribute('style', 'color:' + colors[0])
  window.setInterval(function () {
    console.log(letterCount)
    if (letterCount === 0  && waiting === false || letterCount < 0) {
      waiting = true;
      target.innerHTML = words[0].substring(0, letterCount)
      window.setTimeout(function () {
        let usedColor = colors.shift();
        colors.push(usedColor);
        let usedWord = words.shift();
        words.push(usedWord);
        x = 2;
        target.setAttribute('style', 'color:' + colors[0])
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (letterCount === words[0].length + 1 && waiting === false) {
      waiting = true;
      window.setTimeout(function () {
        x = -2;
        letterCount += x;
        waiting = false;
      }, 1000)
    } else if (waiting === false) {
      target.innerHTML = words[0].substring(0, letterCount)
      letterCount += x;
    }
  }, 120)
  window.setInterval(function () {
    if (visible === true) {
      cont.className = 'console-underscore hidden'
      visible = false;

    } else {
      cont.className = 'console-underscore'

      visible = true;
    }
  }, 400)

  
};