import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { http } from "../config/config";
// import ProductForm from './ProductForm'

function Products() {
  const [product, setProduct] = useState();

  useEffect(() => {
    http("/products")
      .then((res) => setProduct(res.data.result))
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = (id) => {
    http.delete(`/products/${id}`);
  };

  return (
    <div >
      {product?.map((e) => (
        <div>
          <Card style={{ width: "18rem" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{e.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ListGroup className="m-auto">
                <ListGroupItem>Price: {e.price}</ListGroupItem>
                <ListGroupItem>Color: {e.color}</ListGroupItem>
              </ListGroup>
              <Button variant="primary" className="me-2 ">
                Update
              </Button>
              <Button variant="danger" onClick={() => handleDelete(e._id)}>
                Delete
              </Button>
            </Card.Body>
          </Card>
        </div>
      ))}
    </div>
  );
}

export default Products;
