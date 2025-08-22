import { useForm } from "react-hook-form";
import {
  Button,
  Heading,
  Text,
  Field,
  Input,
  Stack,
  Box,
  VStack,
  HStack,
} from "@chakra-ui/react";
import { Link } from "react-router";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import BackButton from "@/components/BackButton";
import OTPInput from "./partials/PinInput";

interface FormValues {
  email: string;
  password: string;
}

function SlideStep({
  children,
  stepKey,
  initial = "enter",
}: {
  children: React.ReactNode;
  stepKey: string;
  initial?: boolean | string;
}) {
  const variants = {
    enter: { x: 300, opacity: 0 },
    center: { x: 0, opacity: 1 },
    exit: { x: -300, opacity: 0 },
  };

  return (
    <motion.div
      key={stepKey}
      variants={variants}
      initial={initial}
      animate="center"
      exit="exit"
      transition={{ duration: 0.6 }}
    >
      {children}
    </motion.div>
  );
}

function Login() {
  const [step, setStep] = useState(1);
  const [method, setMethod] = useState<"otp" | "password" | null>(null);
  const {
    register,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>();

  const email = getValues("email");

  const onSubmit = handleSubmit((data) => console.log(data));
  const nextStep = () => setStep((s) => s + 1);
  const prevStep = () => setStep((s) => (s <= 1 ? s : s - 1));

  return (
    <motion.div
      layout="position"
      transition={{ duration: 0.3, ease: "easeInOut" }}
    >
      <Box
        bg="bg"
        shadow="md"
        borderRadius="lg"
        p="12"
        minW="440px"
        overflow="clip"
      >
        <Stack gap="4" align="flex-start" maxW="sm">
          <Box>
            <Heading>Welcome Back!</Heading>
          </Box>

          {step > 1 && <BackButton onClick={prevStep} />}
          <AnimatePresence mode="wait">
            {step === 1 && (
              <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <SlideStep initial={false} stepKey="step1">
                  <VStack align="self-start" gap="5">
                    <Heading size="md">Enter your email to continue.</Heading>
                    <Field.Root invalid={!!errors.email}>
                      <Field.Label>Email</Field.Label>
                      <Input {...register("email")} />
                      <Field.ErrorText>{errors.email?.message}</Field.ErrorText>
                    </Field.Root>
                    <Button
                      type="submit"
                      onClick={() => {
                        nextStep();
                      }}
                      w="full"
                    >
                      Continue
                    </Button>
                  </VStack>
                  <Text mt="10" textAlign="center">
                    New to Chat? <Link to="/register">Register</Link>
                  </Text>
                </SlideStep>
              </form>
            )}

            {step === 2 && (
              <SlideStep stepKey="step2">
                <VStack gap="4" align="flex-start">
                  <Heading size="md">Do you want to use email OTP?</Heading>
                  <Text>
                    We will send you an OTP to your email to sign in, or you can
                    just use your password.
                  </Text>
                </VStack>
                <HStack gap="4" mt="6">
                  <Button
                    onClick={() => {
                      setMethod("otp");
                      nextStep();
                    }}
                  >
                    Send me code
                  </Button>
                  <Button
                    onClick={() => {
                      setMethod("password");
                      nextStep();
                    }}
                    variant="ghost"
                  >
                    Use your password instead
                  </Button>
                </HStack>
              </SlideStep>
            )}

            {step === 3 && method === "otp" && (
              <SlideStep stepKey="step3-otp">
                <VStack align="self-start" gap="4">
                  <Box>
                    <Text>
                      We&apos;ve just sent a verification code to{" "}
                      <span style={{ fontWeight: 600 }}>{email}</span>. If you
                      don&apos;t see it, please check your spam folder.
                    </Text>
                  </Box>
                  <OTPInput />
                </VStack>
              </SlideStep>
            )}

            {step === 3 && method === "password" && (
              <form onSubmit={onSubmit} style={{ width: "100%" }}>
                <VStack align="self-start" gap="5">
                  <Heading size="md">Enter your password to sign in.</Heading>
                  <Field.Root invalid={!!errors.password}>
                    <Field.Label>Password</Field.Label>
                    <Input {...register("password")} />
                    <Field.ErrorText>
                      {errors.password?.message}
                    </Field.ErrorText>
                  </Field.Root>
                  <Button type="submit" onClick={onSubmit} w="full">
                    Continue
                  </Button>
                </VStack>
              </form>
            )}
          </AnimatePresence>
        </Stack>
      </Box>
    </motion.div>
  );
}

export default Login;
