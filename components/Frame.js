import Image from "next/image";
import { useState } from "react";
const Frame = ({ image, width, height, alt }) => {
	const [isHovered, setIsHovered] = useState(false);

	const cursorSvg = encodeURIComponent(`<svg viewBox="30.9216 36.212 363.6584 437.772" width="25" height="25" xmlns="http://www.w3.org/2000/svg"><path style="fill: rgb(2,132,199); stroke: rgb(255,255,255); stroke-width:10;" d="M 240.763 273.819 L 394.58 324.468 C 336.841 71.009 39.189 36.212 39.189 36.212 C 39.189 36.212 -25.015 370.041 204.417 473.984 L 197.389 313.922 C 197.389 313.922 241.096 276.009 240.763 273.819 Z"/></svg>`);

	const style = {
		cursor: isHovered ? `url('data:image/svg+xml,${cursorSvg}'), auto` : 'default',
		transition: "all 0.2s cubic-bezier(0.17, 0.55, 0.55, 1)",
		transform: isHovered ? "scale(1.05)" : "none"
	};

	return (
		<div>
			<div className="p-2 flex justify-center ring-cyan-600 rounded hover:ring"
				onMouseEnter={() => setIsHovered(true)}
				onMouseLeave={() => setIsHovered(false)}
				style={style}
			>
				<figure>
					<Image
						src={image}
						width={width}
						height={height}
						alt={alt}
					/>
				</figure>
			</div>
		</div>

	)
}

export default Frame