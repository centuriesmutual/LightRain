import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaFileContract, FaGavel, FaShield, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Terms() {
  const router = useRouter();

  const termsSections = [
    {
      icon: FaFileContract,
      title: "Acceptance of Terms",
      content: "By accessing and using LightRain Live, you accept and agree to be bound by the terms and provision of this agreement. If you do not agree to abide by the above, please do not use this service."
    },
    {
      icon: FaShield,
      title: "User Responsibilities",
      content: "You are responsible for maintaining the confidentiality of your account and password. You agree to accept responsibility for all activities that occur under your account or password."
    },
    {
      icon: FaExclamationTriangle,
      title: "Prohibited Uses",
      content: "You may not use our service for any unlawful purpose or to solicit others to perform unlawful acts. You may not violate any international, federal, provincial, or state regulations, rules, laws, or local ordinances."
    },
    {
      icon: FaGavel,
      title: "Limitation of Liability",
      content: "In no event shall LightRain Live, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages."
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
        h="50vh"
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
              Terms of Service
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Please read these terms carefully before using our service. These terms govern your use of LightRain Live.
            </Text>
            <Text color="gray.400" fontSize="sm">
              Last updated: January 1, 2025
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Introduction */}
          <Box>
            <Heading size="lg" mb={6}>Agreement to Terms</Heading>
            <Text color="gray.300" fontSize="lg" lineHeight="1.6" mb={6}>
              These Terms of Service ("Terms") govern your use of our website and mobile application operated by LightRain Live, Inc. ("us", "we", or "our").
            </Text>
            <Text color="gray.300" fontSize="lg" lineHeight="1.6">
              By accessing or using our service, you agree to be bound by these Terms. If you disagree with any part of these terms, then you may not access the service.
            </Text>
          </Box>

          {/* Terms Sections */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Key Terms</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {termsSections.map((section, index) => (
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
                  <HStack spacing={6} mb={6}>
                    <Box w="60px" h="60px" bg="red.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                      <section.icon size="24px" />
                    </Box>
                    <Heading size="md">{section.title}</Heading>
                  </HStack>
                  <Text color="gray.300" lineHeight="1.6">{section.content}</Text>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Additional Terms */}
          <Box>
            <Heading size="lg" mb={8}>Additional Terms</Heading>
            <VStack spacing={6} align="stretch">
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Content and Intellectual Property</Heading>
                <Text color="gray.300">You retain ownership of content you create and share on our platform. By using our service, you grant us a license to use, display, and distribute your content as necessary to provide our services.</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Account Termination</Heading>
                <Text color="gray.300">We may terminate or suspend your account immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Changes to Terms</Heading>
                <Text color="gray.300">We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will try to provide at least 30 days notice prior to any new terms taking effect.</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Governing Law</Heading>
                <Text color="gray.300">These Terms shall be interpreted and governed by the laws of the State of California, without regard to its conflict of law provisions.</Text>
              </Box>
            </VStack>
          </Box>

          {/* Contact */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Questions About Terms?</Heading>
            <Text color="gray.300" mb={8}>
              If you have questions about these Terms of Service, please contact us.
            </Text>
            <Button
              size="lg"
              colorScheme="red"
              _hover={{ bg: 'red.500' }}
              onClick={() => router.push('/contact')}
            >
              Contact Us
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
