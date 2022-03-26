import React, { useState} from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { FreeMode, Navigation, Thumbs } from "swiper";

import "../css/Swiper.css";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/thumbs";




function Carousel () {

const [thumbsSwiper, setThumbsSwiper] = useState(null);;
        return(
            <>
            <Swiper
              style={{
                "--swiper-navigation-color": "#fff",
                "--swiper-pagination-color": "#fff",
              }}
              spaceBetween={10}
              navigation={true}
              thumbs={{ swiper: thumbsSwiper }}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper2"
            >
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover.jpg?alt=media&token=9403f13d-3e09-489b-963d-c860a718a0d2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover2.jpg?alt=media&token=998e7eba-2970-4c3b-95f0-0e87a32b9216" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover3.jpg?alt=media&token=998e7eba-2970-4c3b-95f0-0e87a32b9216" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover4.jpg?alt=media&token=998e7eba-2970-4c3b-95f0-0e87a32b9216" />
              </SwiperSlide>
            </Swiper>
            <Swiper
              onSwiper={setThumbsSwiper}
              spaceBetween={10}
              slidesPerView={4}
              freeMode={true}
              watchSlidesProgress={true}
              modules={[FreeMode, Navigation, Thumbs]}
              className="mySwiper"
            >
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover.jpg?alt=media&token=9403f13d-3e09-489b-963d-c860a718a0d2" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover2.jpg?alt=media&token=998e7eba-2970-4c3b-95f0-0e87a32b9216" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover3.jpg?alt=media&token=998e7eba-2970-4c3b-95f0-0e87a32b9216" />
              </SwiperSlide>
              <SwiperSlide>
                <img src="https://firebasestorage.googleapis.com/v0/b/art3d-e7c95.appspot.com/o/proyects_covers%2Fhome_covers%2FCover4.jpg?alt=media&token=998e7eba-2970-4c3b-95f0-0e87a32b9216" />
              </SwiperSlide>
             
            </Swiper>

            </>
        )

}
export default Carousel;