import { Box, Container, Heading, Text, VStack, Grid, GridItem, Flex, useColorModeValue, Button } from '@chakra-ui/react';
import { FaArrowLeft, FaHotel, FaPlane, FaShieldAlt, FaLeaf } from 'react-icons/fa';
import { useRouter } from 'next/router';
import 'bootstrap/dist/css/bootstrap.min.css';

export default function Technology() {
  const router = useRouter();
  const bgColor = useColorModeValue('gray.100', 'gray.900');
  const textColor = useColorModeValue('gray.800', 'white');

  return (
    <Box bg={bgColor} minH="100vh" color={textColor} py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Flex justify="space-between" w="100%">
            <Heading as="h1" size="2xl">Travel & Investment</Heading>
            <Button leftIcon={<FaArrowLeft />} onClick={() => router.push('/')} colorScheme="blue" size="md">Back</Button>
          </Flex>
          <Grid templateColumns={{ base: '1fr', md: 'repeat(2, 1fr)' }} gap={8}>
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg">Solana Blockchain</Heading>
                <Text fontSize="lg">
                  Our platform leverages Solana's high-performance blockchain to offer fast, secure, and low-cost transactions. This technology enables seamless travel and investment experiences.
                </Text>
                <Text fontSize="lg">
                  By utilizing blockchain technology, we ensure transparency, security, and efficiency in every transaction, making your travel and investment journey smooth and reliable.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg">Fast Trading</Heading>
                <Text fontSize="lg">
                  Solana's fast trading capabilities allow you to reach your destinations quickly, enabling you to truly experience what brings you closer to nature. With minimal transaction times, you can invest and travel without delay.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg">Security</Heading>
                <Text fontSize="lg">
                  Security is paramount. Our platform uses advanced encryption and secure smart contracts to protect your investments and personal information, ensuring a safe travel and investment experience.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg">Sustainability</Heading>
                <Text fontSize="lg">
                  We are committed to sustainability. Our platform promotes eco-friendly travel and investment options, helping you connect with nature responsibly.
                </Text>
              </VStack>
            </GridItem>
            <GridItem>
              <VStack align="start" spacing={4}>
                <Heading as="h2" size="lg">Travel Benefits</Heading>
                <Text fontSize="lg">
                  Experience luxury and comfort with our travel benefits. Enjoy exclusive access to premium properties and personalized services designed to enhance your journey.
                </Text>
              </VStack>
            </GridItem>
          </Grid>
        </VStack>
      </Container>
    </Box>
  );
} 