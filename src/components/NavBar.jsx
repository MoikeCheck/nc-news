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
              <ListGroup variant="flush">
                <ListGroup.Item key="All Articles" className="nav__item">
                  <Nav.Link className="nav__item__link" href="/">
                    All Articles
                  </Nav.Link>
                </ListGroup.Item>
              </ListGroup>
              {topics.map(({ slug }) => {
                return (
                  <ListGroup variant="flush">
                    <ListGroup.Item key={slug} className="nav__item">
                      <Nav.Link
                        className="nav__item__link"
                        href={`/topics/${slug}`}
                      >
                        {slug}
                      </Nav.Link>
                    </ListGroup.Item>
                  </ListGroup>
                );
              })}
              <NavDropdown
                title="Sort Articles By"
                id="offcanvasNavbarDropdown"
              >
                <NavDropdown.Item href={`/articles?sort=created_at`}>
                  Date
                </NavDropdown.Item>
                <NavDropdown.Item href={`/articles?sort=comment_count`}>
                  Comment count
                </NavDropdown.Item>
                <NavDropdown.Item href={`/articles?sort=votes`}>
                  Votes
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Order" id="offcanvasNavbarDropdown">
                <NavDropdown.Item href={`/articles?order=asc`}>
                  Ascending
                </NavDropdown.Item>
                <NavDropdown.Item href={`/articles?order=desc`}>
                  Descending
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
