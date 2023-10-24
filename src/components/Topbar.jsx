import { Link } from "react-scroll";
import { BsFillTelephoneFill } from "react-icons/bs";
import { BiSolidUser } from "react-icons/bi";
import { AiTwotoneLock } from "react-icons/ai";

const Topbar = () => {
  const topItems = [
    { link: "About Us", path: "about-us" },
    { link: "FAQ", path: "faq" },
    { link: "Pay Invoice", path: "pay-invoice" },
    { link: "Webmail", path: "webmail" },
    { link: "Contact Us", path: "contact-us" },
  ];

  return (
    <div className="h-12 w-full bg-ddnsDarkGrey text-ddnsGrey py-4 lg:px-20 px-4 hidden md:flex justify-between gap-12 items-center">
      <div className="flex gap-4 items-center text-sm">
        <BsFillTelephoneFill />
        <p>
          Call our Sales & Support Team on{" "}
          <span className="text-white font-semibold">03 9815 6868</span>
        </p>
      </div>

      <nav>
        <ul className="md:flex space-x-6 hidden">
          {topItems.map(({ link, path }) => (
            <Link
              to={link}
              key={path}
              className="block text-sm  hover:text-ddnsSilver transition-all duration-300 cursor-pointer"
            >
              {link}
            </Link>
          ))}
        </ul>
      </nav>

      <div className="flex justify-between items-center text-sm gap-4 text-white">
        <div className="flex justify-between items-center gap-2 cursor-pointer hover:text-ddnsPrimary duration-300">
          <BiSolidUser />
          <p>Login</p>
        </div>

        <div className="flex justify-between items-center gap-2 cursor-pointer hover:text-ddnsPrimary duration-300">
          <AiTwotoneLock />
          <p>Register</p>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
