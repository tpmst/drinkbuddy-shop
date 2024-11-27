import { useState } from "react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { buttonVariants } from "./ui/button";
import { Menu } from "lucide-react";
import { ModeToggle } from "./mode-toggle";
import Logo from "../assets/logo-transparent-png.png";
import { LuLogIn, LuLogOut } from "react-icons/lu";
import { useNavigate } from "react-router-dom";
import { useAuth } from "@/logic/security/useAuth";
import { useTheme } from "./theme-provider";

interface RouteProps {
  href: string;
  label: string;
}

const routeList: RouteProps[] = [
  {
    href: "#features",
    label: "Funktionen",
  },
  {
    href: "#pricing",
    label: "Pricing",
  },
  {
    href: "#contactUs",
    label: "Contact Us",
  },
  {
    href: "#faq",
    label: "FAQ",
  },
];

export const Navbar = () => {
  const { theme } = useTheme();
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="sticky border-b-[1px] top-0 z-40 w-full bg-white dark:border-b-slate-700 dark:bg-background">
      <NavigationMenu className="mx-auto">
        <NavigationMenuList className="container h-14 px-4 w-screen flex justify-between items-center">
          <NavigationMenuItem className="font-bold flex">
            <a
              rel="noreferrer noopener"
              href="/"
              className="ml-2 font-bold text-xl flex"
            >
              <div className="mt-16">
                <div
                  className={
                    theme === "dark"
                      ? "bg-gray-800 rounded shadow-lg"
                      : "bg-gray-200 rounded shadow-lg"
                  }
                >
                  <img src={Logo} alt="Logo" width={100} />
                </div>
              </div>
            </a>
          </NavigationMenuItem>

          {/* mobile */}
          <span className="flex md:hidden">
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger className="px-2">
                <Menu
                  className="flex md:hidden h-5 w-5"
                  onClick={() => setIsOpen(true)}
                >
                  <span className="sr-only">Menu Icon</span>
                </Menu>
              </SheetTrigger>

              <SheetContent side={"left"}>
                <SheetHeader>
                  <SheetTitle className="font-bold text-xl">
                    DrinkBuddy
                  </SheetTitle>
                </SheetHeader>
                <nav className="flex flex-col justify-center items-center gap-2 mt-4">
                  {routeList.map(({ href, label }: RouteProps) => (
                    <a
                      rel="noreferrer noopener"
                      key={label}
                      href={href}
                      onClick={() => setIsOpen(false)}
                      className={`text-[17px] hover:text-black ${buttonVariants(
                        {
                          variant: "ghost",
                        }
                      )}`}
                    >
                      {label}
                    </a>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </span>

          {/* desktop */}
          <nav className="hidden md:flex gap-2">
            {routeList.map((route: RouteProps, i) => (
              <a
                rel="noreferrer noopener"
                href={route.href}
                key={i}
                className={`text-[17px] hover:text-black ${buttonVariants({
                  variant: "ghost",
                })}`}
              >
                {route.label}
              </a>
            ))}
          </nav>

          {/* Login/Logout Button immer in der Navbar */}
          <AuthButton />
        </NavigationMenuList>
      </NavigationMenu>
    </header>
  );
};

const AuthButton: React.FC = () => {
  const { user, signOutUser, signInWithGoogle } = useAuth();
  const navigate = useNavigate();

  return (
    <div className="flex">
      <div className="mr-2">
        <ModeToggle />
      </div>

      <div className="flex gap-2">
        {user ? (
          <button
            onClick={() => {
              signOutUser();
              navigate("/home");
            }}
            className={`border ${buttonVariants({ variant: "secondary" })}`}
          >
            <LuLogOut className="mr-2 w-5 h-5" />
            Logout
          </button>
        ) : (
          <button
            onClick={() => signInWithGoogle()}
            className={`border ${buttonVariants({ variant: "secondary" })}`}
          >
            <LuLogIn className="mr-2 w-5 h-5" />
            Login
          </button>
        )}
      </div>
    </div>
  );
};
