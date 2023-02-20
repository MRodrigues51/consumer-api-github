import { Container, Name, Description, Footer, Lang, Link } from "./styles"

import { langColors } from "../../../services/config";

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

interface Props {
  repository: Repository;
  key: string;
}
export function Repo({ repository }: Props) {
  const color = langColors[repository.language && repository.language.toLowerCase()]
  return (
    <Container color={color}>
      <Name>{repository.name}</Name>
      <Description>{repository.description}</Description>
      <Footer color={color}>
        <Lang>{repository.language}</Lang>
        <Link href={repository.html_url} target="_blank">VER</Link>
      </Footer>
    </Container>
  )
}
