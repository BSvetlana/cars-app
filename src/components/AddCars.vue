<template>
  <div>
  
    <div class="container mt-3 mr-1">
      <div class="row">
        <div class="col-8 mb-4">
          <h4 style="color: #66BB6A;">Cars form</h4>
          <form @submit.prevent="submit">
            <div class="form-group">
              <label for="brand" style="color: #81C784;">Cars Brand</label>
              <input type="text" class="form-control" id="brand" placeholder="cars brand .." v-model="newCars.brand">
            </div>
  
            <div class="form-group">
              <label for="model" style="color: #81C784;">Cars Model</label>
              <input type="text" class="form-control" id="model" placeholder="cars model ..." v-model="newCars.model">
            </div>
  
            <div class="form-group">
              <label for="year" class="control-label col-xs-4" style="color: #81C784;"> Year </label>
              <div class="col-xs-8">
                <select id="select" name="year" class="select form-control" v-model="newCars.year">
        
                    <option :value=" year" v-for="year in years" :key = "year" >{{ year }}</option>
                                                  
                </select>
              </div>
            </div>
  
            <div class="form-group">
              <label for=" maxSpeed" style="color: #81C784;">Cars Model</label>
              <input type="number" class="form-control" id="maxSpeed" placeholder="cars maxSpeed  ..." v-model="newCars.maxSpeed">
                                  
            </div>
  
            <div class="form-group">
              <label for="numberOfDoors" style="color: #81C784;">Cars Number of Doors</label>
              <input type="number" class="form-control" id="numberOfDoors" placeholder="cars numberOfDoors ..." v-model="newCars.numberOfDoors">
            </div>
  
              <div class="form-check">
                <input class="form-check-input" type="checkbox" value="" id="isAutomatic" v-model="newCars.isAutomatic">
                  <label class="form-check-label" for="defaultCheck1">
                  Is Automatic
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked v-model="newCars.engine">
                <label class="form-check-label" for="exampleRadios1">
                  Diesel
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked v-model="newCars.engine">
                <label class="form-check-label" for="exampleRadios1">
                  Petrol
                </label>
              </div>
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked v-model="newCars.engine">
                <label class="form-check-label" for="exampleRadios1">
                  Electric
                </label>
              </div>  
              <div class="form-check">
                <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked v-model="newCars.engine">
                <label class="form-check-label" for="exampleRadios1">
                  Hybrid
                </label>
              </div>

  
            <button type="sumbit" class="btn btn-success btn-block" style="backgroud-color: #81C784;">Submit</button>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { cars } from '../services/CarsService.js'

  export default {
    data() {
      return {
        newCars: {
          brand: '',
          model: '',
          year: '',
          maxSpeed: '',
          numberOfDoors: '',
          isAutomatic: '',
          engine: ''
        }
      }
    },
    computed: {
      years() {
        let years = [];
        for (let i = 1990; i < 2018; i++) {
          years.push(i)
  
        }
  
        return years
  
      }
    },
    methods: {
      submit(){
      cars.addCars(this.newCars)      
        .then((response) => {

           this.$router.push('/cars')

          }).catch((error) => {
          console.log(error)
        })
      }
    }
  }
</script>

<style>
  
</style>
