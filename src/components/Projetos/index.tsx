import { SectionTitle } from '../SectionTitle';
import ProjetoItem from './ProjetoItem';
import { Container } from './styles';

interface IProjeto {
  slug:string;
  title: string;
  type: string;
  thumbnail: string;
}

interface ProjetosProps {
  projetos: IProjeto[];
}

export function Projetos({ projetos }: ProjetosProps) {
  return (
    <Container >
      <SectionTitle title="Projetos" />
      <section>
        {projetos.map(projeto => (
          <ProjetoItem 
          key={projeto.slug}
            img={projeto.thumbnail}
            title={projeto.title}
            type={projeto.type}
            slug={projeto.slug}
          />
        ))}         
      </section>
      <button type="button">
      
      </button>
    </Container>
  );
}
