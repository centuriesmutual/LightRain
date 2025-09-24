import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Flex, IconButton, Input, Button, InputGroup, InputRightElement, Divider, Link as ChakraLink } from '@chakra-ui/react';
import { FaCloudRain, FaEye, FaEyeSlash, FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MotionBox = motion(Box);

export default function Login() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle login logic here
    console.log('Login attempt:', formData);
    // For now, redirect to home
    router.push('/');
  };

  return (
    <Box bg="black" minH="100vh" color="white">
      {/* Header */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(0,0,0,0.8)"
        backdropFilter="blur(10px)"
        py={4}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack 
              spacing={3} 
              cursor="pointer" 
              onClick={() => router.push('/')}
              _hover={{ opacity: 0.8 }}
              transition="opacity 0.2s"
            >
              <FaCloudRain size="32px" color="white" />
              <Heading size="lg" color="white" fontWeight="bold">
                LightRain
              </Heading>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box pt="100px">
        <Container maxW="container.sm">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={8} align="stretch">
              {/* Header */}
              <VStack spacing={4} textAlign="center">
                <Heading size="2xl" fontWeight="bold">
                  Welcome Back
                </Heading>
                <Text fontSize="lg" color="gray.400">
                  Sign in to continue your livestreaming journey
                </Text>
              </VStack>

              {/* Login Form */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    {/* Email Input */}
                    <VStack spacing={2} align="stretch" w="100%">
                      <Text fontSize="sm" fontWeight="medium" color="gray.300">
                        Email Address
                      </Text>
                      <Input
                        name="email"
                        type="email"
                        placeholder="Enter your email"
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.600"
                        color="white"
                        _hover={{ borderColor: 'gray.500' }}
                        _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px #E53E3E' }}
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                      />
                    </VStack>

                    {/* Password Input */}
                    <VStack spacing={2} align="stretch" w="100%">
                      <Text fontSize="sm" fontWeight="medium" color="gray.300">
                        Password
                      </Text>
                      <InputGroup>
                        <Input
                          name="password"
                          type={showPassword ? 'text' : 'password'}
                          placeholder="Enter your password"
                          bg="gray.800"
                          border="1px solid"
                          borderColor="gray.600"
                          color="white"
                          _hover={{ borderColor: 'gray.500' }}
                          _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px #E53E3E' }}
                          value={formData.password}
                          onChange={handleInputChange}
                          required
                        />
                        <InputRightElement>
                          <IconButton
                            aria-label={showPassword ? 'Hide password' : 'Show password'}
                            icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                            variant="ghost"
                            color="gray.400"
                            _hover={{ color: 'white' }}
                            onClick={() => setShowPassword(!showPassword)}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </VStack>

                    {/* Forgot Password */}
                    <Flex justify="flex-end" w="100%">
                      <Link href="/forgot-password">
                        <ChakraLink color="red.400" fontSize="sm" _hover={{ color: 'red.300' }}>
                          Forgot your password?
                        </ChakraLink>
                      </Link>
                    </Flex>

                    {/* Login Button */}
                    <Button
                      type="submit"
                      size="lg"
                      w="100%"
                      bg="red.600"
                      color="white"
                      _hover={{ bg: 'red.500' }}
                      _active={{ bg: 'red.700' }}
                      fontSize="md"
                      fontWeight="semibold"
                    >
                      Sign In
                    </Button>
                  </VStack>
                </form>

                {/* Divider */}
                <HStack my={6}>
                  <Divider borderColor="gray.600" />
                  <Text color="gray.500" fontSize="sm" px={4}>
                    OR
                  </Text>
                  <Divider borderColor="gray.600" />
                </HStack>

                {/* Social Login */}
                <VStack spacing={4}>
                  <Button
                    size="lg"
                    w="100%"
                    variant="outline"
                    borderColor="gray.600"
                    color="white"
                    _hover={{ bg: 'gray.700', borderColor: 'gray.500' }}
                    leftIcon={<FaGoogle />}
                  >
                    Continue with Google
                  </Button>
                  <Button
                    size="lg"
                    w="100%"
                    variant="outline"
                    borderColor="gray.600"
                    color="white"
                    _hover={{ bg: 'gray.700', borderColor: 'gray.500' }}
                    leftIcon={<FaApple />}
                  >
                    Continue with Apple
                  </Button>
                  <Button
                    size="lg"
                    w="100%"
                    variant="outline"
                    borderColor="gray.600"
                    color="white"
                    _hover={{ bg: 'gray.700', borderColor: 'gray.500' }}
                    leftIcon={<FaFacebook />}
                  >
                    Continue with Facebook
                  </Button>
                </VStack>
              </Box>

              {/* Sign Up Link */}
              <Box textAlign="center">
                <Text color="gray.400">
                  Don't have an account?{' '}
                  <Link href="/signup">
                    <ChakraLink color="red.400" _hover={{ color: 'red.300' }} fontWeight="medium">
                      Sign up here
                    </ChakraLink>
                  </Link>
                </Text>
              </Box>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}