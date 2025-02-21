import Add from '@/components/Add'
import CustomizedProduct from '@/components/CustomizedProduct'
import ProductImages from '@/components/ProductImages'
import React from 'react'

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/**Images */}
      <div className="w-full lg:w-1/2 lg:sticky top-0 h-max">
        <ProductImages />
      </div>
      {/**Texts */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem, ipsum dolor sit amet consectetur adipisicing
          elit. Veritatis sint natus corporis excepturi?
          Est excepturi modi consequuntur
          accusantium libero praesentium porro voluptates
          aspernatur quas. Repellat non ipsum eius soluta sint!
        </p>
        <div className="bg-gray-100"></div>
        <div className='flex items-center gap-4'>
          <h3 className="text-xl text-gray-500 line-through">$59</h3>
          <h3 className="text-2xl font-medium">$49</h3>
        </div>
        <div className="bg-gray-100"></div>
        <CustomizedProduct />
        <Add />
        <div className="bg-gray-100"></div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">Product Info</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus, odio, quo tempore
            dolorum unde libero ipsam sint voluptate
            corporis consequuntur eos ab soluta
            praesentium culpa vero aliquam sequi molestias hic.
          </p>

        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">RETURN & REFUND POLICY</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus, odio, quo tempore
            dolorum unde libero ipsam sint voluptate
            corporis consequuntur eos ab soluta
            praesentium culpa vero aliquam sequi molestias hic.
          </p>

        </div>
        <div className="text-sm">
          <h4 className="font-medium mb-4">SHIPPING INFO</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur
            adipisicing elit. Necessitatibus, odio, quo tempore
            dolorum unde libero ipsam sint voluptate
            corporis consequuntur eos ab soluta
            praesentium culpa vero aliquam sequi molestias hic.
          </p>

        </div>
      </div>
    </div>
  )
}

export default SinglePage