import {PicsumImage} from "@lib/lorem-picsum";
import {ImageCard} from "@components/ImageCard";
import {Swiper, SwiperSlide} from "swiper/react";
import {FreeMode, Navigation, EffectFade} from "swiper/modules";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import "swiper/css/effect-fade";
import useViewport from "@hooks/useViewport";

type CarouselLayoutProps = {
  images: PicsumImage[];
};

export const CarouselLayout = (props: CarouselLayoutProps) => {
  const {width} = useViewport();
  return (
    <Swiper
      data-testid="carousel-layout-container"
      loop={true}
      spaceBetween={10}
      navigation={width > 420}
      modules={[FreeMode, Navigation, EffectFade]}
      className="w-screen md:w-[90vw]"
    >
      {props.images.map(image => (
        <SwiperSlide
          key={image.id}
          className={`flex h-[80vh] items-center justify-center`}
        >
          <ImageCard image={image} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
};
