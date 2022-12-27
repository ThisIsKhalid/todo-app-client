import {
  Box,
  Button,
  CloseButton,
  Flex,
  HStack,
  IconButton,
  Text,
  useColorModeValue,
  useDisclosure,
  VStack,
} from "@chakra-ui/react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";

const Navbar = () => {
  const bg = useColorModeValue("white", "gray.800");
  const mobileNav = useDisclosure();
  return (
    <Box
      bg={bg}
      w="full"
      px={{
        base: 2,
        sm: 4,
      }}
      py={4}
      shadow="md"
    >
      <Flex alignItems="center" justifyContent="space-between" mx="auto">
        <Link to="/">
          <Text fontSize="xl" fontWeight="medium" ml="2">
            To Do
          </Text>
        </Link>
        <HStack display="flex" alignItems="center" spacing={1}>
          <HStack
            spacing={1}
            mr={1}
            color="brand.500"
            display={{
              base: "none",
              md: "inline-flex",
            }}
          >
            <Button variant="ghost">
              <Link to="/">Home</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/signup">Sign up</Link>
            </Button>
            <Button variant="ghost">
              <Link to="/signin">Sign in</Link>
            </Button>
          </HStack>
          <Button colorScheme="brand" size="sm">
            Get Started
          </Button>
          <Box
            display={{
              base: "inline-flex",
              md: "none",
            }}
          >
            <IconButton
              display={{
                base: "flex",
                md: "none",
              }}
              aria-label="Open menu"
              fontSize="20px"
              color="gray.800"
              _dark={{
                color: "inherit",
              }}
              variant="ghost"
              icon={<AiOutlineMenu />}
              onClick={mobileNav.onOpen}
            />

            <VStack
              pos="absolute"
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? "flex" : "none"}
              flexDirection="column"
              p={2}
              pb={4}
              m={2}
              bg={bg}
              spacing={3}
              rounded="sm"
              shadow="sm"
            >
              <CloseButton
                aria-label="Close menu"
                onClick={mobileNav.onClose}
              />

              <Button w="full" variant="ghost" onClick={mobileNav.onClose}>
                <Link to="/">Home</Link>
              </Button>
              <Button w="full" variant="ghost" onClick={mobileNav.onClose}>
                <Link to="/signup">Sign up</Link>
              </Button>
              <Button w="full" variant="ghost" onClick={mobileNav.onClose}>
                <Link to="/signin">Sign in</Link>
              </Button>
            </VStack>
          </Box>
        </HStack>
      </Flex>
    </Box>
  );
};

export default Navbar;
