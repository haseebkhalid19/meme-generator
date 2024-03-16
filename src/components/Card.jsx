import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { useNavigate } from "react-router-dom";

const MemeCard = (props) => {
  const navigate = useNavigate();
  const cardRef = useRef(null);

  useEffect(() => {
    const card = cardRef.current;

    gsap.from(card, {
      opacity: 0,
      y: 100,
      duration: 0.8,
      delay: props.delay,
    });
  }, [props.delay]);

  return (
    <div
      ref={cardRef}
      style={{ marginBottom: "20px" }}
      className="image-container tall"
    >
      <img
        src={props.img}
        alt="meme"
        width={200}
        onClick={() =>
          navigate(
            `/edit?url=${props.img}&box_count=${props.box_count}&id=${props.id}`
          )
        }
      />
    </div>
  );
};

export default MemeCard;
