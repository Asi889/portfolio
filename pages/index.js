import { useEffect } from 'react';
import  Head  from "./components/Head"
import NavBar from './components/NavBar';
import WelcomePage from './components/WelcomePage';
import AboutPage from './components/AboutPage';
import ProjectPage from './components/ProjectPage';
import StarWarsPage from './components/StarWarsPage';

class TextScramble {
  constructor(el) {
    this.el = el
    this.chars = '!<>-_\\/[]{}—=+*^?#________'
    this.update = this.update.bind(this)
    this.colors= ['tomato', 'rebeccapurple', 'lightblue']
  }
  setText(newText) {
    
    const oldText = this.el.innerText 
    const length = Math.max(oldText.length, newText.length)
    const promise = new Promise((resolve) => this.resolve = resolve)
    this.queue = []
    for (let i = 0; i < length; i++) {
      // target.setAttribute('style', 'color:' + this.colors[0])
      // target.innerHTML = newText[0].substring(0, length)

      const from = oldText[i] || ''
      const to = newText[i] || ''
      const start = Math.floor(Math.random() * 20)
      const end = start + Math.floor(Math.random() * 20)
      this.queue.push({ from, to, start, end })
    }
    cancelAnimationFrame(this.frameRequest)
    this.frame = 0
    this.update()
    return promise
  }
  update() {
    // let target = document.getElementById('text')
    // target.setAttribute('style', 'color:' + this.colors[0])
    let output = ''
    let complete = 0
    for (let i = 0, n = this.queue.length; i < n; i++) {
      let { from, to, start, end, char } = this.queue[i]
      if (this.frame >= end) {
        complete++
        output += to
      } else if (this.frame >= start) {
        if (!char || Math.random() < 0.28) {
          char = this.randomChar()
          this.queue[i].char = char
        }
        output += `<span class="dud">${char}</span>`
      } else {
        output += from
      }
    }
    this.el.innerHTML = output
    if (complete === this.queue.length) {
      this.resolve()
    } else {
      this.frameRequest = requestAnimationFrame(this.update)
      this.frame++
    }
  }
  randomChar() {
    return this.chars[Math.floor(Math.random() * this.chars.length)]
  }
}

export default function Home() {

  const phrases = [
    'I am a Junior Full-Stack web-developer, ',
    'Sent from the future to find my first Job :)',
    'And to prevent Doomsday! 🤖:) Boom!!!, drop the mic!!! 🎤'

  ]


  let counter = 0
  const next = () => {
    const el = document.querySelector('.text')
    const fx = new TextScramble(el)
    fx.setText(phrases[counter]).then(() => {
      setTimeout(next, 3000)
    })
    counter = (counter + 1) % phrases.length
  }




  useEffect(() => {
    next()

    // consoleText([`I Am A Junior Full-Stack Web-Developer` , `Sent From The Future, To Find My First JOB, BOOOM!!!`, `And To Prevent Doomsday 🤖 :).`], 'text', ['tomato', 'rebeccapurple', 'lightblue']);
  })

  return (
    <div id="main_container" >
      <Head></Head>
      <NavBar />
      <WelcomePage />
      <AboutPage />
      <ProjectPage />
      <StarWarsPage />
    </div>
  )
}
