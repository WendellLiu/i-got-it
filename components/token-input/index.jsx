import {
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
} from "@chakra-ui/react";

export default function TokenInput() {
  return (
    <FormControl>
      <FormLabel>OpenAI Token</FormLabel>
      <Input type="text" />
      <FormHelperText>We do not retain tokens on our server.</FormHelperText>
    </FormControl>
  );
}
