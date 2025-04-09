import { Box, Container, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, Flex, Input, InputGroup, InputLeftElement, InputRightElement, IconButton } from '@chakra-ui/react';
import { FaUser, FaLock, FaEye, FaEyeSlash, FaHome } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { useState } from 'react';

export default function Login() {
  const router = useRouter();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const [showPassword, setShowPassword] = useState(false);

  const handleLogin = () => {
    // Here you would typically handle authentication
    router.push('/dashboard');
  };

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Login Form */}
      <Container maxW="container.sm" py={20} position="relative">
        {/* Home Button */}
        <IconButton
          aria-label="Go to Home"
          icon={<FaHome />}
          variant="ghost"
          colorScheme="green"
          color="green.800"
          onClick={() => router.push('/')}
          position="absolute"
          top={4}
          right={4}
          size="lg"
          fontSize="xl"
        />

        <VStack spacing={8} align="stretch">
          <Box textAlign="center">
            <Heading size="2xl" color="green.800" fontFamily="serif">Welcome Back</Heading>
            <Text mt={4} color="gray.600" fontFamily="serif">Sign in to access your real estate portfolio</Text>
          </Box>

          <VStack spacing={6} align="stretch">
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaUser color="green.800" />
              </InputLeftElement>
              <Input
                placeholder="Email"
                bg="white"
                borderColor="green.800"
                color="gray.800"
                _placeholder={{ color: 'gray.500' }}
                fontFamily="serif"
              />
            </InputGroup>

            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaLock color="green.800" />
              </InputLeftElement>
              <Input
                type={showPassword ? 'text' : 'password'}
                placeholder="Password"
                bg="white"
                borderColor="green.800"
                color="gray.800"
                _placeholder={{ color: 'gray.500' }}
                fontFamily="serif"
              />
              <InputRightElement>
                <Button
                  variant="ghost"
                  onClick={() => setShowPassword(!showPassword)}
                  color="green.800"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </Button>
              </InputRightElement>
            </InputGroup>

            <Button
              colorScheme="green"
              bg="green.800"
              _hover={{ bg: 'green.700' }}
              size="lg"
              onClick={handleLogin}
              fontFamily="serif"
            >
              Sign In
            </Button>

            <Text textAlign="center" color="gray.600" fontFamily="serif">
              Don't have an account?{' '}
              <Button
                variant="link"
                color="green.800"
                onClick={() => router.push('/register')}
                fontFamily="serif"
              >
                Register
              </Button>
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  );
} 