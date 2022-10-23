import { useState, useEffect } from 'react';
import { ToastContainer } from 'react-toastify';
import s from '../components/App.module.css';
import 'react-toastify/dist/ReactToastify.css';

import { Searchbar } from './Searchbar/Searchbar';
import { Loader } from './Loader/Loader';
import { ImageGallery } from './ImageGallery/ImageGallery';

import { Modal } from './Modal/Modal';
import { picturesRequest } from './services/api';
import { Button } from './Button/Button';

export const App = () => {
  const [gallery, setGallery] = useState([]);
  const [picture, setPicture] = useState('');
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [currentImage, setCurrentImage] = useState(null);

  const [totalHits, setTotalHits] = useState(null);

  useEffect(() => {
    if (picture) {
      fetchPictures(picture, page);
    }
  }, [picture, page]);

  const fetchPictures = async (picture, page) => {
    const message = 'Nothing found for your request!';

    try {
      setIsLoading(true);
      setError(null);
      const res = await picturesRequest(picture, page);

      console.log(res);

      if (!res.data.hits.length) {
        throw new Error(message);
      }

      setGallery(prevState => [...prevState, ...res.data.hits]);
      setTotalHits(res.data.totalHits);
    } catch {
      setError(message);
    } finally {
      setIsLoading(false);
    }
  };

  const addName = picture => {
    setPicture(picture);
    setGallery([]);
    setPage(1);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  const openModal = data => {
    setCurrentImage(data);
  };

  const closeModal = () => {
    setCurrentImage(null);
  };

  const perPage = 12;
  const totalPages = () => Math.floor(totalHits / perPage);

  return (
    <div className={s.app}>
      <Searchbar addName={addName} />
      {isLoading && <Loader />}
      {error && <h2>{error}</h2>}
      <ToastContainer autoClose={3000} theme="dark" />
      <ImageGallery gallery={gallery} openModal={openModal} />
      {totalHits && page < totalPages() && (
        <Button text="Load more" onClick={loadMore} />
      )}
      {currentImage && (
        <Modal currentImage={currentImage} closeModal={closeModal} />
      )}
    </div>
  );
};
