import axios from 'axios';

export const collectionAdress = 'EQCq7PZ_Hqlf6msXHyz7S8-OoW4Y1WqpR_1aN1xNUlZ5_xnc';
export const axiosInstance = axios.create({
  baseURL: 'https://tonapi.io/v2/',
  headers: {
    Authorization: 'Bearer AEVAMEYY6FOJLKIAAAAATVETS53BAPUGJ2URHKLKKKJKFCTDAL63I7YFQJ2GUEBEAYWSWVA',
  },
});
