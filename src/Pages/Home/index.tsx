import { useState } from 'react';

import { Container, Logo, Title, Input, Button, Form } from './styles'
import { MdSearch } from "react-icons/md";
import gitHubLogo from '../../assets/images/github-logo.svg'


export function Home() {
  const [login, setLogin] = useState('')
  return (
    <Container>
      <Logo src={gitHubLogo} alt='Logo GitHub' />
      <Title>API GitHub</Title>
      <Form>
        <Input
          placeholder='usuário'
          value={login}
          onChange={(e) => setLogin(e.target.value)}
        />
        <Button to={`/${login}/repositories`}>
          <MdSearch size={42} />
        </Button>
      </Form>
    </Container>
  )

}
