export const projectData = ()=>{
const projects=[
    {
        title: `Tsofen landing page`,
        body: `Tsophen is a landing page i built in PHP in Wordpress`,
        icons: ['PHP', 'Wordpress', 'CSS'],
        sourceCode:'https://github.com/Asi889/tsofen-landingPage',
        liveWebsite:'http://lp.tsofen.org/?fbclid=IwAR3grDQ7mACsKXS_ZOnfNYa8Mut1nMAqklQo_eA8E2wCRkR_UKYNLtX5jV8',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134536/tsofen_agfaab.png'

    },
    // {
    //     title: `Vue.js Weather App`,
    //     body: `first mini project i did in vue.js`,
    //     icons: ['Vue', 'Wordpress', 'CSS'],
    //     sourceCode:'https://github.com/Asi889/tsofen-landingPage',
    //     liveWebsite:'http://lp.tsofen.org/?fbclid=IwAR3grDQ7mACsKXS_ZOnfNYa8Mut1nMAqklQo_eA8E2wCRkR_UKYNLtX5jV8',
    //     imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134536/tsofen_agfaab.png'
    // },
    {
        title: `Final Bootcamp Project`,
        body: `GIG-Me, is a full C2C App, Task manager App, fiverr meets task manager but not for proffesionals. The app is built in React JS framework, and NODE JS server. With MongoDB as the database.`,
        icons: ['Node', 'MongoDB', 'React','MobX'],
        sourceCode:'https://github.com/Asi889/gigMeApp',
        liveWebsite:'',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134532/gigme_n1q1ml.png'

    },
    {
        title: `Maya landing page`,
        body: `this is a landing page i built for Adam Milo in PHP in Wordpress, `,
        icons: ['PHP', 'Wordpress', 'CSS'],
        sourceCode:'https://github.com/Asi889/maya-landingPage',
        liveWebsite:'https://landing.am-maya.com/',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134533/mayalp_vjmw4c.png'
    },
    {
        title: `Chat Room`,
        body: `this is was a task i got for an interview to make a chat room using only vanilla js. so i did! I used socket.io and express for the server and tailwind on the css and deployed with AWS. `,
        icons: ['Node.js', 'Javascript','Socket.io','Tailwind', 'CSS'],
        sourceCode:'https://github.com/Asi889/room-chat-app',
        liveWebsite:'http://nodechat-env-1.eba-kxrknrwn.us-east-2.elasticbeanstalk.com/chat.html?username=Ness&room=General',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1659299284/chatapp_xuhory.png'
    },
    {
        title: `Carnival Cruse`,
        body: `Carnival Cruse is a end to end App built in react framework, i did not build this project, but was needed to fix and add new fetures to a existing project`,
        icons: ['JavaScript','React', 'State-Managment','CSS'],
        sourceCode:'https://github.com/Asi889/frontcarnivalwhitelabel',
        liveWebsite:'https://betabundles.com/',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134535/carnival_nwjjst.png'
    },
    {
        title: `UNICORN DESIGN`,
        body: `UNICORN DESIGN is as website a website i made for a client`,
        icons: ['PHP','WordPress','Javascript','Tailwind','CSS', 'html'],
        sourceCode:'',
        liveWebsite:'https://wordel-game.vercel.app/',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1656425485/Screenshot_2022-06-28_171100_ev5rfw.png'
    },
    {
        title: `Project Maya - Adam Milo `,
        body: `Proect Maya is A full End To End system built in React next.js Framework for front end php in the backend, in this project i worked in colaboration with two other programers.`,
        icons: ['PHP', 'JavaScript','React Next.js', 'State-Managment', 'CSS','Tailwind'],
        sourceCode:'https://github.com/Asi889/maya-front',
        liveWebsite:'https://am-maya.com/',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639134534/mayaproject_mubvzz.png'

    },
    {
        title: `Wordle in Hebrew`,
        body: `Wordle is a fun game that i built after seeing the big hype about it. its my first project in Vue.js. it was and still is fun working on`,
        icons: ['', 'JavaScript','Vue.js','tailwind','CSS'],
        sourceCode:'https://github.com/Asi889/wordel-game',
        liveWebsite:'https://wordel-game.vercel.app/',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1644915796/ggg_apxx6c.png'
    },
    {
        title: `What's 4 Dinner`,
        body: `Don't know what to order for dinner/lunch? Whats4Dinner is a random restaurant picker from Wolt and 10Bis restaurant list that will choose a random restaurant for you.`,
        icons: ['Typscript', 'JavaScript','React','Next.js','Tailwind','CSS'],
        sourceCode:'https://github.com/Asi889/restaurant-picker',
        liveWebsite:'https://www.whats4dinner.co.il/',
        imgeSource: 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1656425068/Screenshot_2022-06-28_170410_qpikgu.png'
    },
];

    return projects.reverse()
};

 