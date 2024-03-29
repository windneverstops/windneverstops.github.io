import Frame from "../Frame"
import React from "react"
import { useInView} from "framer-motion"
import { useRef} from "react"
import Pills from "@/scripts/pillManager"
import Image from "next/image"
import LinksForProject from "../LinksForProject"

import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

const ProjectContent = ({ image, width, height, alt, content, pills, title, link, repo, resetAnimations }) => {
  const frameRef = useRef(null)
  const contentRefForAnimations = useRef(null)
  const contentRef = useRef(null)
  const pillRef = useRef(null)
  const modalTriggerRef = useRef(null)
  const frameIsInView = useInView(frameRef, { once: resetAnimations })
  const pillIsInView = useInView(pillRef, {once: resetAnimations})
  const contentIsInView = useInView(contentRefForAnimations, { once: resetAnimations })

  const handleModalTrigger = () => {
    modalTriggerRef.current.click()
  }

  return (
    <div className="project h-full flex flex-col">
      <div style = {{
        transform: frameIsInView ? "none" : "translateX(-200px)",
        opacity: frameIsInView ? 1 : 0,
        transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
      }} ref={frameRef} onClick={handleModalTrigger}>
        <Frame image={image} width={width} height={height} alt={alt}/>
      </div>
      <div className="grow"></div>
      <div className="flex flex-row py-4 flex-wrap gap-2" ref={pillRef}>
        <LinksForProject link = {link} repo = {repo} resetAnimations={resetAnimations}/>
        {
          pills.map((pill, value) => {
            const style={
              opacity: pillIsInView ? 1 : 0,
              transition: `all 2s cubic-bezier(0.17, 0.55, 0.55, 1) ${0.4 + value*0.15}s`,
              color:"white",
              backgroundColor: pillIsInView ? "#dc2626": "#0284c7"
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
      }}
        ref = {contentRef}>
        <div style = {{
          transform: contentIsInView ? "none" : "translateY(45px)",
          opacity: contentIsInView ? 1 : 0,
          transition: "all 0.5s cubic-bezier(0.17, 0.55, 0.55, 1) 0.4s"
        }} ref={contentRefForAnimations}
          
          >
          {title}
        </div>
      </div>
      <Dialog>
      <DialogTrigger ref={modalTriggerRef}></DialogTrigger>
        <DialogContent className="bg-white overflow-y-scroll max-h-[90%]">
          <DialogHeader>
            <DialogDescription>
            <div className="flex justify-center p-2">
            <Image src={image} width={width} height={height} alt={alt}/>
            </div>
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
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
      
    </div>
  )
}
export default ProjectContent;