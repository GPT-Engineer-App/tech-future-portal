import { Box, Button, Container, Flex, Heading, Image, SimpleGrid, Text, VStack } from "@chakra-ui/react";
import { FaArrowRight } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="1440px" p="0" m="0 auto">
      {/* Part 1 */}
      <Box bg="#06062C" w="1440px" h="606px" position="relative" m="0">
        <Text position="absolute" left="54px" top="5px" fontSize="50px" fontWeight="700" color="white">
          AIGCode
        </Text>
        <VStack spacing={0} position="absolute" top="50%" left="50%" transform="translate(-50%, -50%)">
          <Text fontSize="56px" fontWeight="700" lineHeight="73px" color="#F3FBFF">
            Advancing Industries with
          </Text>
          <Text fontSize="56px" fontWeight="700" lineHeight="73px" bgGradient="linear(to-r, #EC81FF, #49A1FF, #61CDFF)" bgClip="text">
            Next-Gen Code Models_
          </Text>
        </VStack>
        <Button position="absolute" bottom="138px" left="50%" transform="translateX(-50%)" w="200px" h="50px" bg="#0096FF" color="white" fontSize="20px" fontWeight="700" borderRadius="full">
          Apply for testing
        </Button>
      </Box>

      {/* Part 2 */}
      <Box bg="#06062C" w="1440px" h="1020px" m="0">
        <Text mt="100px" textAlign="center" fontSize="34px" fontWeight="700" lineHeight="38px" bgGradient="linear(to-r, #CF6FFF, #766FFF, #736FFF, #3E8BFF, #48E3FF)" bgClip="text">
          AIGCode is capable of end-to-end application development
        </Text>
        <Flex justify="center" mt="34px">
          <Box w="253px" h="34px" borderRadius="83px" bg="#29177E" display="flex" alignItems="center" justifyContent="center">
            <Text fontSize="14px" fontWeight="500" lineHeight="22px" color="white" bgGradient="linear(to-r, #CA88EB, #7A77F1, #80D5E4)" bgClip="text" px="2">
              Data
            </Text>
            <Text mx="6px" fontSize="14px" fontWeight="500" lineHeight="22px" color="white">
              App
            </Text>
            <Text fontSize="14px" fontWeight="500" lineHeight="22px" color="white">
              Web
            </Text>
          </Box>
        </Flex>
        <Text mt="23px" textAlign="center" fontSize="26px" fontWeight="700" lineHeight="28px" color="white">
          Data Dashboard generation
        </Text>
        <Flex justify="center" mt="16px">
          <Image src="https://images.unsplash.com/photo-1542744173-05336fcc7ad4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbGFjZWhvbGRlciUyMGZvciUyMGRhdGElMjBkYXNoYm9hcmR8ZW58MHx8fHwxNzE1MTYwNzIyfDA&ixlib=rb-4.0.3&q=80&w=1080" w="1195px" h="620px" />
        </Flex>
      </Box>

      {/* Part 3 */}
      <Box bg="#06062C" w="1440px" h="616px" m="0">
        <Flex justify="center" mt="26px">
          <Image src="https://images.unsplash.com/photo-1593491205049-7f032d28cf5c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w1MDcxMzJ8MHwxfHNlYXJjaHwxfHxwbGFjZWhvbGRlciUyMGZvciUyMGJldGElMjB0ZXN0aW5nfGVufDB8fHx8MTcxNTE2MDcyMnww&ixlib=rb-4.0.3&q=80&w=1080" w="400px" h="411.11px" />
        </Flex>
        <Text mt="156px" textAlign="center" fontSize="36px" fontWeight="700" lineHeight="47px" color="white">
          Acumen beta testing recruitment
        </Text>
        <Text mt="63px" textAlign="center" fontSize="22px" fontWeight="400" lineHeight="29px" color="white">
          Please complete the form to try our product
        </Text>
        <Button mt="45px" mx="auto" w="224px" h="36px" bg="#0096FF" color="white" fontSize="16px" fontWeight="700" lineHeight="17px" rightIcon={<FaArrowRight />}>
          Apply for beta testing
        </Button>
      </Box>

      {/* Part 4 */}
      <Box bg="#06062C" w="1440px" h="731px" m="0">
        <Text mt="100px" textAlign="center" fontSize="38px" fontWeight="700" lineHeight="56px" bgGradient="linear(to-r, #CA88EB, #7E78F1, #7A77F1, #7AA9F1, #80D5E4)" bgClip="text">
          What can the AIGCODE App do?
        </Text>
        <Text mt="16px" textAlign="center" fontSize="16px" fontWeight="400" lineHeight="21px" color="#D0D0FF">
          AIGCode is capable of end-to-end application generation
        </Text>
        <SimpleGrid columns={2} spacing={10} mt="145px" ml="138px">
          {/* Four rectangles with text */}
          {/* Each rectangle */}
        </SimpleGrid>
      </Box>

      {/* Part 5 */}
      <Box bg="#06062C" w="1440px" h="829px" m="0">
        <Text mt="100px" textAlign="center" fontSize="38px" fontWeight="500" lineHeight="56px" bgGradient="linear(to-r, #167CFA, #AC7BF6)" bgClip="text">
          AIGCode Community
        </Text>
        <Text mt="16px" textAlign="center" fontSize="16px" fontWeight="500" lineHeight="21px" color="#1F1F66">
          We welcome everyone to join our big family and engage in open communication with us
        </Text>
        <SimpleGrid columns={4} spacing={10} mt="16px">
          {/* 12 rectangles with person info */}
        </SimpleGrid>
      </Box>

      {/* Part 6 */}
      <Box bg="#06062C" w="1440px" h="649px" m="0">
        <Text mt="100px" textAlign="center" fontSize="38px" fontWeight="500" lineHeight="56px" bgGradient="linear(to-r, #167CFA, #AC7BF6)" bgClip="text">
          Welcome to join us
        </Text>
        <Text mt="16px" textAlign="center" fontSize="16px" fontWeight="500" lineHeight="21px" color="#1A184A">
          Shaping the future with technological innovations
        </Text>
        <Flex justify="center" mt="16px">
          {/* Three rectangles */}
        </Flex>
      </Box>
    </Container>
  );
};

export default Index;
