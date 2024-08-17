import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import axios from "axios";
import "./CSS/AddNewItem.css";

function AddNewItem (){

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    description: Yup.string().required("Description is required"),
    price: Yup.number().required("Price is required").positive("Price must be a positive number"),
    imageUrl: Yup.string().required("Image URL is required").url("Invalid URL format"),
  });

  const initialValues = {
    name: "",
    description: "",
    price: "",
    imageUrl: "",
  };

  const onSubmit = (values, { resetForm }) => {
    axios
      .post("http://localhost:5000/items", values)  // Ensure the port here matches the DisplayAllItems component
      .then((response) => {
        console.log("Item added:", response.data);
        resetForm();
      })
      .catch((error) => {
        console.error("There was an error adding the item:", error);
      });
  };
  

  return (
    <div className="add-new-item-container">
      <h2>Add New Item</h2>
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
      >
        <Form>
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <Field type="text" id="name" name="name" className="form-control" placeholder="Enter pizza name " />
            <ErrorMessage name="name" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="description">Description</label>
            <Field as="textarea" id="description" name="description" className="form-control" placeholder="Enter details about pizza" />
            <ErrorMessage name="description" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="price">Price</label>
            <Field type="number" id="price" name="price" className="form-control" placeholder="Enter price" />
            <ErrorMessage name="price" component="div" className="error-message" />
          </div>

          <div className="form-group">
            <label htmlFor="imageUrl">Image URL</label>
            <Field type="text" id="imageUrl" name="imageUrl" className="form-control" placeholder="Enter image location" />
            <ErrorMessage name="imageUrl" component="div" className="error-message" />
          </div>

          <button type="submit" className="btn btn-success rounded-pill px-3">
            Add Item
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default AddNewItem;
