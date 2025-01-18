// import { client } from '@/sanity/lib/client';

// interface Product {
//   title: string;
//   description: string;
//   price: number;
//   dicountPercentage?: number;
//   isNew?: boolean;
//   tags: string[];
//   imageUrl: string;
// }

// const fetchProducts = async (): Promise<Product[]> => {
//   const query = `
//     *[_type == "product"]{
//       title,
//       description,
//       price,
//       dicountPercentage,
//       isNew,
//       tags,
//       "imageUrl": productImage.asset->url
//     }
//   `;

//   return await client.fetch(query);
// };

// const ShopPage = async () => {
//   const products = await fetchProducts();

//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12">
//       <div className="container mx-auto px-6">
//         {/* Page Title */}
//         <h1 className="text-5xl font-extrabold text-center text-gray-800 mb-10 tracking-wide">
//           Explore Our <span className="text-indigo-600">Collection</span>
//         </h1>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
//           {products.map((product) => (
//             <div 
//               key={product.title} 
//               className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition duration-500 transform hover:scale-105 relative overflow-hidden text-red-500"
//             >
//               {/* Product Image */}
//               <div className="relative">
//                 <img 
//                   src={product.imageUrl} 
//                   alt={product.title} 
//                   className="w-full h-60 object-cover rounded-lg transition duration-300 hover:opacity-90"
//                 />

//                 {/* New Product Badge */}
//                 {product.isNew && (
//                   <span className="absolute top-2 left-2 bg-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full animate-bounce">
//                     New
//                   </span>
//                 )}

//                 {/* Discount Badge */}
//                 {product.dicountPercentage && product.dicountPercentage > 0 && (
//                   <span className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full">
//                     -{product.dicountPercentage}%
//                   </span>
//                 )}
//               </div>

//               {/* Product Details */}
//               <div className="mt-5 text-center">
//                 <h2 className="text-2xl font-semibold text-cyan-400">{product.title}</h2>
//                 <p className="text-green-700 text-sm mt-2 px-2 font-bold">
//                   {product.description.length > 80 
//                     ? product.description.substring(0, 80) + "..." 
//                     : product.description}
//                 </p>
//               </div>

//               {/* Price and Discount */}
//               <div className="flex justify-center items-center gap-2 mt-3">
//                 <span className="text-lg font-bold text-gray-900">${product.price.toFixed(2)}</span>
//                 {product.dicountPercentage && (
//                   <span className="text-sm text-gray-500 line-through">
//                     ${(product.price / (1 - product.dicountPercentage / 100)).toFixed(2)}
//                   </span>
//                 )}
//               </div>

//               {/* Tags with Styling */}
//               <div className="flex flex-wrap gap-2 justify-center mt-3">
//                 {product.tags.map((tag) => (
//                   <span key={tag} className="bg-gradient-to-r from-indigo-200 to-purple-400 text-stone-600 px-3 py-1 text-xs font-semibold rounded-full shadow-md hover:scale-110 transition">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Add to Cart Button */}
//               <div className="mt-5 text-center">
//                 <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-lg transition transform hover:scale-105">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;






// import { client } from '@/sanity/lib/client';

// interface Product {
//   title: string;
//   description: string;
//   price: number;
//   dicountPercentage?: number;
//   isNew?: boolean;
//   tags: string[];
//   imageUrl: string;
// }

// const fetchProducts = async (): Promise<Product[]> => {
//   const query = `
//     *[_type == "product"]{
//       title,
//       description,
//       price,
//       dicountPercentage,
//       isNew,
//       tags,
//       "imageUrl": productImage.asset->url
//     }
//   `;
//   return await client.fetch(query);
// };

// const ShopPage = async () => {
//   const products = await fetchProducts();

//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12">
//       <div className="container mx-auto px-6">
//         {/* Page Title */}
//         <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
//           <span className="text-indigo-600">Premium</span> Collection
//         </h1>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {products.map((product) => (
//             <div 
//               key={product.title} 
//               className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 
//                          border border-gray-200 hover:border-indigo-500 relative overflow-hidden"
//             >
//               {/* Product Image */}
//               <div className="relative">
//                 <img 
//                   src={product.imageUrl} 
//                   alt={product.title} 
//                   className="w-full h-64 object-cover rounded-lg transition duration-300 hover:opacity-90"
//                 />

//                 {/* New Product Badge */}
//                 {product.isNew && (
//                   <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md animate-pulse">
//                     New
//                   </span>
//                 )}

//                 {/* Discount Badge */}
//                 {product.dicountPercentage && product.dicountPercentage > 0 && (
//                   <span className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
//                     -{product.dicountPercentage}%
//                   </span>
//                 )}
//               </div>

