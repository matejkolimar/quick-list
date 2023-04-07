import React, { useState, useEffect } from "react";
import { Container } from "@chakra-ui/react";
import Layout from "../components/Layout";
import CategoryList from "../components/CategoryList";

const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    // Fetch categories from the API and set the state
    // Replace with your API call
    const fetchCategories = async () => {
      const response = await fetch("/api/categories");
      const data = await response.json();
      setCategories(data);
    };

    fetchCategories();
  }, []);

  const addCategory = (name) => {
    // Add a new category to the API and update the state
    // Replace with your API call
    const newCategory = { name };
    setCategories([...categories, newCategory]);
  };

  const removeCategory = (index) => {
    // Remove the category from the API and update the state
    // Replace with your API call
    const updatedCategories = categories.filter((_, idx) => idx !== index);
    setCategories(updatedCategories);
  };

  return (
    <Layout>
      <Container maxW="container.md">
        <CategoryList
          categories={categories}
          addCategory={addCategory}
          removeCategory={removeCategory}
        />
      </Container>
    </Layout>
  );
};

export default Categories;
