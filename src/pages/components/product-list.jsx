import { CardActionArea } from "@mui/material";
import { Col, Card } from "react-bootstrap";
import { RiStarSFill, RiStarSLine } from "react-icons/ri";


function Product({ id, Name, Price }) {
  
  return (
    <Col>
      {/* <Col xs={6} md={6} lg={4} className='pt-3'> */}
      <CardActionArea href={"/product/"+{id}}>
        <Card.Img variant="top" src="./images/product.png" className="rounded"/>
        <Card.Body className="px-2">
          <Card.Title className="py-3">Product Name {Name}</Card.Title>
          <Card.Text className="fw-bold">80.00$ {Price}</Card.Text>
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
        </Card.Body>
      </CardActionArea>
    </Col>
  );
}
export default Product;
