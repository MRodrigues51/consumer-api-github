import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Loading, Container, Main, Sidebar } from './styles'
import { Profile } from '../../Components/Profile'
import { Repos } from '../../Components/Repos'
import { Filter } from '../../Components/Filter'
import { getRepos, getUser, getLangsFrom } from '../../services/api'

interface User {
  login: string;
  avatar_url: string;
  name: string;
  followers: number;
  following: number;
  company: string | null;
  blog: string;
  location: string;
}

interface Languages {
  name: string;
  count: number;
  color: string;
}
export function RepositoriesPage() {
  const { login } = useParams();
  const [user, setUser] = useState<User>()
  const [repositories, setRepositories] = useState([])
  const [languages, setLanguages] = useState<Languages[]>([])
  const [currentLanguage, setCurrentLanguage] = useState('')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')
  useEffect(() => {
    const loadData = async () => {
      try {
        const [userResponse, repositoriesResponse] = await Promise.all([
          getUser(login || ''),
          getRepos(login || '')
        ]);
        setUser(userResponse.data)
        setRepositories(repositoriesResponse.data)

        setLanguages(getLangsFrom(repositoriesResponse.data))
        // console.log(userResponse.data)
      } catch (error) {
        setError('Não foi possível carregar os dados do usuário.')
        // console.log(error)
      }
      setLoading(false)
    }
    loadData()
  }, [])

  const onFilter = (language: string) => {
    setCurrentLanguage(language)
  }
  if (loading) {
    return <Loading>Carregando...</Loading>
  }
  if (error) {
    return <div>{error}</div>
  }
  return (
    <Container>
      <Sidebar>
        <Profile user={user ?
          user : {
            login: '',
            avatar_url: '',
            name: '',
            followers: 0,
            following: 0,
            company: null,
            blog: '',
            location: ''
          }} />
        <Filter languages={languages}
          currentLanguage={currentLanguage} onClick={onFilter} />
      </Sidebar>
      <Main>
        <Repos repositories={repositories} currentLanguage={currentLanguage} />
      </Main>
    </Container>
  )
}
//
