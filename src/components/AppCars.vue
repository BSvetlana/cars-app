<template>
  <div>
  
  
    <div class="container mt-3 ">
      <div class="row">
        <div class="col-12">
          <h4 style="color: #66BB6A;">Cars list</h4>
          <table class="table table-bordered">
  
            <thead style="background-color: #E8F5E9;">
              <tr>
                <th scope="col">Cars Brand</th>
                <th scope="col">Cars Model</th>
                <th scope="col">Cars Year</th>
                <th>Cars Max Speed</th>
                <th>Number of Doors</th>
                <th>Automatic</th>
                <th>Engine</th>
                
              </tr>
            </thead>
            <tbody>
              <tr v-for="(car,index) in cars" :key="index">
                <td>{{ car.brand }}</td>
                <td>{{ car.model }}
                </td>
                <td>{{ car.year }}</td>
                <td>{{ car.maxSpeed }}</td>
                <td>{{ car.numberOfDoors}}</td>
                <td>{{ car.isAutomatic ? 'Yes' : 'No' }}</td>
                <td> {{car.engine}}</td>
  
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  
  
  </div>
</template>

<script>
  import {
    cars
  } from '../services/CarsService'
  
  export default {
    name: 'AppCars',
    data() {
      return {
        cars: []
      }
    },
    created() {
      cars.
      getCarsAll
        ()
        .then((response) => {
          this.cars = response.data
          console.log(this.cars)
        }).catch((error) => {
          console.log(error)
        })
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
