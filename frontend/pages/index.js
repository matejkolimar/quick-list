import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ShoppingList from "../components/ShoppingList";

const Homepage = () => {
  const [shoppingList, setShoppingList] = useState([]);

  useEffect(() => {
    // Fetch shopping list from the API and set the state
    // Replace with your API call
    const fetchShoppingList = async () => {
      const response = await fetch("http://localhost:3001/api/shopping-lists");
      const data = await response.json();
      setShoppingList(data);
    };

    fetchShoppingList();
  }, []);

  const addItem = (name) => {
    // Add a new item to the API and update the state
    // Replace with your API call
    const newItem = { product: { name }, quantity: 1 };
    setShoppingList([...shoppingList, newItem]);
  };

  const updateItem = (index, value) => {
    // Update the item in the API and update the state
    // Replace with your API call
    const updatedShoppingList = shoppingList.map((item, idx) =>
      idx === index ? { ...item, quantity: value } : item
    );
    setShoppingList(updatedShoppingList);
  };

  const removeItem = (index) => {
    // Remove the item from the API and update the state
    // Replace with your API call
    const updatedShoppingList = shoppingList.filter((_, idx) => idx !== index);
    setShoppingList(updatedShoppingList);
  };

  return (
    <Layout>
      <Container maxW="container.md">
        <ShoppingList
          items={shoppingList}
          addItem={addItem}
          updateItem={updateItem}
          removeItem={removeItem}
          searchPlaceholder="Search shopping list..."
        />
      </Container>
    </Layout>
  );
};

export default Homepage;
