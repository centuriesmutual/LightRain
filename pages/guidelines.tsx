import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaLock, FaHeart, FaUsers, FaExclamationTriangle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Guidelines() {
  const router = useRouter();

  const guidelines = [
    {
      icon: FaHeart,
      title: "Be Respectful",
      description: "Treat everyone with kindness and respect. We're all here to connect and share experiences.",
      examples: ["Use inclusive language", "Listen to different perspectives", "Be patient with newcomers"]
    },
    {
      icon: FaLock,
      title: "Keep It Safe",
      description: "Help us maintain a safe environment for everyone. Report harmful content and behavior.",
      examples: ["No harassment or bullying", "Respect privacy boundaries", "Report dangerous content"]
    },
    {
      icon: FaUsers,
      title: "Be Authentic",
      description: "Share genuine content and be yourself. Authenticity builds stronger connections.",
      examples: ["Share real experiences", "Be honest about your content", "Avoid misleading information"]
    },
    {
      icon: FaExclamationTriangle,
      title: "Follow the Rules",
      description: "Respect our community standards and platform policies to ensure a positive experience.",
      examples: ["No spam or scams", "Respect intellectual property", "Follow age-appropriate content rules"]
    }
  ];

  const violations = [
    "Harassment, bullying, or hate speech",
    "Violent or graphic content",
    "Sexual content involving minors",
    "Spam, scams, or misleading information",
    "Copyright infringement",
    "Dangerous activities or challenges",
    "Impersonation or fake accounts",
    "Sharing personal information without consent"
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
        bgImage="url('https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920')"
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
              Community Guidelines
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Our shared values and expectations for creating a positive, inclusive community on LightRain Live.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Core Guidelines */}
          <Box>
            <Heading size="lg" mb={12} textAlign="center">Our Community Values</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              {guidelines.map((guideline, index) => (
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
                      <guideline.icon size="24px" />
                    </Box>
                    <VStack align="start" spacing={2}>
                      <Heading size="md">{guideline.title}</Heading>
                      <Text color="gray.300">{guideline.description}</Text>
                    </VStack>
                  </HStack>
                  <VStack align="start" spacing={2}>
                    {guideline.examples.map((example, exampleIndex) => (
                      <HStack key={exampleIndex} spacing={3}>
                        <Box w="6px" h="6px" bg="red.500" borderRadius="full" />
                        <Text color="gray.400" fontSize="sm">{example}</Text>
                      </HStack>
                    ))}
                  </VStack>
                </MotionBox>
              ))}
            </Grid>
          </Box>

          {/* Prohibited Content */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Prohibited Content & Behavior</Heading>
            <Box maxW="800px" mx="auto">
              <VStack spacing={4} align="stretch">
                {violations.map((violation, index) => (
                  <HStack key={index} spacing={4} p={4} bg="gray.900" borderRadius="lg" border="1px solid" borderColor="gray.700">
                    <Box w="8px" h="8px" bg="red.500" borderRadius="full" />
                    <Text color="gray.300">{violation}</Text>
                  </HStack>
                ))}
              </VStack>
            </Box>
          </Box>

          {/* Enforcement */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">How We Enforce Guidelines</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <Box textAlign="center">
                <Box w="80px" h="80px" bg="red.500" borderRadius="full" mx="auto" mb={6} display="flex" alignItems="center" justifyContent="center">
                  <FaLock size="32px" />
                </Box>
                <Heading size="md" mb={4}>Automated Detection</Heading>
                <Text color="gray.300">AI-powered systems help identify policy violations and harmful content in real-time.</Text>
              </Box>
              <Box textAlign="center">
                <Box w="80px" h="80px" bg="red.500" borderRadius="full" mx="auto" mb={6} display="flex" alignItems="center" justifyContent="center">
                  <FaUsers size="32px" />
                </Box>
                <Heading size="md" mb={4}>Community Reports</Heading>
                <Text color="gray.300">Users can report content and behavior that violates our guidelines for review.</Text>
              </Box>
              <Box textAlign="center">
                <Box w="80px" h="80px" bg="red.500" borderRadius="full" mx="auto" mb={6} display="flex" alignItems="center" justifyContent="center">
                  <FaExclamationTriangle size="32px" />
                </Box>
                <Heading size="md" mb={4}>Human Review</Heading>
                <Text color="gray.300">Our moderation team reviews reported content and takes appropriate action.</Text>
              </Box>
            </Grid>
          </Box>

          {/* Consequences */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Consequences for Violations</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              <Box bg="gray.900" p={8} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={6} color="yellow.400">First Violation</Heading>
                <VStack align="start" spacing={3}>
                  <Text color="gray.300">• Warning notification</Text>
                  <Text color="gray.300">• Content removal if necessary</Text>
                  <Text color="gray.300">• Educational resources about guidelines</Text>
                </VStack>
              </Box>
              <Box bg="gray.900" p={8} borderRadius="lg" border="1px solid" borderColor="gray.700">
                <Heading size="md" mb={6} color="red.400">Repeated Violations</Heading>
                <VStack align="start" spacing={3}>
                  <Text color="gray.300">• Temporary restrictions</Text>
                  <Text color="gray.300">• Limited access to features</Text>
                  <Text color="gray.300">• Account suspension or termination</Text>
                </VStack>
              </Box>
            </Grid>
          </Box>

          {/* Contact */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Questions About Guidelines?</Heading>
            <Text color="gray.300" mb={8}>
              If you have questions about our community guidelines or need to report a violation, we're here to help.
            </Text>
            <HStack spacing={4} justify="center">
              <Button
                size="lg"
                colorScheme="red"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/help')}
              >
                Contact Support
              </Button>
              <Button
                size="lg"
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
              >
                Report Content
              </Button>
            </HStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
