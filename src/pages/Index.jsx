import { Container, Text, VStack, Heading, Box, Button, Image, Flex } from "@chakra-ui/react";
import { FaPlane, FaHotel, FaCar } from "react-icons/fa";

const Index = () => {
  return (
    <Container centerContent maxW="container.xl" height="100vh" display="flex" flexDirection="column" justifyContent="center" alignItems="center" p={4}>
      <VStack spacing={8} width="100%">
        <Heading as="h1" size="2xl" textAlign="center" mt={8}>
          Explore the World with Us
        </Heading>
        <Text fontSize="xl" textAlign="center">
          Book flights, hotels, and car rentals at the best prices.
        </Text>
        <Flex justifyContent="center" wrap="wrap" spacing={4}>
          <Box textAlign="center" p={4}>
            <Button leftIcon={<FaPlane />} colorScheme="teal" size="lg">
              Book Flights
            </Button>
          </Box>
          <Box textAlign="center" p={4}>
            <Button leftIcon={<FaHotel />} colorScheme="teal" size="lg">
              Book Hotels
            </Button>
          </Box>
          <Box textAlign="center" p={4}>
            <Button leftIcon={<FaCar />} colorScheme="teal" size="lg">
              Rent Cars
            </Button>
          </Box>
        </Flex>
        <Box width="100%" textAlign="center" mt={8}>
          <Image src="/images/travel-banner.jpg" alt="Travel Banner" borderRadius="md" />
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;