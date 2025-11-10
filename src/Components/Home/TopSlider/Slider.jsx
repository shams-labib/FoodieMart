import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const Slider = ({ slider }) => {
  return (
    <div className="relative w-full h-[300px] md:h-[420px] overflow-hidden">
      <Swiper
        modules={[Autoplay, Pagination]}
        autoplay={{ delay: 2500, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        loop={true}
        speed={900}
        className="w-full h-full"
      >
        {slider?.map((item, i) => (
          <SwiperSlide key={i}>
            <div className="w-full h-full relative">
              <img
                src={item.img}
                className="w-full h-full object-cover"
                alt={item.title}
              />

              {/* Text Over Image */}
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center text-white px-6">
                <h2 className="text-3xl md:text-4xl font-bold mb-2 drop-shadow-lg">
                  {item.title}
                </h2>
                <p className="text-lg mb-4">{item.subtitle}</p>

                <button className="btn bg-gradient-to-r from-amber-500 to-orange-600 text-white hover:from-amber-600 hover:to-orange-700 border-none rounded-lg px-6">
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

export default Slider;
