import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { NewImage, Seta1, Seta2, Container } from "@/styles/StylesNavbar-Menu";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";

const banners = [
  { id: 1, url: "../img/banner1.svg" },
  { id: 2, url: "../img/banner2.svg" },
  { id: 3, url: "../img/banner3.svg" },
];

const CustomPrevArrow = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <Seta2 onClick={onClick} className="custom-prev-arrow">
    <BsChevronLeft className="custom-arrow-icon" />
  </Seta2>
);

const CustomNextArrow = ({ onClick = () => {} }: { onClick?: () => void }) => (
  <Seta1 onClick={onClick} className="custom-next-arrow">
    <BsChevronRight className="custom-arrow-icon" />
  </Seta1>
);

const Carrousel: React.FC = () => {
  const [index, setIndex] = React.useState(0);

  const handleSelect = (selectedIndex: number) => {
    setIndex(selectedIndex);
  };

  return (
    <Container>
      <Carousel
        activeIndex={index}
        onSelect={handleSelect}
        prevIcon={<CustomPrevArrow />}
        nextIcon={<CustomNextArrow />}
      >
        {banners.map((banner) => (
          <Carousel.Item key={banner.id}>
            <NewImage
              src={banner.url}
              className="d-block container"
              alt={`Banner ${banner.id}`}
            />
          </Carousel.Item>
        ))}
      </Carousel>
    </Container>
  );
};

export default Carrousel;
