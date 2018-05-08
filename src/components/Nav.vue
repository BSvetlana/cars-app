<template>
  <div>
      <nav class="navbar navbar-expand-lg navbar-light" style="background-color: #C8E6C9;">
  
          <router-link to="/" class="navbar-brand"><b>Cars</b></router-link>
          <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
              aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
  
              <ul class="navbar-nav mr-auto">
  
                  <li class="nav-item">
  
                      <router-link to="cars" class="nav-link"><b>Cars List</b></router-link>
                  </li>
  
                  <li class="nav-item">
  
                      <router-link to="addcars" class="nav-link"><b>Add Cars</b></router-link>
                  </li>
              </ul>
  
              <form class="form-inline my-2 my-lg-0">
                  <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search">
                  <button class="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
              </form>
          </div>
      </nav>
  
  </div>
</template>

<script>
  export default {
    name: 'AppCars'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  
</style>