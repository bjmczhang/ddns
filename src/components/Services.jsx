import { PiPlugsConnectedDuotone } from "react-icons/pi";
import { PiRecycleDuotone } from "react-icons/pi";
import { PiHeadsetDuotone } from "react-icons/pi";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Super Easy to Use",
      description: "Increase sales by showing true dynamics of your website.",
      image: <PiPlugsConnectedDuotone className="w-8 h-8" />,
    },
    {
      id: 2,
      title: "Fast & Reliable",
      description:
        "Build your online store’s trust using Social Proof & Urgency.",
      image: <PiRecycleDuotone className="w-8 h-8" />,
    },
    {
      id: 3,
      title: "Expert Support",
      description:
        "Realize importance of social proof in customer’s purchase decision.",
      image: <PiHeadsetDuotone className="w-8 h-8" />,
    },
  ];
  return (
    <div className="md:px-20 px-4 py-16 max-w-screen-2x1 mx-auto bg-ddnsSilver pb-[140px]">
      {/* service card */}
      <div className="mt-16 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-ddnsDarkGrey font-semibold mb-2">
          100% Australian Owned & Operated
        </h2>
        <h4 className="text-2xl text-ddnsDarkGrey font-semibold mb-2">
          Voted Best Customer Service Registrar 2022
        </h4>
        <p className="text-ddnsGrey mt-6">
          Grow your website faster by using hostlar as your foundation.
          Dynamically streamline principle-centered technologies.
        </p>
      </div>

      <div className="mt-14 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-12">
        {services.map((service) => (
          <div
            key={service.id}
            className="px-4 py-12 text-center md:w-[300px] mx-auto md:h-80 rounded-md shadow cursor-pointer hover:-translate-y-2 hover:border-b-4 hover:border-ddnsBlue transition-all duration-500 items-center justify-center h-full bg-white"
          >
            <div className="bg-[#e8f0f5] mb-6 h-14 w-14 mx-auto rounded-tl-3xl rounded-br-3xl text-ddnsBlue">
              {service.image}
            </div>
            <h4 className="text-2xl font-semibold text-ddnsDarkGrey mb-6 px-2">
              {service.title}
            </h4>
            <p className="text-sm text-ddnsGrey">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
