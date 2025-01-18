




// import type { Metadata } from "next";
// import localFont from "next/font/local";

// import "./globals.css";
// import Navbar from "@/components/navbar";
// import Footer from "@/components/footer";
// import { useCart } from "@/components/CartContext"


// // Load custom fonts
// const geistSans = localFont({
//   src: "./fonts/GeistVF.woff",
//   variable: "--font-geist-sans",
//   weight: "100 900",
// });
// const geistMono = localFont({
//   src: "./fonts/GeistMonoVF.woff",
//   variable: "--font-geist-mono",
//   weight: "100 900",
// });

// // Metadata for the application
// export const metadata: Metadata = {
//   title: "Next.js E-commerce",
//   description: "An e-commerce app powered by Next.js",
// };

// export default function RootLayout({
//   children,
// }: Readonly<{
//   children: React.ReactNode;
// }>) {
//   return (
//     <html lang="en">
//       <body
//         className={`${geistSans.variable} ${geistMono.variable} antialiased`}
//       >
//         <CartProvider> {/* Wrapping the application with CartProvider */}
//           <Navbar />
//           <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
//           <Footer />
//         </CartProvider>
//       </body>
//     </html>
//   );
// }





import { CartProvider } from "@/components/CartContext"; // Ensure the path is correct
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
 import "./globals.css";



export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <CartProvider> {/* Wrapping the application with CartProvider */}
          <Navbar />
          <main>{children}</main> {/* Wrap children in a <main> tag for better semantics */}
          <Footer />
        </CartProvider>
      </body>
    </html>
  );
}
