"use client";
import { Source_Code_Pro } from "next/font/google";
import { useState, useRef } from "react";

const source_code_pro = Source_Code_Pro({
  subsets: ["latin"],
})

export default function Home() {
  const messageRef = useRef(null);



  const handleMessageClick = () =>{
    messageRef.current.classList.add( "translate-y-20", "duration-300", "opacity-0")
    setTimeout(()=>{
      messageRef.current.remove();
    }, 300)
  }

  return (
    <main className={source_code_pro.className}>
    
      <div className="flex flex-col justify-center items-center text-center h-screen text-5xl gap-y-14 p-12">
        <div>
          G'day, my name is
          <span className="text-9xl text-red-400 pl-7">Daniel Hong.</span>
        </div>
        <div>
          I'm a penultimate Software Engineering student at a GO8 uni.
        </div>
      </div>
      <div>
        <div ref={messageRef} id="t" className="absolute bottom-0 inset-x-0 h-16 bg-gray-200 flex items-center justify-center">
          <div className="text-center">
            This website is currently under construction! Check back soon.
            <button className="absolute top-2 right-5 p-4" onClick={handleMessageClick}>
              <svg 
                width="15" 
                height="15" 
                viewBox="0 0 15 15" 
                fill="none" 
                xmlns="http://www.w3.org/2000/svg">
                  <path d="M12.8536 2.85355C13.0488 2.65829 13.0488 2.34171 12.8536 2.14645C12.6583 1.95118 12.3417 1.95118 12.1464 2.14645L7.5 6.79289L2.85355 2.14645C2.65829 1.95118 2.34171 1.95118 2.14645 2.14645C1.95118 2.34171 1.95118 2.65829 2.14645 2.85355L6.79289 7.5L2.14645 12.1464C1.95118 12.3417 1.95118 12.6583 2.14645 12.8536C2.34171 13.0488 2.65829 13.0488 2.85355 12.8536L7.5 8.20711L12.1464 12.8536C12.3417 13.0488 12.6583 13.0488 12.8536 12.8536C13.0488 12.6583 13.0488 12.3417 12.8536 12.1464L8.20711 7.5L12.8536 2.85355Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path>
                </svg>
              </button>
          </div>
        </div>
      </div>
      
     
      <div className="h-screen">
        sdfs
      </div>
      
      
    </main>
  );
}
