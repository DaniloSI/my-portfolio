"use client";

import { Folder, Home, Mail, Menu, User } from "lucide-react";
import Link from "next/link";
import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetClose, // Import SheetClose
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const navItems = [
  { href: "/", label: "Início", icon: Home },
  { href: "/about-me", label: "Sobre mim", icon: User },
  { href: "/projects", label: "Projetos", icon: Folder },
  { href: "/contact", label: "Contato", icon: Mail },
];

export function SiteNavigationMenu() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const openMobileMenu = () => setIsMobileMenuOpen(true);
  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <div className="flex items-center justify-between w-full h-16 px-1 md:px-3">
      <Link href="/" className="text-lg font-semibold text-foreground">
        Danilo de Oliveira
      </Link>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
          <SheetTrigger asChild>
            <Button
              variant="outline"
              size="icon"
              onClick={openMobileMenu} // Use named function
            >
              <Menu className="h-6 w-6" />
              <span className="sr-only">Open menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <SheetHeader className="text-left p-4 pb-2">
              <SheetTitle className="text-xl font-semibold">
                Portfólio
              </SheetTitle>
              <SheetDescription className="sr-only">
                Navegação principal do site para dispositivos móveis.
              </SheetDescription>
            </SheetHeader>
            <hr className="border-border mx-4" />
            <nav className="grid gap-4 text-lg font-medium p-4 pt-2">
              {navItems.map((item) => (
                <SheetClose asChild key={item.label}>
                  <Link
                    href={item.href}
                    className="flex items-center gap-3 pl-5 pr-3 py-1 rounded-md text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                    onClick={closeMobileMenu} // Use named function
                  >
                    <item.icon className="w-5 h-5" />
                    <span>{item.label}</span>
                  </Link>
                </SheetClose>
              ))}
            </nav>
          </SheetContent>
        </Sheet>
      </div>

      {/* Desktop Menu */}
      <NavigationMenu className="hidden md:flex">
        <NavigationMenuList>
          {navItems.map((item) => (
            <NavigationMenuItem key={item.label}>
              <NavigationMenuLink
                asChild
                className={navigationMenuTriggerStyle()}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
}
