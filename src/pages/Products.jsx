import { BiCartAdd } from "react-icons/bi";
import { useState, useEffect } from "react";
import { FaStar } from "react-icons/fa";

export default function Products() {
  const [products, setProducts] = useState([]);
  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    setProducts(data.products);
    
    if (!response.ok) {
      console.error('Error fetching products:', response.statusText);
    }
  }

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div className="products p-2 px-4" >
      <p className="text-3xl block font-bold my-4 py-4 text-gray-400">Products</p>

      {/* main parent that hold products adn show them as grid system */}
      <div className="product-list grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 gap-4">
        {/* each product */}
        {/* <div className="border p-3 rounded-2xl border-gray-300 flex flex-col">
          <div>
            <img src="https://cdn.dummyjson.com/product-images/beauty/essence-mascara-lash-princess/1.webp" alt="Product 1" className="w-full h-full  rounded-t-2xl" />

          </div>
          <h3 className="font-bold mt-2">Essence Mascara Lash Princess</h3>
          <p className="text-gray-600">$9.99</p>

          <div className="flex justify-end">
            <BiCartAdd className="size-7 text-amber-400 " />
          </div>
        </div> */}
        {
          products.map((product) => (
            <div key={product.id} className="border rounded-2xl border-gray-300 flex flex-col">
              <div>
                <img src={product.thumbnail} alt={product.title} className="w-full h-full rounded-t-2xl" />
              </div>
              <div className="p-3">
                <h3 className="font-bold my-2 py-2">{product.title}</h3>
                <p className="text-gray-600">${product.price}</p>
                <p className="text-gray-600">
                  {
                    Array.from({ length: Math.floor(product.rating) }, (_, index) => (
                      <FaStar key={index} className="inline text-yellow-500" /> 
                    ))
                  }
                  <span className="px-2 font-light">({Math.floor(product.rating)})</span>
                </p>

                <div className="flex justify-end">
                  <BiCartAdd className="size-7 text-amber-400 " />
                </div>
              </div>
            </div>
          ))
        }
      </div>
    </div>
  );
}