import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button, FormControl, FormLabel, Textarea } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaEnvelope, FaPhone, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Contact() {
  const router = useRouter();

  const contactMethods = [
    {
      icon: FaEnvelope,
      title: "Email Support",
      description: "Get help with your account, technical issues, or general questions.",
      contact: "support@lightrain.com",
      response: "Response within 24 hours"
    },
    {
      icon: FaPhone,
      title: "Phone Support",
      description: "Speak directly with our support team for urgent issues.",
      contact: "1-800-LIGHTRAIN",
      response: "Mon-Fri, 9AM-6PM PST"
    },
    {
      icon: FaMapMarkerAlt,
      title: "Office Address",
      description: "Visit our headquarters for business meetings and partnerships.",
      contact: "123 Innovation Drive, San Francisco, CA 94105",
      response: "By appointment only"
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
              Contact Us
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              We're here to help! Get in touch with our team for support, partnerships, or general inquiries.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Contact Methods */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Get in Touch</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              {contactMethods.map((method, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={8}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  textAlign="center"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Box w="60px" h="60px" bg="red.500" borderRadius="full" mx="auto" mb={6} display="flex" alignItems="center" justifyContent="center">
                    <method.icon size="24px" />
                  </Box>
                  <Heading size="md" mb={4}>{method.title}</Heading>
                  <Text color="gray.300" mb={4}>{method.description}</Text>
                  <Text color="white" fontWeight="bold" mb={2}>{method.contact}</Text>
                  <Text color="gray.400" fontSize="sm">{method.response}</Text>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Contact Form */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Send us a Message</Heading>
            <Box maxW="600px" mx="auto">
              <VStack spacing={6} align="stretch">
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                  <FormControl>
                    <FormLabel>First Name</FormLabel>
                    <Input
                      bg="gray.900"
                      border="1px solid"
                      borderColor="gray.700"
                      _hover={{ borderColor: 'gray.600' }}
                      _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px red.500' }}
                      color="white"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel>Last Name</FormLabel>
                    <Input
                      bg="gray.900"
                      border="1px solid"
                      borderColor="gray.700"
                      _hover={{ borderColor: 'gray.600' }}
                      _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px red.500' }}
                      color="white"
                    />
                  </FormControl>
                </Grid>
                <FormControl>
                  <FormLabel>Email</FormLabel>
                  <Input
                    type="email"
                    bg="gray.900"
                    border="1px solid"
                    borderColor="gray.700"
                    _hover={{ borderColor: 'gray.600' }}
                    _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px red.500' }}
                    color="white"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Subject</FormLabel>
                  <Input
                    bg="gray.900"
                    border="1px solid"
                    borderColor="gray.700"
                    _hover={{ borderColor: 'gray.600' }}
                    _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px red.500' }}
                    color="white"
                  />
                </FormControl>
                <FormControl>
                  <FormLabel>Message</FormLabel>
                  <Textarea
                    rows={6}
                    bg="gray.900"
                    border="1px solid"
                    borderColor="gray.700"
                    _hover={{ borderColor: 'gray.600' }}
                    _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px red.500' }}
                    color="white"
                    resize="vertical"
                  />
                </FormControl>
                <Button
                  size="lg"
                  colorScheme="red"
                  _hover={{ bg: 'red.500' }}
                >
                  Send Message
                </Button>
              </VStack>
            </Box>
          </Box>

          {/* Business Hours */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={6}>Business Hours</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} maxW="600px" mx="auto">
              <Box>
                <Heading size="md" color="red.500" mb={2}>Support</Heading>
                <Text color="gray.300">24/7 Email Support</Text>
                <Text color="gray.300">Mon-Fri: 9AM-6PM PST</Text>
              </Box>
              <Box>
                <Heading size="md" color="red.500" mb={2}>Sales</Heading>
                <Text color="gray.300">Mon-Fri: 9AM-5PM PST</Text>
                <Text color="gray.300">Sat: 10AM-2PM PST</Text>
              </Box>
              <Box>
                <Heading size="md" color="red.500" mb={2}>Partnerships</Heading>
                <Text color="gray.300">Mon-Fri: 9AM-5PM PST</Text>
                <Text color="gray.300">By appointment</Text>
              </Box>
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
