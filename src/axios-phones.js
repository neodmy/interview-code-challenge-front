import axios from 'axios';
import { BACKEND_HOST } from './config/config';

const instance = axios.create({
    baseURL: BACKEND_HOST,
});

export default instance;