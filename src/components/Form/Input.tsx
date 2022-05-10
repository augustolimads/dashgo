import {
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input as TextInput,
  InputProps
} from '@chakra-ui/react'

type Props = InputProps & {
  label: string
  id: string
  register: any
  errors?: {
    [x: string]: any
  }
}

export const Input = ({ label, id, errors, register, ...rest }: Props) => {
  const errorId = errors && errors[id]

  return (
    <FormControl isInvalid={!!errorId}>
      {!!label && <FormLabel htmlFor={id}>{label}</FormLabel>}
      <TextInput
        id={id}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        {...register(id)}
        {...rest}
      />
      <FormErrorMessage>{errorId && errorId.message}</FormErrorMessage>
    </FormControl>
  )
}
