import { Container, Logo, Title, Input, Button, Form } from './styles'
import { MdSearch } from "react-icons/md";
import gitHubLogo from '../../assets/images/github-logo.svg'

export function Home() {
  return (
    <Container>
      <Logo src={gitHubLogo} alt='Logo GitHub' />
      <Title>API GitHub</Title>
      <Form>
        <Input placeholder='usuário' />
        <Button>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )

}
