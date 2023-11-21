// import { products } from "../Constants"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import { TbCurrencyNaira } from "react-icons/tb";

// import './styles.css';

// import required modules
import { Autoplay, Pagination } from "swiper/modules";
import { Adaugo, Belinda, Edazar, Kayra, Kunmi } from "../assets/img";

const Products = () => {
  return (
    <section id="products" className="px-12 m-10">
      <div>
        <h3>Our Product</h3>
        <p></p>
      </div>
      <div className="px-11">
        <Swiper
          slidesPerView={3}
          spaceBetween={30}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          pagination={{
            clickable: true,
          }}
          modules={[Autoplay, Pagination]}
          className="mySwiper "
        >
          <SwiperSlide>
            <div className="text-start">
              <img src={Adaugo} alt="Belinda" className="mb-5 rounded-md" />
              <h3 className="">Belinda</h3>
              <p>SIZE MEDIUM</p>
              <span className="flex justify-items-center items-center">
                {" "}
                <TbCurrencyNaira /> 12,000.00
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-start">
              <img src={Edazar} alt="" />
              <h3>Edazar</h3>
              <p>SIZE MEDIUM</p>
              <span className="flex justify-items-center items-center">
                <TbCurrencyNaira/> 12,000.00
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-start ">
              <img src={Belinda} alt="Belinda" />
              <h3>Belinda</h3>
              <p>PEARL BEADED BAG AND IT HAS A LONG STRAP</p>
              <span className="flex justify-items-center items-center">
                <TbCurrencyNaira/> 12,000.00
              </span>
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className="text-start">
              <img src={Kayra} alt="Kayra" />
              <h3>Kayra</h3>
              <p>SIZE MINI</p>
              <span className="flex justify-items-center items-center">
                <TbCurrencyNaira/> 8,000.00
              </span>
            </div>
          </SwiperSlide>
        <SwiperSlide>
          <div className="text-start">
            <img src={Kunmi} alt="Kunmi" />
            <h3>Kunmi</h3>
              <p>SIZE MEDIUM</p>
              <span className="flex justify-items-center items-center">
                <TbCurrencyNaira/> 12,000.00
              </span>
          </div>
        </SwiperSlide>
        {/* <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide> */}
        </Swiper>
      </div>
    </section>
  );
};

export default Products;
