import { SectionTitle } from '../SectionTitle';
import ExpItem from './ExpItem';
import { Container } from './styles';

export function Exp() {
  return (
    <Container>
      <SectionTitle title="Experiencias" description="" />
      <section>
        <ExpItem year='2022' title='Ainda em busca da primeira experiencia no mercado D:' />
        <ExpItem year='2023' title='Lorem ipsum dolor sit amet, consectetur adipiscing' />
        <ExpItem year='2024' title='Lorem ipsum dolor sit amet, consectetur adipiscing' />
        <ExpItem year='2025' title='Lorem ipsum dolor sit amet, consectetur adipiscing' />
      </section>
    </Container>
  );
}
