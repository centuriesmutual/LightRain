import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

// Sample content data
const contentRows = [
  {
    title: "Popular on LightRain",
    items: [
      { id: 1, title: "Beverly Hills", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", description: "Premium beachfront property" },
      { id: 2, title: "Manhattan", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", description: "Downtown luxury living" },
      { id: 3, title: "Aspen", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Scenic mountain retreat" },
      { id: 4, title: "San Francisco", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800", description: "Contemporary urban living" },
      { id: 5, title: "Miami", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", description: "Classic architecture" },
    ]
  },
  {
    title: "Trending Now",
    items: [
      { id: 6, title: "Seattle", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", description: "Ocean view luxury" },
      { id: 7, title: "Austin", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800", description: "Tech-integrated living" },
      { id: 8, title: "Denver", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Nature-inspired design" },
      { id: 9, title: "Chicago", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", description: "Urban high-rise living" },
      { id: 10, title: "Portland", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", description: "Sustainable living" },
    ]
  },
  {
    title: "New Listings",
    items: [
      { id: 11, title: "Los Angeles", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", description: "Seaside paradise" },
      { id: 12, title: "Boston", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800", description: "Modern city living" },
      { id: 13, title: "Nashville", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Rural luxury" },
      { id: 14, title: "Las Vegas", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800", description: "Smart living" },
      { id: 15, title: "Phoenix", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", description: "Panoramic views" },
    ]
  }
];

export default function Home() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

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
                  placeholder="Search properties..."
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
                aria-label="Notifications"
                icon={<FaBell />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
              />
              <Menu>
                <MenuButton
                  as={IconButton}
                  icon={<Avatar size="sm" icon={<FaUser />} />}
                  variant="ghost"
                  _hover={{ bg: 'whiteAlpha.200' }}
                />
                <MenuList 
                  bg="gray.900" 
                  borderColor="whiteAlpha.200"
                  boxShadow="xl"
                  py={2}
                >
                  <MenuItem 
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => router.push('/profile')}
                  >
                    <HStack spacing={3}>
                      <FaUser />
                      <Text>Profile</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem 
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => router.push('/account')}
                  >
                    <HStack spacing={3}>
                      <FaCog />
                      <Text>Account Settings</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem 
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => router.push('/help')}
                  >
                    <HStack spacing={3}>
                      <FaQuestionCircle />
                      <Text>Help Center</Text>
                    </HStack>
                  </MenuItem>
                  <MenuDivider borderColor="whiteAlpha.200" />
                  <MenuItem 
                    _hover={{ bg: 'whiteAlpha.200' }}
                    onClick={() => router.push('/login')}
                  >
                    <HStack spacing={3}>
                      <FaSignInAlt />
                      <Text>Sign In</Text>
                    </HStack>
                  </MenuItem>
                  <MenuItem 
                    _hover={{ bg: 'whiteAlpha.200' }}
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
        h="80vh"
        bgImage="url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=1920')"
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
                Earn Solana
              </Heading>
              <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
                Fast, secure, and travel tokenization on Solana.
              </Text>
              <HStack spacing={4}>
                <Button
                  size="lg"
                  leftIcon={<FaChartLine />}
                  bg="blue.600"
                  color="white"
                  _hover={{ bg: 'blue.500' }}
                  onClick={() => router.push('/dashboard')}
                  px={8}
                >
                  Markets
                </Button>
                <Button
                  size="lg"
                  leftIcon={<FaPlane />}
                  variant="outline"
                  borderColor="whiteAlpha.400"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                  onClick={() => router.push('/technology')}
                  px={8}
                >
                  Travel
                </Button>
              </HStack>
            </VStack>
          </Flex>
        </Container>
      </Box>

      {/* Content Rows */}
      <Box py={8} mt={-8}>
        {contentRows.map((row, index) => (
          <Box key={index} mb={8}>
            <Container maxW="container.xl">
              <Heading size="lg" mb={4} textShadow="1px 1px 2px rgba(0,0,0,0.5)">{row.title}</Heading>
              <Flex position="relative" align="center">
                <IconButton
                  aria-label="Previous"
                  icon={<FaChevronLeft />}
                  position="absolute"
                  left={0}
                  zIndex={2}
                  variant="ghost"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  bg="rgba(0,0,0,0.5)"
                />
                <Flex overflowX="auto" gap={4} py={4} px={8} css={{
                  '&::-webkit-scrollbar': { display: 'none' },
                  scrollbarWidth: 'none',
                }}>
                  {row.items.map((item) => (
                    <MotionBox
                      key={item.id}
                      minW="300px"
                      h="200px"
                      position="relative"
                      borderRadius="md"
                      overflow="hidden"
                      cursor="pointer"
                      onHoverStart={() => setHoveredItem(item.id)}
                      onHoverEnd={() => setHoveredItem(null)}
                      whileHover={{ scale: 1.1, zIndex: 2 }}
                      transition={{ duration: 0.2 }}
                      boxShadow="0 4px 6px rgba(0,0,0,0.1)"
                      onClick={() => router.push(`/property/${item.id}`)}
                    >
                      <Image
                        src={item.image}
                        alt={item.title}
                        w="100%"
                        h="100%"
                        objectFit="cover"
                        fallbackSrc="https://via.placeholder.com/300x200?text=Loading..."
                      />
                      <Box
                        position="absolute"
                        bottom={0}
                        left={0}
                        right={0}
                        p={4}
                        bg="linear-gradient(to top, rgba(0,0,0,0.9) 0%, rgba(0,0,0,0) 100%)"
                        opacity={hoveredItem === item.id ? 1 : 0}
                        transition="opacity 0.2s"
                      >
                        <Text fontWeight="bold" fontSize="lg">{item.title}</Text>
                        <Text fontSize="sm" color="gray.300">{item.description}</Text>
                        <HStack mt={2} spacing={2}>
                          <Button size="sm" leftIcon={<FaPlay />} colorScheme="whiteAlpha">
                            View
                          </Button>
                          <Button size="sm" leftIcon={<FaInfoCircle />} variant="ghost">
                            Details
                          </Button>
                        </HStack>
                      </Box>
                    </MotionBox>
                  ))}
                </Flex>
                <IconButton
                  aria-label="Next"
                  icon={<FaChevronRight />}
                  position="absolute"
                  right={0}
                  zIndex={2}
                  variant="ghost"
                  color="white"
                  _hover={{ bg: 'whiteAlpha.200' }}
                  bg="rgba(0,0,0,0.5)"
                />
              </Flex>
            </Container>
          </Box>
        ))}
      </Box>
      {/* Footer */}
      <Box as="footer" bgGradient="linear(to-r, #1a1a1a, #232526 80%)" color="gray.300" py={12} mt={16} borderTopWidth="2px" borderColor="gray.300" boxShadow="0 -4px 24px 0 rgba(212,175,55,0.08)">
        <Container maxW="container.xl">
          <Flex direction={{ base: 'column', md: 'row' }} justify="space-between" align={{ base: 'flex-start', md: 'center' }} gap={12}>
            {/* About & Brand */}
            <VStack align="flex-start" spacing={4} maxW="340px">
              <Heading size="md" color="gray.300" fontFamily="serif">LightRain</Heading>
              <Link href="/about" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>About</Link>
              <Link href="/whitepaper" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Whitepaper</Link>
              <Link href="/tokenomics" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Tokenomics</Link>
              <Link href="/governance" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Governance</Link>
            </VStack>
            {/* Investment Security */}
            <VStack align="flex-start" spacing={2} maxW="260px">
              <Heading size="sm" color="gray.300" fontFamily="serif">Investment Security</Heading>
              <Link href="/security" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Security</Link>
            </VStack>
            {/* Technology */}
            <VStack align="flex-start" spacing={2} maxW="260px">
              <Heading size="sm" color="gray.300" fontFamily="serif">Cutting-Edge Technology</Heading>
              <Link href="/technology" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Technology</Link>
            </VStack>
            {/* Regulatory Compliance */}
            <VStack align="flex-start" spacing={2} maxW="260px">
              <Heading size="sm" color="gray.300" fontFamily="serif">Regulatory Compliance</Heading>
              <Link href="/compliance" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Compliance</Link>
            </VStack>
            {/* Contact */}
            <VStack align="flex-start" spacing={2} maxW="220px">
              <Heading size="sm" color="gray.300" fontFamily="serif">Contact</Heading>
              <Link href="mailto:invest@lightrain.com" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Email</Link>
              <Link href="tel:+442012345678" color="gray.300" fontSize="sm" _hover={{ color: 'gray.200' }}>Phone</Link>
              <Text color="gray.300" fontSize="sm">London, UK</Text>
            </VStack>
          </Flex>
          <Box mt={10} borderTopWidth="1px" borderColor="gray.300" pt={6} textAlign="center">
            <Text color="gray.500" fontSize="xs">
              © {new Date().getFullYear()} LightRain. All rights reserved. This website is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any securities. Investments are subject to risk, including loss of principal. Please consult your financial advisor before investing.
            </Text>
          </Box>
        </Container>
      </Box>
    </Box>
  );
} 