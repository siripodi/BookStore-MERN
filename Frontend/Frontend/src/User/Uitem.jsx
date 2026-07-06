import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Unavbar from './Unavbar';
import { Button } from 'react-bootstrap';

const Uitem = () => {
  const [item, setItem] = useState(null);

  const { id } = useParams();

  useEffect(() => {
    axios
      .get(`http://localhost:4000/item/${id}`)
      .then((resp) => {
        setItem(resp.data);
      })
      .catch(() => {
        console.log("Did not get data");
      });
  }, [id]);

  return (
    <div>
      <Unavbar />

      {item && (
        <div
          style={{
            maxWidth: "1200px",
            margin: "40px auto",
            background: "#fff",
            borderRadius: "20px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.15)",
            padding: "40px",
            display: "flex",
            gap: "50px",
          }}
        >
          {/* Left Side - Book Image */}
          <div style={{ flex: 1, textAlign: "center" }}>
            <img
              src={
                item.image
                  ? item.image
                  : `http://localhost:4000/${item.itemImage}`
              }
              alt={item.title}
              style={{
                width: "350px",
                height: "500px",
                objectFit: "cover",
                borderRadius: "15px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
            />
          </div>

          {/* Right Side - Book Details */}
          <div style={{ flex: 1 }}>

            <h1
              style={{
                fontWeight: "bold",
                color: "#0d6efd",
                marginBottom: "15px",
              }}
            >
              {item.title}
            </h1>

            <h4 style={{ color: "#555" }}>
              ✍️ {item.author}
            </h4>

            <div
              style={{
                marginTop: "10px",
                marginBottom: "20px",
                fontSize: "20px",
              }}
            >
              ⭐⭐⭐⭐⭐
              <span
                style={{
                  color: "#666",
                  marginLeft: "10px",
                }}
              >
                4.8 Rating
              </span>
            </div>

            <h5 style={{ color: "#666" }}>
              📚 <b>Genre:</b> {item.genre}
            </h5>

            <h2
              style={{
                color: "#198754",
                marginTop: "20px",
                marginBottom: "20px",
                fontWeight: "bold",
              }}
            >
              ₹ {item.price}
            </h2>

            <h5 style={{ color: "#666" }}>
              👤 <b>Seller:</b> {item.userName}
            </h5>

            <hr />

            <h3>Description</h3>

            <p
              style={{
                fontSize: "18px",
                color: "#555",
                lineHeight: "30px",
                textAlign: "justify",
              }}
            >
              {item.description}
            </p>

            <br />

            <Link
              to={`/orderitem/${item._id}`}
              style={{ textDecoration: "none" }}
            >
              <Button
                variant="success"
                size="lg"
                style={{
                  padding: "12px 40px",
                  borderRadius: "30px",
                  fontWeight: "bold",
                  fontSize: "18px",
                }}
              >
                🛒 Buy Now
              </Button>
            </Link>

          </div>
        </div>
      )}
    </div>
  );
};

export default Uitem;