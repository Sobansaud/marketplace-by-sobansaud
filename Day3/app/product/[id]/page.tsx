// import { useRouter } from 'next/router';
// import { useState, useEffect } from 'react';
// import { client } from '@/sanity/lib/client'; // Ensure to import your Sanity client
// import Link from 'next/link';

// interface Product {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   colors: string[];
//   sizes: string[];
//   relatedProducts: Array<{
//     name: string;
//     price: string;
//     image: string;
//     discount?: string;
//     tag?: string;
//   }>;
// }

// const fetchProduct = async (id: string): Promise<Product | null> => {
//   const query = `*[_type == "product" && _id == $id][0]{
//     name,
//     description,
//     price,
//     "imageUrl": productImage.asset->url,
//     colors,
//     sizes,
//     relatedProducts[] {
//       name,
//       price,
//       "image": relatedImage.asset->url,
//       discount,
//       tag
//     }
//   }`;

//   const product = await client.fetch(query, { id });
//   return product || null;
// };

// const ProductPage = () => {
//   const { query } = useRouter();
//   const { id } = query;  // Extract the product ID from the URL
//   const [product, setProduct] = useState<Product | null>(null);

//   useEffect(() => {
//     if (id) {
//       const fetchData = async () => {
//         const data = await fetchProduct(id as string);
//         setProduct(data);
//       };
//       fetchData();
//     }
//   }, [id]);

//   if (!product) {
//     return <div className="text-center text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-6 py-12">
//       {/* Breadcrumb */}
//       <nav className="text-gray-600 mb-6">
//         <Link href="/" className="hover:underline">Home</Link> &gt; 
//         <Link href="/shop" className="hover:underline">Shop</Link> &gt; {product.name}
//       </nav>

//       {/* Product Section */}
//       <div className="flex flex-wrap md:flex-nowrap gap-6">
//         {/* Product Image */}
//         <div className="flex-1">
//           <img src={product.imageUrl} alt={product.name} width={600} height={300} className="rounded-lg" />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-xl text-primary font-semibold mb-2">${product.price}</p>
//           <p className="text-gray-600 mb-6">{product.description}</p>

//           {/* Size Options */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Size</h4>
//             <div className="flex space-x-2">
//               {product.sizes.map((size) => (
//                 <button key={size} className="px-4 py-2 border rounded">{size}</button>
//               ))}
//             </div>
//           </div>

