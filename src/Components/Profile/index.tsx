import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles"
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'
import { Filter } from "../Filter"

export function Profile() {
  return (
    <Container>
      <Header>
        <Avatar src={"https://avatars.githubusercontent.com/u/38961300?v=4"} />
        <Login>MRodrigues51</Login>
        <Name>Marcelo Rodrigues</Name>
      </Header>
      <Inner>
        <Data><MdGroup size={20} />30&nbsp;<i> seguidores</i>&nbsp; &middot; 10&nbsp;<i> seguindo</i></Data>
        <Data><MdWork size={20} />FreeLancer</Data>
        <Data><MdLocationCity size={20} />Crato - CE</Data>
        <Data>
          <MdLink size={20} />
          <a href="https://www.linkedin.com/in/marcelorodriguesdev/">LinkedIn</a>
        </Data>
      </Inner>
      <Filter />
    </Container>
  )
}
