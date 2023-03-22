import {
  Col,
  Row,
  Container,
  Nav,
  Breadcrumb,
  Tab,
  Tabs,
} from "react-bootstrap";

import { AiOutlineHome } from "react-icons/ai";
import ProductImage from "../productimages";
import ProductDetails from "../productdetails";

function ProductView() {
  return (
    <>
      <div className="bg-white">
        <Breadcrumb className="ps-5 ms-4 pt-3 d-none d-sm-block">
          <Breadcrumb.Item href="/" className="m-0">
            <AiOutlineHome style={{ color: "#ff602d", fontSize: "1.2rem" }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Product</Breadcrumb.Item>
        </Breadcrumb>

        {/* mobile  */}
        <Breadcrumb className="ms-2 pt-3 d-block d-sm-none">
          <Breadcrumb.Item href="/" className="m-0">
            <AiOutlineHome style={{ color: "#ff602d", fontSize: "1.2rem" }} />
          </Breadcrumb.Item>
          <Breadcrumb.Item active>Product</Breadcrumb.Item>
        </Breadcrumb>

        <Container>
          <Row className="justify-content-md-center">
          <Col lg={1}></Col>

            <Col lg={10}>
              <Row>
                <Col md={5}>
                  <ProductImage />
                </Col>
                <Col md={7}>
                  <ProductDetails />
                </Col>
              </Row>
              <hr />
              <Tabs
                defaultActiveKey="Description"
                id="fill-tab"
                className="mb-3"
                fill
              >
                <Tab eventKey="Description" title="Description">
                  Tab 1 content
                </Tab>
                <Tab eventKey="Reviews" title="Reviews">
                  Tab 2 content
                </Tab>
              </Tabs>
            </Col>
            <Col lg={1}></Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default ProductView;
