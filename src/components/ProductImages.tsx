"use client"
import Image from 'next/image'
import { useState } from 'react'

const images = [
  {
    id: 1,
    url: "https://images.pexels.com/photos/2529148/pexels-photo-2529148.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    url: "https://images.pexels.com/photos/19090/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    url: "https://images.pexels.com/photos/1159670/pexels-photo-1159670.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 4,
    url: "https://images.pexels.com/photos/1598508/pexels-photo-1598508.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
]
const ProductImages = () => {

  const [index, setIndex] = useState(0)
  return (
    <div>
      <div className="h-[500px] relative">
        <Image
          src={images[index].url}
          alt=''
          fill
          sizes='50vw'
          className='object-cover rounded-md'
        />
      </div>
      <div className='flex justify-between gap-4 mt-8'>
        {images.map((image, i) => (
        <div className="w-1/4 h-32 relative gap-4 mt-8 cursor-pointer" key={image.id} onClick={() => setIndex(i)}>
          <Image
            src={image.url}
            alt=''
            fill
            sizes='30vw'
            className='object-cover rounded-md'
          />
        </div>
      ))}
      </div>
    </div>
  )
}

export default ProductImages