// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import Swiper core and required modules
import SwiperCore, { Autoplay, Pagination, Navigation } from "swiper";

// install Swiper modules
SwiperCore.use([Autoplay, Pagination, Navigation]);

const events = [
  {
    title: "Event 1",
    image: "https://picsum.photos/1920/1080",
    date: "2020-01-01",
    time: "10:00",
    location: "Location 1",
    description: "Description 1",
  },
  {
    title: "Event 2",
    image: "https://picsum.photos/1920/1080",
    date: "2020-01-01",
    time: "10:00",
    location: "Location 2",
    description: "Description 2",
  },
  {
    title: "Event 3",
    image: "https://picsum.photos/1920/1080",
    date: "2020-01-01",
    time: "10:00",
    location: "Location 3",
    description: "Description 3",
  },
  {
    title: "Event 4",
    image: "https://picsum.photos/1920/1080",
    date: "2020-01-01",
    time: "10:00",
    location: "Location 4",
    description: "Description 4",
  },
];

const Carousel = () => {
  return (
    <>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        className="mySwiper"
      >
        {events.map((event) => (
          <SwiperSlide key={event.title}>
            <img src={event.image} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default Carousel;
