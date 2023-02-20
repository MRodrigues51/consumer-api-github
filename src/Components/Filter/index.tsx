import { Container, Selector, Cleaner } from './styles'

interface LanguagesProps {
  languages: {
    name: string,
    count: number,
    color: string
  }[],
  currentLanguage: string,
  onClick: (language: string) => void,
}

export function Filter({ languages, currentLanguage, onClick }: LanguagesProps) {

  function handleClick(language: string) {
    onClick(language)
  }

  const selectors = languages.map(({ name, count, color }) => (
    <Selector
      key={name.toLowerCase()}
      color={color}
      className={currentLanguage === name ? 'selected' : ''}
      onClick={() => handleClick(name)} //
    >
      <span>{name}</span>
      <span>{count}</span>
    </Selector>
  ))
  return (
    <Container>
      {selectors}
      <Cleaner onClick={() => onClick && onClick('')}>Limpar</Cleaner>
    </Container >
  )
}
