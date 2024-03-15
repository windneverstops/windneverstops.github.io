import Image from "next/image"
const Frame = ({image, width, height, alt}) =>{
    return (
        <div className="border rounded-lg p-2 flex justify-center">
            <figure>
                <Image
                    src = {image}
                    width = {width}
                    height = {height}
                    alt = {alt}
                />               
            </figure>
        </div>
    )
}

export default Frame