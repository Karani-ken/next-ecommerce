import Image from "next/image"
import Link from "next/link"


const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="https://images.pexels.com/photos/15960624/pexels-photo-15960624/free-photo-of-young-brunette-in-a-matching-set-of-summer-clothing.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image src="https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className=" py-3 px-4 rounded-2xl w-max ring-1 ring-rose-400 text-rose-500 py-2 text-xs hover:bg-rose-400 hover:text-white">Add to cart</button>

      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="https://images.pexels.com/photos/15960624/pexels-photo-15960624/free-photo-of-young-brunette-in-a-matching-set-of-summer-clothing.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image src="https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className=" py-3 px-4 rounded-2xl w-max ring-1 ring-rose-400 text-rose-500 py-2 text-xs hover:bg-rose-400 hover:text-white">Add to cart</button>

      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="https://images.pexels.com/photos/15960624/pexels-photo-15960624/free-photo-of-young-brunette-in-a-matching-set-of-summer-clothing.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image src="https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className=" py-3 px-4 rounded-2xl w-max ring-1 ring-rose-400 text-rose-500 py-2 text-xs hover:bg-rose-400 hover:text-white">Add to cart</button>

      </Link>
      <Link href="/test" className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]">
        <div className="relative w-full h-80">
          <Image src="https://images.pexels.com/photos/15960624/pexels-photo-15960624/free-photo-of-young-brunette-in-a-matching-set-of-summer-clothing.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
          <Image src="https://images.pexels.com/photos/12324552/pexels-photo-12324552.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
            fill
            sizes="25vw"
            className="absolute rounded-md object-cover"
          />
        </div>
        <div className="flex justify-between">
            <span className="font-medium">Product Name</span>
            <span className="font-semibold">$49</span>
        </div>
        <div className="text-sm text-gray-500">My description</div>
        <button className="py-3 px-4 rounded-2xl w-max ring-1 ring-rose-400 text-rose-400 py-2 text-xs hover:bg-rose-400 hover:text-white">Add to cart</button>

      </Link>
    </div>
  )
}

export default ProductList