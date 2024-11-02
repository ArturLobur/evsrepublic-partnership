import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

import {A11y, Navigation, Pagination, Scrollbar} from "swiper/modules";
import {Swiper, SwiperSlide} from "swiper/react";

import slider1 from "../../assets/slider-images/slide-1.jpg";
import slider2 from "../../assets/slider-images/slide-2.jpeg";
import slider3 from "../../assets/slider-images/slide-3.jpeg";
import slider4 from "../../assets/slider-images/slide-4.jpeg";

const SectionSemaSlider = () => {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      navigation
      pagination={{clickable: true}}
      scrollbar={{draggable: true}}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      style={{display: "flex", justifyContent: "center"}}
    >
      <SwiperSlide>
        <img src={slider1} alt="Slide 1" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider2} alt="Slide 2" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider3} alt="Slide 3" />
      </SwiperSlide>
      <SwiperSlide>
        <img src={slider4} alt="Slide 4" />
      </SwiperSlide>
    </Swiper>
  );
};

export default SectionSemaSlider;