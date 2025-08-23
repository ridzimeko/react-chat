import { Box, Button, HStack, Image, Text } from "@chakra-ui/react";

interface Props {
  image?: string;
  name: string;
  isOnline?: boolean;
}

function ChatHeader({ image, name, isOnline = false }: Props) {
  return (
    <Button variant="ghost" asChild>
      <HStack alignItems="center" gap="4" w="full" h="fit" py="1.5">
        <Image
          src={image}
          boxSize="48px"
          borderRadius="full"
          fit="cover"
          alt={name}
        />
        <Box w="full">
          <Text fontWeight="medium" fontSize="md" mb="1">
            {name}
          </Text>
          <Text lineClamp="1" fontSize="sm">
            {isOnline ? "Online" : "Offline"}
          </Text>
        </Box>
      </HStack>
    </Button>
  );
}

export default ChatHeader;
