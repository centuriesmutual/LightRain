import {
  Box,
  Container,
  Heading,
  Text,
  Button,
  VStack,
  HStack,
  Image,
  useColorModeValue,
  Flex,
  Grid,
  Input,
  InputGroup,
  InputLeftElement,
  Select,
  Badge,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  NumberIncrementStepper,
  NumberDecrementStepper,
  FormControl,
  FormLabel,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider
} from '@chakra-ui/react';
import { FaSearch, FaMapMarkerAlt, FaChartLine, FaBuilding, FaHotel, FaFilter, FaStar, FaGlobe, FaCity, FaLandmark, FaCog, FaSignOutAlt, FaUser, FaBell } from 'react-icons/fa';
import { useRouter } from 'next/router';
import { motion } from 'framer-motion';
import { useState } from 'react';

const MotionBox = motion(Box);

interface LocationCardProps {
  image: string;
  city: string;
  state: string;
  country: string;
  zipCode: string;
  tokenPrice: number;
  marketCap: number;
  residentialTrend: string;
  hospitalityTrend: string;
  rating: number;
  onBuyClick: () => void;
}

const LocationCard = ({ image, city, state, country, zipCode, tokenPrice, marketCap, residentialTrend, hospitalityTrend, rating, onBuyClick }: LocationCardProps) => (
  <Box
    borderRadius="xl"
    overflow="hidden"
    bg="white"
    boxShadow="xl"
    transition="all 0.3s"
    _hover={{ transform: 'translateY(-5px)', boxShadow: '2xl' }}
    border="1px"
    borderColor="gray.200"
    position="relative"
  >
    <Box position="relative" h="200px">
      <Image
        src={image}
        alt={`${city}, ${state}`}
        w="full"
        h="full"
        objectFit="cover"
      />
      <Badge
        position="absolute"
        top={4}
        right={4}
        bg="green.800"
        color="white"
        px={3}
        py={1}
        borderRadius="full"
        fontSize="sm"
        fontWeight="bold"
      >
        £{tokenPrice.toLocaleString()} per token
      </Badge>
    </Box>
    <Box p={6}>
      <VStack align="start" spacing={4}>
        <Heading size="md" color="gray.800" fontFamily="serif">{city}, {state}</Heading>
        <HStack color="gray.600">
          <FaMapMarkerAlt />
          <Text>{zipCode}, {country}</Text>
        </HStack>
        <Divider borderColor="gray.200" />
        <VStack align="start" spacing={2} w="full">
          <HStack justify="space-between" w="full">
            <HStack>
              <FaBuilding color="green.800" />
              <Text color="gray.600">Residential Trend:</Text>
            </HStack>
            <Text color={residentialTrend.startsWith('+') ? 'green.600' : 'red.600'} fontWeight="bold">
              {residentialTrend}
            </Text>
          </HStack>
          <HStack justify="space-between" w="full">
            <HStack>
              <FaHotel color="green.800" />
              <Text color="gray.600">Hospitality Trend:</Text>
            </HStack>
            <Text color={hospitalityTrend.startsWith('+') ? 'green.600' : 'red.600'} fontWeight="bold">
              {hospitalityTrend}
            </Text>
          </HStack>
        </VStack>
        <HStack justify="space-between" w="full">
          <HStack color="yellow.500">
            <FaStar />
            <Text>{rating}</Text>
          </HStack>
          <Text color="gray.800" fontWeight="bold" fontFamily="serif">£{marketCap.toLocaleString()} Market Cap</Text>
        </HStack>
        <Box w="full" pt={4}>
          <Button
            w="full"
            colorScheme="green"
            bg="green.800"
            _hover={{ bg: 'green.700' }}
            onClick={onBuyClick}
            fontFamily="serif"
          >
            Buy Tokens
          </Button>
        </Box>
      </VStack>
    </Box>
  </Box>
);

