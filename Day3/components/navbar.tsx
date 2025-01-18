


"use client";
import { Heart, Search, ShoppingCart, Menu } from "lucide-react";
import { User } from "lucide-react";
import Link from "next/link";
import React, { useState } from "react";
import { Button } from "./ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";

export const Navbar = () => {
  // State to manage cart item count
  const [cartCount, setCartCount] = useState(0);

  // Function to add item to the cart (this would be triggered when an item is added)
  const addToCart = () => {
    setCartCount(cartCount + 1); // Increment cart count
  };

  return (
    <nav className="w-full border-b border-gray-300 p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        {/* Logo Section */}
        <div className="flex items-center gap-2">
          <img src="Logos-05.svg" alt="Logo" className="h-8" />
          <h1 className="text-2xl font-bold text-gray-700">Furniro</h1>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex gap-8">
          <Link href="/" className="text-md font-bold text-gray-600 hover:text-black ">
            Home
          </Link>
          <Link href="/shop" className="text-md font-bold text-gray-600 hover:text-black">
            Shop
          </Link>
          <Link href="/blog" className="text-md font-bold text-gray-600 hover:text-black">
            Blog
          </Link>
          <Link href="/contact" className="text-md font-bold text-gray-600 hover:text-black">
            Contact
          </Link>
        </div>

        {/* Icons */}
        <div className="hidden md:flex items-center gap-4">
          <Button variant="outline" size="icon" className="rounded-full">
            <User />
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Heart />
          </Button>
          {/* Shopping Cart with dynamic count */}
          <Button variant="outline" size="icon" className="rounded-full relative">
            <ShoppingCart />
            {cartCount > 0 && (
              <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                {cartCount}
              </span>
            )}
          </Button>
          <Button variant="outline" size="icon" className="rounded-full">
            <Search />
          </Button>
        </div>

        {/* Mobile Navigation */}
        <Sheet>
          <SheetTrigger className="md:hidden">
            {/* Instead of wrapping a Button inside a button, use the Menu icon directly */}
            <Menu />
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader>
              <SheetTitle>Furniro</SheetTitle>
            </SheetHeader>
            <div className="flex flex-col gap-4 mt-4">
              <Link href="/" className="text-md font-medium text-gray-600">
                Home
              </Link>
              <Link href="/shop" className="text-md font-medium text-gray-600">
                Shop
              </Link>
              <Link href="/blog" className="text-md font-medium text-gray-600">
                Blog
              </Link>
              <Link href="/contact" className="text-md font-medium text-gray-600">
                Contact
              </Link>
              <div className="flex mt-6 gap-4">
                <Button variant="outline" size="icon" className="rounded-full">
                  <Heart />
                </Button>
                {/* Shopping Cart with dynamic count */}
                <Button variant="outline" size="icon" className="rounded-full relative">
                  <ShoppingCart />
                  {cartCount > 0 && (
                    <span className="absolute top-0 right-0 text-xs font-bold text-white bg-red-500 rounded-full w-5 h-5 flex items-center justify-center">
                      {cartCount}
                    </span>
                  )}
                </Button>
                <Button variant="outline" size="icon" className="rounded-full">
                  <Search />
                </Button>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
};

export default Navbar;
