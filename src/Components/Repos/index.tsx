import { Repo } from './Repo'
import { Container } from './styles'

interface Repository {
  id: string;
  name: string;
  description: string;
  html_url: string;
  language: string;
}

interface RepositoriesProps {
  repositories: Repository[];
  currentLanguage: string;
}

export function Repos({ repositories, currentLanguage }: RepositoriesProps) {
  const repos = repositories
    .filter(
      (repository) =>
        currentLanguage === '' || repository.language === currentLanguage)
    .map(repository => (
      <Repo key={repository.id} repository={repository} />
    ))
  return (
    <Container>
      {repos}
    </Container>
  );
}
