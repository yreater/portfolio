import { HomeContainer } from '../styles/HomeStyles';
import Header from "../components/Header";
import { HomeHero } from '../components/HomeHero';
import { Exp } from '../components/Exp';
import { Projetos } from '../components/Projetos';
import { Conhecimentos } from '../components/Conhecimentos';
import { Footer } from '../components/Footer';
import { getPrismicClient } from '../services/prismic';
import Prismic from '@prismicio/client';
import { GetStaticProps } from 'next';
import { useEffect } from 'react';
import Aos from 'aos';
import 'aos/dist/aos.css';
import Head from 'next/head';

interface IProjeto {
  slug:string;
  title: string;
  type: string;
  thumbnail: string;
}

interface HomeProps {
  projetos: IProjeto[];
}

export default function Home({ projetos }: HomeProps) {
  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, [])

  return (
    <HomeContainer>
      <Head>
        <title>Home</title>
        
      </Head>
      <Header />

      <main className="container">
      <HomeHero />
      <Exp />
      <Projetos projetos={projetos} />
      <Conhecimentos />

      </main>
      <Footer />
    </HomeContainer>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const prismic = getPrismicClient();

    const projectResponse = await prismic.query(
      [Prismic.Predicates.at('document.type', 'projeto')],
      { orderings: '[document.first_publication_date desc]'}
    );

    const projetos = projectResponse.results.map(projeto => ({
      slug: projeto.uid,
      title: projeto.data.title,
      type: projeto.data.type,
      thumbnail: projeto.data.thumbnail.url
    }));

    return{
      props: {
        projetos
      },
      revalidate: 86400
    };
}
