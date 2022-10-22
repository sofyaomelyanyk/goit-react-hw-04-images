import axios from 'axios';

axios.defaults.baseURL = 'https://pixabay.com/api/';

export const picturesRequest = (picture, page, perPage) => {
  const config = {
    params: {
      q: picture,
      key: '29900249-f408e73867b1f38cfd16b3d88',
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: perPage,
    },
  };

  return axios(config);
};
