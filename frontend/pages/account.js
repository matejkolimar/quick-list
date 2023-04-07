import React, { useState } from "react";
import {
  Box,
  VStack,
  Input,
  Button,
  FormControl,
  FormLabel,
  Heading,
  useToast,
} from "@chakra-ui/react";
import axios from "axios";
import Layout from "../components/Layout";

const Account = () => {
  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const toast = useToast();

  const handleChangePassword = async () => {
    if (newPassword !== confirmPassword) {
      toast({
        title: "Error",
        description: "New password and confirmation do not match.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      // Replace the URL with your backend endpoint
      await axios.post("/api/change-password", {
        oldPassword,
        newPassword,
      });
      toast({
        title: "Success",
        description: "Password changed successfully.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to change password.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleDeleteAccount = async () => {
    // Implement account deletion logic here
  };

  const handleLogout = async () => {
    // Implement logout logic here
  };

  return (
    <Layout>
      <Box maxW="lg" mx="auto">
        <VStack spacing={6}>
          <Heading>Account</Heading>

          <Box w="100%">
            <Heading size="md">Change Password</Heading>
            <VStack spacing={4} mt={4}>
              <FormControl>
                <FormLabel>Old Password</FormLabel>
                <Input
                  type="password"
                  value={oldPassword}
                  onChange={(e) => setOldPassword(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
              <FormControl>
                <FormLabel>Confirm New Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
              <Button onClick={handleChangePassword}>Change Password</Button>
            </VStack>
          </Box>

          <Box w="100%">
            <Heading size="md">Delete Account</Heading>
            <VStack spacing={4} mt={4}>
              <Button colorScheme="red" onClick={handleDeleteAccount}>
                Delete Account
              </Button>
            </VStack>
          </Box>

          <Box w="100%">
            <Heading size="md">Logout</Heading>
            <VStack spacing={4} mt={4}>
              <Button onClick={handleLogout}>Logout</Button>
            </VStack>
          </Box>
        </VStack>
      </Box>
    </Layout>
  );
};

export default Account;
