import { useLoaderData } from "react-router-dom";
import SingleAppleCard from "./SingleAppleCard";

const AppleProduct = () => {
      const appleProduct = useLoaderData();
      console.log(appleProduct);
      return (
            <>


                  <div className="bg-[#529fed] h-[120vh]">
                        <div className="grid md:grid-cols-3 mx-auto grid-cols-1 md:w-4/6 gap-3 ">
                              {
                                    appleProduct.map(product => <SingleAppleCard key={product._id} product={product}></SingleAppleCard>)

                              }
                        </div>

                  </div>

            </>
      );
};

export default AppleProduct;

// {
//       appleProduct.map(product => <SingleAppleCard key={product._id}>
//             product={product}
//       </SingleAppleCard>);
// }
