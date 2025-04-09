import { Box, Container, Heading, Text, Button, VStack, HStack, Image, useColorModeValue, Flex, Link, Modal, ModalOverlay, ModalContent, ModalHeader, ModalBody, ModalCloseButton, useDisclosure, Divider, Grid } from '@chakra-ui/react';
import { FaWallet, FaBuilding, FaChartBar, FaCoins, FaHotel, FaMapMarkerAlt, FaGlobe, FaCity } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);

export default function Home() {
  const router = useRouter();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bgColor} h="100vh" overflow="hidden">
      <Box
        position="relative"
        h="100vh"
        bgImage="url('/luxury-resort-bg.jpg')"
        bgSize="cover"
        bgPosition="center"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'rgba(255, 255, 255, 0.8)',
          zIndex: 1,
        }}
      >
        {/* Floating Elements - Symmetrically Distributed */}
        <MotionBox
          position="absolute"
          top="10%"
          left="15%"
          zIndex={2}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaBuilding size={40} color="green.800" />
        </MotionBox>
        <MotionBox
          position="absolute"
          top="10%"
          right="15%"
          zIndex={2}
          animate={{
            y: [0, -30, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaChartBar size={40} color="green.800" />
        </MotionBox>
        <MotionBox
          position="absolute"
          bottom="15%"
          left="15%"
          zIndex={2}
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaCoins size={40} color="green.800" />
        </MotionBox>
        <MotionBox
          position="absolute"
          bottom="15%"
          right="15%"
          zIndex={2}
          animate={{
            y: [0, -15, 0],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaHotel size={40} color="green.800" />
        </MotionBox>
        <MotionBox
          position="absolute"
          top="50%"
          left="10%"
          zIndex={2}
          animate={{
            y: [0, -20, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaGlobe size={40} color="green.800" />
        </MotionBox>
        <MotionBox
          position="absolute"
          top="50%"
          right="10%"
          zIndex={2}
          animate={{
            y: [0, -25, 0],
          }}
          transition={{
            duration: 7,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <FaCity size={40} color="green.800" />
        </MotionBox>

        <Container maxW="container.xl" position="relative" zIndex={2} h="100vh" display="flex" alignItems="center">
          <Grid 
            templateColumns={{ base: '1fr', md: '1fr 1fr' }} 
            gap={12} 
            alignItems="center"
            w="full"
          >
            <VStack spacing={6} align="start" maxW="600px">
              <Heading
                as="h1"
                size="4xl"
                color="green.800"
                fontWeight="bold"
                fontFamily="serif"
                lineHeight="1.2"
              >
                Tokenize Real Estate Markets
              </Heading>
              <Text
                fontSize="xl"
                color="gray.600"
                lineHeight="1.6"
              >
                Invest in the world's most prestigious locations through blockchain technology. Own a piece of prime real estate markets with our innovative tokenization platform.
              </Text>
              <HStack spacing={6} w="full" justify="start">
                <Button
                  size="lg"
                  colorScheme="green"
                  bg="green.800"
                  _hover={{ bg: 'green.700' }}
                  onClick={() => router.push('/dashboard')}
                  fontFamily="serif"
                  flex="1"
                >
                  Explore Markets
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  color="green.800"
                  borderColor="green.800"
                  _hover={{ bg: 'green.800', color: 'white' }}
                  onClick={() => router.push('/login')}
                  fontFamily="serif"
                  flex="1"
                  leftIcon={<FaWallet />}
                >
                  Connect Wallet
                </Button>
              </HStack>
            </VStack>
            <Box position="relative" maxW="600px">
              <Image
                src="/luxury-lobby-bg.jpg"
                alt="Luxury Real Estate"
                borderRadius="xl"
                boxShadow="2xl"
                transform="rotate(-2deg)"
                w="full"
                h="auto"
                objectFit="cover"
              />
              <Box
                position="absolute"
                top="-20px"
                right="-20px"
                bg="green.800"
                color="white"
                p={4}
                borderRadius="lg"
                transform="rotate(3deg)"
                boxShadow="xl"
                minW="200px"
              >
                <Text fontSize="lg" fontWeight="bold" fontFamily="serif">Market Value: $2.5B</Text>
                <Text fontSize="sm">London, UK</Text>
              </Box>
            </Box>
          </Grid>
        </Container>
      </Box>

      {/* Trading Details Modal */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent bg="gray.900" color="white">
          <ModalHeader color="gold">Tokenized Real Estate Trading</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <VStack spacing={6} align="stretch">
              <Box>
                <Heading size="md" color="gold" mb={2}>Real-Time Market Data</Heading>
                <Text color="gray.400">
                  Monitor property values in real-time with our advanced market tracking system. 
                  See how your investments perform against market trends and make informed decisions.
                </Text>
              </Box>
              <Box>
                <Heading size="md" color="gold" mb={2}>Tokenized Trading</Heading>
                <Text color="gray.400">
                  Trade property tokens on our secure Solana-based exchange. 
                  Buy and sell shares of premium properties with instant settlement and minimal fees.
                </Text>
              </Box>
              <Box>
                <Heading size="md" color="gold" mb={2}>Property Valuation</Heading>
                <Text color="gray.400">
                  Our AI-powered valuation system tracks property values based on location, 
                  amenities, and market demand. Trade based on accurate, data-driven insights.
                </Text>
              </Box>
              <Box>
                <Text color="gray.400">
                  Each property is tokenized into tradable shares, allowing you to invest in 
                  premium real estate with the flexibility of cryptocurrency trading. 
                  Monitor market trends, execute trades, and manage your portfolio all in one place.
                </Text>
              </Box>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
}

const HeroSection = () => {
  const router = useRouter();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box
      position="relative"
      minH="100vh"
      bgImage="url('/luxury-resort-bg.jpg')"
      bgSize="cover"
      bgPosition="center"
      _before={{
        content: '""',
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        bg: 'rgba(255, 255, 255, 0.8)',
        zIndex: 1,
      }}
    >
      {/* Floating Elements */}
      <MotionBox
        position="absolute"
        top="20%"
        left="10%"
        zIndex={2}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaBuilding size={40} color="green.800" />
      </MotionBox>
      <MotionBox
        position="absolute"
        top="30%"
        right="15%"
        zIndex={2}
        animate={{
          y: [0, -30, 0],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaChartBar size={40} color="green.800" />
      </MotionBox>
      <MotionBox
        position="absolute"
        bottom="20%"
        left="20%"
        zIndex={2}
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaCoins size={40} color="green.800" />
      </MotionBox>
      <MotionBox
        position="absolute"
        bottom="30%"
        right="10%"
        zIndex={2}
        animate={{
          y: [0, -15, 0],
        }}
        transition={{
          duration: 5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaHotel size={40} color="green.800" />
      </MotionBox>
      <MotionBox
        position="absolute"
        top="40%"
        left="30%"
        zIndex={2}
        animate={{
          y: [0, -20, 0],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaGlobe size={40} color="green.800" />
      </MotionBox>
      <MotionBox
        position="absolute"
        top="50%"
        right="25%"
        zIndex={2}
        animate={{
          y: [0, -25, 0],
        }}
        transition={{
          duration: 7,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <FaCity size={40} color="green.800" />
      </MotionBox>

      <Container maxW="container.xl" position="relative" zIndex={2} pt={32} pb={20}>
        <Grid templateColumns={{ base: '1fr', md: '1fr 1fr' }} gap={12} alignItems="center">
          <VStack spacing={8} align="start">
            <Heading
              as="h1"
              size="4xl"
              color="green.800"
              fontWeight="bold"
              fontFamily="serif"
            >
              Tokenize Real Estate Markets
            </Heading>
            <Text
              fontSize="xl"
              color="gray.600"
              maxW="600px"
            >
              Invest in the world's most prestigious locations through blockchain technology. Own a piece of prime real estate markets with our innovative tokenization platform.
            </Text>
            <HStack spacing={6}>
              <Button
                size="lg"
                colorScheme="green"
                bg="green.800"
                _hover={{ bg: 'green.700' }}
                onClick={() => router.push('/dashboard')}
                fontFamily="serif"
              >
                Explore Markets
              </Button>
              <Button
                size="lg"
                variant="outline"
                color="green.800"
                borderColor="green.800"
                _hover={{ bg: 'green.800', color: 'white' }}
                onClick={() => router.push('/login')}
                fontFamily="serif"
              >
                Get Started
              </Button>
            </HStack>
          </VStack>
          <Box position="relative">
            <Image
              src="/luxury-lobby-bg.jpg"
              alt="Luxury Real Estate"
              borderRadius="xl"
              boxShadow="2xl"
              transform="rotate(-2deg)"
            />
            <Box
              position="absolute"
              top="-20px"
              right="-20px"
              bg="green.800"
              color="white"
              p={4}
              borderRadius="lg"
              transform="rotate(3deg)"
              boxShadow="xl"
            >
              <Text fontSize="lg" fontWeight="bold" fontFamily="serif">Market Value: $2.5B</Text>
              <Text fontSize="sm">London, UK</Text>
            </Box>
          </Box>
        </Grid>
      </Container>
    </Box>
  );
}; 