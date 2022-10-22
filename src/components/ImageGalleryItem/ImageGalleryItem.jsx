import PropTypes from 'prop-types';
import s from '../ImageGalleryItem/ImageGalleryItem.module.css';

export const ImageGalleryItem = ({
  largeImageURL,
  tags,
  webformatURL,
  id,
  openModal,
}) => {
  return (
    <li
      onClick={() => openModal({ src: largeImageURL, alt: tags })}
      key={id}
      className={s['gallery-item']}
    >
      <img src={webformatURL} alt={tags} className={s['item-image']} />
    </li>
  );
};

ImageGalleryItem.propTypes = {
  largeImageURL: PropTypes.string.isRequired,
  tags: PropTypes.string.isRequired,
  webformatURL: PropTypes.string.isRequired,
  id: PropTypes.number,
  openModal: PropTypes.func.isRequired,
};
