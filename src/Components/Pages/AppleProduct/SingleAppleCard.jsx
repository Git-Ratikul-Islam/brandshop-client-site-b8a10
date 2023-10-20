


const SingleAppleCard = ({ product }) => {
      const { image, name, brand, type, price, rating } = product;

      return (
            <>



                  <div className="max-w-md bg-white  shadow-lg rounded-lg mt-5">
                        <div className="px-4 py-2">
                              <h1 className="text-gray-900 font-bold text-3xl uppercase">{brand}</h1>
                              <h1 className="text-gray-600 text-lg font-bold mt-1">{name}</h1>
                              <h1 className="text-gray-600 text-sm font-bold mt-1">{type}</h1>
                        </div>
                        <img className="h-56 w-full object-cover mt-2" src={image} ></img>

                        <div className="flex items-center justify-between px-4 py-6 bg-gray-900">

                              <div className="mb-5">
                                    <p className="text-white ml-1"><small>{rating}</small></p>
                                    <h1 className="text-gray-200 font-bold text-xl">{price}</h1>
                              </div>
                              <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Details</button>
                              <button className="px-3 py-1 bg-gray-200 text-sm text-gray-900 font-semibold rounded">Add to card</button>
                        </div>
                  </div>






            </>

      );
};

export default SingleAppleCard;