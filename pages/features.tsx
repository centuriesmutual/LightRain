import React from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link as ChakraLink, Grid, Button } from '@chakra-ui/react';
import Link from 'next/link';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaVideo, FaComments, FaGift, FaLock, FaRocket } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Features() {
  const router = useRouter();

  const features = [
    {
      icon: FaVideo,
      title: "Vertical Livestreaming",
      description: "Optimized for mobile with seamless vertical video streaming and playback."
    },
    {
      icon: FaComments,
      title: "Real-time Chat",
      description: "Interactive chat with emojis, reactions, and live engagement tools."
    },
    {
      icon: FaGift,
      title: "Virtual Gifts",
      description: "Support your favorite creators with virtual gifts and monetization features."
    },
    {
      icon: FaLock,
      title: "Advanced Safety",
      description: "AI-powered content moderation and comprehensive safety tools."
    },
    {
      icon: FaRocket,
      title: "Creator Tools",
      description: "Professional streaming tools, analytics, and growth features for creators."
    },
    {
      icon: FaChartLine,
      title: "Smart Discovery",
      description: "AI-driven content recommendation and personalized feed algorithms."
    }
  ];

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
        bgImage="url('https://images.unsplash.com/photo-1551650975-87deedd944c3?w=1920')"
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
              Powerful Features
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Everything you need to create, discover, and engage with vertical livestreams.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Main Features */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Core Features</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={8}>
              {features.map((feature, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={8}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  textAlign="center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box w="60px" h="60px" bg="red.500" borderRadius="full" mx="auto" mb={6} display="flex" alignItems="center" justifyContent="center">
                    {feature.title === "Vertical Livestreaming" && <FaVideo size="24px" />}
                    {feature.title === "Real-time Chat" && <FaComments size="24px" />}
                    {feature.title === "Virtual Gifts" && <FaGift size="24px" />}
                    {feature.title === "Advanced Safety" && <FaLock size="24px" />}
                    {feature.title === "Creator Tools" && <FaRocket size="24px" />}
                    {feature.title === "Smart Discovery" && <FaChartLine size="24px" />}
                  </Box>
                  <Heading size="md" mb={4}>{feature.title}</Heading>
                  <Text color="gray.300">{feature.description}</Text>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Technical Specs */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Technical Specifications</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={12}>
              <Box>
                <Heading size="md" mb={6} color="red.500">Streaming Quality</Heading>
                <VStack align="start" spacing={4}>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Up to 4K resolution streaming</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Adaptive bitrate streaming</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Ultra-low latency (under 2 seconds)</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Multi-platform compatibility</Text>
                  </HStack>
                </VStack>
              </Box>
              <Box>
                <Heading size="md" mb={6} color="red.500">Creator Tools</Heading>
                <VStack align="start" spacing={4}>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Professional streaming software</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Real-time analytics dashboard</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Advanced chat moderation</Text>
                  </HStack>
                  <HStack spacing={4}>
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                    <Text color="gray.300">Monetization and payout tools</Text>
                  </HStack>
                </VStack>
              </Box>
            </Grid>
          </Box>

          {/* CTA */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Ready to Get Started?</Heading>
            <Text color="gray.300" mb={6}>
              Join millions of creators and viewers on LightRain Live today.
            </Text>
            <HStack spacing={4} justify="center">
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/signup')}
              >
                Start Creating
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                onClick={() => router.push('/explore')}
              >
                Explore Content
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
