import React from "react";
import { Box } from "@chakra-ui/react";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <Box>
      <Navbar />
      <Box paddingTop={12}>{children}</Box>
    </Box>
  );
};

export default Layout;
