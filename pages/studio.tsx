import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaVideo, FaMicrophone, FaCamera, FaDesktop, FaDownload } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Studio() {
  const router = useRouter();

  const features = [
    {
      icon: FaVideo,
      title: "Multi-Camera Support",
      description: "Stream with multiple cameras and switch between them seamlessly during your broadcast."
    },
    {
      icon: FaMicrophone,
      title: "Advanced Audio",
      description: "Professional audio mixing, noise reduction, and real-time audio effects."
    },
    {
      icon: FaCamera,
      title: "Visual Effects",
      description: "Add overlays, filters, transitions, and custom graphics to enhance your stream."
    },
    {
      icon: FaDesktop,
      title: "Screen Sharing",
      description: "Share your screen, specific windows, or applications with your audience."
    }
  ];

  const systemRequirements = [
    { requirement: "Operating System", value: "Windows 10/11, macOS 10.15+" },
    { requirement: "Processor", value: "Intel i5 or AMD Ryzen 5 (minimum)" },
    { requirement: "RAM", value: "8GB (16GB recommended)" },
    { requirement: "Graphics", value: "DirectX 11 compatible GPU" },
    { requirement: "Internet", value: "5 Mbps upload speed minimum" },
    { requirement: "Storage", value: "2GB free space" }
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
              Creator Studio
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Professional streaming software for serious creators. Take your livestreams to the next level with advanced tools and features.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                leftIcon={<FaDownload />}
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
              >
                Download Studio
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                View Tutorial
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Features */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Professional Features</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {features.map((feature, index) => (
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

          {/* System Requirements */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">System Requirements</Heading>
            <Box maxW="800px" mx="auto">
              <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                {systemRequirements.map((req, index) => (
                  <Box key={index} bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                    <Text color="gray.400" fontSize="sm" mb={2}>{req.requirement}</Text>
                    <Text fontWeight="bold">{req.value}</Text>
                  </Box>
                ))}
              </Grid>
            </Box>
          </Box>

          {/* Download Section */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Ready to Get Started?</Heading>
            <Text color="gray.300" mb={8}>
              Download Creator Studio and start building your professional livestreams today.
            </Text>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6} maxW="600px" mx="auto">
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                leftIcon={<FaDownload />}
              >
                Windows
              </Button>
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                leftIcon={<FaDownload />}
              >
                macOS
              </Button>
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                leftIcon={<FaDownload />}
              >
                Linux
              </Button>
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
