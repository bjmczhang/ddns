import { Carousel } from "flowbite-react";
import { Blockquote, Avatar, Rating } from "flowbite-react";
import TestimonialsBg from "../assets/testimonials-bg.png";

const Testimonials = () => {
  const divStyle = {
    backgroundImage: `url(${TestimonialsBg})`,
    backgroundSize: "auto 1200px",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
  };

  return (
    <div
      className="px-4 lg:px-20 py-16 max-w-screen-2x1 mx-auto "
      style={divStyle}
    >
      <div className="mt-16 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-ddnsDarkGrey font-semibold">
          What Our Customers Say About Us?
        </h2>

        <p className="text-ddnsGrey mt-6">
          Authoritatively reinvent client-centric e-markets via fully tested
          process. Objectively restore strategic initiatives through fully
          researched.
        </p>
      </div>
      <Carousel
        className="w-full mx-auto h-[500px] "
        leftControl="<"
        rightControl=">"
      >
        <figure className="max-w-screen-md">
          <div className="mb-4 flex items-center">
            <Rating size="md">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
          </div>
          <Blockquote>
            <p className="text-xl  text-ddnsDarkGrey ">
              <p>
                "I have used DDNS for over 20 years. Having managed mid-large
                agencies, and then owned small and boutique sized agencies, I
                have come into contact with a plethora of companies trying to
                compete in this space. Liz and her family actually own Discount
                Domain Name Services. They live and breathe this business. You
                don't get domain names stolen from under your feet after
                searching for availability. You don't get put on hold when you
                have a question or query. And you can genuinely take a deep sigh
                of relief knowing that when on-selling or recommending their
                services - nothing will go wrong. I could not paint a better
                picture of what my ideal IT/Domain/Hosting supplier would be."
              </p>
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-ddnsDarkGrey ">
                Sarah Lang
              </cite>
              <cite className="pl-3 text-sm text-ddnsLightGrey">
                The Yellow Brick Road Agency
              </cite>
            </div>
          </figcaption>
        </figure>
        <figure className="max-w-screen-md">
          <div className="mb-4 flex items-center">
            <Rating size="md">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
          </div>
          <Blockquote>
            <p className="text-xl  text-ddnsDarkGrey ">
              <p>
                "The Catch Group have been using DDNS to manage our domain
                portfolio for over 10 years. Liz and her team ensure our domain
                names are registered and renewed in a timely manner. The service
                we receive is both excellent and professional. The DDNS team
                have years of experience and their wealth of knowledge in domain
                names and hosting will benefit any business large or small. DDNS
                go above and beyond to assist us with domain purchases and
                portfolio acquisitions. They make it easy for us to get on with
                our business."
              </p>
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-ddnsDarkGrey ">
                Bronwyn Davidson
              </cite>
              <cite className="pl-3 text-sm text-ddnsLightGrey">
                GC Davidson Constructions Pty Ltd
              </cite>
            </div>
          </figcaption>
        </figure>
        <figure className="max-w-screen-md">
          <div className="mb-4 flex items-center">
            <Rating size="md">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
          </div>
          <Blockquote>
            <p className="text-xl  text-ddnsDarkGrey ">
              <p>
                "We have been using DDNS for a few years now. The customer
                experience is second to none. With one of our core philosophies
                being "get stuff done!" we love the fact that whenever we need
                something, or one of our clients needs something, we can send a
                quick email or pick up the phone and things just happen - very
                quickly and efficiently, no fuss. On many occasions, we have
                been told by people that they can provide the same services for
                less, but if you value relationships, personalised customer
                service and reliability, we can't recommend DDNS highly enough."
              </p>
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-ddnsDarkGrey ">
                John Di Natale
              </cite>
              <cite className="pl-3 text-sm text-ddnsLightGrey">
                johndinatale.com
              </cite>
            </div>
          </figcaption>
        </figure>
        <figure className="max-w-screen-md">
          <div className="mb-4 flex items-center">
            <Rating size="md">
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
              <Rating.Star />
            </Rating>
          </div>
          <Blockquote>
            <p className="text-xl  text-ddnsDarkGrey ">
              <p>
                " At Red&Crew we believe our clients deserve great service. A
                critical part of providing that service is choosing suppliers
                with that same level of commitment. For more than 15 years all
                our client websites have been hosted with DDNS. We are well
                supported, right here in Australia by the DDNS team, rely on
                their technical expertise and high level of service. We wouldn't
                even think of hosting anywhere else!"
              </p>
            </p>
          </Blockquote>
          <figcaption className="mt-6 flex items-center space-x-3">
            <div className="flex items-center divide-x-2 divide-gray-300 dark:divide-gray-700">
              <cite className="pr-3 font-medium text-ddnsDarkGrey ">
                Karen Parish
              </cite>
              <cite className="pl-3 text-sm text-ddnsLightGrey">Red&Crew</cite>
            </div>
          </figcaption>
        </figure>
      </Carousel>
    </div>
  );
};

export default Testimonials;
