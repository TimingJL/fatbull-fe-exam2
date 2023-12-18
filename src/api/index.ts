import axios from 'axios';

const request = axios.create({
  baseURL: 'https://avl-frontend-exam.herokuapp.com/api',
});

const makeUrl = (
  url: string,
  data: {
    [key: string]: string | number;
  },
) => {
  let query = '';
  if (data) {
    query = Object.keys(data)
      .map((key) => `${key}=${data[key]}`)
      .join('&');
  }
  return query ? `${url}?${query}` : url;
};

export const getUsers = (data: { page: number; pageSize: number; keyword?: string }) => request.get(makeUrl('/users/all', data));
export const getFriends = (data: { page: number; pageSize: number }) => request.get(makeUrl('/users/friends', data));
export const getTags = () => request.get('/tags');
