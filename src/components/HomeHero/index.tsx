import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import janna  from '../../assets/janna.png';
export function HomeHero() {
  return (
    <Container data-aos="fade-up">
       <img src={janna} alt="foto home" />
       <div>
       <TextContainer>
        <h1>Olá,</h1>
        <h2>Seja bem vindo ao meu portfolio!</h2>
       </TextContainer>
       <InfosContainer>
        <CodeItem data-aos="fade-right">
          <span className="comment">//Apresentação</span>
          <span className="purple">Infos</span> {'\u007b'}
          <div>
            Nome: <span className="blue">Gustavo</span>
          </div>
          <div>
            Sobrenome: <span className="blue">Catuzzo</span>
          </div>
          {'\u007D'}
        </CodeItem>
       </InfosContainer>
       </div>
    </Container>
  );
}
