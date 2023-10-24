import { Card } from "flowbite-react";
import { BsFillCheckCircleFill } from "react-icons/bs";

const Plans = () => {
  const plans = [
    {
      id: 1,
      title: "Let's Get Started",
      description: "Start your Business with us",
      feature1: "FREE Web Builder",
      feature2: "FREE Webmail",
      feature3: "FREE Support",
      feature4: "Perfect for a Startup",
    },
    {
      id: 2,
      popular: true,
      title: "Hosting Packages",
      description: "Fast, Secure and Reliable",
      feature1: "Feature Packed",
      feature2: "Email Services",
      feature3: "Website Backups",
      feature4: "Local Servers/Support",
    },
    {
      id: 3,
      title: "Email Services",
      description: "Business Email",
      feature1: "FREE Webmail",
      feature2: "Business Grade",
      feature3: "Secure",
      feature4: "Use on Multiple Devices",
    },
    {
      id: 4,
      title: "Weebly Web Builder",
      description: "Create your Own Website",
      feature1: "Easy to Use",
      feature2: "Email Services",
      feature3: "Build Like a Pro",
      feature4: "No Experience Needed",
    },
  ];

  return (
    <div className="md:px-20 px-4 py-16 max-w-screen-2x1 mx-auto bg-ddnsSilver pb-[140px] ">
      <div className="mt-16 md:w-1/2 mx-auto text-center">
        <h2 className="text-4xl text-ddnsDarkGrey font-semibold mb-2">
          Managed Our Plans
        </h2>

        <p className="text-ddnsGrey mt-6">
          Our plans at an affordable price. Distinctively recaptiualize
          principle-centered core competencies through core competencies.
        </p>
      </div>
      <div className="mt-14 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:w-11/12 mx-auto gap-6 ">
        {plans.map((plan) => (
          <Card
            key={plan.id}
            className={`border-2 hover:border-2 hover:border-ddnsLightBlue duration-1000 ${
              plan.popular ? "border-ddnsLightBlue" : ""
            } cursor-pointer`}
          >
            <h3 className="flex items-baseline text-ddnsLightBlue text-md font-semibold justify-center">
              {plan.title}
              {plan.popular && (
                <button className="text-[#ff1641] font-normal text-sm bg-[#ffdce5] px-2 py-1 ml-2 rounded">
                  popular
                </button>
              )}
            </h3>
            <ul className="my-7 space-y-5">
              <li className="flex space-x-3">
                <BsFillCheckCircleFill />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {plan.feature1}
                </span>
              </li>
              <li className="flex space-x-3">
                <BsFillCheckCircleFill />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {plan.feature2}
                </span>
              </li>
              <li className="flex space-x-3">
                <BsFillCheckCircleFill />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {plan.feature3}
                </span>
              </li>
              <li className="flex space-x-3">
                <BsFillCheckCircleFill />
                <span className="text-base font-normal leading-tight text-gray-500 dark:text-gray-400">
                  {plan.feature4}
                </span>
              </li>
            </ul>
            <button
              className="inline-flex w-full justify-center rounded-lg bg-ddnsExtraLightBlue px-5 py-2.5 text-center text-sm font-medium text-white hover:bg-ddnsLightBlue focus:outline-none duration-300"
              type="button"
            >
              <p>Choose plan</p>
            </button>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Plans;
