import { Menu, Button, Portal } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";

const SortSelector = () => {
  return (
    <Menu.Root>
      <Menu.Trigger asChild>
        <Button variant="outline">
          Order by: Relevance <BsChevronDown />
        </Button>
      </Menu.Trigger>
      <Portal>
        <Menu.Positioner>
          <Menu.Content>
            <Menu.Item value="1">Relevance</Menu.Item>
            <Menu.Item value="2">Date added</Menu.Item>
            <Menu.Item value="3">Name</Menu.Item>
            <Menu.Item value="4">Release date</Menu.Item>
            <Menu.Item value="5">Popularity</Menu.Item>
            <Menu.Item value="6">Average rating</Menu.Item>
          </Menu.Content>
        </Menu.Positioner>
      </Portal>
    </Menu.Root>
  );
};

export default SortSelector;
