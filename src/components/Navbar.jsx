import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";
import { Link } from "react-scroll";

// react icons
import { FaXmark, FaBars } from "react-icons/fa6";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  // set toggle Menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 48) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.addEventListener("scroll", handleScroll); // Use removeEventListener to clean up the event listener
    };
  }, []);

  //nav items array

  const navItems = [
    { link: "Domain Names", path: "domain-names" },
    { link: "Web Hosting", path: "web-hosting" },
    { link: "Web Builder", path: "web-builder" },
    { link: "SSL Certificates & VPS", path: "ssl-certificates-vps" },
    { link: "Email & Microsoft 365", path: "email-microsoft365" },
  ];
  return (
    <header
      className={`w-full bg-white py-4 lg:px-20 px-4 ${
        isSticky ? "sticky top-0 left-0 right-0 border-b" : ""
      }`}
    >
      <nav>
        <div className="flex justify-between items-center text-base gap-8 ">
          <a href="">
            <img
              src={logo}
              alt=""
              className={`${isSticky ? "w-30" : "w-40"} inline-block`}
            />
          </a>

          {/* nav items for large devices */}
          <ul className="md:flex space-x-12 hidden ">
            {navItems.map(({ link, path }) => (
              <Link
                key={path}
                to={path}
                className="block text-base text-ddnsDarkGrey cursor-pointer hover:text-ddnsPrimary transition-all duration-300"
              >
                {link}
              </Link>
            ))}
          </ul>

          {/* btn for large devices */}
          <div className="space-x-12 hidden lg:flex items-center">
            <button className="bg-ddnsPrimary text-white py-2 px-4 transition-all duration-500 rounded hover:bg-ddnsSecondary ">
              Get Started
            </button>
          </div>
          {/* menu btn for only mobile devices */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-ddnsDarkGrey focus:outline-none focus:text-gray-500"
            >
              {isMenuOpen ? <FaXmark className="h-6 w-6 " /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* items for mobile devices */}
        <div
          className={`space-y-4 px-4 mt-20 py-7 z-30 bg-ddnsPrimary ${
            isMenuOpen ? "block fixed top-0 right-0 left-0" : "hidden"
          }`}
        >
          {navItems.map(({ link, path }) => (
            <Link
              key={path}
              to={path}
              className="block text-base text-white hover:text-gray-200"
            >
              {link}
            </Link>
          ))}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
