import axios from 'axios';
import {CONFIG} from '../config/env-config';

let http_client = axios.create({
  baseURL: CONFIG.BASE_URL,
  timeout: 3000000,
  timeoutErrorMessage:
    'Request is timeout. Please check your internet connection and try again',
});

export default http_client;
