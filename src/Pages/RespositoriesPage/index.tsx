import { useState } from 'react'
import { Container, Main, Sidebar } from './styles'
import { Profile } from '../../Components/Profile'
import { Repos } from '../../Components/Repos'
import { Filter } from '../../Components/Filter'
import { getLangsFrom } from '../../services/api'

export function RepositoriesPage() {
  const [currentLanguage, setCurrentLanguage] = useState('')

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
      id: "1",
      name: "Repo 1",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "NodeJS"
    },
    {
      id: "2",
      name: "Repo 2",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "NodeJS"
    },
    {
      id: "3",
      name: "Repo 3",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "PHP"
    },
    {
      id: "4",
      name: "Repo 4",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "TypeScript"
    },
    {
      id: "5",
      name: "Repo 5",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "Java"
    },
    {
      id: "6",
      name: "Repo 6",
      description: "Descrição",
      html_url: "https://www.linkedin.com/in/marcelorodriguesdev/",
      language: "Ruby"
    },
  ]
  const languages = getLangsFrom(repositories)
  const onFilter = (language: string) => {
    setCurrentLanguage(language)
  }
  return (
    <Container>
      <Sidebar>
        <Profile user={user} />
        <Filter languages={languages} currentLanguage={currentLanguage} onClick={onFilter} />
      </Sidebar>
      <Main>
        <Repos repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  )
}
