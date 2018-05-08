import axios from 'axios'

export default class Cars {

    getCarsAll() {
    return axios.get('http://localhost:3000/api/cars')
  
}

    addCars(newCars){
        return axios.post("http://localhost:3000/api/cars", newCars);
    }

    edit(id,car) {
        return axios.put('cars/${id}',car)
    }

    delete (id){
        return axios.delete('cars/${id}')
    }
}

export const cars = new Cars()