import React from "react";
import {
  Box,
  Flex,
  Link,
  Button,
  useDisclosure,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  VStack,
  HStack,
  useMediaQuery,
} from "@chakra-ui/react";
import { HamburgerIcon } from "@chakra-ui/icons";
import NextLink from "next/link";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [isLargerThan768] = useMediaQuery("(min-width: 768px)");

  const navItems = [
    { label: "Home", href: "/" },
    { label: "Account", href: "/account" },
    { label: "Product", href: "/product" },
    { label: "Category", href: "/category" },
    { label: "Map", href: "/map" },
  ];

  const NavLinks = () => (
    <HStack spacing={8}>
      {navItems.map((item) => (
        <NextLink key={item.href} href={item.href} passHref>
          <Link>{item.label}</Link>
        </NextLink>
      ))}
    </HStack>
  );

  return (
    <Box>
      <Flex
        as="nav"
        align="center"
        justify="space-between"
        wrap="wrap"
        padding={6}
        borderBottom="1px"
        borderColor="gray.200">
        <Link as={NextLink} href="/">
          Logo
        </Link>
        {isLargerThan768 ? (
          <NavLinks />
        ) : (
          <Button variant="ghost" onClick={onOpen}>
            <HamburgerIcon boxSize={6} />
          </Button>
        )}
      </Flex>

      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          {navItems.map((item) => (
            <NextLink key={item.href} href={item.href} passHref>
              <Link onClick={onClose}>{item.label}</Link>
            </NextLink>
          ))}
        </DrawerContent>
      </Drawer>
    </Box>
  );
};

export default Navbar;
