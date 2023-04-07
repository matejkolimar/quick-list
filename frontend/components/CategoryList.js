import React from "react";
import {
  VStack,
  Input,
  Button,
  IconButton,
  FormControl,
  Box,
  Text,
  HStack,
} from "@chakra-ui/react";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const CategoryList = ({ categories, addCategory, removeCategory }) => {
  const [search, setSearch] = React.useState("");

  const filteredCategories = categories.filter((category) =>
    category.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <VStack spacing={4} w="100%">
      <FormControl>
        <Input
          type="text"
          placeholder="Search categories..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormControl>
      <Box>
        {filteredCategories.map((category, index) => (
          <HStack key={index} spacing={4} w="100%">
            <Text>{category.name}</Text>
            <IconButton
              icon={<CloseIcon />}
              onClick={() => removeCategory(index)}
            />
          </HStack>
        ))}
      </Box>
      <Button
        leftIcon={<AddIcon />}
        onClick={() => addCategory(search)}
        disabled={!search}>
        Add Category
      </Button>
    </VStack>
  );
};

export default CategoryList;
