import axios from 'axios'

axios.defaults.baseURL='alaatv.com/api/v2';
axios.defaults.headers.common['Authorization']='Bearer '+localStorage.getItem('token');
