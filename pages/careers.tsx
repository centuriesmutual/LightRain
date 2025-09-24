import { Box, Container, Heading, Text, VStack, HStack, Image, Flex, IconButton, useColorModeValue, Avatar, Menu, MenuButton, MenuList, MenuItem, InputGroup, Input, InputRightElement, MenuDivider, Link, Grid, Button } from '@chakra-ui/react';
import { FaPlay, FaInfoCircle, FaChevronLeft, FaChevronRight, FaSearch, FaBell, FaUser, FaCog, FaQuestionCircle, FaSignInAlt, FaUserPlus, FaChartLine, FaPlane, FaCoins, FaMobile, FaUserCircle, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import { useState } from 'react';

const MotionBox = motion(Box);

export default function Careers() {
  const router = useRouter();

  const jobOpenings = [
    {
      title: "Senior Frontend Engineer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      description: "Build the next generation of livestreaming interfaces with React, TypeScript, and cutting-edge web technologies."
    },
    {
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      description: "Lead product strategy and roadmap for our creator tools and monetization features."
    },
    {
      title: "Content Moderator",
      department: "Trust & Safety",
      location: "Austin, TX",
      type: "Full-time",
      description: "Help maintain a safe and positive community environment for our global user base."
    },
    {
      title: "Data Scientist",
      department: "Data",
      location: "New York, NY",
      type: "Full-time",
      description: "Develop ML models for content recommendation and user engagement optimization."
    },
    {
      title: "UX Designer",
      department: "Design",
      location: "Los Angeles, CA",
      type: "Full-time",
      description: "Create intuitive and engaging user experiences for our mobile and web platforms."
    },
    {
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Seattle, WA",
      type: "Full-time",
      description: "Scale our infrastructure to support millions of concurrent livestreams worldwide."
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
              Join Our Team
            </Heading>
            <Text fontSize="xl" color="gray.300" textShadow="1px 1px 2px rgba(0,0,0,0.5)">
              Help us build the future of livestreaming. We're looking for passionate individuals who want to make a difference.
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* Content */}
      <Container maxW="container.xl" py={20}>
        <VStack spacing={16} align="stretch">
          {/* Why Work With Us */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Why Work at LightRain Live?</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
              <Box textAlign="center">
                <Box w="60px" h="60px" bg="red.500" borderRadius="full" mx="auto" mb={4} display="flex" alignItems="center" justifyContent="center">
                  <FaPlay size="24px" />
                </Box>
                <Heading size="md" mb={3}>Innovation First</Heading>
                <Text color="gray.300">Work on cutting-edge technology that's shaping the future of social media and entertainment.</Text>
              </Box>
              <Box textAlign="center">
                <Box w="60px" h="60px" bg="red.500" borderRadius="full" mx="auto" mb={4} display="flex" alignItems="center" justifyContent="center">
                  <FaUser size="24px" />
                </Box>
                <Heading size="md" mb={3}>Diverse Team</Heading>
                <Text color="gray.300">Join a global team of talented individuals from diverse backgrounds and experiences.</Text>
              </Box>
              <Box textAlign="center">
                <Box w="60px" h="60px" bg="red.500" borderRadius="full" mx="auto" mb={4} display="flex" alignItems="center" justifyContent="center">
                  <FaChartLine size="24px" />
                </Box>
                <Heading size="md" mb={3}>Growth Opportunities</Heading>
                <Text color="gray.300">Fast-growing company with endless opportunities for career advancement and skill development.</Text>
              </Box>
            </Grid>
          </Box>

          {/* Benefits */}
          <Box>
            <Heading size="lg" mb={8} textAlign="center">Benefits & Perks</Heading>
            <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
              <VStack align="start" spacing={4}>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Competitive salary and equity packages</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Comprehensive health, dental, and vision insurance</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Flexible work arrangements and remote options</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Unlimited PTO and mental health days</Text>
                </HStack>
              </VStack>
              <VStack align="start" spacing={4}>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Learning and development budget</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Top-tier equipment and home office setup</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Team events and company retreats</Text>
                </HStack>
                <HStack spacing={4}>
                  <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                  <Text color="gray.300">Catered meals and snacks</Text>
                </HStack>
              </VStack>
            </Grid>
          </Box>

          {/* Open Positions */}
          <Box>
            <Heading size="lg" mb={8}>Open Positions</Heading>
            <VStack spacing={6} align="stretch">
              {jobOpenings.map((job, index) => (
                <MotionBox
                  key={index}
                  bg="gray.900"
                  p={6}
                  borderRadius="lg"
                  border="1px solid"
                  borderColor="gray.700"
                  whileHover={{ scale: 1.02 }}
                  transition={{ duration: 0.2 }}
                >
                  <Flex justify="space-between" align="start" mb={4}>
                    <VStack align="start" spacing={2}>
                      <Heading size="md">{job.title}</Heading>
                      <HStack spacing={4} color="gray.400">
                        <HStack spacing={1}>
                          <FaMapMarkerAlt size="12px" />
                          <Text fontSize="sm">{job.location}</Text>
                        </HStack>
                        <HStack spacing={1}>
                          <FaClock size="12px" />
                          <Text fontSize="sm">{job.type}</Text>
                        </HStack>
                      </HStack>
                    </VStack>
                    <Button
                      colorScheme="red"
                      variant="outline"
                      size="sm"
                      _hover={{ bg: 'red.500', color: 'white' }}
                    >
                      Apply Now
                    </Button>
                  </Flex>
                  <Text color="gray.300" fontSize="sm">{job.description}</Text>
                </MotionBox>
              ))}
            </VStack>
          </Box>

          {/* CTA */}
          <Box textAlign="center" py={12}>
            <Heading size="lg" mb={4}>Don't See Your Role?</Heading>
            <Text color="gray.300" mb={6}>
              We're always looking for exceptional talent. Send us your resume and let us know how you'd like to contribute.
            </Text>
            <Button
              size="lg"
              colorScheme="red"
              _hover={{ bg: 'red.500' }}
            >
              Send Resume
            </Button>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
}
