import { Container, Main, Sidebar } from './styles'
import { Profile } from '../../Components/Profile'
import { Repos } from '../../Components/Repos'

export function RepositoriesPage() {
  return (
    <Container>
      <Sidebar>
        <Profile />
      </Sidebar>
      <Main>
        <Repos />
      </Main>
    </Container>
  )
}
