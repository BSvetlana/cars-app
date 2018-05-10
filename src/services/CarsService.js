import axios from 'axios'

export default class Cars {

    constructor() {
        axios.defaults.baseURL = "http://localhost:3000/api/";
    }

    getCarsAll() {
    return axios.get('cars')
  
}

    addCars(newCars){
        return axios.post("cars", newCars);
    }

    get(id) {
        return axios.get(`cars/${id}`)
    }

    edit(id,newCars) {
        return axios.put(`cars/${newCars.id}`,newCars)
    }

    delete (id){
        return axios.delete(`cars/${id}`)
    }
}

export const cars = new Cars()