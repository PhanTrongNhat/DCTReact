import React from "react";

export default function Rating(Props) {
  const { number } = Props;
  return (
    <div>
      <i
        className={
          number >= 1
            ? number > 1.5
              ? "fas fa-star"
              : "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color: "#FF4500" }}
      ></i>
      <i
        className={
          number >= 2
            ? number > 2.5
              ? "fas fa-star"
              : "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color: "#FF4500" }}
      ></i>
      <i
        className={
          number >= 3
            ? number > 3.5
              ? "fas fa-star"
              : "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color: "#FF4500" }}
      ></i>
      <i
        className={
          number >= 4
            ? number > 4.5
              ? "fas fa-star"
              : "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color: "#FF4500" }}
      ></i>
      <i
        className={
          number >= 5
            ? number > 5.5
              ? "fas fa-star"
              : "fas fa-star-half-alt"
            : "far fa-star"
        }
        style={{ color: "#FF4500" }}
      ></i>
    </div>
  );
}
