import { Container, Name, Description, Footer, Lang, Link } from "./styles"

export function Repo() {
  return (
    <Container color="#f1c40f">
      <Name>Git Hub</Name>
      <Description>Repositorio do Git</Description>
      <Footer color="#f1c40f">
        <Lang>JavaScript</Lang>
        <Link href="https://github.com/MRodrigues51/" target="_blank">VER</Link>
      </Footer>
    </Container>
  )
}
