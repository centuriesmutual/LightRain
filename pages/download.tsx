import React, { useState } from 'react';
import { Box, Container, Heading, Text, VStack, HStack, Flex, IconButton, Button, Grid, Card, CardBody, Image, Badge, Divider, Link as ChakraLink } from '@chakra-ui/react';
import { FaCloudRain, FaMobile, FaArrowLeft, FaApple, FaGooglePlay, FaQrcode, FaDownload, FaCheck } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

const MotionBox = motion(Box);
const MotionCard = motion(Card);

export default function Download() {
  const router = useRouter();
  const [selectedPlatform, setSelectedPlatform] = useState<string | null>(null);

  const platforms = [
    {
      id: 'ios',
      name: 'iOS',
      icon: FaApple,
      color: '#000000',
      bgColor: '#FFFFFF',
      textColor: '#000000',
      description: 'Download for iPhone and iPad',
      version: 'iOS 14.0+',
      size: '45.2 MB',
      rating: '4.8',
      downloads: '1M+',
      features: [
        'Vertical livestreaming',
        'Real-time chat',
        'Virtual gifts',
        'Creator tools',
        'Offline viewing'
      ]
    },
    {
      id: 'android',
      name: 'Android',
      icon: FaGooglePlay,
      color: '#01875F',
      bgColor: '#FFFFFF',
      textColor: '#000000',
      description: 'Download for Android devices',
      version: 'Android 8.0+',
      size: '42.8 MB',
      rating: '4.7',
      downloads: '2M+',
      features: [
        'Vertical livestreaming',
        'Real-time chat',
        'Virtual gifts',
        'Creator tools',
        'Offline viewing'
      ]
    }
  ];

  const features = [
    {
      title: 'Seamless Streaming',
      description: 'Stream in high quality with ultra-low latency',
      icon: '📹'
    },
    {
      title: 'Interactive Chat',
      description: 'Engage with creators through real-time chat',
      icon: '💬'
    },
    {
      title: 'Virtual Gifts',
      description: 'Support creators with virtual gifts and tips',
      icon: '🎁'
    },
    {
      title: 'Creator Tools',
      description: 'Professional tools for content creators',
      icon: '🛠️'
    },
    {
      title: 'Offline Viewing',
      description: 'Download content to watch offline',
      icon: '📱'
    },
    {
      title: 'Social Features',
      description: 'Follow, share, and discover new creators',
      icon: '👥'
    }
  ];

  const handleDownload = (platformId: string) => {
    console.log(`Downloading for ${platformId}`);
    // Handle download logic here
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
                  <FaMobile size="48px" color="#3182CE" />
                  <Heading size="2xl" fontWeight="bold">
                    Download LightRain
                  </Heading>
                </HStack>
                <Text fontSize="xl" color="gray.400" maxW="600px">
                  Get the LightRain app and start creating and discovering amazing livestreams on the go
                </Text>
              </VStack>

              {/* App Preview */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
                textAlign="center"
              >
                <VStack spacing={6}>
                  <Heading size="lg">
                    Experience LightRain Anywhere
                  </Heading>
                  <Text color="gray.400" maxW="500px">
                    Our mobile app brings the full LightRain experience to your pocket. 
                    Stream, watch, and interact with creators wherever you are.
                  </Text>
                  <Box
                    w="200px"
                    h="400px"
                    bg="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                    borderRadius="2xl"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    position="relative"
                    overflow="hidden"
                  >
                    <VStack spacing={4} color="white">
                      <FaCloudRain size="48px" />
                      <Text fontWeight="bold" fontSize="lg">
                        LightRain
                      </Text>
                      <Text fontSize="sm" textAlign="center" px={4}>
                        Go Live. Scroll. Repeat.
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </Box>

              {/* Download Options */}
              <VStack spacing={8}>
                <Heading size="xl" textAlign="center">
                  Choose Your Platform
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                  {platforms.map((platform, index) => (
                    <MotionCard
                      key={platform.id}
                      bg="gray.900"
                      border="2px solid"
                      borderColor={selectedPlatform === platform.id ? 'red.500' : 'gray.700'}
                      borderRadius="xl"
                      overflow="hidden"
                      cursor="pointer"
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ duration: 0.2 }}
                      onClick={() => setSelectedPlatform(platform.id)}
                    >
                      <CardBody p={8}>
                        <VStack spacing={6} align="stretch">
                          {/* Platform Header */}
                          <VStack spacing={4}>
                            <Box
                              w="80px"
                              h="80px"
                              bg={platform.bgColor}
                              borderRadius="xl"
                              display="flex"
                              alignItems="center"
                              justifyContent="center"
                            >
                              <platform.icon size="40px" color={platform.color} />
                            </Box>
                            <VStack spacing={1}>
                              <Heading size="lg" color="white">
                                {platform.name}
                              </Heading>
                              <Text color="gray.400" fontSize="sm">
                                {platform.description}
                              </Text>
                            </VStack>
                          </VStack>

                          {/* Platform Info */}
                          <VStack spacing={3} align="stretch">
                            <HStack justify="space-between">
                              <Text color="gray.400" fontSize="sm">Version</Text>
                              <Text color="white" fontSize="sm" fontWeight="medium">
                                {platform.version}
                              </Text>
                            </HStack>
                            <HStack justify="space-between">
                              <Text color="gray.400" fontSize="sm">Size</Text>
                              <Text color="white" fontSize="sm" fontWeight="medium">
                                {platform.size}
                              </Text>
                            </HStack>
                            <HStack justify="space-between">
                              <Text color="gray.400" fontSize="sm">Rating</Text>
                              <HStack spacing={1}>
                                <Text color="yellow.400" fontSize="sm">★</Text>
                                <Text color="white" fontSize="sm" fontWeight="medium">
                                  {platform.rating}
                                </Text>
                              </HStack>
                            </HStack>
                            <HStack justify="space-between">
                              <Text color="gray.400" fontSize="sm">Downloads</Text>
                              <Text color="white" fontSize="sm" fontWeight="medium">
                                {platform.downloads}
                              </Text>
                            </HStack>
                          </VStack>

                          {/* Features */}
                          <VStack spacing={2} align="stretch">
                            <Text color="gray.300" fontSize="sm" fontWeight="medium">
                              Key Features:
                            </Text>
                            {platform.features.map((feature, idx) => (
                              <HStack key={idx} spacing={2}>
                                <FaCheck size="12px" color="#48BB78" />
                                <Text color="gray.400" fontSize="xs">
                                  {feature}
                                </Text>
                              </HStack>
                            ))}
                          </VStack>

                          {/* Download Button */}
                          <Button
                            size="lg"
                            bg={selectedPlatform === platform.id ? 'red.600' : 'gray.700'}
                            color="white"
                            _hover={{ bg: selectedPlatform === platform.id ? 'red.500' : 'gray.600' }}
                            leftIcon={<FaDownload />}
                            onClick={(e) => {
                              e.stopPropagation();
                              handleDownload(platform.id);
                            }}
                          >
                            Download for {platform.name}
                          </Button>
                        </VStack>
                      </CardBody>
                    </MotionCard>
                  ))}
                </Grid>
              </VStack>

              {/* QR Code Section */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <VStack spacing={6}>
                  <HStack spacing={3}>
                    <FaQrcode size="24px" color="#3182CE" />
                    <Heading size="lg">
                      Quick Download with QR Code
                    </Heading>
                  </HStack>
                  <Text color="gray.400" textAlign="center" maxW="400px">
                    Scan this QR code with your mobile device to download the LightRain app directly
                  </Text>
                  <Box
                    w="200px"
                    h="200px"
                    bg="white"
                    borderRadius="lg"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                  >
                    <VStack spacing={2} color="black">
                      <FaQrcode size="120px" />
                      <Text fontSize="xs" fontWeight="bold">
                        LightRain App
                      </Text>
                    </VStack>
                  </Box>
                </VStack>
              </Box>

              {/* Features Grid */}
              <VStack spacing={8}>
                <Heading size="xl" textAlign="center">
                  Why Choose LightRain Mobile?
                </Heading>
                <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)', lg: 'repeat(3, 1fr)' }} gap={6}>
                  {features.map((feature, index) => (
                    <MotionCard
                      key={index}
                      bg="gray.900"
                      border="1px solid"
                      borderColor="gray.700"
                      borderRadius="xl"
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.2 }}
                    >
                      <CardBody p={6}>
                        <VStack spacing={4} align="center" textAlign="center">
                          <Text fontSize="4xl">{feature.icon}</Text>
                          <VStack spacing={2}>
                            <Heading size="md" color="white">
                              {feature.title}
                            </Heading>
                            <Text color="gray.400" fontSize="sm">
                              {feature.description}
                            </Text>
                          </VStack>
                        </VStack>
                      </CardBody>
                    </MotionCard>
                  ))}
                </Grid>
              </VStack>

              {/* System Requirements */}
              <Box
                bg="gray.900"
                p={8}
                borderRadius="xl"
                border="1px solid"
                borderColor="gray.700"
              >
                <VStack spacing={6}>
                  <Heading size="lg" textAlign="center">
                    System Requirements
                  </Heading>
                  <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
                    <VStack spacing={4} align="start">
                      <Heading size="md" color="red.400">
                        iOS Requirements
                      </Heading>
                      <VStack spacing={2} align="start">
                        <Text color="gray.300">• iOS 14.0 or later</Text>
                        <Text color="gray.300">• iPhone 8 or later</Text>
                        <Text color="gray.300">• iPad (6th generation) or later</Text>
                        <Text color="gray.300">• 2GB RAM minimum</Text>
                        <Text color="gray.300">• 100MB available storage</Text>
                      </VStack>
                    </VStack>
                    <VStack spacing={4} align="start">
                      <Heading size="md" color="red.400">
                        Android Requirements
                      </Heading>
                      <VStack spacing={2} align="start">
                        <Text color="gray.300">• Android 8.0 (API level 26) or later</Text>
                        <Text color="gray.300">• 2GB RAM minimum</Text>
                        <Text color="gray.300">• 100MB available storage</Text>
                        <Text color="gray.300">• ARM64 or x86_64 processor</Text>
                        <Text color="gray.300">• OpenGL ES 3.0 support</Text>
                      </VStack>
                    </VStack>
                  </Grid>
                </VStack>
              </Box>
            </VStack>
          </MotionBox>
        </Container>
      </Box>
    </Box>
  );
}
