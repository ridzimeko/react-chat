import { useForm } from "react-hook-form";
import {
  Button,
  Heading,
  Text,
  Field,
  Input,
  Stack,
  Box,
} from "@chakra-ui/react";
import { Link } from "react-router";

interface FormValues {
  name: string;
  email: string;
  password: string;
}

function Register() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const onSubmit = handleSubmit((data) => console.log(data));

  return (
    <Box bg="bg" shadow="md" borderRadius="lg" p="12" w="full" overflow="clip">
      <form onSubmit={onSubmit}>
        <Stack gap="4" align="flex-start" maxW="sm">
          <Box>
            <Heading>Hey There, Welcome!</Heading>
            <Text>Nice to meet you! We hope you enjoy your stay.</Text>
          </Box>
          <Field.Root invalid={!!errors.name}>
            <Field.Label>Your Name</Field.Label>
            <Input {...register("name")} />
            <Field.ErrorText>{errors.name?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.email}>
            <Field.Label>Email</Field.Label>
            <Input {...register("email")} />
            <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
          </Field.Root>

          <Field.Root invalid={!!errors.password}>
            <Field.Label>Password</Field.Label>
            <Input {...register("password")} />
            <Field.ErrorText>{errors.password?.message}</Field.ErrorText>
          </Field.Root>

          <Button type="submit">Submit</Button>
          <Text>
            Already have an account? <Link to="/login">Login</Link>
          </Text>
        </Stack>
      </form>
    </Box>
  );
}

export default Register;
