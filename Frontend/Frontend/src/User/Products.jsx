import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Products() {
  const [items, setItems] = useState([]);
  const [wishlist, setWishlist] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    // Fetch all items
    axios
      .get(`http://localhost:4000/item`)
      .then((response) => {
        const taskData = response.data;
        setItems(taskData);
      })
      .catch((error) => {
        console.error('Error fetching tasks: ', error);
      });

    // Fetch wishlist items
    const user = JSON.parse(localStorage.getItem('user'));
    if(user){
    axios.get(`http://localhost:4000/wishlist/${user.id}`)
    .then((response) => {
      const wishlistData = response.data;
      setWishlist(wishlistData);
    }) 
  } 
  else{
    console.log('ERROR');
  }
    
  }, []);

  const addToWishlist = async (itemId) => {
    try {
      console.log('itemId before find:', itemId);
      // Find the selected item by itemId
      const selectedItem = items.find((item) => {
        console.log('item._id:', item._id);
        console.log('itemId in find:', itemId);
        return item._id === itemId;
      });
  
      console.log('selectedItem:', selectedItem);
  
      if (!selectedItem) {
        throw new Error('Selected item not found');
      }
  
      // Destructure the needed properties
      const {
  title,
  author,
  genre,
  price,
  image,
  itemImage,
  _id: itemId2
} = selectedItem;
  
      const userId = JSON.parse(localStorage.getItem('user')).id;
      const userName = JSON.parse(localStorage.getItem('user')).name;
      console.log('itemId2:', itemId2);
      console.log('itemId2:', title);
  
      // Add item to the wishlist
      await axios.post("http://localhost:4000/wishlist/add", {
  itemId: itemId2,
  title,
  author,
  genre,
  price,
  image,
  itemImage,
  userId,
  userName,
});
      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      axios.get(`http://localhost:4000/wishlist/${user.id}`)
      .then((response) => {
        const wishlistData = response.data;
        setWishlist(wishlistData);
      }) 
    } 
    else{
      console.log('ERROR');
    }
    } catch (error) {
      console.error('Error adding item to wishlist: ', error);
    }
  };
  
  
  const removeFromWishlist = async (itemId) => {
    try {
      // Remove item from the wishlist
      await axios.post(`http://localhost:4000/wishlist/remove`, { itemId }); // Adjust the endpoint accordingly

      // Refresh the wishlist items
      const user = JSON.parse(localStorage.getItem('user'));
      if(user){
      const response = await axios.get(`http://localhost:4000/wishlist/${user.id}`,); // Adjust the endpoint accordingly
      setWishlist(response.data);
    } 
    else{
      console.log('ERROR');
    }}
    catch (error) {
      console.error('Error removing item from wishlist: ', error);
    }
  };

  const isItemInWishlist = (itemId) => {
    return wishlist.some((item) => item.itemId === itemId);
  };
return (
  <div>
    <Unavbar />

    <div className="container mx-auto p-4">

      <h2
        style={{
          textAlign: "center",
          fontSize: "40px",
          fontWeight: "bold",
          color: "#0d6efd",
          marginBottom: "30px",
        }}
      >
        📚 Explore Books
      </h2>

      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "35px",
        }}
      >
        <input
          type="text"
          placeholder="🔍 Search by Title or Author..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "450px",
            padding: "12px 20px",
            borderRadius: "30px",
            border: "1px solid #ccc",
            outline: "none",
            fontSize: "18px",
          }}
        />
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill,minmax(320px,1fr))",
          gap: "30px",
        }}
      >

        {items
          .filter((item) => {
            return (
              item.title.toLowerCase().includes(search.toLowerCase()) ||
              item.author.toLowerCase().includes(search.toLowerCase())
            );
          })
          .map((item) => (
            <div
  key={item._id}
  style={{
    background: "#fff",
    borderRadius: "15px",
    overflow: "hidden",
    boxShadow: "0 8px 20px rgba(0,0,0,0.15)",
    transition: "0.3s",
    cursor: "pointer",
  }}
  onMouseEnter={(e) => {
    e.currentTarget.style.transform = "translateY(-8px)";
    e.currentTarget.style.boxShadow = "0 15px 30px rgba(0,0,0,0.25)";
  }}
  onMouseLeave={(e) => {
    e.currentTarget.style.transform = "translateY(0)";
    e.currentTarget.style.boxShadow = "0 8px 20px rgba(0,0,0,0.15)";
  }}
>
  <img
    src={item.image ? item.image : `http://localhost:4000/${item.itemImage}`}
    alt={item.title}
    style={{
      width: "100%",
      height: "320px",
      objectFit: "cover",
    }}
  />

  <div style={{ padding: "18px" }}>

    <h4
      style={{
        fontWeight: "bold",
        fontSize: "22px",
        marginBottom: "10px",
      }}
    >
      {item.title}
    </h4>

    <p style={{ color: "#666" }}>
      ✍️ <b>Author:</b> {item.author}
    </p>

    <p style={{ color: "#666" }}>
      📚 <b>Genre:</b> {item.genre}
    </p>

    <div style={{ margin: "12px 0" }}>
      ⭐⭐⭐⭐⭐
      <span style={{ marginLeft: "8px", color: "#777" }}>
        {item.rating ? item.rating : "4.8"}
      </span>
    </div>

    <div
      style={{
        display: "inline-block",
        background: "#0d6efd",
        color: "white",
        padding: "8px 18px",
        borderRadius: "25px",
        fontWeight: "bold",
        marginBottom: "20px",
      }}
    >
      ₹{item.price}
    </div>

    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginTop: "20px",
      }}
    >
      {isItemInWishlist(item._id) ? (
        <Button
          variant="danger"
          onClick={() => removeFromWishlist(item._id)}
        >
          ❤️ Added
        </Button>
      ) : (
        <Button
          variant="outline-danger"
          onClick={() => addToWishlist(item._id)}
        >
          ♡ Wishlist
        </Button>
      )}

      <Link
        to={`/uitem/${item._id}`}
        style={{ textDecoration: "none" }}
      >
        <Button variant="primary">
          View Details
        </Button>
      </Link>
    </div>

  </div>
</div>
          ))}
      </div>

    </div>
  </div>
);
}

export default Products;

