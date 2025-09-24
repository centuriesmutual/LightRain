import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button, Code } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaCode, FaBook, FaKey, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function API() {
  const router = useRouter();

  const apiFeatures = [
    {
      icon: FaCode,
      title: "RESTful API",
      description: "Clean, intuitive REST API with comprehensive documentation and examples."
    },
    {
      icon: FaKey,
      title: "Authentication",
      description: "Secure OAuth 2.0 authentication with API keys and token management."
    },
    {
      icon: FaRocket,
      title: "Real-time Data",
      description: "WebSocket connections for real-time streaming data and live updates."
    },
    {
      icon: FaBook,
      title: "SDKs & Libraries",
      description: "Official SDKs for popular programming languages and frameworks."
    }
  ];

  const codeExample = `// Get user profile
const response = await fetch('https://api.lightrain.com/v1/users/me', {
  headers: {
    'Authorization': 'Bearer YOUR_ACCESS_TOKEN',
    'Content-Type': 'application/json'
  }
});

const user = await response.json();
console.log(user);`;

  return (
    <Box bg="black" minH="100vh" color="white">
      {/* Navigation Bar */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(0,0,0,0.8)"
        backdropFilter="blur(10px)"
        transition="all 0.3s"
        _hover={{ bg: 'rgba(0,0,0,0.9)' }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" h="68px">
            <HStack spacing={8}>
              <Image 
                src="/lightrain-logo.svg" 
                alt="LightRain" 
                h="40px" 
                cursor="pointer"
                onClick={() => router.push('/')}
              />
            </HStack>
            <HStack spacing={4}>
              <InputGroup maxW="400px">
                <Input
                  placeholder="Search"
                  bg="whiteAlpha.100"
                  border="none"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  _focus={{ bg: 'whiteAlpha.200', boxShadow: 'none' }}
                  color="white"
                  pl={4}
                  pr={12}
                />
                <InputRightElement>
                  <IconButton
                    aria-label="Search"
                    icon={<FaSearch />}
                    variant="ghost"
                    color="white"
                    _hover={{ bg: 'whiteAlpha.200' }}
                  />
                </InputRightElement>
              </InputGroup>
              <IconButton
                aria-label="Coin Recharge"
                icon={<FaCoins />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              <IconButton
                aria-label="Download App"
                icon={<FaMobile />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<FaUserCircle size="20px" />}
                  variant="ghost"
                  color="white"
                  bg="whiteAlpha.100"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  _active={{ bg: 'whiteAlpha.300' }}
                />
                <MenuList 
                  bg="gray.800" 
                  borderColor="gray.600"
                  boxShadow="xl"
                  py={2}
                >
                  <MenuItem 
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700' }}
                    onClick={() => router.push('/profile')}
                  >
                    <HStack spacing={3}>
                      <FaUser />
                      <Text>Profile</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem 
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700' }}
                    onClick={() => router.push('/account')}
                  >
                    <HStack spacing={3}>
                      <FaCog />
                      <Text>Account Settings</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem 
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700' }}
                    onClick={() => router.push('/help')}
                  >
                    <HStack spacing={3}>
                      <FaQuestionCircle />
                      <Text>Help Center</Text>
                    </HStack>
                  </MenuItem>
                  <MenuDivider borderColor="gray.600" />
                  <MenuItem 
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700' }}
                    onClick={() => router.push('/login')}
                  >
                    <HStack spacing={3}>
                      <FaSignInAlt />
                      <Text>Sign In</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem 
                    bg="gray.800"
                    color="white"
                    _hover={{ bg: 'gray.700' }}
                    _focus={{ bg: 'gray.700' }}
                    onClick={() => router.push('/signup')}
                  >
                    <HStack spacing={3}>
                      <FaUserPlus />
                      <Text>Sign Up</Text>
                    </HStack>
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Hero Section */}
      <Box
        position="relative"
        h="60vh"
        bgImage="url('https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=1920')"
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)',
          zIndex: 1,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={2} h="100%" display="flex" alignItems="center">
          <VStack spacing={6} align="start" maxW="800px">
            <Heading
              as="h1"
              size="4xl"
              fontWeight="bold"
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              Developer API
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Build powerful applications with our comprehensive API. Access user data, stream information, and create custom integrations.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                leftIcon={<FaBook />}
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
              >
                View Documentation
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                Get API Key
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* API Features */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">API Features</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {apiFeatures.map((feature, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={8}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <HStack spacing={6} mb={4}>
                    <Box w="60px" h="60px" bg="red.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                      <feature.icon size="24px" />
                    </Box>
                    <VStack align="start" spacing={2}>
                      <Heading size="md">{feature.title}</Heading>
                      <Text color="gray.300">{feature.description}</Text>
                    </VStack>
                  </HStack>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Code Example */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Quick Start Example</Heading>
            <Box bg="gray.900" p={8} borderRadius="lg" border="1px solid" borderColor="gray.700">
              <Code
                display="block"
                whiteSpace="pre"
                p={4}
                bg="gray.800"
                color="green.300"
                borderRadius="md"
                fontSize="sm"
                overflowX="auto"
              >
                {codeExample}
              </Code>
            </Box>
          </Box>

          {/* Endpoints */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Available Endpoints</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">User Management</Heading>
                <VStack align="start" spacing={2}>
                  <Text color="gray.300">GET /v1/users/me</Text>
                  <Text color="gray.300">GET /v1/users/&#123;id&#125;</Text>
                  <Text color="gray.300">PUT /v1/users/me</Text>
                  <Text color="gray.300">GET /v1/users/me/followers</Text>
                </VStack>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Stream Data</Heading>
                <VStack align="start" spacing={2}>
                  <Text color="gray.300">GET /v1/streams/live</Text>
                  <Text color="gray.300">GET /v1/streams/&#123;id&#125;</Text>
                  <Text color="gray.300">GET /v1/streams/&#123;id&#125;/chat</Text>
                  <Text color="gray.300">POST /v1/streams</Text>
                </VStack>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Analytics</Heading>
                <VStack align="start" spacing={2}>
                  <Text color="gray.300">GET /v1/analytics/views</Text>
                  <Text color="gray.300">GET /v1/analytics/engagement</Text>
                  <Text color="gray.300">GET /v1/analytics/revenue</Text>
                  <Text color="gray.300">GET /v1/analytics/demographics</Text>
                </VStack>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Content</Heading>
                <VStack align="start" spacing={2}>
                  <Text color="gray.300">GET /v1/content/trending</Text>
                  <Text color="gray.300">GET /v1/content/search</Text>
                  <Text color="gray.300">POST /v1/content/upload</Text>
                  <Text color="gray.300">DELETE /v1/content/&#123;id&#125;</Text>
                </VStack>
              </Box>
            </Grid>
          </Box>

          {/* SDKs */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Official SDKs</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Heading size="md" mb={2}>JavaScript</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>Node.js & Browser</Text>
                <Button size="sm" colorScheme="red" variant="outline">Download</Button>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Heading size="md" mb={2}>Python</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>3.7+ Support</Text>
                <Button size="sm" colorScheme="red" variant="outline">Download</Button>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Heading size="md" mb={2}>Java</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>8+ Support</Text>
                <Button size="sm" colorScheme="red" variant="outline">Download</Button>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Heading size="md" mb={2}>PHP</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>7.4+ Support</Text>
                <Button size="sm" colorScheme="red" variant="outline">Download</Button>
              </Box>
            </Grid>
          </Box>

          {/* CTA */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Start Building Today</Heading>
            <Text color="gray.300" mb={8}>
              Join thousands of developers building amazing applications with our API.
            </Text>
            <HStack spacing={4} justify="center">
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
              >
                Get API Key
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                View Documentation
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
