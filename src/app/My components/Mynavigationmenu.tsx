"use client";

import { useState, useEffect } from 'react';

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

import { MenuIcon, XIcon, ChevronDownIcon } from 'lucide-react';
import { ModeToggle } from './ModeToggle';

function Mynavigationmenu() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed w-full top-0 z-50 bg-white dark:bg-gray-950 shadow-sm">
      <div className="container flex h-16 items-center justify-between">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-primary">
          Danny's Footie World
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
                  <div className="grid gap-4 p-4 md:w-[100vw] lg:grid-cols-3">
                    {/* Men's Section */}
                    <div className="space-y-2">
                      <Link href="/products/men" className="font-semibold hover:text-primary">
                        Men
                      </Link>
                      <ul className="space-y-1">
                        <li>
                          <Link href="/products/men/boots" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/men/sneakers" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/men/bespoke" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Bespoke
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Women's Section */}
                    <div className="space-y-2">
                      <Link href="/products/women" className="font-semibold hover:text-primary">
                        Women
                      </Link>
                      <ul className="space-y-1">
                        <li>
                          <Link href="/products/women/boots" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/women/sneakers" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/women/bespoke" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Bespoke
                          </Link>
                        </li>
                      </ul>
                    </div>

                    {/* Children's Section */}
                    <div className="space-y-2">
                      <Link href="/products/children" className="font-semibold hover:text-primary">
                        Children
                      </Link>
                      <ul className="space-y-1">
                        <li>
                          <Link href="/products/children/boots" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Boots
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/children/sneakers" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Sneakers
                          </Link>
                        </li>
                        <li>
                          <Link href="/products/children/bespoke" className="flex p-2 rounded-md hover:bg-gray-100 dark:hover:bg-gray-800">
                            Bespoke
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
                      <Link href="/documentation" className="block p-2 hover:bg-gray-100 dark:hover:bg-gray-800">
                        Documentation
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
                    <Link href="/products/men" className="px-6 font-medium block hover:text-primary">
                      Men
                    </Link>
                    <Link href="/products/men/boots" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Boots
                    </Link>
                    <Link href="/products/men/sneakers" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sneakers
                    </Link>
                    <Link href="/products/men/bespoke" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Bespoke
                    </Link>
                  </div>

                  {/* Women's Mobile Links */}
                  <div className="space-y-2">
                    <Link href="/products/women" className="px-6 font-medium block hover:text-primary">
                      Women
                    </Link>
                    <Link href="/products/women/boots" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Boots
                    </Link>
                    <Link href="/products/women/sneakers" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sneakers
                    </Link>
                    <Link href="/products/women/bespoke" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Bespoke
                    </Link>
                  </div>

                  {/* Children's Mobile Links */}
                  <div className="space-y-2">
                    <Link href="/products/children" className="px-6 font-medium block hover:text-primary">
                      Children
                    </Link>
                    <Link href="/products/children/boots" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Boots
                    </Link>
                    <Link href="/products/children/sneakers" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Sneakers
                    </Link>
                    <Link href="/products/children/bespoke" className="px-8 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                      Bespoke
                    </Link>
                  </div>
                </div>
              </div>

              {/* Resources Mobile Links */}
              <div className="space-y-4">
                <h3 className="text-xl font-semibold px-4">Resources</h3>
                <Link href="/documentation" className="px-6 py-2 block hover:bg-gray-100 dark:hover:bg-gray-800">
                  Documentation
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

export default Mynavigationmenu;
