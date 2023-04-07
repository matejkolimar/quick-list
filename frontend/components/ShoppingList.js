import React from "react";
import {
  VStack,
  HStack,
  Input,
  Button,
  IconButton,
  FormControl,
  Box,
  Text,
  NumberInput,
  NumberInputField,
} from "@chakra-ui/react";
import { AddIcon, EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

const ShoppingList = ({
  items,
  addItem,
  updateItem,
  removeItem,
  searchPlaceholder,
}) => {
  const [search, setSearch] = React.useState("");
  const [editMode, setEditMode] = React.useState(false);

  const filteredItems = items.filter((item) =>
    item.product.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <VStack spacing={4} w="100%">
      <FormControl>
        <Input
          type="text"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </FormControl>
      <Box>
        {filteredItems.map((item, index) => (
          <HStack key={index} spacing={4} w="100%">
            <Text>{item.product.name}</Text>
            <NumberInput
              value={item.quantity}
              isReadOnly={!editMode}
              min={1}
              onChange={(value) => updateItem(index, value)}>
              <NumberInputField />
            </NumberInput>
            {editMode && (
              <IconButton
                icon={<CloseIcon />}
                onClick={() => removeItem(index)}
              />
            )}
          </HStack>
        ))}
      </Box>
      <HStack>
        <Button
          leftIcon={<AddIcon />}
          onClick={() => addItem(search)}
          disabled={!search}>
          Add
        </Button>
        <IconButton
          icon={editMode ? <CheckIcon /> : <EditIcon />}
          onClick={() => setEditMode(!editMode)}
        />
      </HStack>
    </VStack>
  );
};

export default ShoppingList;