//               {/* Product Details */}
//               <div className="mt-5 text-center">
//                 <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">
//                   {product.title}
//                 </h2>
//                 <p className="text-red-500 text-sm mt-2 px-2 font-bold leading-relaxed">
//                   {product.description.length > 80 
//                     ? product.description.substring(0, 80) + "..." 
//                     : product.description}
//                 </p>
//               </div>

//               {/* Price Section */}
//               <div className="flex justify-center items-center gap-3 mt-4">
//                 <span className="text-xl font-extrabold text-blue-600">
//                   ${product.price.toFixed(2)}
//                 </span>
//                 {product.dicountPercentage && (
//                   <span className="text-sm text-gray-500 line-through">
//                     ${(product.price / (1 - product.dicountPercentage / 100)).toFixed(2)}
//                   </span>
//                 )}
//               </div>

//               {/* Beautiful Tags */}
//               <div className="flex flex-wrap gap-2 justify-center mt-3">
//                 {product.tags.map((tag) => (
//                   <span key={tag} className="bg-gradient-to-r from-indigo-400 to-purple-500 text-slate-800 px-3 py-1 text-xs 
//                               font-semibold rounded-full shadow-md hover:scale-110 transition">
//                     #{tag}
//                   </span>
//                 ))}
//               </div>

//               {/* Add to Cart Button */}
//               <div className="mt-6 text-center">
//                 <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 
//                                    text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-110 shadow-lg">
//                   Add to Cart
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;





// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';

// interface Product {
//   _id: string;  // Use _id as a unique identifier
//   title: string;
//   description: string;
//   price: number;
//   dicountPercentage?: number;
//   isNew?: boolean;
//   tags: string[];
//   imageUrl: string;
// }

// const fetchProducts = async (): Promise<Product[]> => {
//   const query = `
//     *[_type == "product"]{
//       _id,
//       title,
//       description,
//       price,
//       dicountPercentage,
//       isNew,
//       tags,
//       "imageUrl": productImage.asset->url
//     }
//   `;
//   return await client.fetch(query);
// };

// const ShopPage = async () => {
//   const products = await fetchProducts();

//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12">
//       <div className="container mx-auto px-6">
//         {/* Page Title */}
//         <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
//           <span className="text-indigo-600">Premium</span> Collection
//         </h1>

//         {/* Product Grid */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {products.map((product) => (
//             <Link key={product._id} href={`/product/${product._id}`} passHref> {/* Use _id instead of title */}
//               <div 
//                 className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 
//                           border border-gray-200 hover:border-indigo-500 relative overflow-hidden cursor-pointer"
//               >
//                 {/* Product Image */}
//                 <div className="relative">
//                   <img 
//                     src={product.imageUrl} 
//                     alt={product.title} 
//                     className="w-full h-64 object-cover rounded-lg transition duration-300 hover:opacity-90"
//                   />

//                   {/* New Product Badge */}
//                   {product.isNew && (
//                     <span className="absolute top-3 left-3 bg-gradient-to-r from-green-400 to-green-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md animate-pulse">
//                       New
//                     </span>
//                   )}

//                   {/* Discount Badge */}
//                   {product.dicountPercentage && product.dicountPercentage > 0 && (
//                     <span className="absolute top-3 right-3 bg-gradient-to-r from-red-400 to-red-600 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
//                       -{product.dicountPercentage}%
//                     </span>
//                   )}
//                 </div>

//                 {/* Product Details */}
//                 <div className="mt-5 text-center">
//                   <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">
//                     {product.title}
//                   </h2>
//                   <p className="text-red-500 text-sm mt-2 px-2 font-bold leading-relaxed">
//                     {product.description.length > 80 
//                       ? product.description.substring(0, 80) + "..." 
//                       : product.description}
//                   </p>
//                 </div>

//                 {/* Price Section */}
//                 <div className="flex justify-center items-center gap-3 mt-4">
//                   <span className="text-xl font-extrabold text-blue-600">
//                     ${product.price.toFixed(2)}
//                   </span>
//                   {product.dicountPercentage && (
//                     <span className="text-sm text-gray-500 line-through">
//                       ${(product.price / (1 - product.dicountPercentage / 100)).toFixed(2)}
//                     </span>
//                   )}
//                 </div>

//                 {/* Beautiful Tags */}
//                 <div className="flex flex-wrap gap-2 justify-center mt-3">
//                   {product.tags.map((tag) => (
//                     <span key={tag} className="bg-gradient-to-r from-indigo-400 to-purple-500 text-slate-800 px-3 py-1 text-xs 
//                                 font-semibold rounded-full shadow-md hover:scale-110 transition">
//                       #{tag}
//                     </span>
//                   ))}
//                 </div>

//                 {/* Add to Cart Button */}
//                 <div className="mt-6 text-center">
//                   <button className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 
//                                      text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-110 shadow-lg">
//                     Add to Cart
//                   </button>
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;






















