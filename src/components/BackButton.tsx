import { IconButton } from "@chakra-ui/react";
import { LuArrowLeft } from "react-icons/lu";

interface Props {
  onClick: () => void;
}

function BackButton({ onClick, ...props }: Props) {
  return (
    <IconButton variant="ghost" type="button" onClick={onClick} {...props}>
      <LuArrowLeft />
      Back
    </IconButton>
  );
}

export default BackButton;
