"use client";
import { useScroll, motion, useInView, useMotionValueEvent } from "framer-motion";
import { useState } from "react";
import MovingShadow from "./MovingShadow";


const Nav = ({ aboutRef, projectRef, experienceRef, homeRef, setResetAnimations, resetAnimations }) => {

	const [isHidden, setIsHidden] = useState(false);
	const { scrollYProgress, scrollY } = useScroll();

	useMotionValueEvent(scrollY, "change", (latest) => {

		const previous = scrollY.getPrevious();
		if (latest > previous && latest > 100) {
			setTimeout(() => {
				setIsHidden(true);
			}, 750);
		} else {

			setIsHidden(false);
		}

	})

	const handleReset = () => {
		setResetAnimations(!resetAnimations);
	}

	const homeNavPill = (<>
		<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M7.07926 0.222253C7.31275 -0.007434 7.6873 -0.007434 7.92079 0.222253L14.6708 6.86227C14.907 7.09465 14.9101 7.47453 14.6778 7.71076C14.4454 7.947 14.0655 7.95012 13.8293 7.71773L13 6.90201V12.5C13 12.7761 12.7762 13 12.5 13H2.50002C2.22388 13 2.00002 12.7761 2.00002 12.5V6.90201L1.17079 7.71773C0.934558 7.95012 0.554672 7.947 0.32229 7.71076C0.0899079 7.47453 0.0930283 7.09465 0.32926 6.86227L7.07926 0.222253ZM7.50002 1.49163L12 5.91831V12H10V8.49999C10 8.22385 9.77617 7.99999 9.50002 7.99999H6.50002C6.22388 7.99999 6.00002 8.22385 6.00002 8.49999V12H3.00002V5.91831L7.50002 1.49163ZM7.00002 12H9.00002V8.99999H7.00002V12Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg>

	</>)

	const playPill = (<>
		<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M3.04995 2.74995C3.04995 2.44619 2.80371 2.19995 2.49995 2.19995C2.19619 2.19995 1.94995 2.44619 1.94995 2.74995V12.25C1.94995 12.5537 2.19619 12.8 2.49995 12.8C2.80371 12.8 3.04995 12.5537 3.04995 12.25V2.74995ZM5.73333 2.30776C5.57835 2.22596 5.39185 2.23127 5.24177 2.32176C5.0917 2.41225 4.99995 2.57471 4.99995 2.74995V12.25C4.99995 12.4252 5.0917 12.5877 5.24177 12.6781C5.39185 12.7686 5.57835 12.7739 5.73333 12.6921L14.7333 7.94214C14.8973 7.85559 15 7.68539 15 7.49995C15 7.31452 14.8973 7.14431 14.7333 7.05776L5.73333 2.30776ZM5.99995 11.4207V3.5792L13.4287 7.49995L5.99995 11.4207Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
	</>)

	const pausePill = (<>
	<svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M6.04995 2.74998C6.04995 2.44623 5.80371 2.19998 5.49995 2.19998C5.19619 2.19998 4.94995 2.44623 4.94995 2.74998V12.25C4.94995 12.5537 5.19619 12.8 5.49995 12.8C5.80371 12.8 6.04995 12.5537 6.04995 12.25V2.74998ZM10.05 2.74998C10.05 2.44623 9.80371 2.19998 9.49995 2.19998C9.19619 2.19998 8.94995 2.44623 8.94995 2.74998V12.25C8.94995 12.5537 9.19619 12.8 9.49995 12.8C9.80371 12.8 10.05 12.5537 10.05 12.25V2.74998Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg>
	</>)

	const aboutNavPill = (<>
		About
	</>)

	const projectNavPill = (<>
		Projects
	</>)

	const experienceNavPill = (<>
		Experiences
	</>)
	const sizeFactor = 1.3

	const aboutIsInView = useInView(aboutRef, { margin: "-1px 0px -1px 0px" })
	const projectIsInView = useInView(projectRef, { margin: "-1px 0px 0px 0px" })
	const experienceIsInView = useInView(experienceRef, { margin: "-1px 0px 0px 0px" })
	const homeIsInView = useInView(homeRef, { margin: "-1px 0px 0px 0px" })
	const links = (<div className="flex md:flex-row flex-col justify-end items-end md:py-4 pr-4 pt-16 md:gap-x-4 gap-y-4 ">
		<MovingShadow>
			<a href="https://linkedin.com/in/danielhhong" target="_blank" className="main-font-colour"><svg width="30" height="30" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M2 1C1.44772 1 1 1.44772 1 2V13C1 13.5523 1.44772 14 2 14H13C13.5523 14 14 13.5523 14 13V2C14 1.44772 13.5523 1 13 1H2ZM3.05 6H4.95V12H3.05V6ZM5.075 4.005C5.075 4.59871 4.59371 5.08 4 5.08C3.4063 5.08 2.925 4.59871 2.925 4.005C2.925 3.41129 3.4063 2.93 4 2.93C4.59371 2.93 5.075 3.41129 5.075 4.005ZM12 8.35713C12 6.55208 10.8334 5.85033 9.67449 5.85033C9.29502 5.83163 8.91721 5.91119 8.57874 6.08107C8.32172 6.21007 8.05265 6.50523 7.84516 7.01853H7.79179V6.00044H6V12.0047H7.90616V8.8112C7.8786 8.48413 7.98327 8.06142 8.19741 7.80987C8.41156 7.55832 8.71789 7.49825 8.95015 7.46774H9.02258C9.62874 7.46774 10.0786 7.84301 10.0786 8.78868V12.0047H11.9847L12 8.35713Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></a>
		</MovingShadow>
		<MovingShadow>
			<a href="https://github.com/windneverstops" target="_blank" className="main-font-colour"><svg width="30" height="30" viewBox="0 0 15 15" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M7.49933 0.25C3.49635 0.25 0.25 3.49593 0.25 7.50024C0.25 10.703 2.32715 13.4206 5.2081 14.3797C5.57084 14.446 5.70302 14.2222 5.70302 14.0299C5.70302 13.8576 5.69679 13.4019 5.69323 12.797C3.67661 13.235 3.25112 11.825 3.25112 11.825C2.92132 10.9874 2.44599 10.7644 2.44599 10.7644C1.78773 10.3149 2.49584 10.3238 2.49584 10.3238C3.22353 10.375 3.60629 11.0711 3.60629 11.0711C4.25298 12.1788 5.30335 11.8588 5.71638 11.6732C5.78225 11.205 5.96962 10.8854 6.17658 10.7043C4.56675 10.5209 2.87415 9.89918 2.87415 7.12104C2.87415 6.32925 3.15677 5.68257 3.62053 5.17563C3.54576 4.99226 3.29697 4.25521 3.69174 3.25691C3.69174 3.25691 4.30015 3.06196 5.68522 3.99973C6.26337 3.83906 6.8838 3.75895 7.50022 3.75583C8.1162 3.75895 8.73619 3.83906 9.31523 3.99973C10.6994 3.06196 11.3069 3.25691 11.3069 3.25691C11.7026 4.25521 11.4538 4.99226 11.3795 5.17563C11.8441 5.68257 12.1245 6.32925 12.1245 7.12104C12.1245 9.9063 10.4292 10.5192 8.81452 10.6985C9.07444 10.9224 9.30633 11.3648 9.30633 12.0413C9.30633 13.0102 9.29742 13.7922 9.29742 14.0299C9.29742 14.2239 9.42828 14.4496 9.79591 14.3788C12.6746 13.4179 14.75 10.7025 14.75 7.50024C14.75 3.49593 11.5036 0.25 7.49933 0.25Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></a>
		</MovingShadow>
		<MovingShadow>
			<a href="mailto:business.danielhong@gmail.com" target="_blank" className="main-font-colour"><svg width="30" height="30" viewBox="0 0 15 15" fill="noneColor" xmlns="http://www.w3.org/2000/svg"><path d="M1 2C0.447715 2 0 2.44772 0 3V12C0 12.5523 0.447715 13 1 13H14C14.5523 13 15 12.5523 15 12V3C15 2.44772 14.5523 2 14 2H1ZM1 3L14 3V3.92494C13.9174 3.92486 13.8338 3.94751 13.7589 3.99505L7.5 7.96703L1.24112 3.99505C1.16621 3.94751 1.0826 3.92486 1 3.92494V3ZM1 4.90797V12H14V4.90797L7.74112 8.87995C7.59394 8.97335 7.40606 8.97335 7.25888 8.87995L1 4.90797Z" fill="currentColor" fillRule="evenodd" clipRule="evenodd"></path></svg></a>
		</MovingShadow>
	</div>)
	const homeNav = (<div className="flex flex-row justify-center items-center pt-4 gap-x-2 text-xs"><div className="grow" />
		<div className=" rounded-full border-2 border-gray-300 p-2 bg-white">
			<a href="#home" style={{
				color: homeIsInView ? "#dc2626" : "black",
				transition: "0.3s",
				scale: homeIsInView ? sizeFactor : 1,
			}}>
				{homeNavPill}
			</a>
		</div>
		<div className="shrink-0  w-64 flex justify-between bg-white rounded-full p-2 border-2 border-gray-300">
			<a href="#about"><div className="px-2 text-black"
				style={{
					scale: aboutIsInView ? sizeFactor : 1,
					color: aboutIsInView ? "#dc2626" : "black",
					transition: "0.3s",

				}}>{aboutNavPill}</div>
			</a>
			<div className="border-x" />
			<a href="#projects"><div className="px-2 text-black"
				style={{
					scale: projectIsInView && !aboutIsInView ? sizeFactor : 1,
					color: projectIsInView && !aboutIsInView ? "#dc2626" : "black",
					transition: "0.3s"
				}}
			>{projectNavPill}</div></a>
			<div className="border-x" />
			<a href="#experiences"><div className="px-2 text-black"
				style={{
					scale: experienceIsInView && !projectIsInView ? sizeFactor : 1,
					color: experienceIsInView && !projectIsInView ? "#dc2626" : "black",
					transition: "0.3s"
				}}
			>{experienceNavPill}</div></a>
		</div>
		<div className=" rounded-full border-2 border-gray-300 p-2 bg-white flex items-center">
			<button onClick={handleReset}>
				{resetAnimations && playPill}
				{!resetAnimations && pausePill}
			</button>
		</div>
		<div className="grow" /></div>);
	const progressBar = (<motion.div className="bg-red-600 h-1.5"
		style={{ scaleX: scrollYProgress, transformOrigin: 'left' }}
	/>)



	return (
		<div className="w-full z-20 grid grid-rows-1 grid-cols-1 left-0 top-0 fixed">
			<div className="row-start-1 col-start-1">
				{links}
			</div>
			<div className="row-start-1 col-start-1">
				{progressBar}
			</div>
			<motion.nav className="row-start-1 col-start-1"
				variants={{
					visible: { y: 0 },
					hidden: { y: "-100%" }
				}}
				animate={isHidden ? "hidden" : "visible"}
				transition={{ duration: 0.35, ease: "easeInOut" }}
			>
				{homeNav}
			</motion.nav>
		</div>

	)
}
export default Nav