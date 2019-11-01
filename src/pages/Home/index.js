import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import { App } from '../../config';
import { $lesson, $store } from '../../services';

import Lesson from '../../components/Lesson';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';

function HomePage({ history }) {
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
    if ($store.get().token) {
      history.push(`${App.publicURL}/minhas-aulas`);
    } else {
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
        .catch(() => {
          const title = 'Ooops...';
          const content =
            'Ocorreu um erro ao tentar recuperar as aulas, por favor, tente novamente mais tarde!';
          const timeout = 6000;
          setState(prev => ({
            ...prev,
            notification: {
              ...prev.notification,
              active: true,
              title,
              content,
              timeout,
            },
          }));
        })
        .finally(() => {
          setState(prev => ({ ...prev, loading: false }));
        });
    }
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
        <Lesson {...state} onSelectLesson={onSelectLesson} onlyActiveLessons />
      ) : null}
      <Notification {...state.notification} onClose={onNotificationClose} />
      <Loader active={state.loading} />
    </main>
  );
}

HomePage.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default HomePage;
