import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Grid, Link as ChakraLink } from '@chakra-ui/react';
import Link from 'next/link';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaCloudRain } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MotionBox = motion(Box);

// Content rows removed as requested

export default function Home() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const [isHeaderVisible, setIsHeaderVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and past 100px
        setIsHeaderVisible(false);
      } else {
        // Scrolling up
        setIsHeaderVisible(true);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <Box bg="black" minH="100vh" color="white">
      {/* Navigation Bar */}
      <Box
        position="fixed"
        top={isHeaderVisible ? 0 : -100}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(0,0,0,0.8)"
        backdropFilter="blur(10px)"
        transition="all 0.3s ease-in-out"
        _hover={{ bg: 'rgba(0,0,0,0.9)' }}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center" h="68px">
            <HStack spacing={8}>
              <HStack 
                spacing={3} 
                cursor="pointer" 
                onClick={() => router.push('/')}
                _hover={{ opacity: 0.8 }}
                transition="opacity 0.2s"
              >
                <FaCloudRain size="32px" color="white" />
                <Heading size="lg" color="white" fontWeight="bold">
                  LightRain
                </Heading>
              </HStack>
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
                onClick={() => router.push('/coins')}
              />
              <IconButton
                aria-label="Download App"
                icon={<FaMobile />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => router.push('/download')}
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
                    onClick={() => router.push('/login')}
                  >
                    <HStack spacing={3}>
                      <FaSignInAlt />
                      <Text>Login</Text>
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
        h="100vh"
        bgImage="url('/Trending GIF night city nyc christmas movies new york city 1994 miracle on 34th street skyline empire state building.gif')"
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
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" w="100%">
            {/* Left Section */}
            <VStack spacing={6} align="start" maxW="600px">
              {/* Image removed */}
            </VStack>
            {/* Right Section */}
            <VStack spacing={6} align="start" maxW="600px">
              <Heading
                as="h2"
                size="3xl"
                fontWeight="bold"
                lineHeight="1.2"
                textShadow="2px 2px 4px rgba(0,0,0,0.5)"
              >
                Go Live. Scroll. Repeat.
              </Heading>
              <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
                Watch and create vertical livestreams. Swipe through moments, chat in real time, and discover creators in an immersive live experience.
              </Text>
              <HStack spacing={4}>
                <Button
                  size="lg"
                  leftIcon={<FaPlay />}
                bg="red.600"
                color="white"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/for-you')}
                px={8}
              >
                For You
                </Button>
                <Button
                  size="lg"
                  leftIcon={<FaUser />}
                  variant="outline"
                  borderColor="whiteAlpha.400"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                  onClick={() => router.push('/explore')}
                  px={8}
                >
                  Explore
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Footer */}
      <Box as="footer" bg="gray.900" color="gray.300" py={16} borderTopWidth="1px" borderColor="gray.700">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={12} mb={12}>
            {/* Company */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="lg" color="white" fontWeight="bold">LightRain Live</Heading>
              <Text color="gray.400" fontSize="sm" lineHeight="1.6">
                The world's leading vertical livestreaming platform. Connect, create, and discover in real-time.
              </Text>
              <HStack spacing={4}>
                <ChakraLink href="/about" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  About
                </ChakraLink>
                <ChakraLink href="/careers" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Careers
                </ChakraLink>
                <ChakraLink href="/press" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Press
                </ChakraLink>
              </HStack>
            </VStack>
            
            {/* Product */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="md" color="white" fontWeight="semibold">Product</Heading>
              <VStack align="flex-start" spacing={3}>
                <ChakraLink href="/features" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Features
                </ChakraLink>
                <ChakraLink href="/studio" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Creator Studio
                </ChakraLink>
                <ChakraLink href="/analytics" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Analytics
                </ChakraLink>
                <ChakraLink href="/monetization" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Monetization
                </ChakraLink>
                <ChakraLink href="/api" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  API
                </ChakraLink>
              </VStack>
            </VStack>
            
            {/* Community */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="md" color="white" fontWeight="semibold">Community</Heading>
              <VStack align="flex-start" spacing={3}>
                <ChakraLink href="/guidelines" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Community Guidelines
                </ChakraLink>
                <ChakraLink href="/safety" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Safety Center
                </ChakraLink>
                <ChakraLink href="/moderation" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Content Moderation
                </ChakraLink>
                <ChakraLink href="/transparency" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Transparency Report
                </ChakraLink>
                <ChakraLink href="/education" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Creator Education
                </ChakraLink>
              </VStack>
            </VStack>
            
            {/* Support */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="md" color="white" fontWeight="semibold">Support</Heading>
              <VStack align="flex-start" spacing={3}>
                <ChakraLink href="/help" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Help Center
                </ChakraLink>
                <ChakraLink href="/contact" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Contact Us
                </ChakraLink>
                <ChakraLink href="/status" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  System Status
                </ChakraLink>
                <ChakraLink href="/feedback" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Feedback
                </ChakraLink>
                <ChakraLink href="/bug-report" color="gray.400" fontSize="sm" _hover={{ color: 'white' }}>
                  Bug Reports
                </ChakraLink>
              </VStack>
            </VStack>
          </Grid>
          
          <Box borderTopWidth="1px" borderColor="gray.700" pt={8}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={6}>
              <Text color="gray.500" fontSize="sm">
                © {new Date().getFullYear()} LightRain Live, Inc. All rights reserved.
              </Text>
              <HStack spacing={8}>
                <ChakraLink href="/privacy" color="gray.500" fontSize="sm" _hover={{ color: 'white' }}>
                  Privacy Policy
                </ChakraLink>
                <ChakraLink href="/terms" color="gray.500" fontSize="sm" _hover={{ color: 'white' }}>
                  Terms of Service
                </ChakraLink>
                <ChakraLink href="/cookies" color="gray.500" fontSize="sm" _hover={{ color: 'white' }}>
                  Cookie Policy
                </ChakraLink>
                <ChakraLink href="/accessibility" color="gray.500" fontSize="sm" _hover={{ color: 'white' }}>
                  Accessibility
                </ChakraLink>
              </HStack>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 