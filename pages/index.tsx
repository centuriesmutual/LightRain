import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Grid } from '@chakra-ui/react';
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
                <Link href="/about" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  About
                </Link>
                <Link href="/careers" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Careers
                </Link>
                <Link href="/press" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Press
                </Link>
              </HStack>
            </VStack>
            
            {/* Product */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="md" color="white" fontWeight="semibold">Product</Heading>
              <VStack align="flex-start" spacing={3}>
                <Link href="/features" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Features
                </Link>
                <Link href="/studio" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Creator Studio
                </Link>
                <Link href="/analytics" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Analytics
                </Link>
                <Link href="/monetization" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Monetization
                </Link>
                <Link href="/api" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  API
                </Link>
              </VStack>
            </VStack>
            
            {/* Community */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="md" color="white" fontWeight="semibold">Community</Heading>
              <VStack align="flex-start" spacing={3}>
                <Link href="/guidelines" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Community Guidelines
                </Link>
                <Link href="/safety" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Safety Center
                </Link>
                <Link href="/moderation" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Content Moderation
                </Link>
                <Link href="/transparency" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Transparency Report
                </Link>
                <Link href="/education" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Creator Education
                </Link>
              </VStack>
            </VStack>
            
            {/* Support */}
            <VStack align="flex-start" spacing={6}>
              <Heading size="md" color="white" fontWeight="semibold">Support</Heading>
              <VStack align="flex-start" spacing={3}>
                <Link href="/help" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Help Center
                </Link>
                <Link href="/contact" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Contact Us
                </Link>
                <Link href="/status" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  System Status
                </Link>
                <Link href="/feedback" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Feedback
                </Link>
                <Link href="/bug-report" style={{ color: '#9CA3AF', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#9CA3AF'}>
                  Bug Reports
                </Link>
              </VStack>
            </VStack>
          </Grid>
          
          <Box borderTopWidth="1px" borderColor="gray.700" pt={8}>
            <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align="center" gap={6}>
              <Text color="gray.500" fontSize="sm">
                © {new Date().getFullYear()} LightRain Live, Inc. All rights reserved.
              </Text>
              <HStack spacing={8}>
                <Link href="/privacy" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
                  Privacy Policy
                </Link>
                <Link href="/terms" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
                  Terms of Service
                </Link>
                <Link href="/cookies" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
                  Cookie Policy
                </Link>
                <Link href="/accessibility" style={{ color: '#6B7280', fontSize: '14px', textDecoration: 'none' }} onMouseEnter={(e) => e.target.style.color = 'white'} onMouseLeave={(e) => e.target.style.color = '#6B7280'}>
                  Accessibility
                </Link>
              </HStack>
            </Flex>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 