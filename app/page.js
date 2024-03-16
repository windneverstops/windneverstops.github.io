"use client";

import Nav from "@/components/Nav";
import { Asap } from "next/font/google";
import Message from "@/components/Message";
import MovingShadow from "@/components/MovingShadow";

import exportPhotos from "@/public/static/exportPhotos";

import ScrollJumper from "@/components/ScrollJumper";
import ProjectContent from "@/components/content/ProjectContent";
import AboutContent from "@/components/content/AboutContent";
import ExperienceContent from "@/components/content/ExperienceContent";
import { pillType } from "@/scripts/pillManager";

const mainFont = Asap({
  subsets: ["latin"],
})


export default function Home() {

  return (
    <main className={`h-screen mx-auto max-w-screen-xl ${mainFont.className}`} style={{}}>
      <div style={{}} className="relative flex flex-col h-screen p-12">
        <Nav/>
        <div className="grow flex flex-col justify-around w-full h-auto">
          <div className="flex flex-col gap-y-4 items-center pt-14">
            <div className="text-3xl font-bold">
            G&apos;day, I&apos;m
            </div>
            <span className="main-font-colour pl-7 text-5xl font-bold overflow-visible text-nowrap">  
              Daniel Hong.
            </span>
            <div className="pt-10 text-wrap text-xl">
              I&apos;m a <u className="decoration-sky-600">penultimate Software Engineering student</u> at a GO8 uni.
            </div> 
            <div className="text-sm">
              For the best experience, please use a computer.
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
            <div className="w-full flex justify-center">
              <ScrollJumper/>
            </div>
          </div>
          
        </div>
      </div>
      <section>
        <AboutContent
          title = {"About"}
          content = {[`I'm a penultimate software engineering student at Monash University. I'm interested in all things tech, primarily front-end. I'd also love to learn back-end, cloud, dev-ops and AI/ML.
          I also do enjoy consulting with clients and coming up with effective and tailored solutions - I find it satisfying and rewarding when you're able to connect with a client and sell a story well.
          I'm looking for opportunities where I can learn new things in an environment that supports life-long learners.`, `In my spare time, I like to collect watches (I currently own an Orient Bambino open heart), play fingerstyle guitar, hike in the Victorian outback, gym and consume anything of the sci-fi genre.`]}
        />
      </section>
      <section>
        <div className="section">
            <div className="section-title">
              Projects
            </div>
            <div className="section-content grid sm:grid-cols-2">
              <ProjectContent
                image = {exportPhotos.project1}
                width = {"auto"}
                height = {"auto"}
                alt="Screenshot of portfolio website"
                content = {["Purpose:", "To be a creative outlet where I can display my resume in a non-restrictive format, enabling me to expound on my experiences, projects, and myself. Additionally, this serves as a pleasant excuse for me to learn framer.js, as well as to further my skills learning react hooks and tailwind."]}
                title = {"Portfolio Website showcasing my projects and experiences."}
              />
              <ProjectContent
                image={exportPhotos.project2} 
                width={"auto"} 
                height={"auto"} 
                alt="Screenshot of simplistic kanban board"
                pills={[pillType.React, pillType.Tailwind, pillType.JavaScript, pillType.Vercel, pillType.LocalStorage]}
                content = {[ "Purpose:",   
                  `Something I struggled with a lot in the holidays was focussing on getting work done, whether that be leetcode or even coding this website up.
                  After some reflection, I realised it was because I did not set any immediate goals. By this point I had used Asana and similar products before, however
                  those products felt annoying to use especially for planning simple goals because there were so many unnecessary features and gimmicks. You had to sign-in, 
                  navigate around with so many irrelevant (for my use-case) features. Hence, I created this website so that I could simply go onto the website,
                  and start planning my goals immediately.`, "Note:", "This website, after launching is missing a key feature: order of categories is not saved. This is something I'll be fixing soon."
              ]}
                title = {"A minimalist kanban board which utilises local storage to persist data."}
              />
              <ProjectContent
                image = {exportPhotos.project3}
                width = {"auto"}
                height = {"auto"}
                alt="Screenshot of discord python bot"
                pills = {[pillType.Python, pillType.GoogleCloud, pillType.MicrosoftAzure, pillType.MySql]}
                content = {["Purpose:", `The problem with catching up with my mates using
                  discord was that it was very easy to have information displaced everywhere, in between chats and memes. This lead to issues
                  where multiple people would ask similar questions which could have been answered by scrolling up. This bot was created to address that problem.`,'Note:', "This project has been put on hold due to Azure credits running out and the Google Cloud free trial running out."]}
                title= {"A discord bot which manages meet ups."}
              />
              <ProjectContent
                image = {exportPhotos.project4}
                width = {"auto"}
                height = {"340"}
                alt="Screenshot of the chrome extensions"
                pills = {[pillType.JavaScript]}
                content = {["Purpose:", "Originally, theage.com.au, had a 3 article limit per month. Turns out, they tracked this via local storage. So this clear outs local storage automatically and removes the annoying 'You have 3 free articles remaining' pop up",
                  "Note:", `Even though this project had <10 lines of code, this is by far my most favourite. I've always been someone who has enjoyed reading articles in theage.com.au. Eventually, I learnt that you could circumvent the tracker by deleting the website cookies. However, that was really annoying to deal with as it required
                  constant website refreshing as well as clicking a few buttons to clear the cookies. I thought that there should have been an easier way - so I dug around, realised they stored information in the local storage. So I cleared it to see what happened - and voila! IT NO LONGER TRACKED THE WEBSITES!!
                  It was an absolutely euphoric moment, and solidified my certainty regarding swapping from civil engineering to software engineering.
                  `
                ]}
                title={"A chrome extension for theage.com.au which lets you view articles for free."}
              />
              <ProjectContent
                image = {exportPhotos.project5}
                width = {"auto"}
                height = {"340"}
                alt="Screenshot of Commute Ease, our submission to Unihack "
                pills = {[pillType.React, , pillType.TypeScript, pillType.Tailwind, pillType.Python, pillType.Django, pillType.MySql]}
                content = {["We attempted to create an app which took public transport data, and displayed that in a way where all you had to do was to look at the dashboard, and you would know immediately what to do to get to your next location, which you would preset.", "Purpose:",
                  `The purpose was to help solve every public transport commuter's worse nightmare: being late due to not knowing the most optimal path to your next location because PTV decided to can all trains from Glen Waverley for no apparent reason at all. This app ensures that you get to your
                  desired location most optimally given the circumstances.`, "Note: ", "Although, we did not produce a final working product, I learnt a lot of things:", "First, the importance of regularly communicating. Some team members would complete work, and then keep silent until someone asked about its status. This is obviously an issue as it creates inefficiencies.",
                  `Secondly, the importance of planning out the structure of the app. As primarily a front-end developer, I did not have much experience working with connecting backend endpoints to frontend (my next projects will aim to utilise APIs, probably the Apex legends API).
                  Through this experience, I learnt the importance of defining how the backend was to communicate with the frontend - whether that be using fetch, post, put or by using sockets, as well as defining the data structures transferred between the front and back end. In the end, 
                  not knowing this caused us to stumble greatly when it came time to connect the frontend to the backend. In the future, I will make sure to define how communication works so that integration is simple.
                  `
                ]}
                title={"Commute Ease, our submission to Unihack 2023."}
              />
              <ProjectContent
                image = {exportPhotos.project6}
                width = {"auto"}
                height = {"auto"}
                alt="Screenshot of the user interface"
                pills = {[pillType.JavaScript, pillType.Bootstrap]}
                content = {["I achieved perfect marks and the highest grade in the cohort for this unit.", "Note:", `This was my first software engineering unit after deciding that I wanted to pursue
                software engineering. Although this project is mundane and from university, it's the project that got me started to where I am today - the very website you're reading this on. It's something I'm proud of and nostalgic about.
                `       
                ]}
                title={"User management interface for FIT1056 - 'Collaborative Engineering for Web Applications'."}
              />
              
            </div>
        </div>
      </section>
      <section>
        <div className="section flex flex-col">
            <div className="section-title">
              Experiences
            </div>
            <div className="section-content pt-4">
              <ExperienceContent positionName={"VCE math tutor @ self-employed"} dates={"Dec 2020 - Present"}
              content={["Collaborated with and mentored 10+ students to achieve desired academic outcome.",
              "Analysed skills of students to produce individualized lessons, adapting to different needs of students.",
              "Assisted 100% of the students to successfully achieve academic goals."]}/>
              <ExperienceContent positionName={"Sponsorship Officer @ Wired Monash"} dates={"Sept 2022 - Present"}
              content={["Liaised with industry representatives, in both a written and verbal format, demonstrating strong verbal communication skills.",
              "Built 5 industry relationships with the club.",
              "Cultivated the relationship with Wired’s largest sponsor for 2023, KPMG.",
              "Grew the club from a club about to be deregistered to the largest club at Monash within a space of a year with 1200 members for 2023. ",
              "Organised and planned Wired’s first industry night in several years with over 500 attendees."]}/>
              <ExperienceContent positionName={"Kids Church and Epic Youth Leader @ CityLife Church"} dates={"Jan 2015 - Jan 2023"}
              content={["Chaperoned and mentored over 100 cumulative school aged kids, from prep to grade 8.",
              "Lead 5+ life groups and presented to children and adults.",
              "Collaborated with many teams, sharing and giving input and feedback on how the session was to run."]}/>
              <ExperienceContent positionName={"Winter Fellow @ Startmate"} dates={"Winter 2022"}
              content={["Learnt about the start-up industry and networked with founders, investors and students."]}/>
              <ExperienceContent positionName={"Customer Service Member @ KFC"} dates={"Feb 2018 - Jan 2019"}
              content={["Exceeded KPIs in a fast-paced and stressful environment.", "Placated irritated customers.", "Communicated effectively with colleagues under stress."]}/>
                   
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
      
    </main>
  );
}
