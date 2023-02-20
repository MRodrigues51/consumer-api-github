import { Container, Selector, Cleaner } from './styles'

interface LanguagesProps {
  languages: {
    name: string,
    count: number,
    color: string
  }[]
}

export function Filter({ languages }: LanguagesProps) {

  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))
  return (
    <Container>
      {selectors}
      <Cleaner>Limpar</Cleaner>
    </Container>
  )
}
