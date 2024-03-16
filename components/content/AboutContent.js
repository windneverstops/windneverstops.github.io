import React from "react"

const AboutContent = ({ title, content }) => {
	return (
		<div className="section">
			<div className="section-title">
				{title}
			</div>
			<div className="section-content">
				{
					content.map((value, index) => {
						return <React.Fragment key={index}>
							<p>
								{value}
							</p>
							<br />
						</React.Fragment>
					})
				}
			</div>
		</div>
	)
}
export default AboutContent