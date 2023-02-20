import PropTypes from 'prop-types'
import { Container, Header, Avatar, Login, Name, Inner, Data } from "./styles"
import { MdGroup, MdLocationCity, MdWork, MdLink } from 'react-icons/md'


interface ProfileProps {
  user: {
    login: string,
    avatar_url: string,
    name: string,
    followers: number,
    following: number,
    company: string | null,
    blog: string,
    location: string,
  }
}

export function Profile({ user }: ProfileProps) {
  return (
    <Container>
      <Header>
        <Avatar src={user.avatar_url} />
        <Login>{user.login}</Login>
        <Name>{user.name}</Name>
      </Header>
      <Inner>
        <Data>
          <MdGroup size={20} />
          {user.followers}&nbsp;<i> seguidores</i>&nbsp; &middot;
          {user.following}&nbsp;<i> seguindo</i>
        </Data>
        {user.company && (
          <Data>
            <MdWork size={20} />
            {user.company}
          </Data>
        )}
        {user.location && (<Data>
          <MdLocationCity size={20} />
          {user.location}
        </Data>)}
        {user.blog && (
          <Data>
            <MdLink size={20} />
            <a href={`\\${user.blog}`}>Site</a>
          </Data>
        )}
      </Inner>
    </Container>
  )

  // Profile.propTypes = {
  //   user: PropTypes.shape({
  //     login: PropTypes.string.isRequired,
  //     avatar_url: PropTypes.string.isRequired,
  //     followers: PropTypes.number.isRequired,
  //     following: PropTypes.number.isRequired,
  //     company: PropTypes.string,
  //     blog: PropTypes.string,
  //     location: PropTypes.string,
  //   }).isRequired,
  // }
}
