import { wixClientServer } from "@/lib/wixClientServer";
import { products } from "@wix/stores";
import Image from "next/image"
import Link from "next/link"

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit
}: {
  categoryId: string;
  limit?: number
}) => {

  const wixClient = await wixClientServer();
  const res = await wixClient.products
    .queryProducts()
    .eq("collectionIds", "9c8c6dd2-009f-7bc8-d718-9e65b5ac91fc")
    .limit(limit || PRODUCT_PER_PAGE)
    .find();
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      {
        res.items.map((product: products.Product) => (
          <Link href={"/" + product.slug} className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]" key={product._id}>
            <div className="relative w-full h-80">
              <Image src={product.media?.mainMedia?.image?.url || "/product.png"}
                alt=""
                fill
                sizes="25vw"
                className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
              />
              {product.media?.items && (
                <Image src={product.media?.items[1]?.image?.url || "/product.png"}
                  alt=""
                  fill
                  sizes="25vw"
                  className="absolute rounded-md object-cover"
                />
              )}

            </div>
            <div className="flex justify-between">
              <span className="font-medium">{product.name}</span>
              <span className="font-semibold">{product.priceData?.currency} {product.priceData?.price}</span>
            </div>
            {product.additionalInfoSections && (
              <div className="text-sm text-gray-500">{product.additionalInfoSections.find((section: any) => section.title === "shortDesc")?.description || ""}</div>
            )}

            <button className=" py-3 px-4 rounded-2xl w-max ring-1 ring-rose-400 text-rose-500  text-xs hover:bg-rose-400 hover:text-white">Add to cart</button>

          </Link>

        ))
      }


    </div>
  )
}

export default ProductList