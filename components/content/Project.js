import Frame from "../Frame"
import React from "react"
import { useInView} from "framer-motion"
import { useRef, useState, useEffect } from "react"
import Pills from "@/scripts/pillManager"

const Project = ({ image, width, height, alt, content, pills }) => {
  const frameRef = useRef(null)
  const contentRefForAnimations = useRef(null)
  const contentRef = useRef(null)
  const pillRef = useRef(null)
  const frameIsInView = useInView(frameRef, { once: false })
  const pillIsInView = useInView(pillRef, {once: false})
  const contentIsInView = useInView(contentRefForAnimations, { once: false })

  return (
    <div className="project h-full flex flex-col">
      <div style = {{
        transform: frameIsInView ? "none" : "translateX(-200px)",
        opacity: frameIsInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }} ref={frameRef}>
        <Frame image={image} width={width} height={height} alt={alt}/>
      </div>
      
      <div className="flex flex-row p-4 flex-wrap gap-2" ref={pillRef}>
        {
          pills.map((pill, value) => {
            const style={
              opacity: pillIsInView ? 1 : 0,
              transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + value*0.15}s`,
              color:"white",
              backgroundColor: pillIsInView ? "red": "blue"
            }
            return (
              <React.Fragment key={value}>
                {Pills.createPill({value: pill, style: style})}
              </React.Fragment>
            )
          })
        }
      </div>
      <div style={{
        height: "auto",
        overflow: "hidden",
     
      }}
        ref = {contentRef}>
        <div style = {{
          transform: contentIsInView ? "none" : "translateY(200px)",
          opacity: contentIsInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }} ref={contentRefForAnimations}>
          {
            content.map((paragraph, index) => {
              return (
                <React.Fragment key={index}>
                  <p>
                    {paragraph}
                  </p>
                  <br/>
                </React.Fragment>
              )
            })
          }
        </div>
      </div>
      <div className="grow"/>
      
      
    </div>
  )
}
export default Project;