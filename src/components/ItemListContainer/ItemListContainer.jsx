import React from 'react';
import './ItemListContainer.css';
import Container from "react-bootstrap/Container";


export const ItemListContainer = ({greeting}) => {
  return (
    <div>
      <Container>
        <h1>{greeting}</h1>
      </Container>
    </div>
  );
}