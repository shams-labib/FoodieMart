import { FaMapMarkerAlt } from "react-icons/fa";

const HeroSection = () => {
  return (
    <div
      data-aos="fade-up"
      className="bg-[#FFF8F6] py-20 my-[60px]  rounded-xl dark:bg-gray-900"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between px-6">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-5xl font-bold leading-[1.2]">
            <span className="text-red-600">Fast, Fresh</span>
            <br />
            <span className="text-red-600">& Right</span>{" "}
            <span className="text-gray-900">To Your Door</span>
          </h1>

          <p className="text-gray-600 text-lg">
            Order dishes from favorite restaurants near you.
          </p>

          <div className="flex w-full max-w-md">
            <input
              type="text"
              className="input input-bordered rounded-r-none w-full outline-none"
              placeholder="Enter your location"
            />
            <button
              className="btn bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg
              transition-all duration-500 ease-in-out shadow-md hover:shadow-lg border-0"
            >
              Find Food
            </button>
          </div>
        </div>
        <div className="mt-10 md:mt-0">
          <img
            src={"https://i.ibb.co.com/twt2tWcr/image.png"}
            alt="food app"
            className="w-[500px] drop-shadow-2xl"
          />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
