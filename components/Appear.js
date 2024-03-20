import { useInView } from "framer-motion";
import { useRef } from "react";

const Appear = ({children}) => {
    const appearRef = useRef(null);
    const ifElementIsInView = useInView(appearRef, {once: true})

    
    return (
        <div  ref = {appearRef} className="grid grid-rows-1 grid-cols-1 relative">
            <div className="z-1 row-start-1 col-start-1"
                style={{
                    transform: ifElementIsInView ? "none" : "translateY(15px)",
                    opacity: ifElementIsInView ? 1 : 0,
                    transition: "0.3s linear 0.2s"
                }}
            >
                {children}
            </div>
            <div className="z-0 h-full w-full row-start-1 col-start-1 bg-red-600"
                style={{
                    transform: ifElementIsInView ? "translateY(-15px)" : "none",
                    opacity: ifElementIsInView ? 0 : 1,
                    transition: "0.1s cubic-bezier(.18,.94,.78,.57)"
                }}
            >
                
            </div>
           
            
        </div>
    )
} 
export default Appear;