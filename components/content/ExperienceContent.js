import React from "react";
const ExperienceContent = ({positionName, dates, content}) => {
  return (
    <div className="mb-8">
      <div className="grid sm:grid-cols-2 grid-rows-2 text-red-600 ">
        <div>{positionName}</div>
        <div className="sm:text-right">{dates}</div>
      </div>
      <div>
        {
          content.map((description, index) => {
            return <React.Fragment key={index}>
           
              {description}
             
          
            </React.Fragment>
          })
        }
      </div>
    </div>
  );
}
export default ExperienceContent