const MovingShadow = ({children}) =>{

    return (
        <div className="relative group grid grid-rows-1 grid-cols-1">    
            
            <div className="relative p-0.5 z-10 bg-white flex flex-row items-center gap-x-4 text-4xl font-medium ring ring-1 rounded-lg main-ring-colour duration-300  group-hover:-translate-x-2 group-hover:-translate-y-2 row-start-1 col-start-1">
                {children}
            </div>
            <div className="relative z-1 row-start-1 col-start-1 h-full w-full bg-black rounded-lg group-hover:translate-x-2 group-hover:translate-y-2 duration-300">
            
            </div>
        </div>
    )
}
export default MovingShadow;