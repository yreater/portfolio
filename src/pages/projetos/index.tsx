import Header from "../../components/Header";
import { ProjetoItemProjetos } from "../../components/ProjetoItemProjetos";
import { ProjetoContainer } from '../../styles/ProjetoStyles';

export default function Projetos() {
  return(
    <ProjetoContainer>
      <Header />
      <main className="container">
        <ProjetoItemProjetos
          title="Projeto 01"
          type="Website"
          slug=""
          imgUrl=""
        />
        <ProjetoItemProjetos
          title="Projeto 02"
          type="WebApi"
          slug=""
          imgUrl=""
        />
        <ProjetoItemProjetos
          title="Projeto 03"
          type="API"
          slug=""
          imgUrl=""
        />                
      </main>
    </ProjetoContainer>
  )
}
