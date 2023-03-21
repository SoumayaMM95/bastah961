import { Col, Row, Accordion, Form } from "react-bootstrap";
function Filter() {
  return (
    <>
      <Accordion
        defaultActiveKey={["0"]}
        alwaysOpen
      >
        <Accordion.Item eventKey="0" className="border border-0">
          <Accordion.Header>All Categories</Accordion.Header>
          <Accordion.Body>
            <ul className="list-group list-group-flush">
              <li className="list-group-item">First Category</li>
              <li className="list-group-item">Second Category</li>
              <li className="list-group-item">Third Category</li>
              <li className="list-group-item">Fourth Category</li>
              <li className="list-group-item">Fifth Category</li>
            </ul>
          </Accordion.Body>
        </Accordion.Item>
        <hr className="border border-2"/>
        <Accordion.Item eventKey="1" className="border border-0">
          <Accordion.Header>Filter by price</Accordion.Header>
          <Accordion.Body>
          <Form.Check
            type='radio'
            id='pricefilter'
            name='pricefilter'
            label="price1-price2"
            className="pb-1"
          />
          <Form.Check
            type='radio'
            id='pricefilter'
            name='pricefilter'
            label="price3-price3"
            className="pb-1"
          />
          <Form.Check
            type='radio'
            id='pricefilter'
            name='pricefilter'
            label=">price3"
            className="pb-1"
          />
            <Row>
              <Col sm={6}>
                <input
                  type="text"
                  placeholder="min $"
                  className="form-control"
                />
              </Col>
              <Col sm={6}>
                <input
                  type="text"
                  placeholder="max $"
                  className="form-control"
                />
              </Col>
            </Row>
          </Accordion.Body>
        </Accordion.Item>
        <hr className="border border-2"/>
        <Accordion.Item eventKey="2" className="border border-0">
          <Accordion.Header>Size</Accordion.Header>
          <Accordion.Body>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="small"
                id="check-small"
              />
              <label className="form-check-label" htmlFor="check-small">
                Small
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="medium"
                id="check-medium"
              />
              <label className="form-check-label" htmlFor="check-medium">
                Medium
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="large"
                id="check-large"
              />
              <label className="form-check-label" htmlFor="check-large">
                Large
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                name="xlarge"
                id="check-xlarge"
              />
              <label className="form-check-label" htmlFor="check-xlarge">
                XLarge
              </label>
            </div>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </>
  );
}

export default Filter;
