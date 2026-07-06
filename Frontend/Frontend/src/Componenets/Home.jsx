import React from "react";
import { Navbar, Nav, Container, Button, Card, Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div style={{ backgroundColor: "#f8f9fa" }}>

      {/* Navbar */}
      <Navbar bg="white" expand="lg" className="shadow-sm">
        <Container>
          <Navbar.Brand
            style={{
              color: "#0d6efd",
              fontWeight: "bold",
              fontSize: "30px",
            }}
          >
            📚 BookStore
          </Navbar.Brand>

          <Navbar.Toggle />

          <Navbar.Collapse className="justify-content-end">
            <Nav>
              <Link
                to="/login"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px",
                  fontWeight: "600",
                }}
              >
                User
              </Link>

              <Link
                to="/slogin"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px",
                  fontWeight: "600",
                }}
              >
                Seller
              </Link>

              <Link
                to="/alogin"
                style={{
                  textDecoration: "none",
                  color: "black",
                  padding: "10px",
                  fontWeight: "600",
                }}
              >
                Admin
              </Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* Hero Section */}

      <Container fluid style={{ padding: "70px" }}>
        <Row className="align-items-center">

          <Col md={6}>
            <h1
              style={{
                fontSize: "60px",
                fontWeight: "bold",
                color: "#0d6efd",
              }}
            >
              Discover Your
              <br />
              Next Favorite Book
            </h1>

            <p
              style={{
                fontSize: "22px",
                color: "#555",
                marginTop: "25px",
              }}
            >
              Explore thousands of books from the world's best authors.
              Browse Fiction, Finance, Technology, Self-Help,
              Mystery and many more categories.
            </p>

            <br />

            <Link to="/login">
              <Button size="lg" variant="primary">
                Explore Books
              </Button>
            </Link>

            <Link to="/signup">
              <Button
                size="lg"
                variant="outline-primary"
                style={{ marginLeft: "15px" }}
              >
                Join Now
              </Button>
            </Link>
          </Col>

          <Col md={6} className="text-center">
            <img
              src="https://images.unsplash.com/photo-1512820790803-83ca734da794?w=900"
              alt="Books"
              style={{
                width: "100%",
                maxWidth: "650px",
                borderRadius: "20px",
                boxShadow: "0 10px 25px rgba(0,0,0,0.2)",
              }}
            />
          </Col>
        </Row>
      </Container>

      {/* Categories */}

      <Container style={{ marginTop: "60px" }}>

        <h2
          className="text-center"
          style={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          Featured Categories
        </h2>

        <Row>

          <Col md={4}>
            <Card className="shadow border-0 mb-4 text-center p-4">
              <h3>📖</h3>
              <h4>Fiction</h4>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 mb-4 text-center p-4">
              <h3>💰</h3>
              <h4>Finance</h4>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 mb-4 text-center p-4">
              <h3>💻</h3>
              <h4>Technology</h4>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 mb-4 text-center p-4">
              <h3>🌱</h3>
              <h4>Self Help</h4>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 mb-4 text-center p-4">
              <h3>❤️</h3>
              <h4>Romance</h4>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow border-0 mb-4 text-center p-4">
              <h3>🕵️</h3>
              <h4>Mystery</h4>
            </Card>
          </Col>

        </Row>
      </Container>

      {/* Why Choose Us */}

      <Container style={{ marginTop: "70px", marginBottom: "80px" }}>

        <h2
          className="text-center"
          style={{ fontWeight: "bold", marginBottom: "40px" }}
        >
          Why Choose Us?
        </h2>

        <Row>

          <Col md={3}>
            <Card className="shadow border-0 text-center p-4">
              <h1>📚</h1>
              <h5>5000+ Books</h5>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow border-0 text-center p-4">
              <h1>🚚</h1>
              <h5>Fast Delivery</h5>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow border-0 text-center p-4">
              <h1>💳</h1>
              <h5>Secure Payment</h5>
            </Card>
          </Col>

          <Col md={3}>
            <Card className="shadow border-0 text-center p-4">
              <h1>⭐</h1>
              <h5>Trusted Readers</h5>
            </Card>
          </Col>

        </Row>

      </Container>

      {/* Footer */}

      <div
        style={{
          backgroundColor: "#0d6efd",
          color: "white",
          padding: "25px",
          textAlign: "center",
        }}
      >
        <h4>📚 BookStore</h4>

        <p>
          Discover • Read • Learn • Grow
        </p>

        <small>
          © 2026 BookStore. All Rights Reserved.
        </small>
      </div>

    </div>
  );
};

export default Home;