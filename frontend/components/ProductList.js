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
} from "@chakra-ui/react";
import { AddIcon, EditIcon, CheckIcon, CloseIcon } from "@chakra-ui/icons";

const ProductList = ({
  items,
  addItem,
  updateItem,
  removeItem,
  searchPlaceholder,
}) => {
  const [search, setSearch] = React.useState("");
  const [editMode, setEditMode] = React.useState(false);

  const filteredItems = items.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
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
            <Text>{item.name}</Text>
            {editMode && (
              <>
                <IconButton
                  icon={<CheckIcon />}
                  onClick={() => updateItem(index)}
                />
                <IconButton
                  icon={<CloseIcon />}
                  onClick={() => removeItem(index)}
                />
              </>
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
          icon={editMode ? <CloseIcon /> : <EditIcon />}
          onClick={() => setEditMode(!editMode)}
        />
      </HStack>
    </VStack>
  );
};

export default ProductList;
