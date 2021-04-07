import { useEffect } from "react";
import Scroll from "./Scroll";



const AboutPage = () => {

    return (
        <div id="sec2" className="section2" >
            {/* {Scroll()} */}
            <Scroll />



            <div className="about_text">
                <div className="title_titan">

                        <h1 className="about">About </h1>
                    <div className="scene">

                        <div className="scene_titanShadow"></div>
                        <div className="t_wrap">

                            <div className="scene_titan">
                                <div className="eyes">
                                    <div className="eye eye--left"></div>
                                    <div className="eye eye--right"></div>
                                </div>

                            </div>

                        </div>

                    </div>
                </div>


                <p className="first_text">
                    I am a Junior Full-Stack web developer, Self-motivated, organized, and team-work oriented seeking a suitable position
                    to use my analytical and programming skills for developing quality software products.
                    I have a strong work ethic, good communication skills, am open minded,
                    fun, always ready to learn somthing new, to succeed and to contribute in any way I can.
                    </p>
                <br></br>
                {/* <em className="bold_elevation">  Elevation Academy</em> */}

                <p className="second_text">
                    I am a graduate of <a className="bold_elevation" href="https://www.elevation.ac">Elevation Academy</a> , Full Stack Web Developer- Course Page.
                        An industry-based intensive 3-month coding Bootcamp which covered the entire MERN
                        stack and beyond. Built a number of end-to-end projects from scratch while adhering
                        to solid
                        <em className="bold_text"> OOP </em>
                        principles and communicating with a number of external APIs.
                    </p>

                <br></br>
                <br></br>

                <p className="second_text">
                    <em className="bold_text"> My Current technical skill are</em>

                    <br></br>
                    <em className="bold_text">Main language -</em>JavaScript(ES5/6)
                        <br></br>
                    <em className="bold_text"> Frameworks -</em> React, MobX, Redux
                        <br></br>
                    <em className="bold_text"> Client Side -</em> HTML CSS Materialiez, BootStarp...
                        <br></br>
                    <em className="bold_text"> Server Side & DataBase -</em>
                        Node.js Express, MongoDB, Mongoose,
                        <br></br>
                    <em className="bold_text">Tools -</em>
                        Gitithub, working in collaboration in Github,Heroku, AWS-EC2
                    </p>
                <br></br>
                <br></br>
                <p className="third_text">

                    In my Free time i ❤️ to play FreeStyle frisbee at the beach 🥏, & take videos 🎥 of trick shots.
                    check me out here


                        <a className="camra_imoji" href="https://www.instagram.com/p/BXuZ0rpFRLf/?igshid=zjmux3ilm5s7">📷</a>
                </p>
                <br></br>
                <p>Currently Looking for my First Job and my Next Challange.</p>
                <em className="bold_text_withColor">
                    <a href="https://github.com/Asi889/gigMeApp/raw/main/asafmaromCV1-update.pdf"
                     download="asafmaromCV1-update.pdf" target="_blank">📝 My resume</a>

                </em>
                


            </div>
            <div className="about_img_pic">
                <img id="idabout_pic" className="about_pic" src="https://res.cloudinary.com/dvdzjj8jo/image/upload/c_crop,h_1370,w_2048/v1616576685/%D7%97%D7%95%D7%A3_%D7%94%D7%AA%D7%95%D7%A4%D7%99%D7%9D_062-removebg_qrkktl.png" alt=""></img>
                {/* <img id="idabout_pic" className="about_pic" alt=""></img> */}
                </div>

        </div>
    )
}
export default AboutPage