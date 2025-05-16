import { Box, Container, Heading, Text, Button, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

// Sample content data
const contentRows = [
  {
    title: "Popular on LightRain",
    items: [
      { id: 1, title: "Luxury Villa", image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800", description: "Premium beachfront property" },
      { id: 2, title: "City Penthouse", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", description: "Downtown luxury living" },
      { id: 3, title: "Mountain Estate", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Scenic mountain retreat" },
      { id: 4, title: "Modern Apartment", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800", description: "Contemporary urban living" },
      { id: 5, title: "Historic Mansion", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", description: "Classic architecture" },
    ]
  },
  {
    title: "Trending Now",
    items: [
      { id: 6, title: "Waterfront Condo", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", description: "Ocean view luxury" },
      { id: 7, title: "Smart Home", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800", description: "Tech-integrated living" },
      { id: 8, title: "Garden Villa", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Nature-inspired design" },
      { id: 9, title: "Sky Tower", image: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800", description: "Urban high-rise living" },
      { id: 10, title: "Eco House", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", description: "Sustainable living" },
    ]
  },
  {
    title: "New Listings",
    items: [
      { id: 11, title: "Beach House", image: "https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?w=800", description: "Seaside paradise" },
      { id: 12, title: "Urban Loft", image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=800", description: "Modern city living" },
      { id: 13, title: "Country Estate", image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800", description: "Rural luxury" },
      { id: 14, title: "Tech Villa", image: "https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=800", description: "Smart living" },
      { id: 15, title: "Mountain View", image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?w=800", description: "Panoramic views" },
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
          <VStack spacing={6} align="start" maxW="600px">
            <Heading
              as="h1"
              size="4xl"
              fontWeight="bold"
              lineHeight="1.2"
              textShadow="2px 2px 4px rgba(0,0,0,0.5)"
            >
              Tokenize Your Dream Property
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Invest in premium real estate through blockchain technology. Own a piece of the world's most prestigious locations.
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                leftIcon={<FaUser />}
                bg="red.600"
                color="white"
                _hover={{ bg: 'red.500' }}
                onClick={() => router.push('/signup')}
                px={8}
              >
                Sign Up
              </Button>
              <Button
                size="lg"
                leftIcon={<FaInfoCircle />}
                variant="outline"
                borderColor="whiteAlpha.400"
                color="white"
                _hover={{ bg: 'whiteAlpha.200', borderColor: 'white' }}
                onClick={() => router.push('/about')}
                px={8}
              >
                Learn More
              </Button>
            </HStack>
          </VStack>
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
    </Box>
  );
} 