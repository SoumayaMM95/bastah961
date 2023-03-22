import {
  Col,
  Row,
  Container,
  Navbar,
  Form,
  Button,
  InputGroup,
  Offcanvas,
  ListGroup,
  Image,
} from "react-bootstrap";
// import Image from "next/image";
import { GoSearch } from "react-icons/go";
import { BsTelephone } from "react-icons/bs";
import { BiShoppingBag } from "react-icons/bi";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";

import { useState } from "react";

function Header() {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let [count, setCount] = useState(1);
  function incrementCount() {
    if (!isNaN(count)) {
      count = count + 1;
    } else {
      count = 0;
    }
    setCount(count);
  }
  function decrementCount() {
    if (!isNaN(count) && count > 1) {
      count = count - 1;
    } else {
      count = 1;
    }
    setCount(count);
  }
  return (
    <>
      <div className="d-none d-sm-block" style={{ marginBottom: "90px" }}>
        <Navbar bg="light" variant="light" className="pb-3" fixed="top">
          <Container>
            <Row className="w-100 pt-3">
              <Col lg={2} className="ps-5">
                <Navbar.Brand href="/">
                  <Image
                    alt=""
                    src="./images/logo.png"
                    width="64"
                    height="64"
                    className="d-inline-block"
                  />{" "}
                  BASTAH961
                </Navbar.Brand>
              </Col>
              <Col lg={6} className="px-5">
                <Form className="d-flex d-none d-sm-block">
                  <InputGroup>
                    <Form.Control
                      type="search"
                      placeholder="Search..."
                      className="border-end-0 p-2"
                      aria-label="Search"
                      style={{
                        boxShadow: "none",
                        borderColor: "#ff602d",
                        borderWidth: "2px",
                      }}
                    />
                    <Button
                      variant=""
                      style={{ borderColor: "#ff602d", borderWidth: "2px" }}
                      className="input-group-text bg-body border-start-0"
                    >
                      <GoSearch
                        style={{ fontSize: "1.2rem" }}
                        className="mb-1"
                      />
                    </Button>
                  </InputGroup>
                </Form>
              </Col>
              <Col lg={4} className="ps-3">
                <Row>
                  <Col xs={5} className="align-items-center">
                    <div className="d-flex">
                      <div>
                        <a href="" className="text-dark pe-2">
                          <BsTelephone className="fs-1 pe-1" />
                        </a>
                      </div>
                      <div className="px-2 d-none d-lg-block">
                        <p className="mb-0" style={{ fontSize: "0.8rem" }}>
                          Call us
                        </p>
                        <p className="mb-1" style={{ fontSize: "1rem" }}>
                          <b>+96181556754</b>
                        </p>
                      </div>
                    </div>
                  </Col>
                  <Col xs={1} className="text-center">
                    <span className="vr fs-1"></span>
                  </Col>
                  <Col xs={5} className="d-flex align-items-center">
                    <div className="d-flex">
                      <div className="pe-2 d-none d-lg-block">
                        <p className="mb-0" style={{ fontSize: "0.8rem" }}>
                          Shopping Cart:
                        </p>
                        <p className="mb-1" style={{ fontSize: "1rem" }}>
                          <b>$0.00</b>
                        </p>
                      </div>
                      <div>
                        <Button onClick={handleShow} className="cart-btn">
                          <BiShoppingBag className="fs-1 ps-1" />
                        </Button>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>

      {/* mobile  */}
      <div className="d-block d-sm-none">
        <Navbar bg="light" expand="sm">
          <Container fluid>
            <Row className="w-100 py-2">
              <Col xs={8}>
                <Navbar.Brand href="/">
                  <Image
                    alt=""
                    src="./images/logo.png"
                    width="50"
                    height="50"
                    className="d-inline-block"
                  />{" "}
                  BASTAH961
                </Navbar.Brand>
              </Col>
              <Col xs={4} className="d-flex justify-content-end px-0">
                <a href="" className="text-dark pe-2">
                  <BsTelephone className="mob-icon" />
                </a>
                <Button onClick={handleShow} className="cart-btn">
                  <BiShoppingBag className="mob-icon mb-3" />
                </Button>
              </Col>
            </Row>
          </Container>
        </Navbar>
      </div>
      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Your Cart</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <ListGroup variant="flush">
            <ListGroup.Item className="px-0 my-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image
                    alt=""
                    src="./images/logo.png"
                    width="64"
                    height="64"
                  />
                </Col>
                <Col xs={5}>
                  <p>
                    <b>Product Name</b>
                  </p>
                  <span>{30.00*count}.00$</span>
                </Col>
                <Col xs={4}>
                  <InputGroup>
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={decrementCount}
                    >
                      <AiOutlineMinus style={{ fontSize: "1rem" }} />
                    </Button>
                    <Form.Control
                      type="number"
                      className="text-center"
                      value={count}
                    />
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={incrementCount}
                    >
                      <AiOutlinePlus style={{ fontSize: "1rem" }} />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
            {/* <ListGroup.Item className="px-0 my-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image
                    alt=""
                    src="./images/logo.png"
                    width="64"
                    height="64"
                  />
                </Col>
                <Col xs={5}>
                  <p>
                    <b>Product Name</b>
                  </p>
                  <span>30.00$</span>
                </Col>
                <Col xs={4}>
                  <InputGroup>
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={decrementCount}
                    >
                      <AiOutlineMinus style={{ fontSize: "1rem" }} />
                    </Button>
                    <Form.Control
                      type="number"
                      className="text-center"
                      value={count}
                    />
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={incrementCount}
                    >
                      <AiOutlinePlus style={{ fontSize: "1rem" }} />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 my-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image
                    alt=""
                    src="./images/logo.png"
                    width="64"
                    height="64"
                  />
                </Col>
                <Col xs={5}>
                  <p>
                    <b>Product Name</b>
                  </p>
                  <span>30.00$</span>
                </Col>
                <Col xs={4}>
                  <InputGroup>
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={decrementCount}
                    >
                      <AiOutlineMinus style={{ fontSize: "1rem" }} />
                    </Button>
                    <Form.Control
                      type="number"
                      className="text-center"
                      value={count}
                    />
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={incrementCount}
                    >
                      <AiOutlinePlus style={{ fontSize: "1rem" }} />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item>
            <ListGroup.Item className="px-0 my-2">
              <Row className="align-items-center">
                <Col xs={3}>
                  <Image
                    alt=""
                    src="./images/logo.png"
                    width="64"
                    height="64"
                  />
                </Col>
                <Col xs={5}>
                  <p>
                    <b>Product Name</b>
                  </p>
                  <span>30.00$</span>
                </Col>
                <Col xs={4}>
                  <InputGroup>
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={decrementCount}
                    >
                      <AiOutlineMinus style={{ fontSize: "1rem" }} />
                    </Button>
                    <Form.Control
                      type="number"
                      className="text-center"
                      value={count}
                    />
                    <Button
                      variant=""
                      style={{ borderColor: "#ced4da" }}
                      className="input-group-text bg-body p-1"
                      onClick={incrementCount}
                    >
                      <AiOutlinePlus style={{ fontSize: "1rem" }} />
                    </Button>
                  </InputGroup>
                </Col>
              </Row>
            </ListGroup.Item> */}
          </ListGroup>
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
}
export default Header;
