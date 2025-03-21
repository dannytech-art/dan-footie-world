"use client";
import { useState } from 'react';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  navigationMenuTriggerStyle,
} from "src/components/ui/navigation-menu";

import { cn } from "src/lib/utils";

import Link from 'next/link';

import { MenuIcon, XIcon } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

function MainNavigation() {  // Changed from MyNavigationMenu
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-primary">
          Danny&apos;s Footie World
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-4 flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              <NavigationMenuItem>
                <NavigationMenuLink href="/" className={navigationMenuTriggerStyle()}>
                  Home
                </NavigationMenuLink>
              </NavigationMenuItem>

              <NavigationMenuItem>
                <NavigationMenuTrigger>Products</NavigationMenuTrigger>
                <NavigationMenuContent className="w-screen">
                  <div className="grid gap-2 p-2 md:w-[60vw] lg:grid-cols-3">
                    {/* Men's Section */}
                    <div className="space-y-2">
                     <Link href="/men" className="font-semibold hover:text-primary">
                         Men
                      </Link>
                      <ul className="space-y-1">
                        <li>
                            
                          <Link href="/men" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                          Boots/crocs
                          </Link>
                        </li>
                        <li>
                           
                          
                          <Link href="/men" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                           Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link href="/men" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Bespoke
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Women's Section */}
                    <div className="space-y-2">
                      <Link href="/women" className="font-semibold hover:text-primary">
                        Women
                      </Link>
                      <ul className="space-y-1">
                        <li>
                          <Link href="/women" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Boots/crocs
                          </Link>
                        </li>
                        <li>
                          <Link href="/women" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link href="/women" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Flat
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Children's Section */}
                    <div className="space-y-2">
                      <Link href="/unisex" className="font-semibold hover:text-primary">
                        Unisex
                      </Link>
                      <ul className="space-y-1">
                        <li>
                          <Link href="/unisex" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Boots/Loafers
                          </Link>
                        </li>
                        <li>
                          <Link href="/unisex" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link href="/unisex" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Sandals
                          </Link>
                        </li>
                      </ul>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Resources Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Resources</NavigationMenuTrigger>
                <NavigationMenuContent className="w-screen">
                  <div className="grid grid-cols-2 gap-4 p-4 w-[100vw]">
                    <div className="space-y-2">
                      <Link href="/cart" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Cart
                      </Link>
                      <Link href="/blog" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Blog
                      </Link>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>

              {/* Enquiry Section */}
              <NavigationMenuItem>
                <NavigationMenuTrigger>Enquiry</NavigationMenuTrigger>
                <NavigationMenuContent className="w-screen">
                  <div className="grid grid-cols-2 gap-4 p-4 w-[100vw]">
                  <Link href="/about" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                     About Us
                     
                  </Link>
                    <Link href="/contact" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                      Contact Us
                    </Link>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Section - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/login"
            className={cn(
              navigationMenuTriggerStyle(),
              "hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
          >
            Login
          </Link>
          <Link
            href="/signup"
            className={cn(
              navigationMenuTriggerStyle(),
              "bg-primary text-primary-foreground hover:bg-gray-100 dark:hover:bg-gray-800"
            )}
          >
            Sign Up
          </Link>
          
        </div>
          
        {/* Mobile Menu Toggle */}
          <ModeToggle />
        <button
          className="lg:hidden p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800 "
          onClick={() => setIsOpen(!isOpen)} 
        >
        
          {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          
        </button>
       
      </div>

      {/* Full-screen Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 h-screen w-full bg-white dark:bg-gray-950 z-50 overflow-y-auto">
          <div className="container py-8 space-y-4">
            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              <Link
                href="/"
                className="block text-xl p-4 hover:bg-gray-100 dark:hover:bg-gray-800"
                onClick={() => setIsOpen(false)}
              >
                Home
              </Link>

              <div className="space-y-4">
                <h3 className="text-xl font-semibold px-4">Products</h3>
                <div className="grid gap-2">
                  {/* Men's Mobile Links */}
                  <div className="space-y-2">
                    <Link href="/men" className="px-6 font-medium block hover:text-primary">
                      Men
                    </Link>
                    <Link href="/men" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Boots/crocs
                    </Link>
                    <Link href="/men" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sneakers
                    </Link>
                    <Link href="/men" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Bespoke
                    </Link>
                  </div>

                  {/* Women's Mobile Links */}
                  <div className="space-y-2">
                    <Link href="/women" className="px-6 font-medium block hover:text-primary">
                      Women
                    </Link>
                    <Link href="/women" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Boots/crocs
                    </Link>
                    <Link href="/women" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sneakers
                    </Link>
                    <Link href="/women" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Flat
                    </Link>
                  </div>

                  {/* Children's Mobile Links */}
                  <div className="space-y-2">
                    <Link href="/unisex" className="px-6 font-medium block hover:text-primary">
                      Unisex
                    </Link>
                    <Link href="/unisex" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Boots/Loafers
                    </Link>
                    <Link href="/unisex" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sneakers
                    </Link>
                    <Link href="/unisex" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sandals
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources Mobile Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold px-4">Resources</h3>
                <Link href="/cart" className="px-6 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                  Cart
                </Link>
                <Link href="/blog" className="px-6 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                  Blog
                </Link>
              </div>

              {/* Enquiry Mobile Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold px-4">Enquiry</h3>
                <Link href="/about" className="px-6 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                  About Us
                </Link>
                <Link href="/contact" className="px-6 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                  Contact Us
                </Link>
              </div>
            </div>

            {/* Mobile Auth Section */}
            <div className="pt-8 space-y-4">
              <Link
                href="/login"
                className="block w-full text-center p-4 text-lg rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => setIsOpen(false)}
              >
                Login
              </Link>
              <Link
                href="/signup"
                className="block w-full text-center p-4 text-lg rounded-lg bg-primary text-white hover:bg-primary/90"
                onClick={() => setIsOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

export default MainNavigation;
