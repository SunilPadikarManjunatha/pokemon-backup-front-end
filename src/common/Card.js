import React from "react";
import { Image, Col } from "react-bootstrap";

import "./card.scss";

const Card = ({ item }) => {
  return (
    <>
      <Col key={"item-card" + item.id} className={"item-card"} md={3}>
        <div className="item-card-body mt-2">
          <Image src={item.image_url} fluid />
          <div className="summary">{item.name}</div>
        </div>
      </Col>
    </>
  );
};

export default Card;
