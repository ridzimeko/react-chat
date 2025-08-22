import { Button, Field, PinInput} from '@chakra-ui/react'
import { Controller, useForm } from 'react-hook-form'

interface FormValues {
    pin: string[]
}

function OTPInput() {
    const { handleSubmit, control, formState } = useForm<FormValues>()
    
      const onSubmit = handleSubmit((data) => console.log(data))
    
      return (
        <form onSubmit={onSubmit} style={{ width: '100%'}}>
            <Field.Root invalid={!!formState.errors.pin} mx="auto">
              <Controller
                control={control}
                name="pin"
                render={({ field }) => (
                  <PinInput.Root
                    value={field.value}
                    onValueChange={(e) => field.onChange(e.value)}
                    type='alphanumeric'
                    mx="auto"
                    my="4"
                  >
                    <PinInput.HiddenInput />
                    <PinInput.Control>
                      <PinInput.Input index={0} />
                      <PinInput.Input index={1} />
                      <PinInput.Input index={2} />
                      <PinInput.Input index={3} />
                      <PinInput.Input index={4} />
                      <PinInput.Input index={5} />
                    </PinInput.Control>
                  </PinInput.Root>
                )}
              />
              <Field.ErrorText>{formState.errors.pin?.message}</Field.ErrorText>
            </Field.Root>
            <Button type="submit" w="full" mt="7">Continue</Button>
        </form>
      )
}

export default OTPInput