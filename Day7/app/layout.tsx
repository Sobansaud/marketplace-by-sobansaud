
// import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
// import { WishlistProvider } from "@/components/WishlistContext"; // Ensure the path is correct for WishlistContext
// import { ComparisonProvider } from "@/components/ComparisonContext"; // Add ComparisonContext

// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import "./globals.css"; // Global styles

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//   return (
//     <html lang="en">
//       <body>
//         {/* Wrapping the application with CartProvider, WishlistProvider, and ComparisonProvider */}
//         <CartProvider>
//           <WishlistProvider>
//             <ComparisonProvider>
           
//               <Navbar />
//               <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
//               <Footer />
              
//             </ComparisonProvider>
//           </WishlistProvider>
//         </CartProvider>
//       </body>
//     </html>
//   );
// }



import { ClerkProvider } from '@clerk/nextjs';
import { CartProvider } from '@/components/CartContext'; // Ensure the path is correct
import { WishlistProvider } from '@/components/WishlistContext'; // Ensure the path is correct
import { ComparisonProvider } from '@/components/ComparisonContext'; // Ensure the path is correct
import Navbar from '@/components/navbar';
import Footer from '@/components/footer';
import './globals.css';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <CartProvider>
        <WishlistProvider>
          <ComparisonProvider>
            <html lang="en">
              <body>
               
              
                 
                <Navbar/>
                
                           <main>{children}</main>
                  <Footer />
                
              </body>
            </html>
          </ComparisonProvider>
        </WishlistProvider>
      </CartProvider>
    </ClerkProvider>
  );
}
