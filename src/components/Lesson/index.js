import React from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

import GroupButton from '../GroupButton';
import Layout from '../Layout';
import LessonsBar from '../LessonsBar';
import Links from '../Links';
import Resume from '../Resume';
import TitleBar from '../TitleBar';
import Video from '../Video';

function Lesson({
  active,
  groupButton,
  lessons,
  loginButton,
  onlyActiveLessons,
  onSelectLesson,
}) {
  return (
    <Layout title={active.step ? `Aula ${active.step}` : ''}>
      <TitleBar lesson={active.title} login={loginButton} />
      <LessonsBar
        lessons={lessons}
        onClick={onSelectLesson}
        onlyActive={onlyActiveLessons}
      />
      {active.step !== null ? (
        <>
          <S.VideoContainer>
            <Video
              src={active.video}
              title={`Aula ${active.step} - ${active.title}`}
            />
            <Resume entries={active.resume} />
          </S.VideoContainer>
          <S.VideoInfoContainer>
            <Links entries={active.links} />
            {groupButton ? (
              <GroupButton url="https://chat.whatsapp.com/JtsozM4faobDomW8KbqFZ9" />
            ) : null}
          </S.VideoInfoContainer>
          <S.BottomResume entries={active.resume} />
        </>
      ) : null}
    </Layout>
  );
}

const lessonType = PropTypes.shape({
  title: PropTypes.string.isRequired,
  availableAt: PropTypes.string.isRequired,
});

Lesson.defaultProps = {
  groupButton: true,
  loginButton: true,
  onlyActiveLessons: false,
};
Lesson.propTypes = {
  active: lessonType.isRequired,
  groupButton: PropTypes.bool,
  lessons: PropTypes.arrayOf(lessonType).isRequired,
  loginButton: PropTypes.bool,
  onlyActiveLessons: PropTypes.bool,
  onSelectLesson: PropTypes.func.isRequired,
};

export default Lesson;
