import { Card, Form, InputGroup, Button } from "react-bootstrap";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
import { BiShoppingBag } from "react-icons/bi";

import { useState } from "react";

function ProductDetails() {
  const [activeColor, setActiveColor] = useState(null);
  const [activeSize, setActiveSize] = useState(null);
  const colors = [
    { label: "Color 1", value: "color1", color: "black" },
    { label: "Color 2", value: "color2", color: "blue" },
    { label: "Color 3", value: "color3", color: "darkblue" },
  ];
  const sizes = [
    { label: "S", value: "S" },
    { label: "M", value: "M" },
    { label: "L", value: "L" },
  ];
  function handleColor(button) {
    setActiveColor(button);
  }
  function handleSize(size) {
    setActiveSize(size);
  }

  let [count, setCount] = useState(0);
  function incrementCount() {
    if (!isNaN(count)) {
      count = count + 1;
    } else {
      count = 0;
    }
    setCount(count);
  }
  function decrementCount() {
    if (!isNaN(count) && count > 0) {
      count = count - 1;
    } else {
      count = 0;
    }
    setCount(count);
  }
  return (
    <div>
      <Card className="border border-0 pt-2">
        <Card.Body className="px-4">
          <Card.Title className="fw-bold py-2 fs-2">Product Name</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            Card Subtitle
          </Card.Subtitle>
          <Card.Text className="fw-bold py-1 fs-3" style={{ color: "#d26e4b" }}>
            80.00$
          </Card.Text>
          <Card.Text style={{ color: "#ff602d" }}>
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSFill />
            <RiStarSLine />
            <span className="text-dark ps-2" style={{ fontSize: "0.8rem" }}>
              (2 reviews)
            </span>
          </Card.Text>
          <Card.Text>
            Sed egestas, ante et vulputate volutpat, eros pede semper est, vitae
            luctus metus libero eu augue. Morbi purus liberpuro ate vol faucibus
            adipiscing.
          </Card.Text>
        </Card.Body>
      </Card>
      <div className="d-flex text-center px-4 gap-3">
        <p className="pt-1">Color:</p>
        <div className="option" style={{ width: "fit-content" }}>
          {colors.map((color) => (
            <button
              key={color.value}
              onClick={() => handleColor(color.value)}
              className={activeColor === color.value ? "active" : ""}
              style={{ backgroundColor: color.color }}
            ></button>
          ))}
        </div>
      </div>
      <div className="d-flex text-center p-4 gap-3">
        <p className="">Size:</p>
        <div className="option size-option" style={{ width: "fit-content" }}>
          {sizes.map((size) => (
            <button
              key={size.value}
              onClick={() => handleSize(size.value)}
              className={activeSize === size.value ? "active" : ""}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>
      <hr className="p-0 m-0" />
      <Form className="d-flex text-center p-4 gap-3">
        <InputGroup style={{ width: "150px" }}>
          <Button
            variant=""
            style={{ borderColor: "#ced4da" }}
            className="input-group-text bg-body"
            onClick={decrementCount}
          >
            <AiOutlineMinus style={{ fontSize: "1.2rem" }} className="mb-1" />
          </Button>
          <Form.Control
            type="number"
            className="p-2 text-center"
            value={count}
          />
          <Button
            variant=""
            style={{ borderColor: "#ced4da" }}
            className="input-group-text bg-body"
            onClick={incrementCount}
          >
            <AiOutlinePlus style={{ fontSize: "1.2rem" }} className="mb-1" />
          </Button>
        </InputGroup>
        <Button style={{ width: "200px" }}>
          <BiShoppingBag className="me-2 fs-4 mb-2" />
          Add to cart
        </Button>
      </Form>
    </div>
  );
}

export default ProductDetails;
