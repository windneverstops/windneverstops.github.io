import Image from "next/image"
const Frame = ({image, width, height, alt}) =>{
    return (
        <div className="border rounded-lg p-2 hover:bg-gray-300 hover:-rotate-12 duration-200 flex justify-center">
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