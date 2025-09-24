import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  Grid,
  GridItem,
  Icon,
  Badge,
  Divider,
  useColorModeValue,
  Stat,
  StatLabel,
  StatNumber,
  StatHelpText,
  Flex,
} from '@chakra-ui/react';
import { FaBed, FaBath, FaRuler, FaMapMarkerAlt, FaChartLine, FaCalendarAlt } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

// Sample property data - in a real app, this would come from an API
const propertyData = {
  1: {
    title: "Creator Loft Studio",
    description: "Live content hub with pro lighting and sound-ready space",
    price: "$2,500,000",
    location: "Downtown, LA",
    size: "4,500 sq ft",
    bedrooms: 5,
    bathrooms: 4.5,
    yearBuilt: 2020,
    image: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
    gallery: [
      "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=800",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=800",
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=800",
    ],
    features: [
      "4K Camera Ready",
      "Acoustic Treatment",
      "RGB Lighting",
      "Dual PC Setup",
      "Creator Lounge",
      "High-Speed Fiber",
    ],
    marketTrends: {
      currentValue: "$2,500,000",
      monthlyChange: "+2.5%",
      yearlyChange: "+15.3%",
    }
  },
  // Add more properties here...
};

export default function PropertyDetails() {
  const router = useRouter();
  const { id } = router.query;
  const propertyId = typeof id === 'string' ? parseInt(id, 10) : null;
  const property = propertyId ? propertyData[propertyId as keyof typeof propertyData] : null;

  if (!property) {
    return (
      <Box minH="100vh" bg="black" color="white" py={20}>
        <Container maxW="container.xl">
          <Heading>Property not found</Heading>
        </Container>
      </Box>
    );
  }

  return (
    <Box minH="100vh" bg="black" color="white">
      {/* Hero Section */}
      <Box position="relative" h="60vh">
        <Image
          src={property.image}
          alt={property.title}
          w="100%"
          h="100%"
          objectFit="cover"
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="linear-gradient(to bottom, rgba(0,0,0,0.4) 0%, rgba(0,0,0,0.8) 100%)"
        />
        <Container maxW="container.xl" position="relative" h="100%">
          <VStack
            align="start"
            justify="center"
            h="100%"
            spacing={6}
            maxW="800px"
          >
            <Heading size="2xl">{property.title}</Heading>
            <HStack spacing={4}>
              <HStack>
                <Icon as={FaMapMarkerAlt} />
                <Text>{property.location}</Text>
              </HStack>
              <HStack>
                <Icon as={FaRuler} />
                <Text>{property.size}</Text>
              </HStack>
            </HStack>
            <Text fontSize="xl" color="gray.300">{property.description}</Text>
            <Button
              size="lg"
              colorScheme="red"
              onClick={() => router.push('/signup')}
            >
              Follow Creator
            </Button>
          </VStack>
        </Container>
      </Box>

      {/* Property Details */}
      <Container maxW="container.xl" py={20}>
        <Grid templateColumns={{ base: '1fr', lg: '2fr 1fr' }} gap={12}>
          {/* Main Content */}
          <GridItem>
            <VStack spacing={12} align="stretch">
              {/* Key Features */}
              <Box>
                <Heading size="lg" mb={6}>Key Features</Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                  <HStack spacing={4}>
                    <Icon as={FaBed} boxSize={6} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">{property.bedrooms}</Text>
                      <Text color="gray.400">Bedrooms</Text>
                    </VStack>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaBath} boxSize={6} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">{property.bathrooms}</Text>
                      <Text color="gray.400">Bathrooms</Text>
                    </VStack>
                  </HStack>
                  <HStack spacing={4}>
                    <Icon as={FaCalendarAlt} boxSize={6} />
                    <VStack align="start" spacing={0}>
                      <Text fontWeight="bold">{property.yearBuilt}</Text>
                      <Text color="gray.400">Year Built</Text>
                    </VStack>
                  </HStack>
                </Grid>
              </Box>

              {/* Property Features */}
              <Box>
                <Heading size="lg" mb={6}>Stream Setup Features</Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={4}>
                  {property.features.map((feature, index) => (
                    <HStack key={index} spacing={3}>
                      <Icon as={FaChartLine} color="red.500" />
                      <Text>{feature}</Text>
                    </HStack>
                  ))}
                </Grid>
              </Box>

              {/* Image Gallery */}
              <Box>
                <Heading size="lg" mb={6}>Gallery</Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={4}>
                  {property.gallery.map((image, index) => (
                    <MotionBox
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <Image
                        src={image}
                        alt={`Property image ${index + 1}`}
                        borderRadius="md"
                        w="100%"
                        h="200px"
                        objectFit="cover"
                      />
                    </MotionBox>
                  ))}
                </Grid>
              </Box>
            </VStack>
          </GridItem>

          {/* Sidebar */}
          <GridItem>
            <VStack spacing={8} align="stretch">
              {/* Market Trends */}
              <Box
                bg="gray.900"
                p={6}
                borderRadius="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <Heading size="md" mb={6}>Live Stats</Heading>
                <VStack spacing={6} align="stretch">
                  <Stat>
                    <StatLabel>Viewers</StatLabel>
                    <StatNumber>12.3K</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>Likes</StatLabel>
                    <StatNumber color="green.400">389K</StatNumber>
                  </Stat>
                  <Stat>
                    <StatLabel>New Followers</StatLabel>
                    <StatNumber color="green.400">+2.1K</StatNumber>
                  </Stat>
                </VStack>
              </Box>

              {/* Investment CTA */}
              <Box
                bg="gray.900"
                p={6}
                borderRadius="lg"
                border="1px solid"
                borderColor="whiteAlpha.200"
              >
                <VStack spacing={6} align="stretch">
                  <Heading size="md">Join the Stream</Heading>
                  <Text color="gray.400">
                    Follow to get notified when this creator goes live. Join chat, send gifts, and be part of the moment.
                  </Text>
                  <Button
                    size="lg"
                    colorScheme="red"
                    onClick={() => router.push('/signup')}
                  >
                    Create Account
                  </Button>
                  <Button
                    variant="outline"
                    onClick={() => router.push('/login')}
                  >
                    Sign In
                  </Button>
                </VStack>
              </Box>
            </VStack>
          </GridItem>
        </Grid>
      </Container>
    </Box>
  );
} 