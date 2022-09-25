import http_client from '.';
import {CONFIG} from '../config/env-config';

export const WEATHER_API = async location => {
  try {
    const response = await http_client({
      method: 'GET',
      url: `/weather?units=metric&q=${location}&APPID=${CONFIG.API_KEY}`,
    });
    return response;
  } catch (error) {
    throw error;
  }
};
