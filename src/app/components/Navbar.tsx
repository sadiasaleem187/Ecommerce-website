"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ShoppingBag } from "lucide-react";
import { useShoppingCart } from "use-shopping-cart";
const links = [
  { name: "Home", href: "/" },
  { name: "Men", href: "/Men" },
  { name: "Women", href: "Women" },
  { name: "Teens", href: "/Teens" },
];
export default function Navbar() {
  const pathName = usePathname();
  const {handleCartClick}=useShoppingCart()
  return (
    <header className="mb-8 border-b">
      <div className="flex items-center justify-between mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl">
        <Link href="/">
          <h1 className="text-2xl md:text-4xl font-bold">
            Next <span className="text-primary">Commerce</span>
          </h1>
        </Link>
        <nav className="hidden gap-12 lg:flex 2xl:ml-16">
          {links.map((link, idx) => (
            <div key={idx}>
              {pathName === link.href ? (
                <Link
                  className="text-lg font-semibold text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              ) : (
                <Link
                  className="text-lg font-semibold text-gray-600 transition duration-100 hover:text-primary"
                  href={link.href}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>
        <div className="flex divide-x py-2">
          <Button
            variant={"outline"}
            onClick={()=>handleCartClick()}
            className="flex flex-col gap-y-1.5 h-10 w-12 sm:h-14 sm:w-20 md:h-14 md:w-24 rounded-none hover:bg-gray-100"
          >
            <ShoppingBag />
            <span className="hidden text-xs font-semibold text-gray-700 sm:block">
              Cart
            </span>
          </Button>
        </div>
      </div>
    </header>
  );
}
