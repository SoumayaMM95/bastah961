import {
  Col,
  Row,
  Container,
  Navbar,
  Offcanvas,
  Form,
  InputGroup,
  Button,
  Breadcrumb,
} from "react-bootstrap";

import Filter from "../filter";
import Banner from "../banner";
import Product from "../product-list";
import { GoSearch } from "react-icons/go";
import { AiOutlineHome } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

function ShopPage() {

  return (
    <>
      <div className="bg-white">
        <Breadcrumb className="ps-5 ms-4 pt-3 d-none d-sm-block">
          <Breadcrumb.Item href="/" className="m-0">
            <AiOutlineHome style={{ color: "#ff602d", fontSize: "1.2rem" }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>

        {/* mobile  */}
        <Breadcrumb className="ms-2 pt-3 d-block d-sm-none">
          <Breadcrumb.Item href="/" className="m-0">
            <AiOutlineHome style={{ color: "#ff602d", fontSize: "1.2rem" }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Shop</Breadcrumb.Item>
        </Breadcrumb>
        {/* mobile  */}

        <Navbar expand="md" className="d-block d-md-none p-0">
          <Navbar.Toggle
            aria-controls="offcanvasNavbar-expand-md basic-navbar-nav"
            className="float-btn"
          >
            <BsArrowRight className="text-white" />
          </Navbar.Toggle>
          <Navbar.Offcanvas
            id={`offcanvasNavbar-expand-md`}
            aria-labelledby={`offcanvasNavbarLabel-expand-md`}
            placement="start"
            className="pt-3"
          >
            <Offcanvas.Header closeButton>
              <Offcanvas.Title id={`offcanvasNavbarLabel-expand-md`}>
                <Form>
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
              </Offcanvas.Title>
            </Offcanvas.Header>

            <Offcanvas.Body>
              <Filter />
            </Offcanvas.Body>
          </Navbar.Offcanvas>
        </Navbar>
        <Container>
          <Row>
            <Col lg={3} className="border-end border-2 fixed d-none d-md-block">
              <Filter />
            </Col>
            <Col lg={9}>
              <Banner />
              {/* <Row> */}
              <Row xs={2} md={2} lg={3} className="g-4 pt-4">
                {(() => {
                  let rows = [];
                  for (let i = 0; i < 6; i++) {
                    rows.push(<Product key={i} />);
                  }
                  return rows;
                })()}
                {/* {products.map((product) => (
                  <Product
                    key={product._id}
                    id={product._id}
                    Name={product.Name}
                    Price={product.Price}
                  />
                ))} */}
              </Row>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ShopPage;
