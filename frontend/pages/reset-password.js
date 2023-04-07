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

const ResetPassword = () => {
  const [email, setEmail] = useState("");
  const toast = useToast();

  const handleResetPassword = async () => {
    try {
      // Replace the URL with your backend endpoint
      await axios.post("/api/reset-password", {
        email,
      });
      toast({
        title: "Success",
        description:
          "If the provided email is associated with an account, a password reset link will be sent.",
        status: "success",
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: "Error",
        description: "Failed to send reset password email.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Layout>
      <Box maxW="lg" mx="auto" mt={8}>
        <VStack spacing={6}>
          <Heading>Reset Password</Heading>
          <FormControl>
            <FormLabel>Email</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <Button onClick={handleResetPassword}>Send Reset Link</Button>
        </VStack>
      </Box>
    </Layout>
  );
};

export default ResetPassword;
