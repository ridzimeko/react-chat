import ChatHeader from "@/components/ChatHeader";
import ChatItem from "@/components/ChatItem";
import Conversation from "@/components/Conversation";
import {
  Box,
  Heading,
  HStack,
  IconButton,
  Image,
  Input,
  InputGroup,
  Kbd,
  VStack,
} from "@chakra-ui/react";
import { HiDotsHorizontal, HiOutlinePencilAlt } from "react-icons/hi";
import { LuSearch } from "react-icons/lu";

function Index() {
  return (
    <HStack h="100svh" alignItems="flex-start" gap="0">
      <VStack
        align="self-start"
        bg="gray.950"
        px="4"
        py="6"
        gap="5"
        h="full"
        maxW="422px"
        overflow="clip"
      >
        {/* Sidebar Header */}
        <HStack alignItems="center" justifyContent="space-between" w="full">
          <HStack pt="2" gap="4">
            <Image
              src="https://bit.ly/naruto-sage"
              boxSize="46px"
              borderRadius="full"
              fit="cover"
              alt="Naruto"
            />
            <Heading size="2xl">Chats</Heading>
          </HStack>
          <Box>
            <IconButton variant="ghost">
              <HiOutlinePencilAlt />
            </IconButton>
            <IconButton variant="ghost">
              <HiDotsHorizontal />
            </IconButton>
          </Box>
        </HStack>

        {/* Search */}
        <InputGroup
          startElement={<LuSearch />}
          endElement={<Kbd>⌘K</Kbd>}
        >
          <Input placeholder="Search or start new chat" />
        </InputGroup>

        {/* Chat Items */}
        <VStack align="self-start" gap="0" w="full">
          <ChatItem
            image="https://bit.ly/naruto-sage"
            name="Naruto Uzumaki"
            message="lorem adldajdaljdaldajldakjda adndaldan daldaldajadl aadldadaljadldaj alkjda"
          />
          <ChatItem
            image="https://bit.ly/naruto-sage"
            name="Naruto Uzumaki"
            message="lorem adldajdaljdaldajldakjda adndaldan daldaldajadl aadldadaljadldaj alkjda"
          />
          <ChatItem
            image="https://bit.ly/naruto-sage"
            name="Naruto Uzumaki"
            message="lorem adldajdaljdaldajldakjda adndaldan daldaldajadl aadldadaljadldaj alkjda"
          />
          <ChatItem
            image="https://bit.ly/naruto-sage"
            name="Naruto Uzumaki"
            message="lorem adldajdaljdaldajldakjda adndaldan daldaldajadl aadldadaljadldaj alkjda"
          />
          <ChatItem
            image="https://bit.ly/naruto-sage"
            name="Naruto Uzumaki"
            message="lorem adldajdaljdaldajldakjda adndaldan daldaldajadl aadldadaljadldaj alkjda"
          />
        </VStack>
      </VStack>
      
      <VStack
      align="self-start"
      gap="5"
      w="full"
      h="full"
      overflow="clip">
        <ChatHeader name="Naruto" image="https://bit.ly/naruto-sage" />
        <Conversation />
      </VStack>
    </HStack>
  );
}

export default Index;
