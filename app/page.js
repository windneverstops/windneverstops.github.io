"use client";

import Nav from "@/components/Nav";
import { Asap } from "next/font/google";
import Message from "@/components/Message";
import MovingShadow from "@/components/MovingShadow";

import project1 from "@/public/static/project1.png"
import project2 from "@/public/static/project2.png"
import Frame from "@/components/Frame";
import Pill from "@/components/Pill";

const mainFont = Asap({
  subsets: ["latin"],
})


export default function Home() {



  return (
    <main className={`h-screen w-screen ${mainFont.className}`} style={{}}>
      <div style={{}} className="relative flex flex-col lg:items-center items-start h-screen p-12">
        <Nav/>
        <div className="grow flex flex-col justify-around w-full h-auto">
          <div className="flex flex-col gap-y-4 items-center pt-14">
            <div className="text-3xl font-bold">
            G&apos;day, I&apos;m
            </div>
            <span className="text-3xl main-font-colour pl-7 sm:text-5xl font-bold overflow-visible text-nowrap">  
              Daniel Hong.
            </span>
            <div className="pt-10 text-wrap">
              I&apos;m a <u className="decoration-sky-600">penultimate Software Engineering student</u> at a GO8 uni.
            </div> 
          </div>
          <div className="flex flex-col items-center gap-y-12">
            <div className="animate-p">
              <a href="https://onedrive.live.com/download?resid=DFBE1DA5AC2963A8%216446&authkey=!APfcjMz0T8FAC1M&em=2">
                <MovingShadow><svg width="30" height="30" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.50005 1.04999C7.74858 1.04999 7.95005 1.25146 7.95005 1.49999V8.41359L10.1819 6.18179C10.3576 6.00605 10.6425 6.00605 10.8182 6.18179C10.994 6.35753 10.994 6.64245 10.8182 6.81819L7.81825 9.81819C7.64251 9.99392 7.35759 9.99392 7.18185 9.81819L4.18185 6.81819C4.00611 6.64245 4.00611 6.35753 4.18185 6.18179C4.35759 6.00605 4.64251 6.00605 4.81825 6.18179L7.05005 8.41359V1.49999C7.05005 1.25146 7.25152 1.04999 7.50005 1.04999ZM2.5 10C2.77614 10 3 10.2239 3 10.5V12C3 12.5539 3.44565 13 3.99635 13H11.0012C11.5529 13 12 12.5528 12 12V10.5C12 10.2239 12.2239 10 12.5 10C12.7761 10 13 10.2239 13 10.5V12C13 13.1041 12.1062 14 11.0012 14H3.99635C2.89019 14 2 13.103 2 12V10.5C2 10.2239 2.22386 10 2.5 10Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                  <div className="p-2 text-2xl sm:text-4xl">
                    Download My CV
                  </div>
                </MovingShadow>
              </a>
            </div>
            <div className=" w-full flex justify-center animate-bounce">
              <div className="flex flex-col">
                <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
                <svg  width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.13523 6.15803C3.3241 5.95657 3.64052 5.94637 3.84197 6.13523L7.5 9.56464L11.158 6.13523C11.3595 5.94637 11.6759 5.95657 11.8648 6.15803C12.0536 6.35949 12.0434 6.67591 11.842 6.86477L7.84197 10.6148C7.64964 10.7951 7.35036 10.7951 7.15803 10.6148L3.15803 6.86477C2.95657 6.67591 2.94637 6.35949 3.13523 6.15803Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>
              </div>
            </div>
          </div>
          
        </div>
      </div>
      <section>
        <div className="section">
            <div className="section-title">
              About
            </div>
            <div className="section-content">
              <p>
                I'm a penultimate software engineering student at Monash University. I'm interested in all things tech, primarily front-end. I'm open to learning back-end, cloud, dev-ops and AI/ML.
                I also do enjoy consulting with clients and coming up with effective and tailored solutions - I find it satisfying and rewarding when you're able to connect with a client and sell a story well.
                I'm looking for opportunities where I can learn new things in an environment that supports life-long learners.
              </p>
              <br></br>
              <p>
                In my spare time, I like to collect watches (I currently own an Orient Bambino open heart), play fingerstyle guitar, hike in the Victorian outback, gym and consume anything of the sci-fi genre.
              </p>
            </div>
        </div>
      </section>
      <section>
        <div className="section">
            <div className="section-title">
              Projects
            </div>
            <div className="section-content grid sm:grid-cols-2">
              <div className="project">
                <Frame image={project1} width={400} height={400} alt="Screenshot of project 1"/>
                <div className="flex flex-row p-4 flex-wrap gap-2">
                  <Pill>Next.js</Pill>
                  <Pill>Tailwind.css</Pill>
                  <Pill>Tailwind.css</Pill>
                  <Pill>Tailwind.css</Pill>
                </div>
                <p>
                  Showcases my projects and experiences.
                </p>
                <br/>
                <p>
                  Purpose:
                </p>
                <br/>
                <p>
                  To be a creative outlet where I can display my resume in a non-restrictive format, enabling me to expound on my experiences, projects, and myself.
                  Additionally, this serves as a pleasant excuse for me to learn framer.js, as well as to further my skills learning react hooks and tailwind.
                </p>
              </div>
              <div className="project">
              <Frame image={project2} width={500} height={500} alt="Screenshot of project 1"/>       
                <p>
                  A minimalist kanban board which utilises local storage to persist data.
                </p>
                <br/>
                <p>
                  Purpose:
                </p>
                <br/>
                <p>
                  Something I struggled with a lot in the holidays was focussing on getting work done, whether that be leetcode or even coding this website up.
                  After some reflection, I realised it was because I did not set any immediate goals. By this point I had used Asana and similar products before, however
                  those products felt annoying to use especially for planning simple goals because there were so many unnecessary features and gimmicks. You had to sign-in, 
                  navigate around with so many irrelevant (for my use-case) features. Hence, I created this website so that I could simply go onto the website,
                  and start planning my goals immediately.
                </p>
                <br/>
                <p>
                  Note:
                </p>
                <br/>
                <p>
                  This website, after launching is missing a key feature: order of categories is not saved. This is something I'll be fixing soon.
                </p>
              </div>
            </div>
        </div>
      </section>
      <section>
        <div className="section">
            <div className="section-title">
              Experiences
            </div>
            <div className="section-content">
              
            </div>
        </div>
      </section>
      <footer>
        <div className="w-full flex justify-center p-4">
          <p>
            Created by Daniel Hong using next.js and tailwind.css
          </p>
        </div>
      </footer>
      <Message message={"This website is currently under construction! Check back soon."}/>
    </main>
  );
}
