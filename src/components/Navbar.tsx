import { HStack, Image, Text } from "@chakra-ui/react";
import logo from "../assets/logo.webp";

const Navbar = () => {
  return (
    <HStack>
      <Image boxSize="60px" src={logo} />
      <Text>NavBar</Text>
    </HStack>
  );
};

export default Navbar;
