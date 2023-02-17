import { Container, Selector, Cleaner } from './styles'

export function Filter() {
  const langs = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#7f8c8d' },
    { name: 'PHP', count: 3, color: '#3498db' },
  ]

  const selectors = langs.map(({ name, count, color }) => (
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
