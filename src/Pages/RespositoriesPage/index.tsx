import { Container, Main, Sidebar } from './styles'
import { Profile } from '../../Components/Profile'
import { Repos } from '../../Components/Repos'
import { Filter } from '../../Components/Filter'

export function RepositoriesPage() {
  const user = {
    login: "MRodrigues51",
    avatar_url: "https://avatars.githubusercontent.com/u/38961300?v=4",
    name: "Marcelo Rodrigues",
    followers: 8,
    following: 11,
    company: null,
    blog: "https://www.linkedin.com/in/marcelorodriguesdev/",
    location: "Crato, CE, BR",
  }
  const repositories = [
    {
      name: "Repo 1",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "NodeJS"
    },
    {
      name: "Repo 2",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "NodeJS"
    },
    {
      name: "Repo 3",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "PHP"
    },
    {
      name: "Repo 4",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "TypeScript"
    },
    {
      name: "Repo 5",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "Java"
    },
    {
      name: "Repo 6",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "Ruby"
    },
  ]

  const stats = repositories
    .map((repositories) => repositories.language)
    .reduce((data, language) => ({
      ...data,
      [language]: (data[language] || 0) + 1,
    }), [])
  delete stats.null
  console.log(stats)

  const languages = [
    { name: 'JavaScript', count: 5, color: '#f1c40f' },
    { name: 'Shell', count: 2, color: '#7f8c8d' },
    { name: 'PHP', count: 3, color: '#3498db' },
    { name: 'Ruby', count: 1, color: '#e74c3c' },
  ]
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} />
      </Sidebar>
      <Main>
        <Repos />
      </Main>
    </Container>
  )
}
