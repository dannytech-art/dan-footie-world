// src/components/MainNavigation.tsx
"use client";
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
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
import { Avatar, AvatarFallback, AvatarImage } from "src/components/ui/avatar";
import { Button } from "src/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "src/components/ui/dropdown-menu";

interface User {
  id: string;
  name: string;
  email: string;
  image?: string;
}

export function MainNavigation() {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User | null>(null);
  const router = useRouter();

  useEffect(() => {
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  const handleAuthAction = async (action: () => Promise<void>) => {
    try {
      await action();
      const updatedUser = localStorage.getItem('user');
      if (updatedUser) {
        setUser(JSON.parse(updatedUser));
        alert(`Welcome ${JSON.parse(updatedUser).name}!`);
      }
      setIsOpen(false);
      router.refresh();
    } catch (error) {
      alert(error instanceof Error ? error.message : 'Authentication failed');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('user');
    setUser(null);
    alert('Successfully signed out');
    router.push('/');
  };

  return (
    <nav className="fixed w-full top-0 z-50 bg-background shadow-sm">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-6">
        {/* Logo */}
        <Link href="/" className="text-lg font-bold text-primary flex items-center gap-2">
          🥅 Danny's Footie World
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-6 flex-grow justify-center">
          <NavigationMenu>
            <NavigationMenuList className="gap-2">
              {/* Navigation items remain same as original */}
            </NavigationMenuList>
          </NavigationMenu>
        </div>

        {/* Auth Section - Desktop */}
        <div className="hidden lg:flex items-center gap-4">
          <ModeToggle />
          {user ? (
            <DropdownMenu>
              <DropdownMenuTrigger className="focus:outline-none">
                <Avatar className="h-9 w-9 border-2 border-primary">
                  <AvatarImage src={user.image} />
                  <AvatarFallback className="bg-primary text-white">
                    {user.name[0].toUpperCase()}
                  </AvatarFallback>
                </Avatar>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuItem onClick={() => router.push('/profile')}>
                  👤 Profile
                </DropdownMenuItem>
                <DropdownMenuItem onClick={handleSignOut}>
                  🚪 Sign Out
                </DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          ) : (
            <div className="flex gap-3">
              <Button
                variant="outline"
                onClick={() => router.push('/login')}
                className="hover:bg-primary/10"
              >
                Sign In
              </Button>
              <Button onClick={() => router.push('/signup')}>
                Get Started
              </Button>
            </div>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden flex items-center gap-4">
          <ModeToggle />
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setIsOpen(!isOpen)}
            className="hover:bg-transparent"
          >
            {isOpen ? <XIcon className="h-6 w-6" /> : <MenuIcon className="h-6 w-6" />}
          </Button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 h-screen w-full bg-background z-50 overflow-y-auto">
          <div className="container py-8 space-y-6">
            {/* Mobile Navigation Items */}
            <div className="space-y-4">
              {/* Navigation links remain same as original */}
            </div>

            {/* Mobile Auth Section */}
            {user ? (
              <div className="space-y-4">
                <div className="flex items-center gap-4 p-4">
                  <Avatar className="h-12 w-12 border-2 border-primary">
                    <AvatarImage src={user.image} />
                    <AvatarFallback className="bg-primary text-white">
                      {user.name[0].toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium">{user.name}</p>
                    <p className="text-sm text-muted-foreground">{user.email}</p>
                  </div>
                </div>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => router.push('/profile')}
                >
                  View Profile
                </Button>
                <Button
                  variant="destructive"
                  className="w-full"
                  onClick={handleSignOut}
                >
                  Sign Out
                </Button>
              </div>
            ) : (
              <div className="space-y-4">
                <Button
                  className="w-full"
                  onClick={() => {
                    router.push('/login');
                    setIsOpen(false);
                  }}
                >
                  Sign In
                </Button>
                <Button
                  variant="outline"
                  className="w-full"
                  onClick={() => {
                    router.push('/signup');
                    setIsOpen(false);
                  }}
                >
                  Create Account
                </Button>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}