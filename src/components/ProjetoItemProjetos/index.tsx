import Link from 'next/link';
import { Container } from './styles';

interface ProjetoItemProps {
  title: string,
  type: string,
  imgUrl: string,
  slug: string;
}

export function ProjetoItemProjetos({ title, type, imgUrl, slug }: ProjetoItemProps) {
  return (

    <Container imgUrl=''>
      
      <Link href=''>
      <a>
        <div className="overlay" />
        <section>
          <h1>{title}</h1>
          <h2>{type}</h2>
        </section>

      </a>
      </Link >
    </Container>
  );
}
