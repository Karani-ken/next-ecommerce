

const CustomizedProduct = () => {
  return (
    <div className="flex flex-col gap-6">
        <h4 className="font-medium">Choose a color</h4>
        <ul className="flex items-center gap-3">
            <li className="w-8 h-8 rounded-full bg-black ring-1 cursor-pointer relative">
              <div className="absolute w-10 h-10 rounded-full ring-2  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </li>
            <li className="w-8 h-8 rounded-full bg-yellow-500 ring-1 cursor-pointer relative">              
            </li>
            <li className="w-8 h-8 rounded-full bg-green-500 ring-1 cursor-not-allowed relative">
              <div className="absolute w-10 h-[2px] bg-red-500 rotate-45  top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
            </li>
        </ul>
        <h4 className="font-medium">Choose a size</h4>
        <ul className="flex items-center gap-3">
          <li className="ring-1 ring-black-400 text-black-400 rounded-md py-1 px-4 text-sm cursor-pointer ">Small</li>
          <li className="ring-1 ring-emerald-400 text-white bg-emerald-400 rounded-md py-1 px-4 text-sm cursor-pointer ">Medium</li>
          <li className="ring-1 ring-yellow-200 text-white rounded-md py-1 px-4 text-sm cursor-not-allowed bg-yellow-200">Large</li>
        </ul>
    </div>
  )
}

export default CustomizedProduct