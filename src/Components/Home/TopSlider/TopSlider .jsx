import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const sliderImages = [
  {
    img: "https://i.ibb.co.com/nMk9JXF7/image.png",
    title: "Delicious Food",
    subtitle: "Get your favorite meals delivered fast",
  },
  {
    img: "https://i.ibb.co.com/xtmYJrQ1/image.png",
    title: "Fast Delivery",
    subtitle: "We reach your door in minutes",
  },
  {
    img: "https://i.ibb.co.com/tw4NK5LF/image.png",
    title: "Fresh & Hot",
    subtitle: "Your order comes with love ❤️",
  },
];

const TopSlider = () => {
  return (
    <div className="relative w-full h-[250px] md:h-[420px] overflow-hidden my-[60px] md:rounded-xl">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={900}
        className="w-full h-full"
      >
        {sliderImages.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <img
                src={item.img}
                className="w-full h-full object-cover"
                alt="slider"
              />

              {/* Text Over Image */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-lg mb-4">{item.subtitle}</p>

                <button className="btn bg-red-600 border-none text-white hover:bg-red-700 px-6">
                  Order Now
                </button>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default TopSlider;
