<template>
  <div>
  
  
    <div class="container mt-3 ">
      <div class="row">
        <div class="col-12">
          <h4 style="color: #66BB6A;">Cars list</h4>
          <table class="table table-bordered">
  
            <thead style="background-color: #E8F5E9;">
              <tr>
                <th scope="col">Brand</th>
                <th scope="col">Model</th>
                <th scope="col">Year</th>
                <th>Speed</th>
                <th>Doors</th>
                <th>Automatic</th>
                <th>Engine</th>
                <th>Edit car</th>
                <th>Delete</th>
                
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
                <td>{{ car.isAutomatic ? 'Automatic' : 'Manual' }}</td>
                <td> {{car.engine}}</td>
                <td>
                   <router-link
                    style="color: black; text-decoration:none  "
                    :to="{name: 'edit', params: { id: car.id }}">
                    <button class="btn btn-outline-success btn-sm">Edit car</button>               
                  </router-link>
                </td>
                <td>
                  <button class="btn btn-outline-danger btn-sm" @click="deleteCar(car.id)">Delete</button>
                </td>
  
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
      getCarsAll()
       .then((response) => {
          this.cars = response.data
          console.log(this.cars)
        }).catch((error) => {
          console.log(error)
        })
    },
    methods: {
      deleteCar(id) {
        cars.delete(id)
          .then((sucess) => {
            this.cars = {}
            this.$router.push({name: 'cars'})
          })
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>
