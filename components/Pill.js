const Pill = ({children, style = null}) =>{
    return (
        <div className="border p-2 rounded-full" style = {style}>
            {children}
        </div>
    )
}
export default Pill;