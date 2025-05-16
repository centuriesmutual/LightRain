import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
  Divider,
  Image,
} from '@chakra-ui/react';
import { FaEye, FaEyeSlash, FaGoogle, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

export default function SignUp() {
  const [showPassword, setShowPassword] = useState(false);
  const router = useRouter();
  const bgColor = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box minH="100vh" bg="black" color="white">
      {/* Background Image with Overlay */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        bottom={0}
        bgImage="url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')"
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(0,0,0,0.7)',
        }}
      />

      <Container maxW="container.xl" position="relative" zIndex={1} py={20}>
        <Box
          maxW="500px"
          mx="auto"
          bg="rgba(0,0,0,0.8)"
          borderRadius="xl"
          p={8}
          backdropFilter="blur(10px)"
          border="1px solid"
          borderColor="whiteAlpha.200"
        >
          <VStack spacing={8} align="stretch">
            <Box textAlign="center">
              <Image
                src="/lightrain-logo.svg"
                alt="LightRain"
                h="50px"
                mx="auto"
                mb={4}
              />
              <Heading size="xl" mb={2}>Create Your Account</Heading>
              <Text color="gray.400">Join LightRain to start investing in premium real estate</Text>
            </Box>

            <VStack spacing={4}>
              <FormControl>
                <FormLabel>Full Name</FormLabel>
                <Input
                  type="text"
                  placeholder="Enter your full name"
                  bg="whiteAlpha.100"
                  border="none"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  _focus={{ bg: 'whiteAlpha.200', boxShadow: 'none' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  placeholder="Enter your email"
                  bg="whiteAlpha.100"
                  border="none"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  _focus={{ bg: 'whiteAlpha.200', boxShadow: 'none' }}
                />
              </FormControl>

              <FormControl>
                <FormLabel>Password</FormLabel>
                <InputGroup>
                  <Input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Create a password"
                    bg="whiteAlpha.100"
                    border="none"
                    _hover={{ bg: 'whiteAlpha.200' }}
                    _focus={{ bg: 'whiteAlpha.200', boxShadow: 'none' }}
                  />
                  <InputRightElement>
                    <IconButton
                      aria-label={showPassword ? 'Hide password' : 'Show password'}
                      icon={showPassword ? <FaEyeSlash /> : <FaEye />}
                      variant="ghost"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.200' }}
                      onClick={() => setShowPassword(!showPassword)}
                    />
                  </InputRightElement>
                </InputGroup>
              </FormControl>

              <Button
                w="full"
                size="lg"
                bg="red.600"
                color="white"
                _hover={{ bg: 'red.500' }}
                mt={4}
              >
                Create Account
              </Button>
            </VStack>

            <HStack spacing={4} justify="center">
              <Divider borderColor="whiteAlpha.400" />
              <Text color="gray.400" fontSize="sm">OR</Text>
              <Divider borderColor="whiteAlpha.400" />
            </HStack>

            <VStack spacing={4}>
              <Button
                w="full"
                leftIcon={<FaGoogle />}
                variant="outline"
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                Continue with Google
              </Button>
              <Button
                w="full"
                leftIcon={<FaGithub />}
                variant="outline"
                borderColor="whiteAlpha.400"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                Continue with GitHub
              </Button>
            </VStack>

            <Text textAlign="center" color="gray.400">
              Already have an account?{' '}
              <Link href="/login" passHref>
                <Text as="span" color="red.400" cursor="pointer" _hover={{ textDecoration: 'underline' }}>
                  Sign in
                </Text>
              </Link>
            </Text>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
} 