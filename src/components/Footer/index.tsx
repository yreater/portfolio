import { Container } from './styles';
import { AiOutlineGithub, AiFillLinkedin } from 'react-icons/ai';
export function Footer() {
  function handleRedirect(url: string) {
    window.open(url);
  }

  function handleScrollTop() {
    window.scroll({
      top: 0,
      behavior: 'smooth'  
    })
  }

  return (
    <Container>
      <div className='container'>
        <button type="button" onClick={handleScrollTop}>
          Voltar ao topo
        </button>
        <section>
          <AiFillLinkedin onClick={() => handleRedirect("https://www.linkedin.com/in/gustavo-catuzzo-39b304241/")} />
          <AiOutlineGithub onClick={() => handleRedirect("https://github.com/yreater")} />
        </section>
      </div>
    </Container>
  );
}
