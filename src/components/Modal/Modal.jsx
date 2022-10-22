import { Component } from 'react';
import PropTypes from 'prop-types';
import s from '../Modal/Modal.module.css'

export class Modal extends Component {
  onCloseEscape = e => {
    if (e.code === 'Escape') {
      this.props.closeModal();
    }
  };

  onCloseBackdrop = e => {
    if (e.currentTarget === e.target) {
      this.props.closeModal();
    }
  };

  componentDidMount() {
    window.addEventListener('keydown', this.onCloseEscape);
    
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onCloseEscape);
    
  }

  render() {
    const {
      currentImage: { alt, src },
    } = this.props;

    const { onCloseBackdrop } = this;

    return (
      <div className={s.overlay} onClick={onCloseBackdrop}>
        <div className={s.modal}>
          <img src={src} alt={alt} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
   currentImage: PropTypes.object,
   closeModal: PropTypes.func.isRequired,
}