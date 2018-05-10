<template>
  <div>
    <div class="container mt-3 mr-1">
      <div class="row">
        <div class="col-8 mb-4">
          <h4 style="color: #66BB6A;">Cars form</h4>
          <form @submit.prevent="submit">
  
            <modal name="alert-cars">
              <button @click="hide" class="btn btn-success " style="background-color: #ff7675; float: right">X</button>
  
              <div class="container mt-4 ml-4">
                <div class="col-11">
                  <table class="table table-sm table-bordered">
                    <tbody>
                      <tr>
                        <td>Brand</td>
                        <td>{{ newCars.brand }}</td>
                      </tr>
                      <tr>
                        <td>Model</td>
                        <td>{{ newCars.model }}</td>
                      </tr>
                      <tr>
                        <td>Year</td>
                        <td>{{ newCars.year }}</td>
                      </tr>
                      <tr>
                        <td>Max Speed</td>
                        <td>{{ newCars.maxSpeed }}</td>
                      </tr>
                      <tr>
                        <td>Doors</td>
                        <td>{{ newCars.numberOfDoors}}</td>
                      </tr>
                      <tr>
                        <td>Automatic</td>
                        <td>{{ newCars.isAutomatic ? 'Yes' : 'No' }}</td>
                      </tr>
                      <tr>
                        <td>Engine</td>
                        <td>{{newCars.engine}}</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </modal>
  
            <div class="form-group">
              <label for="brand" style="color: #81C784;">Cars Brand</label>
              <input type="text" class="form-control" id="brand" placeholder="cars brand .." v-model="newCars.brand" required="required" minlength="2">
            </div>
  
            <div class="form-group">
              <label for="model" style="color: #81C784;">Cars Model</label>
              <input type="text" class="form-control" id="model" placeholder="cars model ..." v-model="newCars.model" required="required" minlength="2">
            </div>
  
            <div class="form-group">
              <label for="year" class="control-label col-xs-4" style="color: #81C784;"> Year </label>
              <div class="col-xs-8">
                <select id="select" name="year" class="select form-control" v-model="newCars.year" required="required">
                      <option :value=" year" v-for="year in years" :key = "year" >{{ year }}</option>                                       
                  </select>
              </div>
            </div>
  
            <div class="form-group">
              <label for=" maxSpeed" style="color: #81C784;">Cars Max Speed</label>
              <input type="number" class="form-control" id="maxSpeed" placeholder="cars maxSpeed  ..." v-model="newCars.maxSpeed">
  
            </div>
  
            <div class="form-group">
              <label for="numberOfDoors" style="color: #81C784;">Cars Number of Doors</label>
              <input type="number" class="form-control" id="numberOfDoors" placeholder="cars numberOfDoors ..." v-model="newCars.numberOfDoors" required="required">
            </div>
  
            <div class="form-check">
              <input class="form-check-input" type="checkbox" value="" id="isAutomatic" v-model="newCars.isAutomatic" required="required">
              <label class="form-check-label" for="defaultCheck1">
                        Is Automatic
                </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="disel" v-model="newCars.engine" required="required">
              <label class="form-check-label" for="exampleRadios1">
                        Diesel
                </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="petrol" v-model="newCars.engine" required="required">
              <label class="form-check-label" for="exampleRadios1">
                        Petrol
                </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="electric" v-model="newCars.engine" required="required">
              <label class="form-check-label" for="exampleRadios1">
                        Electric
                </label>
            </div>
            <div class="form-check">
              <input class="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="hybrid" v-model="newCars.engine" required="required">
              <label class="form-check-label" for="exampleRadios1">
                        Hybrid
                </label>
            </div>
  
  
            <button type="sumbit" class="btn btn-success btn-block" style="background-color: #81C784;">Submit Form</button>
  
            <button @click="reset" type="sumbit" class="btn btn-success btn-block" style="background-color: #55efc4;">Reset Form</button>
  
            <button @click="preview" type="button" class="btn btn-success btn-block" style="background-color: #81ecec;">Preview</button>
  
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {   cars  }  from '../services/CarsService.js'
      
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
          engine: '',
  
        }
      }
    },
    created(){
      this.$route.params.id && cars.get(this.$route.params.id)
      .then((response) => {
        this.newCars = response.data
      })
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
          if(this.newCars.id){
            this.editCar()
          }else {
           this.addCar()
          }
      },
      addCar() {
        cars.addCars(this.newCars)
          .then((response) => {
  
            this.$router.push({name: 'cars'})
  
          }).catch((error) => {
            console.log(error)
          })
      },
      editCar(){
        cars.edit(this.$route.params.id, this.newCars)
            .then((response) => {
            this.$router.push('/cars')
          }).catch((error) => {
            console.log('error')
          })
          
      },
      reset() {
        this.newCars = {}
      },
      preview() {
  
        this.$modal.show('alert-cars');
        },
      hide() {
        this.$modal.hide('alert-cars');
      }
    }
  }
</script>

<style>
  
</style>