// import Link from 'next/link';
// import { client } from '@/sanity/lib/client';

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage?: number;
//   isNew?: boolean;
//   tags: string[];
//   imageUrl: string;
// }

// const fetchProducts = async (): Promise<Product[]> => {
//   const query = `
//     *[_type == "product"]{
//       _id,
//       title,
//       description,
//       price,
//       discountPercentage,
//       isNew,
//       tags,
//       "imageUrl": productImage.asset->url
//     }
//   `;
//   return await client.fetch(query);
// };

// const ShopPage = async () => {
//   const products = await fetchProducts();

//   return (
//     <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12">
//       <div className="container mx-auto px-6">
//         <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
//           <span className="text-indigo-600">Premium</span> Collection
//         </h1>

//         <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
//           {products.map((product) => (
//             <Link key={product._id} href={`/product/${product._id}`}>
//               <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 border border-gray-200 hover:border-indigo-500 relative overflow-hidden cursor-pointer">
//                 <div className="relative">
//                   <img src={product.imageUrl} alt={product.title} className="w-full h-64 object-cover rounded-lg transition duration-300 hover:opacity-90"/>
//                   {product.isNew && (
//                     <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
//                       New
//                     </span>
//                   )}
//                   {product.discountPercentage && (
//                     <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
//                       -{product.discountPercentage}%
//                     </span>
//                   )}
//                 </div>
//                 <div className="mt-5 text-center">
//                   <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">{product.title}</h2>
//                   <p className="text-red-500 text-sm mt-2 px-2 font-bold">{product.description.substring(0, 80)}...</p>
//                 </div>
//                 <div className="flex justify-center items-center gap-3 mt-4">
//                   <span className="text-xl font-extrabold text-blue-600">${product.price.toFixed(2)}</span>
//                   {product.discountPercentage && (
//                     <span className="text-sm text-gray-500 line-through">${(product.price / (1 - product.discountPercentage / 100)).toFixed(2)}</span>
//                   )}
//                 </div>
//               </div>
//             </Link>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ShopPage;















import Link from 'next/link';
import { client } from '@/sanity/lib/client';


interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
  imageUrl: string;
}



const fetchProducts = async (): Promise<Product[]> => {
  const query = `
    *[_type == "product"]{
      _id,
      title,
      description,
      price,
      discountPercentage,
      isNew,
      tags,
      "imageUrl": productImage.asset->url
    }
  `;
  return await client.fetch(query);
};


  

const ShopPage = async () => {
  const products = await fetchProducts();

  return (
    <div className="bg-gradient-to-b from-gray-100 to-gray-300 min-h-screen py-12">
      <div className="container mx-auto px-6">
        <h1 className="text-5xl font-extrabold text-center text-gray-900 mb-10 tracking-wide">
          <span className="text-indigo-600">Premium</span> Collection
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <Link key={product._id} href={`/product/${product._id}`}>
              <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition duration-500 transform hover:scale-105 border border-gray-200 hover:border-indigo-500 relative overflow-hidden cursor-pointer">
                <div className="relative">
                  <img
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-64 object-cover rounded-lg transition duration-300 hover:opacity-90"
                  />
                  {product.isNew && (
                    <span className="absolute top-3 left-3 bg-green-500 text-white px-3 py-1 text-xs font-semibold rounded-full shadow-md">
                      New
                    </span>
                  )}
                  {product.discountPercentage && (
                    <span className="absolute top-3 right-3 bg-red-500 text-white px-3 py-1 text-xs font-semibold rounded-full">
                      -{product.discountPercentage}%
                    </span>
                  )}
                </div>
                <div className="mt-5 text-center">
                  <h2 className="text-2xl font-bold text-gray-800 hover:text-indigo-600 transition">
                    {product.title}
                  </h2>
                  <p className="text-red-500 text-sm mt-2 px-2 font-bold">
                    {product.description.substring(0, 80)}...
                  </p>
                </div>
                <div className="flex justify-center items-center gap-3 mt-4">
                  <span className="text-xl font-extrabold text-blue-600">
                    ${product.price.toFixed(2)}
                  </span>
                  {product.discountPercentage && (
                    <span className="text-sm text-gray-500 line-through">
                      ${(
                        product.price /
                        (1 - product.discountPercentage / 100)
                      ).toFixed(2)}
                    </span>
                  )}
                </div>

                {/* Tags Section */}
                <div className="flex flex-wrap gap-2 justify-center mt-3">
                  {product.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gradient-to-r from-indigo-400 to-purple-500 text-slate-800 px-3 py-1 text-xs font-semibold rounded-full shadow-md hover:scale-110 transition"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Add to Cart Button */}
                <div className="mt-6 text-center">
                <button
                    className="bg-gradient-to-r from-indigo-500 to-purple-600 hover:from-indigo-600 hover:to-purple-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300 transform hover:scale-110 shadow-lg"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopPage;












