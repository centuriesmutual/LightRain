import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaGift, FaCreditCard, FaUsers, FaHandshake, FaDollarSign } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Monetization() {
  const router = useRouter();

  const revenueStreams = [
    {
      icon: FaGift,
      title: "Virtual Gifts",
      description: "Viewers can send virtual gifts during your streams. You earn a percentage of each gift value.",
      earnings: "Up to 70% of gift value"
    },
    {
      icon: FaUsers,
      title: "Subscriptions",
      description: "Offer monthly subscriptions with exclusive perks like subscriber-only content and chat privileges.",
      earnings: "$4.99 - $24.99/month"
    },
    {
      icon: FaHandshake,
      title: "Brand Partnerships",
      description: "Connect with brands for sponsored content, product placements, and promotional campaigns.",
      earnings: "Varies by partnership"
    },
    {
      icon: FaCreditCard,
      title: "Direct Donations",
      description: "Accept direct donations from your audience with customizable donation amounts and messages.",
      earnings: "95% of donation amount"
    }
  ];

  const requirements = [
    "Minimum 1,000 followers",
    "At least 10 hours of streaming in the last 30 days",
    "Compliance with community guidelines",
    "Verified account status"
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
        bgImage="url('https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=1920')"
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
              Creator Monetization
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Turn your passion into profit. Multiple revenue streams to help you build a sustainable creator business.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                leftIcon={<FaDollarSign />}
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/signup')}
              >
                Start Earning
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                View Requirements
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Revenue Streams */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Revenue Streams</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {revenueStreams.map((stream, index) => (
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
                      <stream.icon size="24px" />
                    </Box>
                    <VStack align="start" spacing={2}>
                      <Heading size="md">{stream.title}</Heading>
                      <Text color="red.400" fontWeight="bold">{stream.earnings}</Text>
                    </VStack>
                  </HStack>
                  <Text color="gray.300">{stream.description}</Text>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Requirements */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Monetization Requirements</Heading>
            <Box maxW="600px" mx="auto">
              <VStack spacing={4} align="stretch">
                {requirements.map((requirement, index) => (
                  <HStack key={index} spacing={4} p={4} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" />
                    <Text color="gray.300">{requirement}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>

          {/* Success Stories */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Creator Success Stories</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Box w="80px" h="80px" bg="gray.700" borderRadius="full" mx="auto" mb={4} />
                <Heading size="md" mb={2}>@GamingPro</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>Gaming Streamer</Text>
                <Text color="red.400" fontWeight="bold" fontSize="lg">$8,500/month</Text>
                <Text color="gray.300" fontSize="sm" mt={2}>"Virtual gifts and subscriptions changed my life!"</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Box w="80px" h="80px" bg="gray.700" borderRadius="full" mx="auto" mb={4} />
                <Heading size="md" mb={2}>@ArtMaster</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>Art Creator</Text>
                <Text color="red.400" fontWeight="bold" fontSize="lg">$12,000/month</Text>
                <Text color="gray.300" fontSize="sm" mt={2}>"Brand partnerships opened so many opportunities."</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700" textAlign="center">
                <Box w="80px" h="80px" bg="gray.700" borderRadius="full" mx="auto" mb={4} />
                <Heading size="md" mb={2}>@MusicLive</Heading>
                <Text color="gray.400" fontSize="sm" mb={4}>Musician</Text>
                <Text color="red.400" fontWeight="bold" fontSize="lg">$15,000/month</Text>
                <Text color="gray.300" fontSize="sm" mt={2}>"Direct donations from fans are incredible!"</Text>
              </Box>
            </Grid>
          </Box>

          {/* CTA */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Ready to Start Earning?</Heading>
            <Text color="gray.300" mb={8}>
              Join thousands of creators who are already monetizing their content on LightRain Live.
            </Text>
            <Button
              size="lg"
              colorScheme="red"
              _hover={{ bg: 'red.500' }}
              onClick={() => router.push('/signup')}
            >
              Apply for Monetization
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
