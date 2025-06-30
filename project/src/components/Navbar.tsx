import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom"; // Replace if using something else
import { Button } from "./ui/button";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Menu } from "lucide-react";
import { useIsMobile } from "./hooks/use-mobile";
import exitFitnessLogo from "./images/exit-fitness-logo.png";

const navLinks = [
  { to: "/", label: "Home" },
  { to: "/diy", label: "DIY Program" },
  { to: "/profile-setup", label: "Profile Setup" },
];

const Navbar: React.FC<{ isShowLogin?: boolean }> = ({
  isShowLogin = true,
}) => {
  const location = useLocation();
  const pathname = location.pathname;
  const isMobile = useIsMobile();
  const navigate = useNavigate();

  return (
    <nav className="bg-fitness-purple w-full py-4 px-0 border-b border-gray-200">
      <div className="max-w-[1690px] mx-auto w-full flex items-center">
        {/* Logo */}
        <div className="flex items-center justify-center w-40 h-12 lg:w-56 lg:h-16 flex-shrink-0">
          <Link to="/">
            <img
              src={exitFitnessLogo}
              alt="EXIT Fitness Logo"
              className="h-10 object-contain cursor-pointer"
            />
          </Link>
        </div>

        {!isMobile && (
          <>
            <div
              className={`flex-1 flex ${
                isShowLogin ? "justify-center" : "justify-end me-10"
              } items-center h-16`}
            >
              <ul className="flex space-x-8">
                {navLinks.map((link) => (
                  <li key={link.to}>
                    <Link
                      to={link.to}
                      className={`group relative text-base font-sans font-semibold px-2 transition-colors duration-200 ${
                        pathname === link.to
                          ? "text-[#262626]"
                          : "text-[#262626]"
                      }`}
                    >
                      {link.label}
                      <span className="absolute left-0 -bottom-1 w-full h-0.5 bg-black scale-x-0 group-hover:scale-x-100 transition-transform duration-200 ease-in-out origin-left" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {isShowLogin && (
              <div className="flex items-center justify-center w-40 h-12 lg:w-56 lg:h-16">
                <Button
                  className="px-8 lg:px-10 py-3 lg:py-4 bg-[#222222] hover:text-white border-neutral-800 shadow-[4px_4px_0px_#FFFFFF] rounded-sm border border-solid font-semibold text-white text-base lg:text-lg tracking-[0] leading-[18px] hover:translate-y-1 hover:!bg-[#222222] hover:shadow-[2px_2px_0px_#FFFFFF] transition-all"
                  variant="outline"
                  onClick={() => navigate("/login")}
                >
                  Log In
                </Button>
              </div>
            )}
          </>
        )}

        {/* Mobile Menu */}
        {isMobile && (
          <div className="flex-1 flex justify-end items-center pr-4">
            <Sheet>
              <SheetTrigger asChild>
                <button aria-label="Open menu">
                  <Menu className="w-8 h-8 text-[#262626]" />
                </button>
              </SheetTrigger>
              <SheetContent className="fixed inset-0 z-50 bg-fitness-purple/50 flex flex-col items-center justify-center min-h-screen w-full max-w-full p-0 border-none shadow-none [&>button]:!top-6 [&>button]:!right-6 [&>button_svg]:!text-white [&>button_svg]:!w-10 [&>button_svg]:!h-10">
                <div className="flex flex-col items-center w-full h-full justify-center">
                  <ul className="flex flex-col w-full items-center max-w-[170px] mx-auto space-y-10">
                    {navLinks.map((link) => (
                      <li key={link.to} className="w-full flex justify-center">
                        <SheetClose asChild>
                          <Link
                            to={link.to}
                            className="block text-2xl font-bold text-white px-2 w-full text-center border-b border-white/30"
                          >
                            {link.label}
                          </Link>
                        </SheetClose>
                      </li>
                    ))}
                    {isShowLogin && (
                      <li className="w-full flex justify-center">
                        <SheetClose asChild>
                          <Button
                            className="w-full bg-transparent text-white text-2xl font-bold px-2 border-b border-white/30 shadow-none hover:bg-transparent hover:text-white focus:bg-transparent focus:text-white rounded-none text-center"
                            onClick={() => navigate("/login")}
                          >
                            Log in
                          </Button>
                        </SheetClose>
                      </li>
                    )}
                  </ul>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