const BuyModal = ({ isOpen, onClose, location }: { isOpen: boolean; onClose: () => void; location: any }) => {
  const [amount, setAmount] = useState(1);

  return (
    <Modal isOpen={isOpen} onClose={onClose} size="xl">
      <ModalOverlay />
      <ModalContent>
        <ModalHeader fontFamily="serif">Buy {location?.city} Real Estate Tokens</ModalHeader>
        <ModalCloseButton />
        <ModalBody pb={6}>
          <VStack spacing={6} align="stretch">
            <Box>
              <Text fontSize="lg" fontWeight="bold" fontFamily="serif">Location Details</Text>
              <HStack spacing={4} mt={2}>
                <HStack>
                  <FaCity />
                  <Text>{location?.city}, {location?.state}</Text>
                </HStack>
                <HStack>
                  <FaLandmark />
                  <Text>{location?.country}</Text>
                </HStack>
                <HStack>
                  <FaMapMarkerAlt />
                  <Text>{location?.zipCode}</Text>
                </HStack>
              </HStack>
            </Box>
            <Divider />
            <FormControl>
              <FormLabel fontFamily="serif">Number of Tokens</FormLabel>
              <NumberInput
                min={1}
                value={amount}
                onChange={(_, value) => setAmount(value)}
              >
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            </FormControl>
            <Box>
              <Text fontSize="lg" fontWeight="bold" fontFamily="serif">Total Cost</Text>
              <Text fontSize="2xl" color="green.800" fontFamily="serif">
                £{(amount * (location?.tokenPrice || 0)).toLocaleString()}
              </Text>
            </Box>
            <Button
              colorScheme="green"
              bg="green.800"
              _hover={{ bg: 'green.700' }}
              size="lg"
              fontFamily="serif"
            >
              Confirm Purchase
            </Button>
          </VStack>
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default function Dashboard() {
  const router = useRouter();
  const bgColor = useColorModeValue('gray.50', 'gray.900');
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [selectedLocation, setSelectedLocation] = useState<any>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState('');
  const [selectedState, setSelectedState] = useState('');
  const [selectedCity, setSelectedCity] = useState('');

  const locations = [
    {
      image: '/london.jpg',
      city: 'London',
      state: 'Greater London',
      country: 'United Kingdom',
      zipCode: 'SW1A',
      tokenPrice: 2500,
      marketCap: 25000000,
      residentialTrend: '+2.4%',
      hospitalityTrend: '+3.1%',
      rating: 4.9
    },
    {
      image: '/edinburgh.jpg',
      city: 'Edinburgh',
      state: 'Scotland',
      country: 'United Kingdom',
      zipCode: 'EH1',
      tokenPrice: 1800,
      marketCap: 18000000,
      residentialTrend: '+1.8%',
      hospitalityTrend: '+2.5%',
      rating: 4.7
    },
    {
      image: '/bath.jpg',
      city: 'Bath',
      state: 'Somerset',
      country: 'United Kingdom',
      zipCode: 'BA1',
      tokenPrice: 1500,
      marketCap: 15000000,
      residentialTrend: '+1.5%',
      hospitalityTrend: '+2.2%',
      rating: 4.6
    }
  ];

  const handleBuyClick = (location: any) => {
    setSelectedLocation(location);
    onOpen();
  };

  const handleLogout = () => {
    // Here you would typically clear any authentication state
    router.push('/login');
  };

  return (
    <Box bg={bgColor} minH="100vh">
      {/* Header */}
      <Box bg="white" py={4} borderBottom="1px" borderColor="gray.200" boxShadow="sm">
        <Container maxW="container.xl">
          <Flex justify="space-between" align="center">
            <Heading size="lg" color="green.800" fontFamily="serif">Light Rain Markets</Heading>
            <HStack spacing={4}>
              <Button variant="outline" colorScheme="green" borderColor="green.800" color="green.800" fontFamily="serif">
                Portfolio
              </Button>
              <Button variant="outline" colorScheme="green" borderColor="green.800" color="green.800" fontFamily="serif">
                Watchlist
              </Button>
              <Menu>
                <MenuButton
                  as={Button}
                  variant="outline"
                  colorScheme="green"
                  borderColor="green.800"
                  color="green.800"
                  fontFamily="serif"
                  leftIcon={<FaCog />}
                >
                  Settings
                </MenuButton>
                <MenuList>
                  <MenuItem icon={<FaUser />} fontFamily="serif">
                    Profile
                  </MenuItem>
                  <MenuItem icon={<FaBell />} fontFamily="serif">
                    Notifications
                  </MenuItem>
                  <MenuDivider />
                  <MenuItem 
                    icon={<FaSignOutAlt />} 
                    fontFamily="serif"
                    color="red.500"
                    onClick={handleLogout}
                  >
                    Logout
                  </MenuItem>
                </MenuList>
              </Menu>
            </HStack>
          </Flex>
        </Container>
      </Box>

      {/* Search and Filters */}
      <Box py={8} bg="white">
        <Container maxW="container.xl">
          <Grid templateColumns={{ base: '1fr', md: 'repeat(4, 1fr)' }} gap={6}>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <FaSearch color="green.800" />
              </InputLeftElement>
              <Input
                placeholder="Search locations..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                bg="white"
                borderColor="green.800"
                color="gray.800"
                _placeholder={{ color: 'gray.500' }}
                fontFamily="serif"
              />
            </InputGroup>
            <Select
              placeholder="Country"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
              bg="white"
              borderColor="green.800"
              color="gray.800"
              fontFamily="serif"
            >
              <option value="uk">United Kingdom</option>
              <option value="us">United States</option>
              <option value="ca">Canada</option>
            </Select>
            <Select
              placeholder="State/Region"
              value={selectedState}
              onChange={(e) => setSelectedState(e.target.value)}
              bg="white"
              borderColor="green.800"
              color="gray.800"
              fontFamily="serif"
            >
              <option value="london">Greater London</option>
              <option value="scotland">Scotland</option>
              <option value="somerset">Somerset</option>
            </Select>
            <Select
              placeholder="City"
              value={selectedCity}
              onChange={(e) => setSelectedCity(e.target.value)}
              bg="white"
              borderColor="green.800"
              color="gray.800"
              fontFamily="serif"
            >
              <option value="london">London</option>
              <option value="edinburgh">Edinburgh</option>
              <option value="bath">Bath</option>
            </Select>
          </Grid>
        </Container>
      </Box>

      {/* Location Listings */}
      <Container maxW="container.xl" py={12}>
        <Grid templateColumns={{ base: '1fr', md: 'repeat(3, 1fr)' }} gap={8}>
          {locations.map((location, index) => (
            <MotionBox
              key={index}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <LocationCard {...location} onBuyClick={() => handleBuyClick(location)} />
            </MotionBox>
          ))}
        </Grid>
      </Container>

      <BuyModal isOpen={isOpen} onClose={onClose} location={selectedLocation} />
    </Box>
  );
} 