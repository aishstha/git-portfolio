import axios from 'axios';

export function get(url,headers) {
  return axios({
    method: 'GET',
    headers: {
      
    'Authorization': 'token daa75fadd94ab05ed261cb2118662af605682642'}
    ,
    url: url
  });
}
