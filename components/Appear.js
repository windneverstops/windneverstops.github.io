import { useInView, motion } from "framer-motion";
import { useRef } from "react";

const Appear = ({children, delay = 0, duration = 0.5}) => {
    const appearRef = useRef(null);
    const ifElementIsInView = useInView(appearRef, {once: true})
    
    return (
        <div  ref = {appearRef} className="grid grid-rows-1 grid-cols-1 relative">
            <div className="z-1 row-start-1 col-start-1"
                style={{
                    transform: ifElementIsInView ? "none" : "translateY(15px)",
                    opacity: ifElementIsInView ? 1 : 0,
                    transition: `0.4s linear ${duration + delay - 0.3 >=0 ? duration + delay - 0.3 : 0.2}s `
                }}
            >
                {children}
            </div>
            <motion.div className="z-0 h-full w-full row-start-1 col-start-1 bg-red-600"
                style={{
                    scaleX: ifElementIsInView ? 0 : 1,
                    transformOrigin: 'right',
                    transition: `${duration}s linear ${delay}s`
                }}
            >   
            </motion.div>
           
            
        </div>
    )
} 
export default Appear;