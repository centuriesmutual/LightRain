import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaChartBar, FaEye, FaHeart, FaComments, FaShare, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Analytics() {
  const router = useRouter();

  const metrics = [
    {
      icon: FaEye,
      title: "Viewership Analytics",
      description: "Track total views, unique viewers, average watch time, and viewer retention rates."
    },
    {
      icon: FaHeart,
      title: "Engagement Metrics",
      description: "Monitor likes, comments, shares, and real-time viewer interaction patterns."
    },
    {
      icon: FaComments,
      title: "Chat Analytics",
      description: "Analyze chat activity, message volume, and viewer participation trends."
    },
    {
      icon: FaShare,
      title: "Growth Tracking",
      description: "Measure follower growth, content performance, and audience demographics."
    }
  ];

  const analyticsFeatures = [
    "Real-time streaming metrics",
    "Historical performance data",
    "Audience demographics breakdown",
    "Content performance comparison",
    "Peak viewing time analysis",
    "Geographic distribution maps",
    "Device and platform insights",
    "Revenue and monetization tracking"
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
        bgImage="url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1920')"
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
              Creator Analytics
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Deep insights into your audience and content performance. Make data-driven decisions to grow your channel.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                leftIcon={<FaChartBar />}
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/signup')}
              >
                Access Analytics
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                View Demo
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Key Metrics */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Key Performance Metrics</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {metrics.map((metric, index) => (
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
                      <metric.icon size="24px" />
                    </Box>
                    <VStack align="start" spacing={2}>
                      <Heading size="md">{metric.title}</Heading>
                      <Text color="gray.300">{metric.description}</Text>
                    </VStack>
                  </HStack>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Analytics Features */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Analytics Features</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              {analyticsFeatures.map((feature, index) => (
                <HStack key={index} spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" />
                  <Text color="gray.300">{feature}</Text>
                </HStack>
              ))}
            </Grid>
          </Box>

          {/* Sample Dashboard */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Analytics Dashboard</Heading>
            <Box bg="gray.900" p={8} borderRadius="lg" border="1px solid" borderColor="gray.700">
              <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6} mb={8}>
                <Box textAlign="center">
                  <Heading size="2xl" color="red.500" mb={2}>12.5K</Heading>
                  <Text color="gray.300">Total Views</Text>
                </Box>
                <Box textAlign="center">
                  <Heading size="2xl" color="red.500" mb={2}>2.3K</Heading>
                  <Text color="gray.300">Unique Viewers</Text>
                </Box>
                <Box textAlign="center">
                  <Heading size="2xl" color="red.500" mb={2}>8:45</Heading>
                  <Text color="gray.300">Avg. Watch Time</Text>
                </Box>
                <Box textAlign="center">
                  <Heading size="2xl" color="red.500" mb={2}>+15%</Heading>
                  <Text color="gray.300">Growth Rate</Text>
                </Box>
              </Grid>
              <Text color="gray.400" textAlign="center" fontSize="sm">
                Sample analytics data - Your actual metrics will appear here
              </Text>
            </Box>
          </Box>

          {/* CTA */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Start Tracking Your Success</Heading>
            <Text color="gray.300" mb={8}>
              Join thousands of creators who use our analytics to grow their audience and optimize their content.
            </Text>
            <Button
              size="lg"
              colorScheme="red"
              _hover={{ bg: 'red.500' }}
              onClick={() => router.push('/signup')}
            >
              Get Started Free
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