//           {/* Color Options */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Color</h4>
//             <div className="flex space-x-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   className="w-8 h-8 rounded-full"
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {product.relatedProducts.map((related, index) => (
//             <div key={index} className="border rounded-lg p-4">
//               <img src={related.image} alt={related.name} className="rounded-lg mb-4" />
//               <h3 className="font-semibold">{related.name}</h3>
//               <p className="text-primary font-bold">{related.price}</p>
//               {related.discount && <span className="text-red-500">{related.discount}</span>}
//               {related.tag && <span className="text-green-500">{related.tag}</span>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;










// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
// import { client } from '@/sanity/lib/client'; // Ensure to import your Sanity client
// import Link from 'next/link';

// interface Product {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   colors: string[];
//   sizes: string[];
//   relatedProducts: Array<{
//     name: string;
//     price: string;
//     image: string;
//     discount?: string;
//     tag?: string;
//   }>;
// }

// const fetchProduct = async (id: string): Promise<Product | null> => {
//   const query = `*[_type == "product" && _id == $id][0]{
//     name,
//     description,
//     price,
//     "imageUrl": productImage.asset->url,
//     colors,
//     sizes,
//     relatedProducts[] {
//       name,
//       price,
//       "image": relatedImage.asset->url,
//       discount,
//       tag
//     }
//   }`;

//   const product = await client.fetch(query, { id });
//   return product || null;
// };

// const ProductPage = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const { query } = useRouter();
  
//   const id = query?.id;  // Safely extract id

//   useEffect(() => {
//     if (id) {
//       const fetchData = async () => {
//         const data = await fetchProduct(id as string);
//         setProduct(data);
//       };
//       fetchData();
//     }
//   }, [id]);

//   if (!product) {
//     return <div className="text-center text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-6 py-12">
//       {/* Breadcrumb */}
//       <nav className="text-gray-600 mb-6">
//         <Link href="/" className="hover:underline">Home</Link> &gt; 
//         <Link href="/shop" className="hover:underline">Shop</Link> &gt; {product.name}
//       </nav>

//       {/* Product Section */}
//       <div className="flex flex-wrap md:flex-nowrap gap-6">
//         {/* Product Image */}
//         <div className="flex-1">
//           <img src={product.imageUrl} alt={product.name} width={600} height={300} className="rounded-lg" />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-xl text-primary font-semibold mb-2">${product.price}</p>
//           <p className="text-gray-600 mb-6">{product.description}</p>

//           {/* Size Options */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Size</h4>
//             <div className="flex space-x-2">
//               {product.sizes.map((size) => (
//                 <button key={size} className="px-4 py-2 border rounded">{size}</button>
//               ))}
//             </div>
//           </div>

//           {/* Color Options */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Color</h4>
//             <div className="flex space-x-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   className="w-8 h-8 rounded-full"
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {product.relatedProducts.map((related, index) => (
//             <div key={index} className="border rounded-lg p-4">
//               <img src={related.image} alt={related.name} className="rounded-lg mb-4" />
//               <h3 className="font-semibold">{related.name}</h3>
//               <p className="text-primary font-bold">{related.price}</p>
//               {related.discount && <span className="text-red-500">{related.discount}</span>}
//               {related.tag && <span className="text-green-500">{related.tag}</span>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;













// 'use client';

// import { useState, useEffect } from 'react';
// import { useRouter } from 'next/navigation'; // Import from 'next/navigation'
// import { client } from '@/sanity/lib/client'; // Ensure to import your Sanity client
// import Link from 'next/link';

// interface Product {
//   name: string;
//   description: string;
//   price: number;
//   imageUrl: string;
//   colors: string[];
//   sizes: string[];
//   relatedProducts: Array<{
//     name: string;
//     price: string;
//     image: string;
//     discount?: string;
//     tag?: string;
//   }>;
// }

// const fetchProduct = async (id: string): Promise<Product | null> => {
//   const query = `*[_type == "product" && _id == $id][0]{
//     name,
//     description,
//     price,
//     "imageUrl": productImage.asset->url,
//     colors,
//     sizes,
//     relatedProducts[] {
//       name,
//       price,
//       "image": relatedImage.asset->url,
//       discount,
//       tag
//     }
//   }`;

//   try {
//     const product = await client.fetch(query, { id });
//     if (!product) {
//       console.log(`No product found for id: ${id}`);
//     }
//     return product || null;
//   } catch (error) {
//     console.error("Error fetching product:", error);
//     return null;
//   }
// };

// const ProductPage = () => {
//   const [product, setProduct] = useState<Product | null>(null);
//   const { query } = useRouter();
  
//   const id = query?.id;  // Safely extract id
  
//   useEffect(() => {
//     if (id) {
//       console.log("Fetching product with id:", id);
//       const fetchData = async () => {
//         const data = await fetchProduct(id as string);
//         setProduct(data);
//       };
//       fetchData();
//     } else {
//       console.log("No product id found in the query.");
//     }
//   }, [id]);

//   if (!product) {
//     return <div className="text-center text-red-500">Product not found</div>;
//   }

//   return (
//     <div className="container mx-auto px-6 py-12">
//       {/* Breadcrumb */}
//       <nav className="text-gray-600 mb-6">
//         <Link href="/" className="hover:underline">Home</Link> &gt; 
//         <Link href="/shop" className="hover:underline">Shop</Link> &gt; {product.name}
//       </nav>

//       {/* Product Section */}
//       <div className="flex flex-wrap md:flex-nowrap gap-6">
//         {/* Product Image */}
//         <div className="flex-1">
//           <img src={product.imageUrl} alt={product.name} width={600} height={300} className="rounded-lg" />
//         </div>

//         {/* Product Details */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold mb-4">{product.name}</h1>
//           <p className="text-xl text-primary font-semibold mb-2">${product.price}</p>
//           <p className="text-gray-600 mb-6">{product.description}</p>

//           {/* Size Options */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Size</h4>
//             <div className="flex space-x-2">
//               {product.sizes.map((size) => (
//                 <button key={size} className="px-4 py-2 border rounded">{size}</button>
//               ))}
//             </div>
//           </div>

//           {/* Color Options */}
//           <div className="mb-4">
//             <h4 className="font-semibold mb-2">Color</h4>
//             <div className="flex space-x-2">
//               {product.colors.map((color) => (
//                 <button
//                   key={color}
//                   className="w-8 h-8 rounded-full"
//                   style={{ backgroundColor: color }}
//                 />
//               ))}
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Related Products */}
//       <div className="mt-12">
//         <h2 className="text-2xl font-bold mb-4">Related Products</h2>
//         <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
//           {product.relatedProducts.map((related, index) => (
//             <div key={index} className="border rounded-lg p-4">
//               <img src={related.image} alt={related.name} className="rounded-lg mb-4" />
//               <h3 className="font-semibold">{related.name}</h3>
//               <p className="text-primary font-bold">{related.price}</p>
//               {related.discount && <span className="text-red-500">{related.discount}</span>}
//               {related.tag && <span className="text-green-500">{related.tag}</span>}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;


















// "use client";

// import { useEffect, useState } from "react";
// import { useParams } from "next/navigation";
// import { client } from "@/sanity/lib/client";

// interface Product {
//   _id: string;
//   title: string;
//   description: string;
//   price: number;
//   dicountPercentage?: number;
//   isNew?: boolean;
//   tags: string[];
//   imageUrl: string;
// }

// const fetchProduct = async (id: string): Promise<Product | null> => {
//   const query = `*[_type == "product" && _id == $id][0]{
//     _id,
//     title,
//     description,
//     price,
//     dicountPercentage,
//     isNew,
//     tags,
//     "imageUrl": productImage.asset->url
//   }`;

//   return await client.fetch(query, { id });
// };

// const ProductPage = () => {
//   const { id } = useParams(); // Get Product ID from URL
//   const [product, setProduct] = useState<Product | null>(null);


// console.log("Product ID from URL:", id); // Debugging

//   useEffect(() => {
//     if (id) {
//       fetchProduct(id).then(setProduct);
//     }
//   }, [id]);

//   if (!product) {
//     return <div className="text-center py-10 text-xl font-bold">Loading...</div>;
//   }

//   return (
//     <div className="container mx-auto px-6 py-12">
//       {/* Breadcrumb */}
//       <nav className="text-gray-600 mb-6">
//         <a href="/" className="hover:underline">Home</a> &gt;
//         <a href="/shop" className="hover:underline"> Shop</a> &gt; {product.title}
//       </nav>

//       <div className="flex flex-col md:flex-row gap-6">
//         {/* Product Image */}
//         <div className="flex-1">
//           <img
//             src={product.imageUrl}
//             alt={product.title}
//             className="rounded-lg shadow-md"
//             width={600}
//             height={400}
//           />
//         </div>

//         {/* Product Info */}
//         <div className="flex-1">
//           <h1 className="text-3xl font-bold">{product.title}</h1>
//           <p className="text-gray-600 mt-2">{product.description}</p>

//           {/* Price & Discount */}
//           <div className="mt-4 flex items-center gap-4">
//             <span className="text-2xl font-bold text-indigo-600">${product.price}</span>
//             {product.dicountPercentage && product.dicountPercentage > 0 && (
//               <span className="text-red-500 line-through text-lg">
//                 ${(product.price / (1 - product.dicountPercentage / 100)).toFixed(2)}
//               </span>
//             )}
//           </div>

//           {/* Tags */}
//           <div className="mt-4 flex flex-wrap gap-2">
//             {product.tags.map((tag) => (
//               <span
//                 key={tag}
//                 className="bg-indigo-500 text-white px-3 py-1 text-sm font-semibold rounded-full"
//               >
//                 #{tag}
//               </span>
//             ))}
//           </div>

//           {/* Add to Cart Button */}
//           <div className="mt-6">
//             <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-6 rounded-lg transition duration-300">
//               Add to Cart
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;











// import { client } from '@/sanity/lib/client';
// import { notFound } from 'next/navigation';

// interface Product {
//   title: string;
//   description: string;
//   price: number;
//   discountPercentage?: number;
//   isNew?: boolean;
//   tags: string[];
//   imageUrl: string;
// }

// const fetchProduct = async (id: string): Promise<Product | null> => {
//   const query = `
//     *[_type == "product" && _id == $id][0]{
//       title,
//       description,
//       price,
//       discountPercentage,
//       isNew,
//       tags,
//       "imageUrl": productImage.asset->url
//     }
//   `;
//   const product = await client.fetch(query, { id });
//   return product || null;
// };

// const ProductPage = async ({ params }: { params: { id: string } }) => {
//   const product = await fetchProduct(params.id);

//   if (!product) {
//     notFound();
//   }

//   return (
//     <div className="container mx-auto px-6 py-12">
//       <nav className="text-gray-600 mb-6">
//         <a href="/" className="hover:underline">Home</a> &gt; 
//         <a href="/shop" className="hover:underline">Shop</a> &gt; {product.title}
//       </nav>

//       <div className="flex flex-wrap md:flex-nowrap gap-6">
//         <div className="flex-1">
//           <img src={product.imageUrl} alt={product.title} width={600} height={300} className="rounded-lg" />
//         </div>

//         <div className="flex-1">
//           <h1 className="text-3xl font-bold mb-4">{product.title}</h1>
//           <p className="text-xl text-primary font-semibold mb-2">${product.price}</p>
//           <p className="text-gray-600 mb-6">{product.description}</p>

//           {product.isNew && (
//             <span className="bg-green-500 text-white px-3 py-1 rounded-md font-bold">New Arrival</span>
//           )}
//           {product.discountPercentage && (
//             <span className="bg-red-500 text-white px-3 py-1 rounded-md font-bold">-{product.discountPercentage}% Off</span>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default ProductPage;



import { client } from "@/sanity/lib/client";
import Link from "next/link";
import { notFound } from "next/navigation";

interface Product {
  _id: string;
  title: string;
  description: string;
  price: number;
  discountPercentage?: number;
  isNew?: boolean;
  tags: string[];
  imageUrl: string;
  colors?: string[];
  sizes?: string[];
}

const fetchProduct = async (id: string): Promise<Product | null> => {
  const query = `*[_type == "product" && _id == $id][0]{
    _id,
    title,
    description,
    price,
    discountPercentage,
    isNew,
    tags,
    "imageUrl": productImage.asset->url,
    colors,
    sizes
  }`;
  const product = await client.fetch(query, { id });
  return product || null;
};

// This is a server-side component for handling product data fetching
const ProductPage = async ({ params }: { params: { id: string } }) => {
  const product = await fetchProduct(params.id);
  
  if (!product) {
    notFound();
  }

  return (
    <div className="container mx-auto px-6 py-12 bg-slate-200">
      <nav className="text-gray-600 mb-6 text-sm">
        <Link href="/" className="hover:underline text-xl text-black">Home</Link> &gt;
        <Link href="/shop" className="hover:underline text-xl text-black">Shop</Link> &gt;
        <span className="text-gray-900 font-semibold text-xl">{product.title}</span>
      </nav>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        <div className="flex justify-center">
          <img src={product.imageUrl} alt={product.title} className="rounded-lg shadow-lg w-full max-w-md object-cover" />
        </div>

        <div className="space-y-6">
          <h1 className="text-4xl font-extrabold text-gray-900">{product.title}</h1>
          <p className="text-lg text-primary font-semibold">${product.price.toFixed(2)}</p>
          {product.discountPercentage && (
            <p className="text-sm text-red-500 font-bold">-{product.discountPercentage}% Off</p>
          )}
          <p className="text-green-700 font-bold italic">{product.description}</p>

          {/* Render colors */}
          {product.colors && product.colors.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Available Colors:</h3>
              <div className="flex gap-3 mt-2">
                {product.colors.map((color, index) => (
                  <div key={index} className="w-8 h-8 rounded-full border border-gray-300" style={{ backgroundColor: color }} />
                ))}
              </div>
            </div>
          )}

          {/* Render sizes */}
          {product.sizes && product.sizes.length > 0 && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold text-gray-900">Sizes:</h3>
              <div className="flex gap-2 mt-2">
                {product.sizes.map((size, index) => (
                  <span key={index} className="border border-gray-300 px-3 py-1 rounded-lg text-sm font-semibold">
                    {size}
                  </span>
                ))}
              </div>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4 mt-6">
            <button className="flex-1 bg-indigo-600 text-white px-5 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition">
              Add to Cart
            </button>
            <button className="flex-1 border-2 border-gray-800 text-gray-800 px-5 py-3 rounded-lg font-semibold hover:bg-gray-800 hover:text-white transition">
              Compare
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
