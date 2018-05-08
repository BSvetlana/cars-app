import axios from 'axios'

export default class Cars {

    getCarsAll() {
    return axios.get('http://localhost:3000/api/cars')
  
}
}

export const cars = new Cars()