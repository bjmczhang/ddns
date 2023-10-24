const CTABanner = () => {
  return (
    <div className="flex justify-between items-center w-full h-60 bg-ddnsBlue text-white py-4 lg:px-20 px-4">
      <div className="flex justify-between items-center gap-4">
        <h1 className="text-8xl font-bold leading-normal">
          <span className="text-ddnsPrimary">.</span>au
        </h1>
        <div className="text-2xl font-semibold pt-3">
          <h3>Australia's New</h3>
          <h3>Domain Name</h3>
        </div>
      </div>
      <div className="text-4xl font-semibold">
        <h1>
          GET YOUR <span className="text-ddnsPrimary">domain.au</span> NOW!
        </h1>
      </div>
      <div>
        <button className="border text-white font-semibold py-2 px-4 transition-all duration-500 rounded hover:bg-white hover:text-ddnsDarkGrey ">
          Register Now
        </button>
      </div>
    </div>
  );
};

export default CTABanner;
