import BestSellingProduct from "@/components/product/bestSale/BestSellingProduct";
import { getProducts } from "@/utils/api_config";

const RelatedProducts = async ({ item }) => {

  const tags = item.tag.join('-') // tags= [a,b,c] to "a-b-c"
  const url = `/api/related?tags=${tags}`
  const products = await getProducts(url) // Return null or Product[]

  return (
    <>
      <div className="border md:mx-auto mx-2 md:my-6 my-4  px-4 py-4  ">
        <h2 className="font-semibold text-lg">
          Related Products
        </h2>
        {
          !products ?
            <div>Not found</div>
            :
            <div className="grid grid-cols-2 lg:grid-cols-3  ">
              {products.map((item, i) => (
                <BestSellingProduct item={item} key={i} />
              ))}
            </div>
        }
      </div>
    </>
  );
};

export default RelatedProducts;


