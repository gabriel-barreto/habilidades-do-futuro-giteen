import React, { useState, useEffect } from 'react';

import { $students } from '../../services';

import { withGuard } from '../../HOC';

import Lesson from '../../components/Lesson';
import Loader from '../../components/Loader';
import Notification from '../../components/Notification';

function LessonsPage() {
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
    $students
      .getLessons()
      .then(payload => {
        const active = payload[0];
        setState(prev => ({ ...prev, active, lessons: payload }));
      })
      .catch(() => {
        const title = 'Ooops...';
        const content =
          'Ocorreu um erro ao tentar recuperar as aulas, por favor, tente novamente mais tarde!';
        const timeout = 6000;
        setState(prev => ({
          ...prev,
          notification: { ...prev, title, content, timeout },
        }));
      })
      .finally(() => {
        setState(prev => ({ ...prev, loading: false }));
      });
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
    <main id="lessons" className="lessons">
      {state.lessons.length > 0 ? (
        <Lesson
          {...state}
          groupButton={false}
          loginButton={false}
          onlyActiveLessons={false}
          onSelectLesson={onSelectLesson}
        />
      ) : null}
      <Notification {...state.notification} onClose={onNotificationClose} />
      <Loader active={state.loading} />
    </main>
  );
}

export default withGuard(LessonsPage);
