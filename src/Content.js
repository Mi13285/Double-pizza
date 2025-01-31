import React from "react";
import { useState } from "react";
import Gallery from "./Gallery";
import s from "./Content.module.css";
export default function Content({ data, cart, setCart }) {
  const images = data.map((item) => item.photo);
  console.log("images222", images);
  console.log("data", data);
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);

  const order = cart;

  const controlLeftStyle = {
    Left: "125px",
  };
  const controlRightStyle = {
    right: "125px",
  };

  function addToCart() {
    console.log(data[currentLeftImage].title);
    order.push({
      title1: data[currentLeftImage].title,
      title2: data[currentRightImage].title,
      summary: +data[currentLeftImage].price + +data[currentRightImage].price,
    });
    setCart(order);
    alert("ДОБАВЛЕННО В ЗАКАЗ");
  }

  return (
    <div className={s.root}>
      <div className={s.galleries}>
        <div className={s.LeftBlock}>
          <div className={s.galleryLeftBlock}>
            <p classes={s.title}>{data[currentLeftImage].title}</p>
            <p className={s.desc}>{data[currentLeftImage].desc}</p>
            <Gallery
              images={images}
              vertical={true}
              width={550}
              height={600}
              infinity={true}
              controlStyle={controlLeftStyle}
              currentImage={currentLeftImage}
              setCurrentImage={setCurrentLeftImage}
            />
            <p className={s.price}>ЦЕНА:{data[currentLeftImage].price} </p>
            <p>{data[currentLeftImage].diameter}</p>
          </div>
        </div>
        <div className={s.RightBlock}>
          <p className={s.title}>{data[currentRightImage].title}</p>
          <p className={s.desc}>{data[currentRightImage].desc}</p>
          <div className={s.galleryRightBlock}>
            <Gallery
              images={images}
              vertical={true}
              width={550}
              height={600}
              infinity={true}
              controlStyle={controlRightStyle}
              currentImage={currentRightImage}
              setCurrentImage={setCurrentRightImage}
            />
          </div>

          <p>{data[currentRightImage].diameter}</p>
          <p className={s.price}>ЦЕНА:{data[currentRightImage].price}</p>
        </div>
      </div>
      <div className={s.footer}>
        <p className={s.summary}>
          ИТОГО:{" "}
          {+data[currentLeftImage].price + +data[currentRightImage].price}
        </p>
        <button className={s.button} onClick={addToCart}>
          ДОБАВИТЬ
        </button>
      </div>
    </div>
  );
}
