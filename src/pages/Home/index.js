import React, { useState, useEffect } from 'react';

import { $lesson } from '../../services';

import * as S from './styled';
import GroupButton from '../../components/GroupButton';
import Layout from '../../components/Layout';
import LessonsBar from '../../components/LessonsBar';
import Links from '../../components/Links';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';
import Video from '../../components/Video';
import Resume from '../../components/Resume';
import TitleBar from '../../components/TitleBar';

function HomePage() {
  const [state, setState] = useState({
    lessons: [],
    active: {
      step: null,
      title: 'Público e Mercado',
      video: 'https://sveltejs.github.io/assets/caminandes-llamigos.mp4',
    },
    notification: {
      active: false,
      title: 'Lorem Ipsum',
      content:
        'Et temporibus distinctio labore minus corrupti. Accusamus dicta ab architecto reprehenderit minus eaque odit consequatur harum. Hic est ea in.',
    },
    loading: true,
  });

  useEffect(() => {
    setState(prev => ({ ...prev, loading: true }));
    $lesson
      .fetch()
      .then(payload => {
        const active = payload.find(each => each.active) || {
          step: null,
          title: '',
        };
        setState(prev => ({ ...prev, active, lessons: payload }));
      })
      .catch(err => {
        console.log(err);
        alert(
          'Ocorreu um erro ao tentar recuperar as aulas, por favor, tente novamente mais tarde!',
        );
      })
      .finally(() => {
        setState(prev => ({ ...prev, loading: false }));
      });

    setTimeout(() => {
      console.log('Activating notification...');
      setState(prev => ({
        ...prev,
        notification: { ...prev.notification, active: true },
      }));
    }, 3000);
  }, []);

  function onNotificationClose() {
    return setState(prev => ({
      ...prev,
      notification: { ...prev.notification, active: false },
    }));
  }

  function onSelectLesson(step) {
    setState(prev => ({ ...prev, loading: true }));

    const { lessons } = state;
    const active = lessons.find(each => each.step === step);

    const [{ top }] = document.querySelector('#player').getClientRects();
    const actual = window.scrollY;
    window.scrollTo({
      top: top + actual - 8,
      left: 0,
      behavior: 'smooth',
    });

    setState(prev => ({ ...prev, active, loading: false }));
    return step;
  }

  return (
    <main id="home" className="home">
      {state.lessons.length > 0 ? (
        <Layout title={state.active.step ? `Aula ${state.active.step}` : ''}>
          <TitleBar lesson={state.active.title ? state.active.title : ''} />
          <LessonsBar lessons={state.lessons} onClick={onSelectLesson} />
          {state.active.step !== null ? (
            <>
              <S.VideoContainer>
                <Video
                  src={state.active.video}
                  title={`Aula ${state.active.step} - ${state.active.title}`}
                />
                <Resume entries={state.active.resume} />
              </S.VideoContainer>
              <S.VideoInfoContainer>
                <Links entries={state.active.links} />
                <GroupButton url="https://chat.whatsapp.com/JtsozM4faobDomW8KbqFZ9" />
              </S.VideoInfoContainer>
              <S.BottomResume entries={state.active.resume} />
            </>
          ) : null}
        </Layout>
      ) : null}
      <Notification {...state.notification} onClose={onNotificationClose} />
      <Loader active={state.loading} />
    </main>
  );
}

export default HomePage;
