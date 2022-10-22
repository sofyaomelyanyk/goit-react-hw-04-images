import PropTypes from 'prop-types';
import { ImageGalleryItem } from 'components/ImageGalleryItem/ImageGalleryItem';
import s from '../ImageGallery/ImageGallery.module.css';

export const ImageGallery = ({ gallery, openModal }) => {
  return (
    <ul className={s.gallery}>
      {gallery.map(({ largeImageURL, tags, webformatURL, id }) => {
        return (
          <ImageGalleryItem
            key={id}
            largeImageURL={largeImageURL}
            tags={tags}
            webformatURL={webformatURL}
            openModal={openModal}
          />
        );
      })}
    </ul>
  );
};

ImageGallery.propTypes = {
   gallery: PropTypes.array.isRequired,
   openModal: PropTypes.func.isRequired
}
