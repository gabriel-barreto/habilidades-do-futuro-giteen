import React from 'react';

import * as S from './styled';

const lessons = [
  {
    step: 1,
    title: 'Público e Mercado',
  },
  {
    step: 2,
    title: 'Facebook',
  },
  {
    step: 3,
    title: 'Google Meu Negocio',
  },
  {
    step: 4,
    title: 'WhatsApp',
  },
  {
    resume: [
      'CONCEITOS IMPORTANTES',
      'A base do Instagram é o conteúdo em fotos;Você não precisa de muito conhecimento técnico para criar conteúdos para a plataforma; Apresenta forte engajamento;',
      'Timeline: Elenca os conteúdos de forma linear;',
      'Stories: Mostrar o dia-a-dia. Conteúdos disponíveis apenas por 24h;',
      'IGTV: Utilizado para vídeos maiores;',
      '',
      'PASSO A PASSO',
      '1 - Crie conteúdos de acordo com o formato que for utilizar;',
      '2 - Utilize os stories diariamente;',
      '3 - Modere a quantidade de posts;',
      '4 - Poste em horários nobres;',
      '5 - Use o IGTV para criar conteúdos maiores;',
      '6 - Utilize prévias na sua timeline;',
      '7 - Crie hashtags para o contéudo que você está postando;',
      '8 - Faça um perfil comercial ou transforme o seu;',
      '9 - Crie um cronograma para as postagens;',
      '10 - Invista nas fotos;',
      '',
      'DICAS ÚTEIS',
      'Use até cinco hashtags específicas na legenda do seu post;',
      'Insira informações úteis para o seu cliente na sua bio;',
      'Divulgue com influenciadores locais;',
      'Apenas 30% de conteúdos devem ser criados para venda;',
      'Conquiste os seus seguidores e EVITE automatizações.',
    ],
    active: true,
    _id: '5da97edbdddfa0fd55295ffd',
    step: 5,
    title: 'Instagram',
    video: 'https://player.vimeo.com/video/362383093',
    links: [
      {
        label: 'App Canva',
        url: 'http://google.com',
      },
      {
        label: 'App Inshot',
        url: 'http://google.com.br',
      },
      {
        label: 'Linkme.bio',
        url: 'https://google.com',
      },
      {
        label: 'Links das nossas redes sociais',
        url: 'https://google.com.br',
      },
    ],
  },
];

function LessonsBar() {
  return (
    <S.LessonsBarWrapper>
      {lessons.map(each => (
        <S.LessonItem className={each.active ? '--active' : ''}>
          <S.LessonItemStep className="featured">{`#${each.step}`}</S.LessonItemStep>
          <S.LessonItemTitle className="title">{each.title}</S.LessonItemTitle>
        </S.LessonItem>
      ))}
    </S.LessonsBarWrapper>
  );
}

export default LessonsBar;
