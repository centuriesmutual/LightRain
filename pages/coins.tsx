import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Flex, IconButton, Button, Grid, Card, CardBody, Badge, Divider, Link as ChakraLink } from '@chakra-ui/react';
import { FaCloudRain, FaCoins, FaGift, FaCrown, FaStar, FaArrowLeft } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';
import Link from 'next/link';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Coins() {
  const router = useRouter();
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  const coinPackages = [
    {
      id: 'starter',
      name: 'Starter Pack',
      coins: 100,
      price: '$0.99',
      bonus: 0,
      popular: false,
      icon: FaCoins,
      color: 'gray'
    },
    {
      id: 'popular',
      name: 'Popular Pack',
      coins: 500,
      price: '$4.99',
      bonus: 50,
      popular: true,
      icon: FaGift,
      color: 'blue'
    },
    {
      id: 'premium',
      name: 'Premium Pack',
      coins: 1200,
      price: '$9.99',
      bonus: 200,
      popular: false,
      icon: FaCrown,
      color: 'purple'
    },
    {
      id: 'mega',
      name: 'Mega Pack',
      coins: 2500,
      price: '$19.99',
      bonus: 500,
      popular: false,
      icon: FaStar,
      color: 'yellow'
    }
  ];

  const handlePurchase = (packageId: string) => {
    console.log(`Purchasing package: ${packageId}`);
    // Handle purchase logic here
  };

  return (
    <Box bg="black" minH="100vh" color="white">
      {/* Header */}
      <Box
        position="fixed"
        top={0}
        left={0}
        right={0}
        zIndex={1000}
        bg="rgba(0,0,0,0.8)"
        backdropFilter="blur(10px)"
        py={4}
      >
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <HStack spacing={4}>
              <IconButton
                aria-label="Go back"
                icon={<FaArrowLeft />}
                variant="ghost"
                color="white"
                _hover={{ bg: 'whiteAlpha.200' }}
                onClick={() => router.back()}
              />
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
              <HStack spacing={2} bg="yellow.500" px={4} py={2} borderRadius="full">
                <FaCoins color="black" />
                <Text color="black" fontWeight="bold">
                  1,250 Coins
                </Text>
              </HStack>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Main Content */}
      <Box pt="120px">
        <Container maxW="container.lg">
          <MotionBox
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <VStack spacing={12} align="stretch">
              {/* Header Section */}
              <VStack spacing={6} textAlign="center">
                <HStack spacing={4}>
                  <FaCoins size="48px" color="#FFD700" />
                  <Heading size="2xl" fontWeight="bold">
                    LightRain Coins
                  </Heading>
                </HStack>
                <Text fontSize="xl" color="gray.400" maxW="600px">
                  Support your favorite creators and unlock exclusive features with LightRain Coins
                </Text>
              </VStack>

              {/* What are Coins Section */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <VStack spacing={6} align="stretch">
                  <Heading size="lg" textAlign="center">
                    What are LightRain Coins?
                  </Heading>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={6}>
                    <VStack spacing={4} align="start">
                      <HStack spacing={3}>
                        <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                        <Text color="gray.300">
                          Send virtual gifts to your favorite creators
                        </Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                        <Text color="gray.300">
                          Unlock exclusive content and features
                        </Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                        <Text color="gray.300">
                          Get priority in live chat
                        </Text>
                      </HStack>
                    </VStack>
                    <VStack spacing={4} align="start">
                      <HStack spacing={3}>
                        <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                        <Text color="gray.300">
                          Access premium creator tools
                        </Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                        <Text color="gray.300">
                          Participate in exclusive events
                        </Text>
                      </HStack>
                      <HStack spacing={3}>
                        <Box w="8px" h="8px" bg="red.500" borderRadius="full" mt={2} />
                        <Text color="gray.300">
                          Support the creator economy
                        </Text>
                      </HStack>
                    </VStack>
                  </Grid>
                </VStack>
              </Box>

              {/* Coin Packages */}
              <VStack spacing={8}>
                <Heading size="xl" textAlign="center">
                  Choose Your Coin Package
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(4, 1fr)' }} gap={6}>
                  {coinPackages.map((pkg, index) => (
                    <MotionCard
                      key={pkg.id}
                      bg="gray.900"
                      border="2px solid"
                      borderColor={selectedPackage === pkg.id ? 'red.500' : 'gray.700'}
                      borderRadius="xl"
                      overflow="hidden"
                      cursor="pointer"
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedPackage(pkg.id)}
                    >
                      <CardBody p={6}>
                        <VStack spacing={4} align="stretch">
                          {/* Package Header */}
                          <VStack spacing={2}>
                            {pkg.popular && (
                              <Badge colorScheme="red" variant="solid" borderRadius="full" px={3} py={1}>
                                Most Popular
                              </Badge>
                            )}
                            <HStack spacing={2}>
                              <pkg.icon size="24px" color={pkg.color === 'yellow' ? '#FFD700' : pkg.color === 'purple' ? '#9F7AEA' : pkg.color === 'blue' ? '#3182CE' : '#A0AEC0'} />
                              <Text fontWeight="bold" fontSize="lg">
                                {pkg.name}
                              </Text>
                            </HStack>
                          </VStack>

                          {/* Coin Amount */}
                          <VStack spacing={1}>
                            <HStack spacing={2}>
                              <FaCoins color="#FFD700" />
                              <Text fontSize="2xl" fontWeight="bold" color="yellow.400">
                                {pkg.coins.toLocaleString()}
                              </Text>
                            </HStack>
                            {pkg.bonus > 0 && (
                              <Text fontSize="sm" color="green.400" fontWeight="medium">
                                +{pkg.bonus} Bonus Coins
                              </Text>
                            )}
                          </VStack>

                          {/* Price */}
                          <Text fontSize="3xl" fontWeight="bold" textAlign="center">
                            {pkg.price}
                          </Text>

                          {/* Purchase Button */}
                          <Button
                            size="lg"
                            bg={selectedPackage === pkg.id ? 'red.600' : 'gray.700'}
                            color="white"
                            _hover={{ bg: selectedPackage === pkg.id ? 'red.500' : 'gray.600' }}
                            onClick={(e) => {
                              e.stopPropagation();
                              handlePurchase(pkg.id);
                            }}
                          >
                            Purchase
                          </Button>
                        </VStack>
                      </CardBody>
                    </MotionCard>
                  ))}
                </Grid>
              </VStack>

              {/* Payment Methods */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <VStack spacing={6}>
                  <Heading size="lg" textAlign="center">
                    Secure Payment Methods
                  </Heading>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={6}>
                    <VStack spacing={3}>
                      <Text fontWeight="semibold">Credit/Debit Cards</Text>
                      <Text fontSize="sm" color="gray.400" textAlign="center">
                        Visa, Mastercard, American Express
                      </Text>
                    </VStack>
                    <VStack spacing={3}>
                      <Text fontWeight="semibold">Digital Wallets</Text>
                      <Text fontSize="sm" color="gray.400" textAlign="center">
                        PayPal, Apple Pay, Google Pay
                      </Text>
                    </VStack>
                    <VStack spacing={3}>
                      <Text fontWeight="semibold">Cryptocurrency</Text>
                      <Text fontSize="sm" color="gray.400" textAlign="center">
                        Bitcoin, Ethereum, Solana
                      </Text>
                    </VStack>
                  </Grid>
                </VStack>
              </Box>

              {/* FAQ Section */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <VStack spacing={6}>
                  <Heading size="lg" textAlign="center">
                    Frequently Asked Questions
                  </Heading>
                  <VStack spacing={4} align="stretch">
                    <VStack spacing={2} align="start">
                      <Text fontWeight="semibold" color="red.400">
                        How do I use my coins?
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        Coins can be used to send virtual gifts to creators, unlock premium content, and access exclusive features.
                      </Text>
                    </VStack>
                    <Divider borderColor="gray.600" />
                    <VStack spacing={2} align="start">
                      <Text fontWeight="semibold" color="red.400">
                        Do coins expire?
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        No, your LightRain Coins never expire and can be used anytime.
                      </Text>
                    </VStack>
                    <Divider borderColor="gray.600" />
                    <VStack spacing={2} align="start">
                      <Text fontWeight="semibold" color="red.400">
                        Can I get a refund?
                      </Text>
                      <Text fontSize="sm" color="gray.400">
                        Refunds are available within 48 hours of purchase. Contact support for assistance.
                      </Text>
                    </VStack>
                  </VStack>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
