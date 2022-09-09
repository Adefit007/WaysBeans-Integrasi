import React from "react";
import { Card } from "react-bootstrap";

import convertRupiah from "rupiah-format";

export default function ListProduct({ item }) {
  return (
    <div>
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={item.image}
          className="imageProduct fluid"
        />
        <Card.Body className=" bgCard">
          <Card.Title className="fw-bold text-primer">{item.title}</Card.Title>
          <Card.Text className="m-0 text-primer2">
            {convertRupiah.convert(item.price)}
          </Card.Text>
          <Card.Text className="m-0 text-primer2">
            Stock : {item.stock}
          </Card.Text>
        </Card.Body>
      </Card>
    </div>
  );
}
