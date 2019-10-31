import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import * as S from './styled';

function Notification({ active, content, onClose, timeout, title }) {
  const [state, setState] = useState({
    timer: 0,
    tick: 0,
    progress: 100,
  });

  function onCloseHandler() {
    clearTimeout(state.timer);
    clearInterval(state.tick);
    setState(prev => ({ ...prev, timer: 0, tick: 0, active: false }));

    onClose();
  }

  useEffect(() => {
    if (active) {
      const tick = setInterval(() => {
        setState(prev => ({ ...prev, progress: prev.progress - 1 }));
      }, timeout / 100);
      const timer = setTimeout(onCloseHandler, timeout + 640);

      return setState(prev => ({ ...prev, timer, tick }));
    }
    return onCloseHandler();
  }, [active]);

  return (
    <S.NotificationWrapper className={active ? '--active' : ''}>
      <S.NotificationHeader>
        <S.Title>{title}</S.Title>
        <S.CloseButton onClick={onCloseHandler}>x</S.CloseButton>
      </S.NotificationHeader>
      <S.NotificationBody>{content}</S.NotificationBody>
      <S.NotificationFooter progress={state.progress} />
    </S.NotificationWrapper>
  );
}

Notification.defaultProps = { active: false, timeout: 5000 };

Notification.propTypes = {
  active: PropTypes.bool,
  content: PropTypes.string.isRequired,
  onClose: PropTypes.func.isRequired,
  timeout: PropTypes.number,
  title: PropTypes.string.isRequired,
};

export default Notification;
