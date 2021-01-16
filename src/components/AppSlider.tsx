import React, { useEffect, useRef, useState } from 'react';
import Slider, { Settings } from 'react-slick';
import styled from 'styled-components';

interface Props {
  images: string[] | undefined;
  showThumbnail?: boolean;
}

const Image = styled.img`
  vertical-align: middle;
  width: 100%;
  max-width: 100%;
  border-radius: 4px;
  margin: 0 0 5px 0;
  padding: 2px;
  &.nav-img {
    padding: 0 5px;
  }
`;

const AppSlider: React.FC<Props> = ({ images, showThumbnail }) => {
  const [nav1, setNav1] = useState<Slider | null>(null);
  const [nav2, setNav2] = useState<Slider | null>(null);
  const slider1 = useRef<Slider>(null);
  const slider2 = useRef<Slider>(null);

  useEffect(() => {
    setNav1(slider1.current);
    setNav2(slider2.current);
  }, []);

  const settings: Settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1500,
    lazyLoad: 'progressive',
    infinite: true,
    pauseOnHover: true,
    arrows: false,
  };

  return (
    <div>
      <Slider
        {...settings}
        asNavFor={showThumbnail ? (nav2 as Slider) : undefined}
        ref={showThumbnail ? slider1 : undefined}
      >
        {images?.map((image) => {
          return (
            <div key={image}>
              <Image src={image} alt={image}></Image>
            </div>
          );
        })}
      </Slider>
      {showThumbnail && (
        <Slider
          asNavFor={nav1 as Slider}
          ref={slider2}
          slidesToShow={3}
          swipeToSlide={true}
          autoplay
          arrows={false}
          focusOnSelect={false}
        >
          {images?.map((image) => {
            return (
              <div key={image}>
                <Image className='nav-img' src={image} alt={image}></Image>
              </div>
            );
          })}
        </Slider>
      )}
    </div>
  );
};

export default AppSlider;
