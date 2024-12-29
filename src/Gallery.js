import { useState } from "react";
import { ShoppingCart } from "lucide-react";
import classes from "./Modal/Gallery.module.css";
import useSize from "./App.js";

const WIDTH_DEFAULT_HORIZONTAL = 800;
const HEIGHT_DEFAULT_HORIZONTAL = 400;
const WIDTH_DEFAULT_VERTICAL = 400;
const HEIGHT_DEFAULT_VERTICAL = 600;

export default function Gallery({
  images = [],
  vertical = false,
  infinity = false,
  width,
  height,
  controlStyle = {},
  currentImage,
  setCurrentImage,
}) {
  const { widthScreen } = useSize();

  const defaultWidth = vertical
    ? width || WIDTH_DEFAULT_VERTICAL
    : width || WIDTH_DEFAULT_HORIZONTAL;
  const defaultHeight = vertical
    ? height || HEIGHT_DEFAULT_VERTICAL
    : height || HEIGHT_DEFAULT_HORIZONTAL;

  function onPrevArrow() {
    if (infinity && currentImage === 0) {
      setCurrentImage(images.length - 1);
    } else {
      setCurrentImage(currentImage - 1);
    }
  }

  function onNextArrow() {
    if (infinity && currentImage === images.length - 1) {
      setCurrentImage(0);
    } else {
      setCurrentImage(currentImage + 1);
    }
  }

  const ratio = defaultWidth / widthScreen;
  const widthImage = widthScreen < defaultWidth ? widthScreen : defaultWidth;
  const heightImage =
    widthScreen < defaultWidth ? defaultHeight / ratio : defaultHeight;

  const imageStyle = {
    width: widthImage,
    height: heightImage,
  };

  const arrowIndent = vertical
    ? {
        left: widthImage / 2 - 20 + "px;",
      }
    : {
        top: heightImage / 2 - 20 + "px;",
      };

  return (
    <div className={classes.root}>
      {(infinity || currentImage > 0) && (
        <div
          className={vertical ? classes.prevArrowVertical : classes.prevArrow}
          style={controlStyle || arrowIndent}
          onClick={onPrevArrow}
        ></div>
      )}

      <img
        className={classes.images}
        style={imageStyle}
        src={images[currentImage]}
        alt=""
      />

      {(infinity || currentImage !== images.length - 1) && (
        <div
          className={vertical ? classes.nextArrowVertical : classes.nextArrow}
          style={controlStyle || arrowIndent}
          onClick={onNextArrow}
        ></div>
      )}
      <ShoppingCart icon={classes.cart} />
    </div>
  );
}
