import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Flex, IconButton, Input, Button, InputGroup, InputRightElement, Divider, Link as ChakraLink, Checkbox } from '@chakra-ui/react';
import { FaCloudRain, FaEye, FaEyeSlash, FaGoogle, FaApple, FaFacebook } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MotionBox = motion(Box);

export default function SignUp() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    agreeToTerms: false
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle signup logic here
    console.log('Signup attempt:', formData);
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
                  Join LightRain Live
                </Heading>
                <Text fontSize="lg" color="gray.400">
                  Start creating and discovering amazing livestreams
                </Text>
              </VStack>

              {/* Signup Form */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <form onSubmit={handleSubmit}>
                  <VStack spacing={6}>
                    {/* Username Input */}
                    <VStack spacing={2} align="stretch" w="100%">
                      <Text fontSize="sm" fontWeight="medium" color="gray.300">
                        Username
                      </Text>
                      <Input
                        name="username"
                        type="text"
                        placeholder="Choose a username"
                        bg="gray.800"
                        border="1px solid"
                        borderColor="gray.600"
                        color="white"
                        _hover={{ borderColor: 'gray.500' }}
                        _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px #E53E3E' }}
                        value={formData.username}
                        onChange={handleInputChange}
                        required
                      />
                    </VStack>

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
                          placeholder="Create a password"
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

                    {/* Confirm Password Input */}
                    <VStack spacing={2} align="stretch" w="100%">
                      <Text fontSize="sm" fontWeight="medium" color="gray.300">
                        Confirm Password
                      </Text>
                      <InputGroup>
                        <Input
                          name="confirmPassword"
                          type={showConfirmPassword ? 'text' : 'password'}
                          placeholder="Confirm your password"
                          bg="gray.800"
                          border="1px solid"
                          borderColor="gray.600"
                          color="white"
                          _hover={{ borderColor: 'gray.500' }}
                          _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px #E53E3E' }}
                          value={formData.confirmPassword}
                          onChange={handleInputChange}
                          required
                        />
                        <InputRightElement>
                          <IconButton
                            aria-label={showConfirmPassword ? 'Hide password' : 'Show password'}
                            icon={showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
                            variant="ghost"
                            color="gray.400"
                            _hover={{ color: 'white' }}
                            onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                          />
                        </InputRightElement>
                      </InputGroup>
                    </VStack>

                    {/* Terms Agreement */}
                    <VStack spacing={4} align="stretch" w="100%">
                      <Checkbox
                        name="agreeToTerms"
                        isChecked={formData.agreeToTerms}
                        onChange={handleInputChange}
                        colorScheme="red"
                        size="md"
                      >
                        <Text fontSize="sm" color="gray.300">
                          I agree to the{' '}
                          <Link href="/terms">
                            <ChakraLink color="red.400" _hover={{ color: 'red.300' }}>
                              Terms of Service
                            </ChakraLink>
                          </Link>
                          {' '}and{' '}
                          <Link href="/privacy">
                            <ChakraLink color="red.400" _hover={{ color: 'red.300' }}>
                              Privacy Policy
                            </ChakraLink>
                          </Link>
                        </Text>
                      </Checkbox>
                    </VStack>

                    {/* Sign Up Button */}
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
                      isDisabled={!formData.agreeToTerms}
                    >
                      Create Account
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

                {/* Social Signup */}
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
                    Sign up with Google
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
                    Sign up with Apple
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
                    Sign up with Facebook
                  </Button>
                </VStack>
              </Box>

              {/* Login Link */}
              <Box textAlign="center">
                <Text color="gray.400">
                  Already have an account?{' '}
                  <Link href="/login">
                    <ChakraLink color="red.400" _hover={{ color: 'red.300' }} fontWeight="medium">
                      Sign in here
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