import React, { useState, useEffect } from "react";
import { Form, Col, Row, Button } from "react-bootstrap";
import { http } from "../config/config";
import { useParams } from "react-router-dom";
import Swal from 'sweetalert2'

const ProductForm = () => {
  const ID = useParams().id;
  const [data, setData] = useState();
  const [mode, setMode] = useState("CREATE");
  const [category, setCategory] = useState();
  const [subCate, setSubCate] = useState();
  const [product, setProduct] = useState();

  //<---------- upadate our form data and create new product ------------>//

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

////
/////

const handleSubmit = (e) => {
  console.log(mode)
  e.preventDefault();
  if (mode === "Update") {
    http.put(`/products/${ID}`, data);
    } else {
      http.post(`/products`, data).then((res) => {
        if (res.status === 201) {
          Swal.fire(
            "Created Successfull",
            "Saved",
            "success"
          )
        }
      }).catch((er)=>console.log(er))
    }
  };
  //<------------------------------------------------------>
  useEffect(() => {
    http(`/products/${ID}`).then((res) => {
      setData(res.data.result)
      setMode('Update')
    }).catch((er) => console.log(er))
  }, [])
  //<----------------Categeory Nd Subcategory------------>
  useEffect(() => {
    http("/category")
      .then((res) => setCategory(res.data.result))

      .catch((er) => console.log("category error", er));
  }, []);

  useEffect(() => {
    http("/subCategory")
      .then((res) => {
        setSubCate(res.data);
      })
      .catch((er) => console.log(er));
  }, []);
  //<--------------------------------------------------------------->
  return (
    <Form onChange={handleChange} onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Product Name</Form.Label>
        <Form.Control value={data?.name} name="name" type="text" placeholder="Enter product name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Price</Form.Label>
        <Form.Control value={data?.price}name="price" type="number" placeholder="Enter product Price" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Color</Form.Label>
        <Form.Control value={data?.color}name="color" type="text" placeholder="Enter product color" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Category</Form.Label>
        <Form.Select  name="category" >
          <option>---Select a Category---</option>
          {category?.map((e) => (
            <option value={e._id}>{e.category}</option>
          ))}
        </Form.Select>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>SubCategory</Form.Label>
        <Form.Select  name="subCategoryFK" >
          {/* <option>---Select a SubCategory---</option> */}
          {subCate?.map((e) =>
            e.categoryFK._id === data?.category ? (
              <option value={e._id}>{e.subCategory}</option>
            ) : (
              ""
            )
          )}
        </Form.Select>
      </Form.Group>

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};
export default ProductForm;

// const ProductForm = () => {
//   const [data,setData]=useState();
//   const [category,setCategory]=useState();
//     const [sCategory, setSCategory] = useState();

//     const handleSubmit=(e)=>{
//       e.preventDefault();
//       console.log(data,category,sCategory)
//     }

//     const handleChange=(e)=>{
//       setData({...data,[e.target.name]:e.target.value})
//     }

//     useEffect(()=>{
//       http('/category').then((res)=>setCategory(res.data.result)).catch((er)=>console.log("CATEGORY ERROR=>",er))
//     }, [])

//     useEffect(()=>{
//       http('/subCategory').then((res)=>setSCategory(res.data.result)).catch((er)=>console.log("SUBCATEGORY ERROR=>",er))
//     })

//   return (
//     <Form onSubmit={handleSubmit} onChange={handleChange}>
//     <Form.Group className="mb-3">
//     <Form.Label>Product Name</Form.Label>
//     <Form.Control placeholder="Enter Product Name" name='productName'/>
//   </Form.Group>
//   <Form.Group className="mb-3">
//     <Form.Label>Category</Form.Label>
//     <Form.Select name='category' >
//       {
//         category?.map((c)=>(
//           <option value={c._id}>{c.name}</option>
//         ))
//       }
//     </Form.Select>
//   </Form.Group>
//   <Form.Group className="mb-3">
//     <Form.Label>SubCategory</Form.Label>
//     <Form.Select name='subCategory'>
//      {
//       sCategory?.map((s)=>(
//         s.categoryFK._id===data.category?(<option value={s._id}>{s.subCategory}</option>):("")
//       ))
//      }
//     </Form.Select>
//   </Form.Group>
//   <Button variant='dark' type='submit' >
//     Submit
//     </Button>
//   </Form>
//   )
// }

