import React from "react";
import "./Specials.css";
import Button from "../../../Components/Button/Button";
import ImageCard from "../../../Components/ImageCard/ImageCard";
import { useNavigate } from "react-router-dom";
import pages from "../../../Utils/pages";

const specials = [
  {
    id: 1,
    title: "Greek salad",
    description:
      "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons. ",
    image:
      "https://i2.wp.com/www.downshiftology.com/wp-content/uploads/2018/08/Greek-Salad-main.jpg",
    price: "$12.99",
  },
  {
    id: 2,
    title: "Bruschetta",
    description:
      "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQNuWQw0zkC8vr7thJnAbIWydvPecfpUHBYHbSTpRXv&s",
    price: "$ 5.99",
  },
  {
    id: 3,
    title: "Lemon Dessert",
    description:
      "This comes straight from grandma’s recipe book, every last ingredient has been sourced and is as authentic as can be imagined.",
    image:
      "https://www.nzherald.co.nz/resizer/RZ0rYThDlchi0d3ph15ThOSFFbs=/576x324/smart/filters:quality(70)/cloudfront-ap-southeast-2.images.arcpublishing.com/nzme/6F3IEZEJYD46EE3GKVCPFZB4RI.jpg",
    price: "$ 5.00",
  },
];

const Specials = () => {
  const navigate = useNavigate();

  const onClickMenu = () => {
    navigate(pages.get("orders").path);
  };
  return (
    <div className="specials">
      <div className="header-container">
        <h1 className="specials-title">Specials</h1>
        <Button title={"Online Menu"} onClick={onClickMenu} />
      </div>

      <div className="header-list">
        {specials.map((special) => (
          <ImageCard
            key={special.id}
            title={special.title}
            description={special.description}
            image={special.image}
            price={special.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Specials;