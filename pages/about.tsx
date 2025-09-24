import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function About() {
  const router = useRouter();

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
        bgImage="url('https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=1920')"
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
              About LightRain Live
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Revolutionizing how people connect, create, and discover through vertical livestreaming.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12}>
          <VStack spacing={8} align="stretch">
            <Box>
              <Heading size="lg" mb={6}>Our Mission</Heading>
              <Text fontSize="lg" color="gray.300" lineHeight="1.6">
                LightRain Live is dedicated to creating the world's most immersive vertical livestreaming platform. 
                We believe in the power of real-time connection and authentic content creation. Our mission is to 
                empower creators, connect communities, and provide viewers with endless entertainment through 
                innovative technology and user-centric design.
              </Text>
            </Box>

            <Box>
              <Heading size="lg" mb={6}>What We Do</Heading>
              <Text fontSize="lg" color="gray.300" lineHeight="1.6" mb={4}>
                We've built a comprehensive platform that enables:
              </Text>
              <VStack align="start" spacing={4}>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Vertical livestreaming optimized for mobile devices</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Real-time chat and interaction features</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Advanced creator tools and monetization options</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">AI-powered content discovery and recommendation</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Robust safety and moderation systems</Text>
                </HStack>
              </VStack>
            </Box>

            <Box>
              <Heading size="lg" mb={6}>Our Values</Heading>
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                <Box>
                  <Heading size="md" color="red.500" mb={3}>Authenticity</Heading>
                  <Text color="gray.300">We champion genuine content and real connections over manufactured experiences.</Text>
                </Box>
                <Box>
                  <Heading size="md" color="red.500" mb={3}>Innovation</Heading>
                  <Text color="gray.300">We continuously push the boundaries of what's possible in livestreaming technology.</Text>
                </Box>
                <Box>
                  <Heading size="md" color="red.500" mb={3}>Community</Heading>
                  <Text color="gray.300">We build platforms that bring people together and foster meaningful relationships.</Text>
                </Box>
                <Box>
                  <Heading size="md" color="red.500" mb={3}>Safety</Heading>
                  <Text color="gray.300">We prioritize user safety and create inclusive spaces for everyone.</Text>
                </Box>
              </Grid>
            </Box>
          </VStack>

          <VStack spacing={8} align="stretch">
            <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
              <Heading size="md" mb={4}>Quick Facts</Heading>
              <VStack align="start" spacing={4}>
                <Box>
                  <Text color="gray.400" fontSize="sm">Founded</Text>
                  <Text fontWeight="bold">2024</Text>
                </Box>
                <Box>
                  <Text color="gray.400" fontSize="sm">Headquarters</Text>
                  <Text fontWeight="bold">San Francisco, CA</Text>
                </Box>
                <Box>
                  <Text color="gray.400" fontSize="sm">Active Creators</Text>
                  <Text fontWeight="bold">1M+</Text>
                </Box>
                <Box>
                  <Text color="gray.400" fontSize="sm">Daily Active Users</Text>
                  <Text fontWeight="bold">10M+</Text>
                </Box>
              </VStack>
            </Box>

            <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
              <Heading size="md" mb={4}>Contact Us</Heading>
              <VStack align="start" spacing={3}>
                <Text color="gray.300">press@lightrain.com</Text>
                <Text color="gray.300">partnerships@lightrain.com</Text>
                <Text color="gray.300">support@lightrain.com</Text>
              </VStack>
            </Box>
          </VStack>
        </Grid>
      </Container>
    </Box>
  );
}
