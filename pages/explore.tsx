import { Box, Container, Heading, Text, VStack } from '@chakra-ui/react';

export default function Explore() {
  return (
    <Box bg="black" minH="100vh" color="white" py={16}>
      <Container maxW="container.xl">
        <VStack spacing={8} align="start">
          <Heading as="h1" size="2xl">Explore</Heading>
          <Text fontSize="lg">
            Discover a wide range of properties and investment opportunities available on our platform. Browse through listings, view details, and make informed decisions.
          </Text>
          <Text fontSize="lg">
            Our user-friendly interface makes it easy to explore and invest in real estate tokenization projects. Start your journey today!
          </Text>
        </VStack>
      </Container>
    </Box>
  );
} 