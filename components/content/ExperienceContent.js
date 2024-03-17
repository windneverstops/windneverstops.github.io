import React from "react";
const ExperienceContent = ({positionName, company, dates, content}) => {
  return (
    <div className="mb-8">
      <div className="grid sm:grid-cols-2 grid-rows-2 text-red-600 font-bold">
        <div className="col-start-1 text-lg">{positionName}</div>
        
        <div className="row-start-1 text-lg">{company}</div>
        <div className="sm:text-right sm:row-start-1 uppercase text-gray-400">{dates}</div>
      </div>
      <div className="sm:pr-44">
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