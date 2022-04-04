import * as api from "../Api";
import { useEffect, useState } from "react";
import React from "react";
import { Navbar, Container, Offcanvas, Nav, ListGroup } from "react-bootstrap";

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
        <Navbar.Toggle aria-controls="offcanvasNavbar"  />
        <Navbar.Offcanvas
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id="offcanvasNavbarLabel">
              Article Topics
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
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
}

{
  /* <div>
  <nav className="NavBar">
    <ul className="nav__list">
      <li className="nav__item">
        <Link className="nav__item__link" to={"/"}>
          All
        </Link>
      </li>
      {topics.map(({ slug }) => {
        return (
          <li key={slug} className="nav__item">
            <Nav.Link  className="nav__item__link" to={`/topics/${slug}`}>
              {slug}
            </Nav.Link >
          </li>
        );
      })}
    </ul>
  </nav>
</div>; */
}
