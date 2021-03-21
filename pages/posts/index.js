import Link from 'next/link'
// import { useEffect } from 'react';
// import Layout from '../components/layout'
import styles from '../components/Layout.js'

export default function FirstPost() {


  // const consoleText = function (words, id, colors) {
  //   // if (colors === undefined) colors = ['#fff'];
  //   let visible = true;
  //   let letterCount = 1;
  //   // debugger
  //   let target = document.getElementById('text')

  //   // console.log();
  //   let cont = document.getElementById('console');
  //   let x = 1;
  //   let waiting = false;
  //   target.setAttribute('style', 'color:' + colors[0])
  //   window.setInterval(function () {

  //     if (letterCount === 0 && waiting === false) {
  //       waiting = true;
  //       target.innerHTML = words[0].substring(0, letterCount)
  //       window.setTimeout(function () {
  //         let usedColor = colors.shift();
  //         colors.push(usedColor);
  //         let usedWord = words.shift();
  //         words.push(usedWord);
  //         x = 1;
  //         target.setAttribute('style', 'color:' + colors[0])
  //         letterCount += x;
  //         waiting = false;
  //       }, 1000)
  //     } else if (letterCount === words[0].length + 1 && waiting === false) {
  //       waiting = true;
  //       window.setTimeout(function () {
  //         x = -1;
  //         letterCount += x;
  //         waiting = false;
  //       }, 1000)
  //     } else if (waiting === false) {
  //       target.innerHTML = words[0].substring(0, letterCount)
  //       letterCount += x;
  //     }
  //   }, 120)
  //   window.setInterval(function () {
  //     if (visible === true) {
  //       cont.className = 'console-underscore hidden'
  //       visible = false;

  //     } else {
  //       cont.className = 'console-underscore'

  //       visible = true;
  //     }
  //   }, 400)
  // };

                                                                                                                                                                                                                                                                                                                                                                       
  // useEffect(() => {

  //   consoleText(['My Name Is Asaf, AKA asi', `I Am A Junior Full-Stack Web-Developer`, `Sent From The Future, To Find My First JOB`, `And To Prevent Doomsday :).`], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  // })


  return (
    <>
      {/* <h2>
        <Link href="/">
          <a>Back to home</a>
        </Link>
      </h2> */}
      <div id="suport"><div id="smash"><div id="translateShadow"><div id="rotateImg"></div></div></div></div>
      {/* <img className='pic' src="/images/deadpool.jpg" alt="dead" />
      {/* <div className='console-container'>
        <span id='text'></span>
        <div className='console-underscore' id='console'>&#95;</div>
      </div>  */}


    </>
  )
}