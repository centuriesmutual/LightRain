import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaLock, FaEye, FaDatabase } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Privacy() {
  const router = useRouter();

  const privacySections = [
    {
      icon: FaDatabase,
      title: "Information We Collect",
      content: "We collect information you provide directly to us, such as when you create an account, use our services, or contact us for support. This includes your name, email address, profile information, and content you create or share."
    },
    {
      icon: FaEye,
      title: "How We Use Your Information",
      content: "We use your information to provide, maintain, and improve our services, process transactions, send you technical notices and support messages, and communicate with you about products, services, and promotional offers."
    },
    {
      icon: FaLock,
      title: "Information Sharing",
      content: "We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except as described in this policy. We may share information with service providers who assist us in operating our platform."
    },
    {
      icon: FaLock,
      title: "Data Security",
      content: "We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. However, no method of transmission over the internet is 100% secure."
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
              Privacy Policy
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Your privacy is important to us. Learn how we collect, use, and protect your personal information.
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
            <Heading size="lg" mb={6}>Introduction</Heading>
            <Text color="gray.300" fontSize="lg" lineHeight="1.6" mb={6}>
              LightRain Live, Inc. ("we," "our," or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our livestreaming platform and related services.
            </Text>
            <Text color="gray.300" fontSize="lg" lineHeight="1.6">
              By using our services, you agree to the collection and use of information in accordance with this policy. If you do not agree with our policies and practices, please do not use our services.
            </Text>
          </Box>

          {/* Privacy Sections */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Key Privacy Information</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {privacySections.map((section, index) => (
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

          {/* Your Rights */}
          <Box>
            <Heading size="lg" mb={8}>Your Privacy Rights</Heading>
            <VStack spacing={6} align="stretch">
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Access and Portability</Heading>
                <Text color="gray.300">You have the right to access your personal information and receive a copy of your data in a portable format.</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Correction and Updates</Heading>
                <Text color="gray.300">You can update or correct your personal information at any time through your account settings.</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Deletion</Heading>
                <Text color="gray.300">You can request deletion of your personal information, subject to certain legal and operational requirements.</Text>
              </Box>
              <Box bg="gray.900" p={6} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={4} color="red.500">Opt-out</Heading>
                <Text color="gray.300">You can opt out of certain data processing activities, such as marketing communications and targeted advertising.</Text>
              </Box>
            </VStack>
          </Box>

          {/* Contact */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Questions About Privacy?</Heading>
            <Text color="gray.300" mb={8}>
              If you have questions about this Privacy Policy or our data practices, please contact us.
            </Text>
            <HStack spacing={4} justify="center">
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/contact')}
              >
                Contact Us
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                Data Request
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
