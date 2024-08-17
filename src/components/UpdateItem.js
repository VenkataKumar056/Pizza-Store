import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "./CSS/UpdateItem.css";

function UpdateItem() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required").positive("Price must be a positive number"),
    imageUrl: Yup.string().required("Image URL is required").url("Invalid URL format"),
  });

  useEffect(() => {
    axios
      .get(`http://localhost:5000/items/${id}`)
      .then((response) => {
        setItem(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("There was an error fetching the item:", error);
        setError(error);
        setLoading(false);
      });
  }, [id]);

  const onSubmit = (values) => {
    axios
      .put(`http://localhost:5000/items/${id}`, values)
      .then((response) => {
        console.log("Item updated:", response.data);
        navigate("/DisplayAllItems");  
      })
      .catch((error) => {
        console.error("There was an error updating the item:", error);
      });
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>Error loading item: {error.message}</p>;
  }

  return (
    <div className="update-item-container">
      <h2>Update Item</h2>
      <Formik
        initialValues={{
          name: item.name,
          description: item.description,
          price: item.price,
          imageUrl: item.imageUrl,
        }}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" className="form-control" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" className="form-control" />
            <ErrorMessage name="price" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <Field type="text" id="imageUrl" name="imageUrl" className="form-control" />
            <ErrorMessage name="imageUrl" component="div" className="error-message" />
          </div>

          <button type="submit" className="btn btn-primary">Update Item</button>
        </Form>
      </Formik>
    </div>
  );
}

export default UpdateItem;
