import React from 'react';
import styled from 'styled-components';

import { GlobalStyle } from './styles';

import GroupButton from './components/GroupButton';
import Links from './components/Links';
import Layout from './components/Layout';
import Video from './components/Video';
import Resume from './components/Resume';
import TitleBar from './components/TitleBar';

const contents = [
  'CONCEITOS IMPORTANTES',
  'Varejo: Produto ou serviço vendido de forma direcionada.',
  'Concorrente direto x indireto: Concorrente direto - Empresas do mesmo segmento; Concorrente indireto - Empresas que em vendem algum produto igual ao seu.',
  'Personas: Representações descritivas do perfil dos seus clientes.As vezes, são mais de uma persona que definem seus clientes.',
  '',
  'PASSO A PASSO',
  'Responda as quatro perguntas:',
  '1 - Quais são os problemas que o seu produto/serviço resolve?',
  '2 - Seu produto possui um diferencial?',
  '3 - Quem são seus concorrentes?',
  '4 - Quem é meu cliente?',
  '',
  'DICAS ÚTEIS',
  'Identifique o cenário atual da sua empresa;',
  'Descubra seus pontos fortes e fracos;',
  'Exponha seus diferenciais para os seus clientes;',
  'Mantenha contato com os seus clientes;',
  'Aproveite datas específicas para gerar conteúdos e coletar informações.',
];
const links = [
  { label: 'Matriz Swot ou FOFA', url: 'http://google.com' },
  { label: 'Ferramenta para definir personas', url: 'http://google.com.br' },
  { label: 'Calendários de datas comemorativas', url: 'https://google.com' },
  {
    label: 'Metodologia SMART - Material do Sebrae',
    url: 'https://google.com.br',
  },
];

const AppContainer = styled.div`
  background: linear-gradient(to right bottom, var(--darkest), var(--dark));
  min-height: 100vh;
`;

const VideoInfoContainer = styled.div`
  display: flex;
  flex-direction: column-reverse;
  @media (min-width: 1024px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    padding: 4rem 0;
  }
  @media (min-width: 1200px) {
    margin: 0 auto;
    max-width: 1200px;
  }
  @media (min-width: 1400px) {
    max-width: 1400px;
  }
`;

const VideoContainer = styled.div`
  --lg: calc((100vw - 1200px) / 2);
  --xl: calc((100vw - 1400px) / 2);

  background-color: var(--darkest);
  display: block;
  height: 24rem;

  > .resume {
    overflow-y: scroll;
    padding: 0 6.4rem 3.2rem 3.2rem;
    height: 100%;
  }

  @media (min-width: 425px) {
    height: 32rem;
  }
  @media (min-width: 768px) {
    height: 56rem;
  }
  @media (min-height: 900px) {
    height: 64rem;
  }
  @media (min-height: 1000px) {
    height: 72rem;
  }
  @media (min-width: 1200px) {
    display: grid;
    grid-template-columns: 3fr 1fr;
    padding: 0 var(--lg);
    > .resume {
      padding: 0 0 3.2rem 3.2rem;
    }
  }
  @media (min-width: 1400px) {
    padding: 0 var(--xl);
  }
  @media (max-width: 1199px) {
    > .resume {
      display: none;
    }
  }
`;

const BottomResume = styled(Resume)`
  @media (min-width: 1200px) {
    display: none;
  }
`;

function App() {
  return (
    <AppContainer className="App">
      <GlobalStyle />
      <Layout title="Aula 1">
        <TitleBar lesson="Público e Mercado" />
        <VideoContainer>
          <Video
            src="https://sveltejs.github.io/assets/caminandes-llamigos.mp4"
            title="Aula 1 - Público e Mercado"
          />
          <Resume entries={contents} />
        </VideoContainer>
        <VideoInfoContainer>
          <Links entries={links} />
          <GroupButton url="http://google.com" />
        </VideoInfoContainer>
        <BottomResume entries={contents} />
      </Layout>
    </AppContainer>
  );
}

export default App;
