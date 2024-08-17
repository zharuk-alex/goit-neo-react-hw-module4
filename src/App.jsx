import "./App.css";
import { useState, useEffect } from "react";
import { searchPhotos } from "./services/unsplash";
import { Toaster } from "react-hot-toast";

import SearchBar from "components/SearchBar/SearchBar";
import ImageGallery from "components/ImageGallery/ImageGallery";
import LoadMoreBtn from "components/LoadMoreBtn/LoadMoreBtn";
import Loader from "components/Loader/Loader";
import ImageModal from "components/ImageModal/ImageModal";
import ErrorMessage from "components/ErrorMessage/ErrorMessage";

const initialParams = {
  page: 1,
  query: "",
  per_page: 12,
};

function App() {
  const [params, setParams] = useState(initialParams);
  const [images, setImages] = useState([]);
  const [currentImg, setCurrentImg] = useState({});
  const [isLoadMore, setIsLoadMore] = useState(false);
  const [isModal, setIsModal] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  const fetchData = async () => {
    try {
      setLoading(true);
      setError(false);
      setIsLoadMore(false);
      const response = await searchPhotos(params);
      const newImages = response.results ?? [];
      setImages((prevData) => [...prevData, ...newImages]);
      setIsLoadMore(response.total_pages > params.page);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
      setTimeout(() => {
        setError(false);
      }, 5000);
    }
  };

  const handleSubmit = async (query) => {
    setParams({
      ...initialParams,
      query,
    });
    setImages([]);
  };

  const handleClickImg = (imgID) => {
    const img = images?.find(({ id }) => id === imgID);
    setCurrentImg(img);
    setIsModal(true);
  };

  const handleCloseModal = () => {
    setCurrentImg({});
    setIsModal(false);
  };

  useEffect(() => {
    if (!params.query) {
      return;
    }
    fetchData();
  }, [params]);

  const handleLoadMore = () => {
    setParams((prev) => ({
      ...prev,
      page: prev.page + 1,
    }));
  };

  return (
    <>
      <SearchBar onSubmit={handleSubmit} />
      <main>
        <section className="container">
          <Loader visible={loading} />
          {!error ? (
            <ImageGallery images={images} onClick={handleClickImg} />
          ) : (
            <ErrorMessage />
          )}
          {isLoadMore && <LoadMoreBtn onClick={handleLoadMore} />}
          <ImageModal
            isOpen={isModal}
            img={currentImg}
            closeModal={handleCloseModal}
          />
        </section>
      </main>
      <Toaster />
    </>
  );
}

export default App;
