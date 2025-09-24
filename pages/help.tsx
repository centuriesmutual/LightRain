import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button, Accordion, AccordionItem, AccordionButton, AccordionPanel, AccordionIcon } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaEnvelope, FaPhone, FaComments } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Help() {
  const router = useRouter();

  const faqItems = [
    {
      question: "How do I start my first livestream?",
      answer: "To start your first livestream, tap the 'Go Live' button on the home screen, allow camera and microphone permissions, add a title and description, then tap 'Start Stream'. Make sure you have a stable internet connection for the best experience."
    },
    {
      question: "How can I monetize my content?",
      answer: "You can monetize through virtual gifts from viewers, subscription tiers, brand partnerships, and our Creator Fund. Enable monetization in your creator settings and start building your audience to unlock earning opportunities."
    },
    {
      question: "What are the streaming requirements?",
      answer: "For optimal streaming, we recommend a stable internet connection with at least 3 Mbps upload speed, a device with 4GB RAM or more, and the latest version of our app. Higher quality streams require faster connections."
    },
    {
      question: "How do I report inappropriate content?",
      answer: "You can report content by tapping the three dots menu on any stream or comment, selecting 'Report', and choosing the appropriate reason. Our moderation team reviews all reports within 24 hours."
    },
    {
      question: "Can I stream from my computer?",
      answer: "Yes! Download our Creator Studio desktop app for advanced streaming features, multi-camera setups, and professional streaming tools. It's available for Windows and Mac."
    },
    {
      question: "How do I get verified?",
      answer: "Apply for verification through your profile settings. We review applications based on authenticity, notability, and compliance with our community guidelines. Verification helps protect your account and increases visibility."
    }
  ];

  const helpCategories = [
    {
      title: "Getting Started",
      description: "Learn the basics of LightRain Live",
      icon: FaPlay,
      topics: ["Creating an account", "Your first stream", "Basic settings", "Finding content"]
    },
    {
      title: "Creator Tools",
      description: "Advanced features for content creators",
      icon: FaUser,
      topics: ["Streaming software", "Analytics", "Monetization", "Community building"]
    },
    {
      title: "Safety & Privacy",
      description: "Keep your account secure",
      icon: FaCog,
      topics: ["Account security", "Privacy settings", "Blocking users", "Reporting content"]
    },
    {
      title: "Technical Support",
      description: "Troubleshooting and technical issues",
      icon: FaQuestionCircle,
      topics: ["Connection issues", "App problems", "Audio/video quality", "Device compatibility"]
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
              Help Center
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Find answers to common questions and get support for LightRain Live.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Search Bar */}
          <Box textAlign="center">
            <InputGroup maxW="600px" mx="auto">
              <Input
                placeholder="Search for help articles, guides, and FAQs..."
                bg="gray.900"
                border="1px solid"
                borderColor="gray.700"
                _hover={{ borderColor: 'gray.600' }}
                _focus={{ borderColor: 'red.500', boxShadow: '0 0 0 1px red.500' }}
                color="white"
                pl={4}
                pr={12}
                size="lg"
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
          </Box>

          {/* Help Categories */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Browse by Category</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
              {helpCategories.map((category, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={6}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                  cursor="pointer"
                >
                  <HStack spacing={4} mb={4}>
                    <Box w="40px" h="40px" bg="red.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                      <category.icon size="20px" />
                    </Box>
                    <VStack align="start" spacing={1}>
                      <Heading size="md">{category.title}</Heading>
                      <Text color="gray.400" fontSize="sm">{category.description}</Text>
                    </VStack>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {category.topics.map((topic, topicIndex) => (
                      <Text key={topicIndex} color="gray.300" fontSize="sm">• {topic}</Text>
                    ))}
                  </VStack>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* FAQ */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Frequently Asked Questions</Heading>
            <Accordion allowToggle maxW="800px" mx="auto">
              {faqItems.map((item, index) => (
                <AccordionItem key={index} borderColor="gray.700">
                  <AccordionButton _hover={{ bg: 'gray.800' }} py={6}>
                    <Box flex="1" textAlign="left">
                      <Text fontWeight="bold" fontSize="lg">{item.question}</Text>
                    </Box>
                    <AccordionIcon color="red.500" />
                  </AccordionButton>
                  <AccordionPanel pb={6} color="gray.300">
                    {item.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          {/* Contact Support */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Still Need Help?</Heading>
            <Text color="gray.300" mb={8}>
              Our support team is here to help you 24/7
            </Text>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8} maxW="600px" mx="auto">
              <VStack spacing={3}>
                <Box w="50px" h="50px" bg="red.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <FaEnvelope size="20px" />
                </Box>
                <Text fontWeight="bold">Email Support</Text>
                <Text color="gray.400" fontSize="sm">support@lightrain.com</Text>
              </VStack>
              <VStack spacing={3}>
                <Box w="50px" h="50px" bg="red.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <FaComments size="20px" />
                </Box>
                <Text fontWeight="bold">Live Chat</Text>
                <Text color="gray.400" fontSize="sm">Available 24/7</Text>
              </VStack>
              <VStack spacing={3}>
                <Box w="50px" h="50px" bg="red.500" borderRadius="full" display="flex" alignItems="center" justifyContent="center">
                  <FaPhone size="20px" />
                </Box>
                <Text fontWeight="bold">Phone Support</Text>
                <Text color="gray.400" fontSize="sm">1-800-LIGHTRAIN</Text>
              </VStack>
            </Grid>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
