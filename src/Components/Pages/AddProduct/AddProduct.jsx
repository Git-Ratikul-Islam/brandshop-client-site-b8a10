import Swal from 'sweetalert2';

const AddProduct = () => {

      const handleGetFormValue = e => {
            e.preventDefault();
            const form = e.target;
            const image = form.image.value;
            const name = form.name.value;
            const brand = form.brand.value;
            const type = form.type.value;
            const price = form.price.value;
            const description = form.description.value;
            const rating = form.rating.value;
            const newProduct = { image, name, brand, type, price, description, rating };
            console.log(newProduct);


            // send data to the server 
            fetch('http://localhost:5000/product', {
                  method: "POST",
                  headers: {
                        'content-type': 'application/json'
                  },
                  body: JSON.stringify(newProduct)
            })
                  .then(res => res.json())
                  .then(data => {
                        console.log(data);
                        e.target.reset();
                        if (data.insertedId) {
                              Swal.fire(
                                    'Added!',
                                    'User added successfully',
                                    'success'
                              );

                        }
                  });






      };
      return (
            <div>
                  <div className="p-8 rounded border border-gray-200 min-h-[70vh] mt-3">
                        <h1 className="font-medium text-3xl">Add Product</h1>
                        <p className="text-gray-600 mt-6">
                              To add you product please fill all the form given below
                        </p>
                        <form onSubmit={handleGetFormValue}>
                              <div className="mt-8 grid lg:grid-cols-2 gap-4">
                                    <div>
                                          <label htmlFor="name" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Image
                                          </label>
                                          <input
                                                type="text"
                                                name="image"
                                                required
                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Image"
                                          />
                                    </div>
                                    <div>
                                          <label htmlFor="email" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Name
                                          </label>
                                          <input
                                                type="name"
                                                name="name"
                                                required

                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Product name"
                                          />
                                    </div>
                                    <div>
                                          <label htmlFor="job" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Brand Name
                                          </label>
                                          <input
                                                type="text"
                                                name="brand"
                                                id="job"
                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Brand name"
                                          />
                                    </div>
                                    <div>
                                          <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Type
                                          </label>
                                          <input
                                                type="text"
                                                name="type"

                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Product Type"
                                          />
                                    </div>
                                    <div>
                                          <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Price
                                          </label>
                                          <input
                                                type="text"
                                                name="price"

                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Product price"
                                          />
                                    </div>
                                    <div>
                                          <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Short Description
                                          </label>
                                          <input
                                                type="text"
                                                name="description"

                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Product description"
                                          />
                                    </div>
                                    <div>
                                          <label htmlFor="birthday" className="text-sm text-gray-700 block mb-1 font-medium">
                                                Rating
                                          </label>
                                          <input
                                                type="text"
                                                name="rating"

                                                className="bg-gray-100 border border-gray-200 rounded py-1 px-3 block focus:ring-blue-500 focus:border-blue-500 text-gray-700 w-full"
                                                placeholder="Product rating"
                                          />
                                    </div>

                              </div>
                              <div className="space-x-4 mt-8">
                                    <button
                                          type="submit"
                                          className="py-2 px-4 bg-[#529fec] text-white rounded hover:bg-blue-600 active:bg-blue-700 disabled:opacity-50"
                                    >
                                          Add
                                    </button>


                              </div>
                        </form>
                  </div>

            </div>
      );
};

export default AddProduct;