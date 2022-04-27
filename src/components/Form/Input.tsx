import {
  FormControl,
  FormLabel,
  Input as TextInput,
  InputProps
} from '@chakra-ui/react'

type Props = InputProps & {
  label: string
  name: string
}

export const Input = ({ label, name, ...rest }: Props) => {
  return (
    <FormControl>
      {!!label && <FormLabel htmlFor={name}>{label}</FormLabel>}
      <TextInput
        name={name}
        id={name}
        focusBorderColor="pink.500"
        bg="gray.900"
        variant="filled"
        _hover={{
          bg: 'gray.900'
        }}
        size="lg"
        {...rest}
      />
    </FormControl>
  )
}
