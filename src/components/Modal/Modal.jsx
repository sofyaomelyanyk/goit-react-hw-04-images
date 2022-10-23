import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { Loader } from 'components/Loader/Loader';
import s from '../Modal/Modal.module.css';

export const Modal = ({ currentImage: { alt, src }, closeModal }) => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    const onCloseEscape = ({ code }) => {
      if (code === 'Escape') {
        closeModal();
      }
    };

    window.addEventListener('keydown', onCloseEscape);

    return () => {
      window.removeEventListener('keydown', onCloseEscape);
    };
  }, [closeModal]);

  const onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      closeModal();
    }
  };

  const handleLoaded = () => {
    setIsLoaded(true);
  };

  return (
    <div className={s.overlay} onClick={onCloseBackdrop}>
      <div className={s.modal}>
        <img
          src={src}
          alt={alt}
          onLoad={handleLoaded}
          style={{ display: isLoaded ? 'block' : 'none' }}
        />
        {!isLoaded && <Loader />}
      </div>
    </div>
  );
};

Modal.propTypes = {
  currentImage: PropTypes.object,
  closeModal: PropTypes.func.isRequired,
};
