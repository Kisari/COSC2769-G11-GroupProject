import React from "react";

// Import boostrap components
import { Container } from "react-bootstrap";

// Import component
import Header from "../Header";
import Footer from "../Footer";

function DefaultLayout({ children }) {
  return (
    <Container fluid>
      <Header />
      {children}
      <Footer />
    </Container>
  );
}

export default DefaultLayout;
