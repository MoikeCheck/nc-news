import * as api from "../Api";
import { useEffect, useState } from "react";
import React from "react";
import {
  Navbar,
  Container,
  Offcanvas,
  Nav,
  ListGroup,
  NavDropdown,
} from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [topics, setTopics] = useState([]);

  useEffect(() => {
    api.getTopics().then((topics) => {
      setTopics(topics);
    });
  });

  return (
    <Navbar bg="light" expand={false}>
      <Container fluid>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Zest Topics
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="justify-content-end flex-grow-1 pe-3">
              <Nav.Link className="nav__item__link" href="/">
                All Articles
              </Nav.Link>

              <NavDropdown
                title="Topics"
                id="offcanvasNavbarDropdown"
                className="nav__dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="/topics/coding"
                  >
                    Coding
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="/topics/football"
                  >
                    Football
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="/topics/cooking"
                  >
                    Cooking
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown
                title="Sort Articles By"
                id="offcanvasNavbarDropdown"
                className="nav__dropdown"
              >
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="?sort=created_at"
                  >
                    Date
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="?sort=comment_count"
                  >
                    Comment Count
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="?sort=votes"
                  >
                    Votes
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Order" id="offcanvasNavbarDropdown">
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="?order=asc"
                  >
                    Ascending
                  </Link>
                </NavDropdown.Item>
                <NavDropdown.Item>
                  <Link
                    className="link"
                    style={{ textDecoration: "none" }}
                    to="?order=desc"
                  >
                    Descending
                  </Link>
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link className="nav__item__link" href="/user">
                Profile
              </Nav.Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}
