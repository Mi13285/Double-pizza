import React from "react";
import { useState } from "react";
import Gallery from "./Gallery";
import s from "./Content.module.css";
export default function Content({ data }) {
  const images = data.map((item) => item.photo);
  console.log("data", data);
  const [currentLeftImage, setCurrentLeftImage] = useState(0);
  const [currentRightImage, setCurrentRightImage] = useState(0);
  const controlLeftStyle = {
    Left: "125px",
  };
  const controlRightStyle = {
    right: "125px",
  };

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
            <p>{data[currentLeftImage].price}Р</p>
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

          <p>{data[currentLeftImage].diameter}</p>
          <p>{data[currentLeftImage].price}P</p>
        </div>
      </div>
      <p className={s.summary}>
        Summary Price:{" "}
        {data[currentLeftImage].price + data[currentRightImage].price}
      </p>
      <button> Add to cart</button>
    </div>
  );
}
