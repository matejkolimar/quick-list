import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Layout from "../components/Layout";
import ProductList from "../components/ProductList";

const Product = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    // Fetch products from the API and set the state
    // Replace with your API call
    const fetchProducts = async () => {
      // const response = await fetch("/api/products");
      // const data = await response.json();
      const data = [{ name: "Product 1" }, { name: "Product 2" }];
      setProducts(data);
    };

    fetchProducts();
  }, []);

  const addItem = (name) => {
    // Add a new product to the API and update the state
    // Replace with your API call
    const newProduct = { name };
    setProducts([...products, newProduct]);
  };

  const updateItem = (index) => {
    // Update the product in the API and update the state
    // Replace with your API call
    const updatedProducts = products.map((product, idx) =>
      idx === index ? { ...product, updated: !product.updated } : product
    );
    setProducts(updatedProducts);
  };

  const removeItem = (index) => {
    // Remove the product from the API and update the state
    // Replace with your API call
    const updatedProducts = products.filter((_, idx) => idx !== index);
    setProducts(updatedProducts);
  };

  return (
    <Layout>
      <Container maxW="container.md">
        <ProductList
          items={products}
          addItem={addItem}
          updateItem={updateItem}
          removeItem={removeItem}
          searchPlaceholder="Search products..."
        />
      </Container>
    </Layout>
  );
};

export default Product;
