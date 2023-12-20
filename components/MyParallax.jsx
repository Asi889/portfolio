/* eslint-disable @next/next/no-img-element */
import Link from 'next/link';
import React, { useContext } from 'react';
import projectData from '../src/services/projectData';
import { useRouter } from 'next/router'
import { Context } from '../pages/_app';

function MyParallax(props) {
    
    const theme = useContext(Context)
    const projects = projectData();
    const computerImg = 'https://res.cloudinary.com/dvdzjj8jo/image/upload/v1639300873/computer-70206b16dbda0c66d36cddd149fe703e_vqxyre.png'
    const router = useRouter();
    
    return (
        <div className='relative railway grid gap-y-10 lg:gap-y-40 px-10 lg:px-0 pb-12 '>

            {projects ? projects.map((project, index) => {
                return (
                    <div className={`lg:flex grid z-50 lg:pt-[0px] pt-[50px]  ${router.pathname === "/projects"}`} key={index}>
                        <div className={`h-full w-full  z-50 lg:flex  grid `} >

                            <div className=' grid h-full relative flex-1'>
                                <div className="projec-img-wrapper   items-center max-h-[300px] md:max-h-[400px]  self-center z-50 relative flex   mx-auto">
                                    <img className="items-center  relative  w-full max-h-[300px] md:max-h-[400px] z-50" alt="" src={computerImg}></img>
                                    <img className="project-img absolute z-40 top-[12px] w-full  object-cover  md:max-h-[300px] xs:max-h-[200px] max-h-[140px] rounded-lg" alt="" src={project.imgeSource}></img>
                                    <div className={`h-[110%] md:top-auto bottom-auto  w-[110%]  -left-[5%]  z-10 bg-gray-400 opacity-20 backdrop-filter backdrop-blur-lg rounded-3xl ${theme.darkTheme ? "absolute" : "hidden"}`}></div>
                                </div>
                            </div>

                            <div className={`w-full justify-center z-50 mt-10 flex-1 ${theme.darkTheme ? "text-[#e0d9d9]" : "text-black"}`}>

                                <div className="flex flex-col gap-y-4 justify-center w-full px-5 text-center z-50">

                                    <h1 className="project-title font-bold  md:text-5xl text-4xl md:pb-10 pb-0">{project.title}</h1>
                                    <p className="project-text self-center lg:text-2xl text-xl text-center max-w-[620px]">{project.body}</p>
                                    <div className="tech-wrapper flex flex-wrap gap-x-4 gap-y-2 justify-center">
                                        {project.icons.map((icon, index) => <h3 key={index} className="pl-2 text-2xl font-semibold border-b-2 border-red-400 text-center">{icon}{index != (project.icons.length - 1) ? ', ' : ''}</h3>)}
                                    </div>
                                    <div className="w-full px-10 mx-auto  ">
                                        <div className="max-w-[300px] md:max-w-none grid md:flex flex-wrap gap-x-4 mx-auto justify-center">

                                            <Link target='blank' href={project.sourceCode} className="flex justify-center  button-group" >
                                                <button className="project_btn11 flex items-center justify-center md:h-[60px] px-5 h-10 bg-[#cb5858] shadow-2xl mt-3 text-xl w-full text-white hover:bg-[#b34c4c] ">
                                                    Code
                                                    <svg className="github_logo w-[47px] h-[31px]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 54 54"><path fill="none" d="M-.2.1h53.8v53.4H-.2z"></path><path className='inner-path' d="M15.9 7.7c3.3-1.9 6.9-2.9 10.8-2.9 3.9 0 7.5 1 10.8 2.9s5.9 4.5 7.8 7.8c1.9 3.3 2.9 6.9 2.9 10.8 0 4.7-1.4 8.9-4.1 12.6-2.7 3.7-6.2 6.3-10.6 7.7-.5.1-.9 0-1.1-.2-.2-.2-.4-.5-.4-.8v-5.9c0-1.8-.5-3.1-1.5-4 1.1-.1 2-.3 2.9-.5.8-.2 1.7-.6 2.6-1.1.9-.5 1.7-1.1 2.3-1.9.6-.7 1.1-1.7 1.5-2.9s.6-2.6.6-4.2c0-2.2-.7-4.1-2.2-5.7.7-1.7.6-3.6-.2-5.7-.5-.2-1.3-.1-2.3.3-1 .4-1.8.8-2.6 1.2l-1.1.7c-1.7-.5-3.5-.7-5.4-.7-1.8 0-3.6.2-5.4.7-.3-.2-.7-.5-1.2-.8-.5-.3-1.3-.7-2.3-1.1-1.1-.4-1.9-.5-2.4-.4-.8 2.1-.9 4-.2 5.7-1.4 1.7-2.1 3.6-2.1 5.8 0 1.6.2 3 .6 4.2.4 1.2.9 2.2 1.5 2.9.6.7 1.3 1.4 2.2 1.9.9.5 1.8.9 2.6 1.1.8.2 1.8.4 2.9.5-.7.7-1.2 1.6-1.4 2.9-.4.2-.8.3-1.3.4-.4.1-1 .1-1.6.1s-1.2-.2-1.8-.6c-.6-.4-1.1-1-1.5-1.7-.4-.6-.8-1.1-1.4-1.5-.5-.4-1-.6-1.4-.7l-.6-.1c-.4 0-.7 0-.8.1-.1.1-.2.2-.1.3s.1.3.3.4c.1.1.2.2.4.3l.2.1c.4.2.8.5 1.2 1.1.4.5.7 1 .9 1.4l.3.6c.2.7.7 1.3 1.2 1.7.6.4 1.2.7 1.9.8.7.1 1.3.2 1.9.2.6 0 1.1 0 1.5-.1l.6-.1v4c0 .3-.1.6-.4.8-.2.2-.6.3-1.1.2-4.3-1.4-7.8-4-10.6-7.7S5.1 30.7 5.1 26c0-3.9 1-7.5 2.9-10.8 2-3 4.6-5.6 7.9-7.5zm-2.6 27.9c.1-.1 0-.2-.2-.3-.2-.1-.3 0-.4.1-.1.1 0 .2.2.3.2.1.4.1.4-.1zm.9 1c.1-.1.1-.2-.1-.4s-.3-.2-.4-.1c-.1.1-.1.2.1.4.1.2.3.2.4.1zm.8 1.2c.2-.1.2-.3 0-.5-.1-.2-.3-.3-.5-.2-.2.1-.2.3 0 .5s.4.3.5.2zm1.2 1.2c.1-.1.1-.3-.1-.5s-.4-.3-.6-.1c-.2.1-.1.3.1.5.3.2.5.2.6.1zm1.6.7c.1-.2-.1-.4-.4-.4-.3-.1-.5 0-.5.2-.1.2 0 .3.4.4.2.1.4 0 .5-.2zm1.8.1c0-.2-.2-.3-.5-.3s-.4.1-.4.3c0 .2.2.3.5.3.2 0 .4-.1.4-.3zm1.6-.3c0-.2-.2-.3-.5-.3-.3.1-.4.2-.4.4s.2.3.5.2c.3.1.4-.1.4-.3z"></path></svg>

                                                </button>
                                            </Link>

                                            {project.liveWebsite ?
                                                <Link target='blank' href={project.liveWebsite} className="flex justify-center " >
                                                    <button className="flex items-center justify-center px-5 md:h-[60px] h-10 bg-[#cb5858] shadow-2xl mt-3 text-xl self-end w-full   text-white hover:bg-[#b34c4c] ">
                                                        Live Website

                                                    </button>
                                                </Link>
                                                : " "
                                            }
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                )
            }) : ""}
        </div>
    );
}

export default MyParallax;