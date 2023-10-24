import { Footer } from "flowbite-react";
import {
  BsDribbble,
  BsFacebook,
  BsGithub,
  BsInstagram,
  BsTwitter,
} from "react-icons/bs";

const MyFooter = () => {
  return (
    <Footer bgDark>
      <div className="w-full">
        <div className="grid w-full grid-cols-2 gap-8 px-6 py-8 md:grid-cols-4 lg:px-20 mx-auto  ">
          <div>
            <Footer.Title title="Contact" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">
                Level 1, 2 Warner Street, Huntingdale VIC 3166, Australia
              </Footer.Link>
              <Footer.Link href="#">03 9815 6868</Footer.Link>
              <Footer.Link href="#">9:00am - 5:30pm</Footer.Link>
              <Footer.Link href="#">Monday to Friday</Footer.Link>
            </Footer.LinkGroup>
          </div>
          <div>
            <Footer.Title title="Domains" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Search</Footer.Link>
              <Footer.Link href="#">Transfer</Footer.Link>
              <Footer.Link href="#">Renew</Footer.Link>
              <Footer.Link href="#">Pricing</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="Hosting" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Web</Footer.Link>
              <Footer.Link href="#">Email</Footer.Link>
              <Footer.Link href="#">Premium DNS</Footer.Link>
              <Footer.Link href="#">URL Forwarding</Footer.Link>
            </Footer.LinkGroup>
          </div>

          <div>
            <Footer.Title title="legal" />
            <Footer.LinkGroup col>
              <Footer.Link href="#">Privacy Policy</Footer.Link>
              <Footer.Link href="#">Licensing</Footer.Link>
              <Footer.Link href="#">Terms & Conditions</Footer.Link>
            </Footer.LinkGroup>
          </div>
        </div>
        <div className="flex justify-center items-center gap-12 mb-8">
          <img
            src="https://www.ddns.com.au/templates/ddns/img/payment-icons/visa.svg"
            alt=""
            className="w-12 h-12"
          />
          <img
            src="https://www.ddns.com.au/templates/ddns/img/payment-icons/mastercard.svg"
            alt=""
            className="w-12 h-12"
          />
          <img
            src="https://www.ddns.com.au/templates/ddns/img/payment-icons/amex_svg.svg"
            alt=""
            className="w-8 h-8"
          />
          <img
            src="https://www.ddns.com.au/templates/ddns/img/payment-icons/commbank.svg"
            alt=""
            className="w-8 h-8"
          />
          <img
            src="https://www.ddns.com.au/templates/ddns/img/payment-icons/bpay.svg"
            alt=""
            className="w-10 h-10"
          />
        </div>
        <div className="w-full bg-gray-700 px-4 py-6 sm:flex sm:items-center sm:justify-between  px-4 lg:px-20 mx-auto  ">
          <Footer.Copyright
            by="Discount Domain Name Services | ABN 76 088 607 265 | All Rights Reserved"
            href="#"
            year={2023}
          />
          <div className="mt-4 flex space-x-6 sm:mt-0 sm:justify-center">
            <Footer.Icon href="#" icon={BsFacebook} />
            <Footer.Icon href="#" icon={BsInstagram} />
            <Footer.Icon href="#" icon={BsTwitter} />
            <Footer.Icon href="#" icon={BsGithub} />
            <Footer.Icon href="#" icon={BsDribbble} />
          </div>
        </div>
      </div>
    </Footer>
  );
};

export default MyFooter;
