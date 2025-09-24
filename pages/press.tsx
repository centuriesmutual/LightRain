import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaDownload, FaCalendarAlt } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Press() {
  const router = useRouter();

  const pressReleases = [
    {
      title: "LightRain Live Raises $50M Series A to Accelerate Global Expansion",
      date: "March 15, 2024",
      summary: "Funding will be used to expand creator tools, enhance AI-powered recommendations, and grow international markets."
    },
    {
      title: "LightRain Live Launches Creator Monetization Program",
      date: "February 28, 2024",
      summary: "New program enables creators to earn revenue through virtual gifts, subscriptions, and brand partnerships."
    },
    {
      title: "LightRain Live Partners with Major Music Labels for Live Streaming",
      date: "February 10, 2024",
      summary: "Strategic partnerships with Universal Music Group, Sony Music, and Warner Music to bring exclusive live performances."
    },
    {
      title: "LightRain Live Introduces Advanced Safety Features",
      date: "January 22, 2024",
      summary: "New AI-powered content moderation and enhanced reporting tools to ensure a safe community environment."
    }
  ];

  const mediaAssets = [
    {
      title: "Company Logo",
      description: "High-resolution LightRain Live logo in various formats",
      format: "PNG, SVG, EPS"
    },
    {
      title: "App Screenshots",
      description: "Latest app interface screenshots for press use",
      format: "PNG, JPG"
    },
    {
      title: "Team Photos",
      description: "Executive team and company photos",
      format: "JPG, PNG"
    },
    {
      title: "Brand Guidelines",
      description: "Complete brand guidelines and style guide",
      format: "PDF"
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
        bgImage="url('https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=1920')"
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
              Press Center
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Latest news, press releases, and media resources for journalists and media professionals.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Press Contact */}
          <Box textAlign="center" py={8}>
            <Heading size="lg" mb={4}>Press Contact</Heading>
            <Text color="gray.300" mb={6}>
              For media inquiries, please contact our press team
            </Text>
            <HStack spacing={8} justify="center">
              <VStack spacing={2}>
                <Text color="gray.400" fontSize="sm">Press Inquiries</Text>
                <Text color="white" fontWeight="bold">press@lightrain.com</Text>
              </VStack>
              <VStack spacing={2}>
                <Text color="gray.400" fontSize="sm">Partnerships</Text>
                <Text color="white" fontWeight="bold">partnerships@lightrain.com</Text>
              </VStack>
              <VStack spacing={2}>
                <Text color="gray.400" fontSize="sm">Investor Relations</Text>
                <Text color="white" fontWeight="bold">investors@lightrain.com</Text>
              </VStack>
            </HStack>
          </Box>

          {/* Press Releases */}
          <Box>
            <Heading size="lg" mb={8}>Latest Press Releases</Heading>
            <VStack spacing={6} align="stretch">
              {pressReleases.map((release, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={6}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <HStack spacing={4} mb={3}>
                    <FaCalendarAlt color="red.500" />
                    <Text color="gray.400" fontSize="sm">{release.date}</Text>
                  </HStack>
                  <Heading size="md" mb={3}>{release.title}</Heading>
                  <Text color="gray.300">{release.summary}</Text>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* Media Assets */}
          <Box>
            <Heading size="lg" mb={8}>Media Assets</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              {mediaAssets.map((asset, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={6}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flex justify="space-between" align="start" mb={3}>
                    <VStack align="start" spacing={1}>
                      <Heading size="md">{asset.title}</Heading>
                      <Text color="gray.400" fontSize="sm">{asset.format}</Text>
                    </VStack>
                    <Button
                      leftIcon={<FaDownload />}
                      size="sm"
                      colorScheme="red"
                      variant="outline"
                      _hover={{ bg: 'red.500', color: 'white' }}
                    >
                      Download
                    </Button>
                  </Flex>
                  <Text color="gray.300" fontSize="sm">{asset.description}</Text>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Company Facts */}
          <Box>
            <Heading size="lg" mb={8}>Company Facts</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <Box textAlign="center">
                <Heading size="2xl" color="red.500" mb={2}>1M+</Heading>
                <Text color="gray.300">Active Creators</Text>
              </Box>
              <Box textAlign="center">
                <Heading size="2xl" color="red.500" mb={2}>10M+</Heading>
                <Text color="gray.300">Daily Active Users</Text>
              </Box>
              <Box textAlign="center">
                <Heading size="2xl" color="red.500" mb={2}>50+</Heading>
                <Text color="gray.300">Countries</Text>
              </Box>
            </Grid>
          </Box>

          {/* Leadership Team */}
          <Box>
            <Heading size="lg" mb={8}>Leadership Team</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <Box textAlign="center">
                <Box w="120px" h="120px" bg="gray.700" borderRadius="full" mx="auto" mb={4} />
                <Heading size="md" mb={1}>Sarah Chen</Heading>
                <Text color="red.500" mb={2}>CEO & Co-Founder</Text>
                <Text color="gray.300" fontSize="sm">Former VP of Product at Meta, 10+ years in social media</Text>
              </Box>
              <Box textAlign="center">
                <Box w="120px" h="120px" bg="gray.700" borderRadius="full" mx="auto" mb={4} />
                <Heading size="md" mb={1}>Marcus Rodriguez</Heading>
                <Text color="red.500" mb={2}>CTO & Co-Founder</Text>
                <Text color="gray.300" fontSize="sm">Former Principal Engineer at Google, expert in real-time systems</Text>
              </Box>
              <Box textAlign="center">
                <Box w="120px" h="120px" bg="gray.700" borderRadius="full" mx="auto" mb={4} />
                <Heading size="md" mb={1}>Emily Watson</Heading>
                <Text color="red.500" mb={2}>Head of Creator Relations</Text>
                <Text color="gray.300" fontSize="sm">Former Creator Partnerships at YouTube, passionate about creator economy</Text>
              </Box>
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
