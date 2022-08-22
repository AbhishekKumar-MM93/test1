import React from "react";
import { useEffect, useState } from "react";
import { Card, Button, ListGroup, ListGroupItem } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { http } from "../config/config";
// import ProductForm from './ProductForm'

function Products() {
  const navigator = useNavigate()
  const [product, setProduct] = useState();

  //<------------------------------------------------------->
  useEffect(() => {
    http("/products")
      .then((res) => setProduct(res.data.result))
      .catch((err) => console.log(err.message));
  }, []);

  const handleDelete = (id) => {
    console.log(product)
    http.delete(`/products/${id}`),
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Delete SuccessFully",
      timer: 1500,
    })

  };

  //<-------------------------------------------------------->

  return (
    <div style={{display:"flex",
    width: "100%",
    flexWrap: "wrap",
    gap: "2rem",
    margin: "2rem auto",
    justifyContent: "center"}} >
      {product?.map((e) => (
        <div className="d-flex, mt-3, justifyContent-center, ">
          <Card style={{ width: "18rem",marginTop: "20px" }}>
            <Card.Img variant="top" src="holder.js/100px180" />
            <Card.Body>
              <Card.Title>{e?.name}</Card.Title>
              <Card.Text>
                Some quick example text to build on the card title and make up
                the bulk of the card's content.
              </Card.Text>
              <ListGroup className="m-auto">
                <ListGroupItem>&#8377; {e?.price}</ListGroupItem>
                <ListGroupItem> {e?.color}</ListGroupItem>
              </ListGroup>

              <ListGroup className="m-auto">
                <ListGroupItem> {e?.subCategoryFK?.subCategory}</ListGroupItem>
              </ListGroup>

              <Button variant="primary" className="me-2 " onClick={() => navigator(`productForm/${e._id}`)}>
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
