import { Box, Input, InputGroup, VStack } from "@chakra-ui/react";
import { MdOutlineEmojiEmotions, MdSend } from "react-icons/md";

function Conversation() {
  return (
    <VStack h="full" w="full">
        <Box flex="1" overflow="auto">
        </Box>
      <InputGroup
        startElement={<MdOutlineEmojiEmotions />}
        endElement={<MdSend />}
        w="full"
      >
        <Input w="full" placeholder="Type a message..." />
      </InputGroup>
    </VStack>
  );
}

export default Conversation;
