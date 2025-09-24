import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaCloudRain } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MotionBox = motion(Box);

export default function Explore() {
  const router = useRouter();
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);

  const contentRows = [
    {
      title: "Popular Live Streams",
      items: [
        {
          id: 1,
          title: "Dance Challenge Live",
          creator: "DanceQueen_NYC",
          viewers: "12.5K",
          thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
          category: "Dance"
        },
        {
          id: 2,
          title: "City Night Vibes",
          creator: "UrbanExplorer",
          viewers: "8.2K",
          thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
          category: "IRL"
        },
        {
          id: 3,
          title: "Mountain IRL",
          creator: "NatureLover",
          viewers: "5.7K",
          thumbnail: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=300&h=400&fit=crop",
          category: "Adventure"
        },
        {
          id: 4,
          title: "Creator Studio",
          creator: "BehindTheScenes",
          viewers: "3.1K",
          thumbnail: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=300&h=400&fit=crop",
          category: "Behind Scenes"
        },
        {
          id: 5,
          title: "Beach Sunset Live",
          creator: "SunsetVibes",
          viewers: "9.8K",
          thumbnail: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=300&h=400&fit=crop",
          category: "Relaxation"
        }
      ]
    },
    {
      title: "Trending Now",
      items: [
        {
          id: 6,
          title: "Cooking ASMR",
          creator: "ChefASMR",
          viewers: "15.2K",
          thumbnail: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=400&fit=crop",
          category: "Cooking"
        },
        {
          id: 7,
          title: "Tech Unbox Live",
          creator: "TechReviewer",
          viewers: "11.3K",
          thumbnail: "https://images.unsplash.com/photo-1518717758536-85ae29035b6d?w=300&h=400&fit=crop",
          category: "Technology"
        },
        {
          id: 8,
          title: "Hiking Stream",
          creator: "TrailBlazer",
          viewers: "6.9K",
          thumbnail: "https://images.unsplash.com/photo-1551632811-561732d1e306?w=300&h=400&fit=crop",
          category: "Nature"
        },
        {
          id: 9,
          title: "City Street Cam",
          creator: "StreetLife",
          viewers: "4.5K",
          thumbnail: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000?w=300&h=400&fit=crop",
          category: "Street"
        },
        {
          id: 10,
          title: "Eco Tips Live",
          creator: "EcoWarrior",
          viewers: "7.8K",
          thumbnail: "https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=300&h=400&fit=crop",
          category: "Lifestyle"
        }
      ]
    },
    {
      title: "New Creators",
      items: [
        {
          id: 11,
          title: "LA IRL",
          creator: "NewCreator_LA",
          viewers: "2.1K",
          thumbnail: "https://images.unsplash.com/photo-1519501025264-65ba15a82390?w=300&h=400&fit=crop",
          category: "IRL"
        },
        {
          id: 12,
          title: "Art Studio Live",
          creator: "ArtistInProgress",
          viewers: "1.8K",
          thumbnail: "https://images.unsplash.com/photo-1513475382585-d06e58bcb0e0?w=300&h=400&fit=crop",
          category: "Art"
        },
        {
          id: 13,
          title: "Gaming Setup",
          creator: "NewGamer",
          viewers: "3.2K",
          thumbnail: "https://images.unsplash.com/photo-1493711662062-fa541adb3fc8?w=300&h=400&fit=crop",
          category: "Gaming"
        },
        {
          id: 14,
          title: "Music Practice",
          creator: "MusicianRising",
          viewers: "1.5K",
          thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=300&h=400&fit=crop",
          category: "Music"
        },
        {
          id: 15,
          title: "Fitness Journey",
          creator: "FitNewbie",
          viewers: "2.7K",
          thumbnail: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?w=300&h=400&fit=crop",
          category: "Fitness"
        }
      ]
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

      {/* Main Content */}
      <Box pt="68px">
        <Container maxW="container.xl" py={12}>
          <VStack spacing={16} align="stretch">
            {contentRows.map((row, rowIndex) => (
              <Box key={rowIndex}>
                <HStack justify="space-between" align="center" mb={8}>
                  <Heading size="xl" fontWeight="bold">
                    {row.title}
                  </Heading>
                  <HStack spacing={4}>
                    <IconButton
                      aria-label="Previous"
                      icon={<FaChevronLeft />}
                      variant="ghost"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.200' }}
                    />
                    <IconButton
                      aria-label="Next"
                      icon={<FaChevronRight />}
                      variant="ghost"
                      color="white"
                      _hover={{ bg: 'whiteAlpha.200' }}
                    />
                  </HStack>
                </HStack>
                
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(5, 1fr)' }} gap={6}>
                  {row.items.map((item, itemIndex) => (
                    <MotionBox
                      key={item.id}
                      position="relative"
                      borderRadius="lg"
                      overflow="hidden"
                      cursor="pointer"
                      onMouseEnter={() => setHoveredItem(item.id)}
                      onMouseLeave={() => setHoveredItem(null)}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Box
                        position="relative"
                        h="300px"
                        bgImage={`url('${item.thumbnail}')`}
                        bgSize="cover"
                        bgPosition="center"
                        _before={{
                          content: '""',
                          position: 'absolute',
                          top: 0,
                          left: 0,
                          right: 0,
                          bottom: 0,
                          bg: 'linear-gradient(to bottom, rgba(0,0,0,0.3) 0%, rgba(0,0,0,0.8) 100%)',
                          zIndex: 1,
                        }}
                      >
                        {/* Live Badge */}
                        <Box
                          position="absolute"
                          top={3}
                          left={3}
                          bg="red.600"
                          color="white"
                          px={2}
                          py={1}
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight="bold"
                          zIndex={2}
                        >
                          LIVE
                        </Box>

                        {/* Viewer Count */}
                        <Box
                          position="absolute"
                          top={3}
                          right={3}
                          bg="rgba(0,0,0,0.7)"
                          color="white"
                          px={2}
                          py={1}
                          borderRadius="md"
                          fontSize="xs"
                          fontWeight="bold"
                          zIndex={2}
                        >
                          {item.viewers} watching
                        </Box>

                        {/* Content Info */}
                        <Box
                          position="absolute"
                          bottom={0}
                          left={0}
                          right={0}
                          p={4}
                          zIndex={2}
                        >
                          <VStack align="start" spacing={2}>
                            <Text fontWeight="bold" fontSize="md" noOfLines={2}>
                              {item.title}
                            </Text>
                            <HStack spacing={2}>
                              <Avatar size="xs" src={`https://images.unsplash.com/photo-${1494790108755 + item.id}?w=50&h=50&fit=crop&crop=face`} />
                              <Text fontSize="sm" color="gray.300">
                                @{item.creator}
                              </Text>
                            </HStack>
                            <Text fontSize="xs" color="gray.400">
                              {item.category}
                            </Text>
                          </VStack>
                        </Box>

                        {/* Play Overlay */}
                        <AnimatePresence>
                          {hoveredItem === item.id && (
                            <MotionBox
                              position="absolute"
                              top="50%"
                              left="50%"
                              transform="translate(-50%, -50%)"
                              zIndex={3}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              exit={{ opacity: 0, scale: 0.8 }}
                              transition={{ duration: 0.2 }}
                            >
                              <IconButton
                                aria-label="Play"
                                icon={<FaPlay />}
                                size="lg"
                                variant="ghost"
                                color="white"
                                bg="rgba(0,0,0,0.7)"
                                _hover={{ bg: 'rgba(0,0,0,0.9)' }}
                                borderRadius="full"
                              />
                            </MotionBox>
                          )}
                        </AnimatePresence>
                      </Box>
                    </MotionBox>
                  ))}
                </Grid>
              </Box>
            ))}
          </VStack>
        </Container>
      </Box>
    </Box>
  );
}