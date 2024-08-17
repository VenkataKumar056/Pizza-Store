import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./CSS/DisplayAllItems.css"; 

function DisplayAllItems() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = () => {
    axios.get('http://localhost:5000/items')
      .then(response => {
        setItems(response.data);
        setLoading(false);
      })
      .catch(error => {
        console.error('There was an error fetching the items!', error);
        setError(error);
        setLoading(false);
      });
  };

  const deleteItem = (id) => {
    if (window.confirm("Are you sure you want to delete this item?")) {
      axios
        .delete(`http://localhost:5000/items/${id}`)
        .then(() => {
          fetchItems(); 
          console.log("Item deleted");
        })
        .catch((error) => {
          console.error("There was an error deleting the item:", error);
        });
    }
  };

  const editItem = (id) => {
    navigate(`/updateitem/${id}`);
  };

  if (loading) {
    return <p>Loading items...</p>;
  }

  if (error) {
    return <p>Error loading items: {error.message}</p>;
  }

  return (
    <div className="items-container">
      <h2>Our Menu</h2>
      <div className="items-grid">
        {items.map((item) => (
          <div key={item.id} className="item-card">
            <img src={item.imageUrl} alt={item.name} className="item-image" />
            <h3>{item.name}</h3>
            <p>{item.description}</p>
            <p className="item-price">${item.price.toFixed(2)}</p>
            <div className="item-buttons">
              <button
                className="btn btn-primary"
                onClick={() => editItem(item.id)}
              >
                Edit
              </button>
              <button
                className="btn btn-danger"
                onClick={() => deleteItem(item.id)}
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DisplayAllItems;
