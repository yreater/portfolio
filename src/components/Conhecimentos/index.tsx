import { SectionTitle } from '../SectionTitle';
import { Container } from './styles';
import { AiFillHtml5 } from 'react-icons/ai';
import { FaCss3Alt, FaReact } from 'react-icons/fa';
import { IoLogoJavascript } from 'react-icons/io5';
import ConhecimentoItem from './ConhecimentoItem';
import { SiC } from 'react-icons/si';

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title="Conhecimentos" />
        <section>
          <ConhecimentoItem title="HTML" icon={<AiFillHtml5 />} />
          <ConhecimentoItem title="CSS" icon={<FaCss3Alt />} />
          <ConhecimentoItem title="JS" icon={<IoLogoJavascript />} />
          <ConhecimentoItem title="REACT" icon={<FaReact />} />
          <ConhecimentoItem title="C#" icon={<SiC />} />          
        </section>
    </Container>
  );
}
