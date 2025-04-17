import axios, { AxiosResponse } from 'axios';
import { BestSellerParams, ProductDetailParams, SearchProductParams } from '../modals/service';

const instance = axios.create({
  baseURL: 'https://real-time-amazon-data.p.rapidapi.com',
  timeout: 10000,
  headers: {
    'x-rapidapi-key': 'ed8f6117d9msh3ccd4376a1ae2c4p1a7f34jsn03d1839fef08',
    'x-rapidapi-host': 'real-time-amazon-data.p.rapidapi.com',
  },
});

export const GetCategories = async () => {
  try {
    const response:AxiosResponse = await instance.get('/product-category-list', {
      params: { country: 'US' },
    });
    return response.data;
  } catch (error) {
    console.error('GetCategories error:', error);
    return null;
  }
};

export const GetBestSellers = async (params: BestSellerParams) => {
    try {
      const response:AxiosResponse = await instance.get('/best-sellers', { params });
      return response.data;
    } catch (error) {
      console.error('GetBestSellers error:', error);
      return null;
    }
  };
  export const GetProductDetail = async (params: ProductDetailParams) => {
    try {
      const response:AxiosResponse = await instance.get('/product-details', { params });
      return response.data;
    } catch (error) {
      console.error('GetProductDetail error:', error);
      return null;
    }
  };
  export const SearchProducts = async (params: SearchProductParams) => {
    try {
      const response: AxiosResponse = await instance.get('/search', { params });
      console.log("API response:", response.data); 
      return response.data;
    } catch (error) {
      console.error('SearchProducts error:', error);
      return null;
    }
  };
  export const GetDeals = async () => {
    try {
      const response:AxiosResponse = await instance.get('/deals-v2', {
        params: { country: 'US' },
      });
      return response.data;
    } catch (error) {
      console.error('GetDeals error:', error);
      return null;
    }
  };
  
  

